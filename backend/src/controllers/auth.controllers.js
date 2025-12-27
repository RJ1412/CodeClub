// src/controllers/auth.controllers.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { db } from "../libs/db.js";
import transporter from "../libs/nodemailer.js";
import { generateEmailTemplate } from "../libs/EmailTemplate.js";

dotenv.config();

const tempUsers = new Map();
const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET;

const isProd = process.env.NODE_ENV === "production";
const cookieOptions = {
  httpOnly: true,
  sameSite: isProd ? "none" : "lax",
  secure: isProd,
  maxAge: 1000 * 60 * 60 * 24 * 7,
};

if (!JWT_SECRET) {
  throw new Error("Missing JWT_SECRET in environment");
}

export const register = async (req, res) => {
  try {
    console.log("[register] body:", req.body);
    const { srn, email, password } = req.body;
    if (!srn || !email || !password) {
      return res.status(400).json({ error: "SRN, Email, and Password are required" });
    }

    const normalizedEmail = String(email).toLowerCase().trim();

    const existingUser = await db.user.findFirst({
      where: {
        OR: [{ srn }, { email: normalizedEmail }]
      }
    });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000));
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    tempUsers.set(normalizedEmail, {
      srn,
      email: normalizedEmail,
      password: hashedPassword,
      otp,
      expiresAt: Date.now() + 24 * 60 * 60 * 1000
    });

    const otpEmail = generateEmailTemplate("otp", { name: srn, otp, expires: "24 hours" });

    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: normalizedEmail,
      subject: otpEmail.subject,
      html: otpEmail.html
    });

    return res.status(200).json({ message: "OTP sent to your email. Verify to complete registration." });
  } catch (err) {
    console.error("Registration error:", err);
    return res.status(500).json({ error: "Failed to initiate registration", details: err.message });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    console.log("[verifyOtp] body:", req.body);
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ error: "Email and OTP are required" });
    }

    const normalizedEmail = String(email).toLowerCase().trim();
    const tempUser = tempUsers.get(normalizedEmail);

    if (!tempUser) {
      return res.status(400).json({ error: "Please register again." });
    }

    if (Date.now() > tempUser.expiresAt) {
      tempUsers.delete(normalizedEmail);
      return res.status(400).json({ error: "OTP expired. Please register again." });
    }

    if (tempUser.otp !== String(otp)) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    const newUser = await db.user.create({
      data: {
        srn: tempUser.srn,
        email: tempUser.email,
        password: tempUser.password
      }
    });

    tempUsers.delete(normalizedEmail);

    const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: "7d" });
    res.cookie("jwt", token, cookieOptions);
    console.log("[verifyOtp] Set-Cookie attempted");

    return res.status(201).json({
      success: true,
      message: "User verified and registered successfully",
      user: {
        id: newUser.id,
        srn: newUser.srn,
        email: newUser.email
      }
    });
  } catch (err) {
    console.error("Verify OTP error:", err);
    return res.status(500).json({ error: "Verification failed", details: err.message });
  }
};

export const login = async (req, res) => {
  try {
    console.log("[login] body:", req.body);
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const normalizedEmail = String(email).toLowerCase().trim();

    const user = await db.user.findUnique({ where: { email: normalizedEmail } });

    if (!user) {
      return res.status(401).json({ error: "User not found with this email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });

    res.cookie("jwt", token, cookieOptions);
    console.log("[login] Set-Cookie attempted");

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user.id,
        srn: user.srn,
        email: user.email,
        codeforcesHandle: user.codeforcesHandle ?? null,
        score: user.score ?? 0,
        role : user.role,
      }
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ error: "Internal server error", details: err.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt", cookieOptions);
    return res.status(200).json({
      success: true,
      message: "User logged out successfully"
    });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    const user = await db.user.findUnique({
      where: { id: req.user.id },
      select: { id: true, srn: true, email: true, codeforcesHandle: true, score: true }
    });

    if (!user) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    return res.status(200).json({ user });
  } catch (err) {
    console.error("Auth check error:", err);
    return res.status(500).json({ error: "Internal error", details: err.message });
  }
};

export const forgotPassword = async (req, res) => {
 try {
    const { email, otp, newPassword } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const normalizedEmail = String(email).toLowerCase().trim();

    const user = await db.user.findUnique({ where: { email: normalizedEmail } });
    if (!user) {
      return res.status(404).json({ error: "User not found with this email address" });
    }


    if (otp && newPassword) {
      if (!user.resetToken || String(otp) !== String(user.resetToken)) {
        return res.status(400).json({ error: "Invalid OTP" });
      }

      if (user.resetTokenExpiry && new Date() > new Date(user.resetTokenExpiry)) {
        return res.status(400).json({ error: "OTP expired" });
      }

      const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

      await db.user.update({
        where: { email: normalizedEmail },
        data: {
          password: hashedPassword,
          resetToken: null,
          resetTokenExpiry: null
        }
      });

      return res.status(200).json({ message: "Password reset successful" });
    }

    const resetToken = String(Math.floor(100000 + Math.random() * 900000));
    const expiry = new Date(Date.now() + 1000 * 60 * 10);

    await db.user.update({
      where: { email: normalizedEmail },
      data: { resetToken, resetTokenExpiry: expiry }
    });

    const resetEmail = generateEmailTemplate("reset-password", {
      otp: resetToken,
      expires: "10 minutes"
    });

    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: normalizedEmail,
      subject: resetEmail.subject,
      html: resetEmail.html
    });

    return res.status(200).json({ message: "OTP sent to email" });
  } catch (error) {
    console.error("Forgot/reset password error:", error);
    return res.status(500).json({ error: "Something went wrong", details: error.message });
  }
};
