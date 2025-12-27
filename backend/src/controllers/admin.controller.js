// src/controllers/adminQuestion.controller.js
import { db } from "../libs/db.js";

/**
 * Helper: normalize date to start of day (for "one question per day" logic)
 */
const startOfDay = (d) => {
  const date = new Date(d);
  date.setHours(0, 0, 0, 0);
  return date;
};

/**
 * Helper: log admin action
 */
const logAdminAction = async ({ adminId, action, targetType, targetId, before, after }) => {
  try {
    await db.adminAction.create({
      data: {
        adminId,
        action,
        targetType,
        targetId,
        before,
        after,
      },
    });
  } catch (err) {
    console.error("Failed to log AdminAction:", err);
  }
};

/**
 * Create a question (not necessarily QOTD)
 * Admin can add questions with any date (usually one per day).
 */
// 📤 Export Analytics to CSV
export const exportAnalytics = async (req, res) => {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        srn: true,
        codeforcesHandle: true,
        email: true,
        score: true,
        createdAt: true
      }
    });

    // Simple CSV construction
    const headers = "ID,SRN,Email,Codeforces Handle,Score,Joined At\n";
    const rows = users.map(u =>
      `"${u.id}","${u.srn}","${u.email}","${u.codeforcesHandle || ''}",${u.score},"${u.createdAt.toISOString()}"`
    ).join("\n");

    const csvContent = headers + rows;

    res.header("Content-Type", "text/csv");
    res.attachment("users_analytics.csv");
    return res.send(csvContent);

  } catch (error) {
    console.error("❌ Error exporting analytics:", error);
    return res.status(500).json({ error: "Failed to export analytics" });
  }
};
export const createQuestion = async (req, res) => {
  try {
    const adminId = req.user?.id;
    const {
      title,
      codeforcesId,
      link,
      date,          // optional; if not given, default to "today"
      rating,
      editorialUrl,
    } = req.body;

    if (!title) {
      return res.status(400).json({ success: false, message: "Title is required" });
    }

    const questionDate = startOfDay(date || new Date());

    const existingForDate = await db.question.findUnique({
      where: { date: questionDate },
    });

    if (existingForDate) {
      return res.status(409).json({
        success: false,
        message: "A question for this date already exists. Please choose a different date or update the existing one.",
      });
    }

    const newQuestion = await db.question.create({
      data: {
        title,
        codeforcesId: codeforcesId ?? null,
        link: link ?? null,
        date: questionDate,
        rating: rating ?? 0,
        editorialUrl: editorialUrl ?? null,
      },
    });

    await logAdminAction({
      adminId,
      action: "CREATE_QUESTION",
      targetType: "Question",
      targetId: newQuestion.id,
      before: null,
      after: newQuestion,
    });

    return res.status(201).json({
      success: true,
      message: "Question created successfully",
      data: newQuestion,
    });
  } catch (err) {
    console.error("Error creating question:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 * List questions (for admin management)
 * Optional query params: page, pageSize, date
 */
export const listQuestions = async (req, res) => {
  try {
    const { page = 1, pageSize = 20, date } = req.query;
    const pageNum = Number(page) || 1;
    const limit = Number(pageSize) || 20;
    const skip = (pageNum - 1) * limit;

    const where = {};
    if (date) {
      where.date = startOfDay(date);
    }

    const [questions, total] = await Promise.all([
      db.question.findMany({
        where,
        orderBy: { date: "desc" },
        skip,
        take: limit,
      }),
      db.question.count({ where }),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        questions,
        pagination: {
          page: pageNum,
          pageSize: limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      },
    });
  } catch (err) {
    console.error("Error listing questions:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};


export const getQuestionById = async (req, res) => {
  try {
    const { id } = req.params;

    const question = await db.question.findUnique({
      where: { id },
    });

    if (!question) {
      return res.status(404).json({ success: false, message: "Question not found" });
    }

    return res.status(200).json({ success: true, data: question });
  } catch (err) {
    console.error("Error fetching question:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 * Update question (title/link/rating/editorial/date/etc.)
 */
export const updateQuestion = async (req, res) => {
  try {
    const adminId = req.user?.id;
    const { id } = req.params;
    const {
      title,
      codeforcesId,
      link,
      rating,
      editorialUrl,
      date,
    } = req.body;

    const existing = await db.question.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ success: false, message: "Question not found" });
    }

    const dataToUpdate = {};

    if (title !== undefined) dataToUpdate.title = title;
    if (codeforcesId !== undefined) dataToUpdate.codeforcesId = codeforcesId;
    if (link !== undefined) dataToUpdate.link = link;
    if (rating !== undefined) dataToUpdate.rating = rating;
    if (editorialUrl !== undefined) dataToUpdate.editorialUrl = editorialUrl;
    if (date !== undefined) {
      const newDate = startOfDay(date);

      const existingForDate = await db.question.findUnique({
        where: { date: newDate },
      });

      if (existingForDate && existingForDate.id !== id) {
        return res.status(409).json({
          success: false,
          message: "Another question is already set for this date.",
        });
      }

      dataToUpdate.date = newDate;
    }

    const updated = await db.question.update({
      where: { id },
      data: dataToUpdate,
    });

    await logAdminAction({
      adminId,
      action: "UPDATE_QUESTION",
      targetType: "Question",
      targetId: id,
      before: existing,
      after: updated,
    });

    return res.status(200).json({
      success: true,
      message: "Question updated successfully",
      data: updated,
    });
  } catch (err) {
    console.error("Error updating question:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 * Delete a question
 * Also deletes its submissions (because of foreign key constraint).
 */
export const deleteQuestion = async (req, res) => {
  try {
    const adminId = req.user?.id;
    const { id } = req.params;

    const existing = await db.question.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ success: false, message: "Question not found" });
    }

    // In a transaction: delete submissions -> delete question
    await db.$transaction(async (tx) => {
      await tx.submission.deleteMany({
        where: { questionId: id },
      });

      await tx.question.delete({
        where: { id },
      });
    });

    await logAdminAction({
      adminId,
      action: "DELETE_QUESTION",
      targetType: "Question",
      targetId: id,
      before: existing,
      after: null,
    });

    return res.status(200).json({
      success: true,
      message: "Question and related submissions deleted successfully",
    });
  } catch (err) {
    console.error("Error deleting question:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};


export const setQuestionOfTheDay = async (req, res) => {
  try {
    const adminId = req.user?.id;
    const {
      title,
      codeforcesId,
      link,
      rating,
      editorialUrl,
      date, // optional; default "today"
    } = req.body;

    if (!title) {
      return res.status(400).json({ success: false, message: "Title is required" });
    }

    const qotdDate = startOfDay(date || new Date());

    const existing = await db.question.findUnique({
      where: { date: qotdDate },
    });

    const upserted = await db.question.upsert({
      where: { date: qotdDate },
      create: {
        title,
        codeforcesId: codeforcesId ?? null,
        link: link ?? null,
        date: qotdDate,
        rating: rating ?? 0,
        editorialUrl: editorialUrl ?? null,
      },
      update: {
        title,
        codeforcesId: codeforcesId ?? null,
        link: link ?? null,
        rating: rating ?? (existing?.rating ?? 0),
        editorialUrl: editorialUrl ?? existing?.editorialUrl ?? null,
      },
    });

    await logAdminAction({
      adminId,
      action: "SET_QOTD",
      targetType: "Question",
      targetId: upserted.id,
      before: existing,
      after: upserted,
    });

    return res.status(200).json({
      success: true,
      message: "Question of the Day set successfully",
      data: upserted,
    });
  } catch (err) {
    console.error("Error setting Question of the Day:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 * Get Question of the Day for a given date (or today)
 * This is useful for admin UI to confirm which question is set.
 */
export const getQuestionOfTheDay = async (req, res) => {
  try {
    const { date } = req.query;
    const targetDate = startOfDay(date || new Date());

    const question = await db.question.findUnique({
      where: { date: targetDate },
    });

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "No Question of the Day set for this date",
      });
    }

    return res.status(200).json({
      success: true,
      data: question,
    });
  } catch (err) {
    console.error("Error getting Question of the Day:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 * Get system analytics for admin dashboard
 */
export const getAnalytics = async (req, res) => {
  try {
    const [
      totalUsers,
      totalQuestions,
      totalSubmissions,
      acceptedSubmissions,
      recentUsers,
      recentQuestions,
      recentSubmissions,
    ] = await Promise.all([
      db.user.count(),
      db.question.count(),
      db.submission.count(),
      db.submission.count({ where: { status: "ACCEPTED" } }),
      db.user.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
        select: { id: true, srn: true, email: true, createdAt: true, score: true },
      }),
      db.question.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
        select: { id: true, title: true, rating: true, date: true },
      }),
      db.submission.findMany({
        orderBy: { submittedAt: "desc" },
        take: 10,
        include: {
          user: { select: { srn: true, email: true } },
          question: { select: { title: true } },
        },
      }),
    ]);

    const usersWithHandles = await db.user.count({
      where: { codeforcesHandle: { not: null } },
    });

    return res.status(200).json({
      success: true,
      data: {
        overview: {
          totalUsers,
          totalQuestions,
          totalSubmissions,
          acceptedSubmissions,
          usersWithHandles,
          acceptanceRate: totalSubmissions > 0
            ? ((acceptedSubmissions / totalSubmissions) * 100).toFixed(2) + "%"
            : "0%",
        },
        recent: {
          users: recentUsers,
          questions: recentQuestions,
          submissions: recentSubmissions,
        },
      },
    });
  } catch (err) {
    console.error("Error fetching analytics:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 * Get admin action logs
 */
export const getAdminLogs = async (req, res) => {
  try {
    const { page = 1, pageSize = 20 } = req.query;
    const pageNum = Number(page) || 1;
    const limit = Number(pageSize) || 20;
    const skip = (pageNum - 1) * limit;

    const [logs, total] = await Promise.all([
      db.adminAction.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
        include: {
          admin: { select: { srn: true, email: true } },
        },
      }),
      db.adminAction.count(),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        logs,
        pagination: {
          page: pageNum,
          pageSize: limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      },
    });
  } catch (err) {
    console.error("Error fetching admin logs:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};
