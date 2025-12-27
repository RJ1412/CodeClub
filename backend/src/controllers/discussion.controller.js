import { db } from "../libs/db.js";

// 📝 Get all discussions for a question (Threaded View)
export const getDiscussions = async (req, res) => {
    try {
        const { questionId } = req.params;

        const discussions = await db.discussion.findMany({
            where: {
                questionId,
                parentId: null // Fetch top-level comments first
            },
            include: {
                user: { select: { id: true, srn: true, codeforcesHandle: true } },
                replies: {
                    include: {
                        user: { select: { id: true, srn: true, codeforcesHandle: true } }
                    },
                    orderBy: { createdAt: 'asc' }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        return res.status(200).json({ discussions });
    } catch (error) {
        console.error("❌ Error fetching discussions:", error);
        return res.status(500).json({ error: "Failed to fetch discussions" });
    }
};

// 💬 Post a new comment or reply
export const postComment = async (req, res) => {
    try {
        const { questionId, content, parentId } = req.body;
        const userId = req.user.id;

        if (!content || !questionId) {
            return res.status(400).json({ error: "Content and Question ID are required" });
        }

        const comment = await db.discussion.create({
            data: {
                content,
                questionId,
                userId,
                parentId: parentId || null
            },
            include: {
                user: { select: { id: true, srn: true, codeforcesHandle: true } }
            }
        });

        // Broadcast new comment
        try {
            const { getIO } = await import("../services/socketService.js");
            getIO().to(`question_${questionId}`).emit("new_comment", comment);
        } catch (e) { console.error("Socket emit failed", e); }

        return res.status(201).json({ success: true, comment });
    } catch (error) {
        console.error("❌ Error posting comment:", error);
        return res.status(500).json({ error: "Failed to post comment" });
    }
};

// ⭐ Rate a question (1-5 stars)
export const rateQuestion = async (req, res) => {
    try {
        const { questionId, rating } = req.body;
        const userId = req.user.id;

        if (rating < 1 || rating > 5) {
            return res.status(400).json({ error: "Rating must be between 1 and 5" });
        }

        const newRating = await db.questionRating.upsert({
            where: {
                userId_questionId: {
                    userId,
                    questionId
                }
            },
            update: { rating },
            create: {
                userId,
                questionId,
                rating
            }
        });

        return res.status(200).json({ success: true, rating: newRating });
    } catch (error) {
        console.error("❌ Error rating question:", error);
        return res.status(500).json({ error: "Failed to rate question" });
    }
};

// 📊 Get average rating for a question
export const getQuestionRating = async (req, res) => {
    try {
        const { questionId } = req.params;

        const result = await db.questionRating.aggregate({
            where: { questionId },
            _avg: { rating: true },
            _count: { rating: true }
        });

        // Get user's own rating if authenticated
        let userRating = null;
        if (req.user) {
            const ur = await db.questionRating.findUnique({
                where: {
                    userId_questionId: {
                        userId: req.user.id,
                        questionId
                    }
                }
            });
            if (ur) userRating = ur.rating;
        }

        return res.status(200).json({
            averageRating: result._avg.rating || 0,
            totalVotes: result._count.rating,
            userRating
        });
    } catch (error) {
        console.error("❌ Error fetching rating:", error);
        return res.status(500).json({ error: "Failed to fetch rating" });
    }
};
