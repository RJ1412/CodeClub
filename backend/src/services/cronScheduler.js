import cron from "node-cron";
import { db } from "../libs/db.js";
import axios from "axios";
import * as cheerio from "cheerio";
import { generateEditorialFromGemini, generateFallbackEditorial } from "../libs/editorialGenerator.js";
import dotenv from "dotenv";

dotenv.config();

const SCRAPER_API_KEY = process.env.SCRAPER_API_KEY;
const CRON_SCHEDULE = process.env.CRON_SCHEDULE || "0 0 * * *"; // Default: midnight daily
const ENABLE_AUTO_QOTD = process.env.ENABLE_AUTO_QOTD === "true";
const MIN_RATING = parseInt(process.env.MIN_QUESTION_RATING) || 800;
const MAX_RATING = parseInt(process.env.MAX_QUESTION_RATING) || 1200;

/**
 * Fetch problem statement HTML using ScraperAPI
 */
const fetchProblemStatement = async (contestId, index) => {
    const url = `https://codeforces.com/problemset/problem/${contestId}/${index}`;
    const scraperUrl = `https://api.scraperapi.com?api_key=${SCRAPER_API_KEY}&url=${encodeURIComponent(url)}`;

    try {
        const { data } = await axios.get(scraperUrl);
        return data;
    } catch (err) {
        console.error("❌ ScraperAPI failed:", err.message);
        return "";
    }
};

/**
 * Generate and post the daily Question of the Day
 */
export const generateDailyQOTD = async () => {
    try {
        console.log("🔄 Starting automated QOTD generation...");

        // Check if a question already exists for today
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const existing = await db.question.findUnique({
            where: { date: today },
        });

        if (existing) {
            console.log("ℹ️ Question already exists for today. Skipping.");
            return { success: true, message: "Question already exists for today" };
        }

        // Fetch all problems from Codeforces
        console.log("📡 Fetching problems from Codeforces API...");
        const cfRes = await axios.get("https://codeforces.com/api/problemset.problems");
        const data = cfRes.json ? await cfRes.json() : cfRes.data;

        if (data.status !== "OK") {
            throw new Error("Failed to fetch Codeforces problems");
        }

        // Filter problems by rating range
        const problems = data.result.problems;
        const filtered = problems.filter(
            (p) => p.rating >= MIN_RATING && p.rating <= MAX_RATING && p.contestId && p.index
        );

        if (filtered.length === 0) {
            throw new Error("No problems found in the specified rating range");
        }

        // Select a random problem
        const chosen = filtered[Math.floor(Math.random() * filtered.length)];
        const link = `https://codeforces.com/contest/${chosen.contestId}/problem/${chosen.index}`;

        console.log(`✅ Selected problem: ${chosen.name} (Rating: ${chosen.rating})`);

        // Scrape problem statement for editorial generation
        let editorial = null;
        if (SCRAPER_API_KEY) {
            console.log("📄 Scraping problem statement...");
            const html = await fetchProblemStatement(chosen.contestId, chosen.index);

            if (html) {
                const $ = cheerio.load(html);
                const statement = $(".problem-statement").text().trim();

                if (statement) {
                    console.log("🤖 Generating AI editorial...");
                    editorial = await generateEditorialFromGemini(statement, chosen.name, chosen.rating);

                    if (!editorial) {
                        editorial = generateFallbackEditorial(link);
                    }
                }
            }
        } else {
            console.warn("⚠️ SCRAPER_API_KEY not set. Skipping editorial generation.");
            editorial = generateFallbackEditorial(link);
        }

        // Save to database
        const question = await db.question.create({
            data: {
                title: chosen.name,
                codeforcesId: chosen.contestId,
                link,
                rating: chosen.rating,
                date: today,
                editorialUrl: editorial,
            },
        });

        console.log(`✅ QOTD created successfully: ${question.title}`);
        return { success: true, question };
    } catch (error) {
        console.error("❌ Error generating daily QOTD:", error.message);
        return { success: false, error: error.message };
    }
};

/**
 * Check if today's question exists, if not generate it
 * This runs on server startup as a fallback
 */
export const checkAndGenerateQOTDOnStartup = async () => {
    try {
        console.log("🔍 Checking if today's question exists...");

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const existing = await db.question.findUnique({
            where: { date: today },
        });

        if (existing) {
            console.log(`✅ Question already exists for today: "${existing.title}"`);
            return { success: true, exists: true, question: existing };
        }

        console.log("⚠️ No question found for today. Generating now...");
        const result = await generateDailyQOTD();

        if (result.success) {
            console.log("✅ Successfully generated today's question on startup!");
        } else {
            console.error("❌ Failed to generate question on startup:", result.error);
        }

        return result;
    } catch (error) {
        console.error("❌ Error checking/generating QOTD on startup:", error.message);
        return { success: false, error: error.message };
    }
};

/**
 * Initialize the cron scheduler
 */
export const initCronScheduler = async () => {
    // ALWAYS check and generate QOTD on startup (regardless of ENABLE_AUTO_QOTD)
    console.log("\n" + "=".repeat(60));
    console.log("🚀 Running startup QOTD check...");
    console.log("=".repeat(60) + "\n");

    await checkAndGenerateQOTDOnStartup();

    console.log("\n" + "=".repeat(60));
    console.log("✅ Startup QOTD check complete");
    console.log("=".repeat(60) + "\n");

    if (!ENABLE_AUTO_QOTD) {
        console.log("ℹ️ Automated QOTD cron is disabled (ENABLE_AUTO_QOTD=false)");
        console.log("💡 Tip: Set ENABLE_AUTO_QOTD=true to enable daily automated generation");
        return;
    }

    console.log(`⏰ Initializing QOTD cron scheduler with schedule: ${CRON_SCHEDULE}`);

    // Validate cron schedule
    if (!cron.validate(CRON_SCHEDULE)) {
        console.error("❌ Invalid cron schedule format:", CRON_SCHEDULE);
        return;
    }

    // Schedule the job
    const task = cron.schedule(CRON_SCHEDULE, async () => {
        console.log(`\n${"=".repeat(60)}`);
        console.log(`🕐 Cron job triggered at ${new Date().toISOString()}`);
        console.log(`${"=".repeat(60)}\n`);

        await generateDailyQOTD();

        console.log(`\n${"=".repeat(60)}`);
        console.log(`✅ Cron job completed at ${new Date().toISOString()}`);
        console.log(`${"=".repeat(60)}\n`);
    });

    console.log("✅ QOTD cron scheduler initialized successfully");

    // Return task for potential cleanup
    return task;
};

// Graceful shutdown handler
export const stopCronScheduler = (task) => {
    if (task) {
        task.stop();
        console.log("🛑 QOTD cron scheduler stopped");
    }
};
