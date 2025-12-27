import express from "express";
import {
  createQuestion,
  listQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
  setQuestionOfTheDay,
  getQuestionOfTheDay,
  getAnalytics,
  getAdminLogs,
  exportAnalytics,
} from "../controllers/admin.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getHealthStatus } from "../services/healthCheck.js";

const router = express.Router();

// All routes require authentication + admin role
// (Assuming authMiddleware checks for admin role)

router.post("/questions", authMiddleware, createQuestion);
router.get("/questions", authMiddleware, listQuestions);
router.get("/questions/:id", authMiddleware, getQuestionById);
router.put("/questions/:id", authMiddleware, updateQuestion);
router.delete("/questions/:id", authMiddleware, deleteQuestion);

router.post("/qotd", authMiddleware, setQuestionOfTheDay);
router.get("/qotd", authMiddleware, getQuestionOfTheDay);

// Analytics and monitoring
router.get("/analytics", authMiddleware, getAnalytics);
router.get("/analytics/export", authMiddleware, exportAnalytics); // Added export route
router.get("/logs", authMiddleware, getAdminLogs);
router.get("/health", authMiddleware, async (req, res) => {
  const health = await getHealthStatus();
  res.status(200).json(health);
});

export default router;
