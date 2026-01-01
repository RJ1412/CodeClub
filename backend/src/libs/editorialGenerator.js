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
            console.warn("GEMINI_API_KEY not set. Skipping editorial generation.");
            return null;
        }

        // Use gemini-2.5-flash as it is available and powerful.
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `You are an expert competitive programming coach. Create a detailed editorial for the following Codeforces problem.

Problem: ${problemTitle} (Rating: ${rating})

Problem Statement:
${problemStatement}

Required Output Structure (in Markdown):

# ${problemTitle} - Editorial

## 1. Problem Summary
Explain the problem in simple terms. Input/Output requirements.

## 2. Approach
High-level logic and strategy to solve it. Explain the thought process.

## 3. Algorithm
Provide a clear, step-by-step algorithm.
1. Step 1...
2. Step 2...
...

## 4. Pseudo-code
\`\`\`text
// Write clean, language-agnostic pseudo-code here
\`\`\`

## 5. Complexity Analysis
- **Time Complexity**: Explain why.
- **Space Complexity**: Explain why.

## 6. Key Insights / Tricks
Any corner cases or specific observations needed.

Do not use placeholders. Generate the actual content based on the problem statement provided.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const editorial = response.text();

        if (!editorial || editorial.trim().length === 0) {
            console.warn("Gemini returned empty editorial");
            return null;
        }

        console.log(`Generated editorial for: ${problemTitle}`);
        return editorial;
    } catch (error) {
        console.error("Error generating editorial from Gemini:", error.message);
        // Fallback or retry logic could be added here
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

Good luck!`;
};
