import express from "express";
import {
    getDiscussions,
    postComment,
    rateQuestion,
    getQuestionRating
} from "../controllers/discussion.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const discussionRoutes = express.Router();

// 💬 Discussions
discussionRoutes.get("/:questionId/comments", authMiddleware, getDiscussions);
discussionRoutes.post("/comments", authMiddleware, postComment);

// ⭐ Ratings
discussionRoutes.post("/rate", authMiddleware, rateQuestion);
discussionRoutes.get("/:questionId/rating", authMiddleware, getQuestionRating); // Auth optional usually, but handling in controller

export default discussionRoutes;
