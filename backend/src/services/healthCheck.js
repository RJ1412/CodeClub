import { db } from "../libs/db.js";

// In-memory tracking for MTBF/MTTR calculations
let systemMetrics = {
    startTime: Date.now(),
    lastFailureTime: null,
    lastRecoveryTime: null,
    totalFailures: 0,
    totalDowntime: 0,
    isHealthy: true,
};

/**
 * Check database connectivity
 */
const checkDatabase = async () => {
    try {
        await db.$queryRaw`SELECT 1`;
        return { status: "healthy", message: "Database connected" };
    } catch (error) {
        return { status: "unhealthy", message: `Database error: ${error.message}` };
    }
};

/**
 * Calculate Mean Time Between Failures (MTBF)
 * MTBF = Total uptime / Number of failures
 */
const calculateMTBF = () => {
    const totalUptime = Date.now() - systemMetrics.startTime - systemMetrics.totalDowntime;

    if (systemMetrics.totalFailures === 0) {
        return Infinity; // No failures yet
    }

    return totalUptime / systemMetrics.totalFailures;
};

/**
 * Calculate Mean Time To Repair (MTTR)
 * MTTR = Total downtime / Number of failures
 */
const calculateMTTR = () => {
    if (systemMetrics.totalFailures === 0) {
        return 0; // No failures to repair
    }

    return systemMetrics.totalDowntime / systemMetrics.totalFailures;
};

/**
 * Calculate system uptime percentage
 */
const calculateUptime = () => {
    const totalTime = Date.now() - systemMetrics.startTime;
    const uptime = totalTime - systemMetrics.totalDowntime;
    return (uptime / totalTime) * 100;
};

/**
 * Record a system failure
 */
export const recordFailure = () => {
    if (systemMetrics.isHealthy) {
        systemMetrics.isHealthy = false;
        systemMetrics.lastFailureTime = Date.now();
        systemMetrics.totalFailures++;
        console.error("❌ System failure recorded");
    }
};

/**
 * Record system recovery
 */
export const recordRecovery = () => {
    if (!systemMetrics.isHealthy && systemMetrics.lastFailureTime) {
        systemMetrics.isHealthy = true;
        systemMetrics.lastRecoveryTime = Date.now();
        const downtime = systemMetrics.lastRecoveryTime - systemMetrics.lastFailureTime;
        systemMetrics.totalDowntime += downtime;
        console.log(`✅ System recovered. Downtime: ${downtime}ms`);
    }
};

/**
 * Get comprehensive health check status
 */
export const getHealthStatus = async () => {
    const dbHealth = await checkDatabase();

    // Update system health based on database status
    if (dbHealth.status === "unhealthy" && systemMetrics.isHealthy) {
        recordFailure();
    } else if (dbHealth.status === "healthy" && !systemMetrics.isHealthy) {
        recordRecovery();
    }

    const mtbf = calculateMTBF();
    const mttr = calculateMTTR();
    const uptime = calculateUptime();

    return {
        status: dbHealth.status === "healthy" ? "healthy" : "unhealthy",
        timestamp: new Date().toISOString(),
        uptime: {
            percentage: uptime.toFixed(4),
            totalSeconds: Math.floor((Date.now() - systemMetrics.startTime) / 1000),
        },
        database: dbHealth,
        metrics: {
            mtbf: mtbf === Infinity ? "No failures" : `${(mtbf / 1000).toFixed(2)}s`,
            mttr: `${(mttr / 1000).toFixed(2)}s`,
            totalFailures: systemMetrics.totalFailures,
            totalDowntime: `${(systemMetrics.totalDowntime / 1000).toFixed(2)}s`,
        },
        system: {
            nodeVersion: process.version,
            platform: process.platform,
            memory: {
                used: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
                total: `${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`,
            },
        },
    };
};

/**
 * Reset metrics (for testing purposes)
 */
export const resetMetrics = () => {
    systemMetrics = {
        startTime: Date.now(),
        lastFailureTime: null,
        lastRecoveryTime: null,
        totalFailures: 0,
        totalDowntime: 0,
        isHealthy: true,
    };
    console.log("🔄 Health metrics reset");
};
