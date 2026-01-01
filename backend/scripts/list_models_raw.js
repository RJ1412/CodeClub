import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import https from "https";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const run = async () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("❌ GEMINI_API_KEY is missing");
        return;
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    console.log(`📡 Fetching models from: ${url.replace(apiKey, "HIDDEN_KEY")}`);

    https.get(url, (res) => {
        let data = "";

        res.on("data", (chunk) => {
            data += chunk;
        });

        res.on("end", () => {
            try {
                const response = JSON.parse(data);
                if (response.error) {
                    console.error("❌ API Error:", JSON.stringify(response.error, null, 2));
                } else if (response.models) {
                    console.log("✅ Available Models:");
                    response.models.forEach((model) => {
                        console.log(`- ${model.name} (Supported methods: ${model.supportedGenerationMethods.join(", ")})`);
                    });
                } else {
                    console.log("⚠️ Unexpected response:", data);
                }
            } catch (err) {
                console.error("❌ Failed to parse response:", err.message);
                console.log("Raw response:", data);
            }
        });
    }).on("error", (err) => {
        console.error("❌ Network error:", err.message);
    });
};

run();
