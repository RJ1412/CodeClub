import { Server } from "socket.io";

let io;

export const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST"],
            credentials: true
        }
    });

    io.on("connection", (socket) => {
        console.log(`🔌 New client connected: ${socket.id}`);

        socket.on("join_question", (questionId) => {
            socket.join(`question_${questionId}`);
            console.log(`Socket ${socket.id} joined question_${questionId}`);
        });

        socket.on("leave_question", (questionId) => {
            socket.leave(`question_${questionId}`);
        });

        socket.on("disconnect", () => {
            console.log(`❌ Client disconnected: ${socket.id}`);
        });
    });

    return io;
};

export const getIO = () => {
    if (!io) {
        throw new Error("Socket.io not initialized!");
    }
    return io;
};
