import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const run = async () => {
    try {
        if (!process.env.GEMINI_API_KEY) {
            console.error("❌ GEMINI_API_KEY is missing");
            return;
        }

        // Access the API directly to list models if possible, or attempt standard initialization
        // The SDK doesn't expose listModels directly on the main class in all versions, 
        // but let's try to infer/check or just try a different known model.
        // Actually, the error message said "Call ListModels to see the list".
        // This is often done via the GoogleGenerativeAI instance or checking documentation.
        // For the JS SDK, typically:

        console.log("Checking available models...");
        // There isn't a direct listModels method on the top-level GoogleGenerativeAI object in the standard usage doc,
        // but we can try to make a raw request or just test standard models.

        const modelsToTest = ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-pro", "gemini-1.0-pro"];

        for (const modelName of modelsToTest) {
            console.log(`Testing model: ${modelName}...`);
            const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ model: modelName });

            try {
                const result = await model.generateContent("Hello, world!");
                const response = await result.response;
                console.log(`✅ Model '${modelName}' is WORKING! Response: ${response.text().substring(0, 20)}...`);
            } catch (error) {
                console.error(`❌ Model '${modelName}' failed: ${error.message}`);
            }
        }

    } catch (error) {
        console.error("Script error:", error);
    }
};

run();
