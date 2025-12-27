import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

/**
 * Generate an editorial for a Codeforces problem using Google Gemini
 * @param {string} problemStatement - The full problem statement scraped from Codeforces
 * @param {string} problemTitle - The title of the problem
 * @param {number} rating - The difficulty rating of the problem
 * @returns {Promise<string|null>} - Generated editorial or null on failure
 */
export const generateEditorialFromGemini = async (
    problemStatement,
    problemTitle = "",
    rating = 0
) => {
    try {
        if (!process.env.GEMINI_API_KEY) {
            console.warn("⚠️ GEMINI_API_KEY not set. Skipping editorial generation.");
            return null;
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `You are an expert competitive programming coach. Generate a comprehensive editorial for the following Codeforces problem.

Problem Title: ${problemTitle}
Difficulty Rating: ${rating}

Problem Statement:
${problemStatement}

Please provide:
1. **Problem Summary**: Brief overview of what the problem asks
2. **Approach**: High-level strategy to solve the problem
3. **Algorithm**: Detailed step-by-step algorithm
4. **Key Insights**: Important observations or tricks needed
5. **Time Complexity**: Big-O notation with explanation
6. **Space Complexity**: Big-O notation with explanation
7. **Sample Solution Pseudocode**: Clean pseudocode demonstrating the approach

Format your response in clear markdown with proper headings. Keep it educational and beginner-friendly.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const editorial = response.text();

        if (!editorial || editorial.trim().length === 0) {
            console.warn("⚠️ Gemini returned empty editorial");
            return null;
        }

        console.log(`✅ Generated editorial for: ${problemTitle}`);
        return editorial;
    } catch (error) {
        console.error("❌ Error generating editorial from Gemini:", error.message);
        return null;
    }
};

/**
 * Generate a simple fallback editorial when AI generation fails
 * @param {string} problemLink - Link to the problem
 * @returns {string} - Fallback editorial message
 */
export const generateFallbackEditorial = (problemLink) => {
    return `# Editorial Not Available

Unfortunately, we couldn't generate an AI editorial for this problem at this time.

## Resources

- [View Problem on Codeforces](${problemLink})
- Try solving the problem and check the official Codeforces editorial
- Discuss with peers in the CodeClub community

## Tips

1. Read the problem carefully and identify the constraints
2. Think about edge cases
3. Start with a brute force approach, then optimize
4. Test your solution with sample inputs

Good luck! 🚀`;
};
