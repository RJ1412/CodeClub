import { createClient } from 'redis';

let client;
let isConnected = false;

export const initRedis = async () => {
    try {
        client = createClient({
            socket: {
                reconnectStrategy: (retries) => {
                    if (retries > 2) {
                        // console.warn("Redis connection retries exhausted. Disabling cache.");
                        return false; // Stop retrying
                    }
                    return Math.min(retries * 50, 500);
                }
            }
        });

        client.on('error', (err) => {
            if (err.code === 'ECONNREFUSED') {
                if (isConnected) {
                    console.warn('Redis connection lost.');
                }
                isConnected = false;
                // Suppress repeated ECONNREFUSED logs
                return;
            }
            console.warn('Redis Client Error:', err.message);
            isConnected = false;
        });

        client.on('end', () => {
            isConnected = false;
        });

        client.on('connect', () => {
            console.log('Connected to Redis');
            isConnected = true;
        });

        await client.connect();
    } catch (err) {
        // console.warn('Redis connection failed. Running without cache.');
        isConnected = false;
    }
    return client;
};

export const getCache = async (key) => {
    if (!isConnected || !client) return null;
    try {
        return await client.get(key);
    } catch (e) { return null; }
};

export const setCache = async (key, value, ttlSeconds = 3600) => {
    if (!isConnected || !client) return;
    try {
        await client.set(key, value, { EX: ttlSeconds });
    } catch (e) { }
};

export const deleteCache = async (key) => {
    if (!isConnected || !client) return;
    try {
        await client.del(key);
    } catch (e) { }
};
