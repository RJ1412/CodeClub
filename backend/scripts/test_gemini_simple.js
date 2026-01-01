import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const run = async () => {
    try {
        console.log("Starting Simple Gemini Test...");
        if (!process.env.GEMINI_API_KEY) {
            console.error("GEMINI_API_KEY is missing");
            return;
        }

        console.log("API Key found (ends with " + process.env.GEMINI_API_KEY.slice(-4) + ")");
        console.log("Initializing GoogleGenerativeAI...");
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

        const modelName = "gemini-2.5-flash";
        console.log(`Getting model: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });

        console.log("Generating content...");
        const result = await model.generateContent("Explain Big O notation in one sentence.");
        const response = await result.response;
        const text = response.text();

        console.log(`Success! Response: ${text}`);

    } catch (error) {
        console.error("Error:", error);
    }
};

run();
