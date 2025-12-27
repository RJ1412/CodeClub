// src/middleware/auth.middleware.js
import jwt from "jsonwebtoken";
import { db } from "../libs/db.js";

const getJwtSecret = () => {
  const s = process.env.JWT_SECRET;
  if (!s) throw new Error("Missing JWT_SECRET");
  return s;
};

export const authMiddleware = async (req, res, next) => {
  try {
    const tokenFromCookie = req?.cookies?.jwt;
    const authHeader = req?.headers?.authorization;
    const tokenFromHeader = authHeader && authHeader.startsWith("Bearer ")
      ? authHeader.slice(7)
      : null;
    const token = tokenFromCookie || tokenFromHeader;

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized - no token provided" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, getJwtSecret());
    } catch (err) {
      return res.status(401).json({ success: false, message: "Unauthorized - invalid or expired token" });
    }

    const userId =
      typeof decoded === "string"
        ? decoded
        : decoded && typeof decoded === "object" && ("id" in decoded)
        ? decoded.id
        : null;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized - invalid token payload" });
    }

    const user = await db.user.findUnique({
      where: { id: String(userId) },
      select: {
        id: true,
        srn: true,
        email: true,
        codeforcesHandle: true,
        score: true,
        role : true
      }
    });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Error authenticating user:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const checkAdmin = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    // Try to read 'role' if it exists in the DB model; if not present, deny access
    const maybe = await db.user.findUnique({
      where: { id: String(userId) },
      select: { role: true }
    }).catch(() => null);

    const role = maybe?.role ?? null;
    if (role !== "ADMIN") {
      return res.status(403).json({ success: false, message: "Access denied - admins only" });
    }

    next();
  } catch (err) {
    console.error("Error checking admin role:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};
