console.log("Starting server...");
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth.routes.js";
import router from "./src/routes/admin.routes.js";
import qotdRoutes from "./src/routes/qotd.routes.js";
import discussionRoutes from "./src/routes/discussion.routes.js";
import { initCronScheduler, stopCronScheduler } from "./src/services/cronScheduler.js";
import { getHealthStatus } from "./src/services/healthCheck.js";
import { generalLimiter } from "./src/middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Apply general rate limiting to all routes
app.use(generalLimiter);

// Health check endpoint (no auth required)
app.get("/health", async (req, res) => {
  const health = await getHealthStatus();
  const statusCode = health.status === "healthy" ? 200 : 503;
  res.status(statusCode).json(health);
});

app.get("/", (req, res) => {
  res.send("RJ is here");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/admin", router);
app.use("/api/v1/qotd", qotdRoutes);
app.use("/api/v1/discussion", discussionRoutes);

import { initSocket } from "./src/services/socketService.js";

// Start server immediately
const server = app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📊 Health check available at http://localhost:${PORT}/health`);
});

// Initialize Socket.IO
const io = initSocket(server);

// Initialize Redis (fire and forget, it handles its own errors)
import { initRedis } from "./src/libs/redisClient.js";
initRedis();

// Initialize cron scheduler in background
let cronTask;
initCronScheduler()
  .then((task) => {
    cronTask = task;
  })
  .catch((err) => {
    console.error("❌ Failed to initialize cron scheduler:", err);
  });

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  if (cronTask) stopCronScheduler(cronTask);
  server.close(() => {
    console.log("HTTP server closed");
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received: closing HTTP server");
  if (cronTask) stopCronScheduler(cronTask);
  server.close(() => {
    console.log("HTTP server closed");
    process.exit(0);
  });
});
