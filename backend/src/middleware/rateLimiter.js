import rateLimit from "express-rate-limit";

/**
 * General rate limiter for all API endpoints
 * Allows 100 requests per 15 minutes per IP
 */
export const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: {
        error: "Too many requests from this IP, please try again later.",
        retryAfter: "15 minutes",
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

/**
 * Strict rate limiter for submission verification endpoints
 * Allows 10 requests per 5 minutes per IP
 */
export const submissionLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 10, // Limit each IP to 10 requests per windowMs
    message: {
        error: "Too many submission verification attempts. Please wait before trying again.",
        retryAfter: "5 minutes",
    },
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: false, // Count all requests, not just failed ones
});

/**
 * Authentication rate limiter for login/signup endpoints
 * Allows 5 requests per 15 minutes per IP
 */
export const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per windowMs
    message: {
        error: "Too many authentication attempts. Please try again later.",
        retryAfter: "15 minutes",
    },
    standardHeaders: true,
    legacyHeaders: false,
});

/**
 * Lenient rate limiter for authenticated users
 * Allows 200 requests per 15 minutes per IP
 */
export const authenticatedLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200, // Higher limit for authenticated users
    message: {
        error: "Too many requests. Please slow down.",
        retryAfter: "15 minutes",
    },
    standardHeaders: true,
    legacyHeaders: false,
});
