import React, { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { io } from "socket.io-client";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Comment = ({ comment, onReply }) => {
    const [showReply, setShowReply] = useState(false);
    const [replyContent, setReplyContent] = useState("");

    const handleReplySubmit = () => {
        onReply(comment.id, replyContent);
        setReplyContent("");
        setShowReply(false);
    };

    return (
        <div className="bg-gray-800 p-4 rounded-lg mb-4 border border-gray-700">
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-teal-400">{comment.user.codeforcesHandle || "Anonymous"}</span>
                    <span className="text-xs text-gray-500">{formatDistanceToNow(new Date(comment.createdAt))} ago</span>
                </div>
            </div>
            <p className="text-gray-300 mb-3 whitespace-pre-wrap">{comment.content}</p>

            <button
                onClick={() => setShowReply(!showReply)}
                className="text-sm text-purple-400 hover:text-purple-300 transition"
            >
                Reply
            </button>

            {showReply && (
                <div className="mt-3 pl-4 border-l-2 border-purple-500/30">
                    <textarea
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        className="w-full bg-gray-900 text-white rounded p-2 mb-2 focus:ring-2 focus:ring-purple-500 outline-none"
                        placeholder="Write a reply..."
                        rows="2"
                    />
                    <button
                        onClick={handleReplySubmit}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm transition"
                    >
                        Submit Reply
                    </button>
                </div>
            )}

            {/* Nested Replies */}
            {comment.replies && comment.replies.length > 0 && (
                <div className="mt-4 pl-6 border-l-2 border-gray-700 space-y-4">
                    {comment.replies.map(reply => (
                        <Comment key={reply.id} comment={reply} onReply={onReply} />
                    ))}
                </div>
            )}
        </div>
    );
};

const Rating = ({ questionId, initialRating, onRate }) => {
    const [hover, setHover] = useState(0);
    const [rating, setRating] = useState(initialRating || 0);

    const handleRate = async (value) => {
        setRating(value);
        await onRate(value);
    };

    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => handleRate(star)}
                    className="text-2xl focus:outline-none transition-colors duration-150"
                >
                    <span className={star <= (hover || rating) ? "text-yellow-400" : "text-gray-600"}>
                        ★
                    </span>
                </button>
            ))}
            <span className="text-sm text-gray-400 ml-2">{rating > 0 ? `Your rating: ${rating}` : "Rate this problem"}</span>
        </div>
    );
};

const QuestionForum = ({ questionId, questionTitle }) => {
    const [discussions, setDiscussions] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [loading, setLoading] = useState(false);
    const [userRating, setUserRating] = useState(0);

    useEffect(() => {
        if (questionId) {
            fetchDiscussions();
            fetchRating();

            // Connect to socket
            const socket = io(BASE_URL, { withCredentials: true });
            socket.emit("join_question", questionId);

            socket.on("new_comment", (comment) => {
                setDiscussions(prev => [comment, ...prev]);
            });

            return () => {
                socket.emit("leave_question", questionId);
                socket.disconnect();
            };
        }
    }, [questionId]);

    const fetchRating = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/v1/discussion/${questionId}/rating`, { withCredentials: true });
            if (res.data.userRating) setUserRating(res.data.userRating);
        } catch (err) {
            console.error("Failed to fetch rating", err);
        }
    }

    const handleRate = async (value) => {
        try {
            await axios.post(`${BASE_URL}/api/v1/discussion/rate`, { questionId, rating: value }, { withCredentials: true });
        } catch (err) {
            alert("Failed to submit rating");
        }
    };

    const fetchDiscussions = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${BASE_URL}/api/v1/discussion/${questionId}/comments`, {
                withCredentials: true
            });
            setDiscussions(res.data.discussions);
        } catch (err) {
            console.error("Failed to load discussions", err);
        } finally {
            setLoading(false);
        }
    };

    const postComment = async (parentId = null, content = null) => {
        try {
            await axios.post(`${BASE_URL}/api/v1/discussion/comments`, {
                questionId: questionId,
                content: content || newComment,
                parentId
            }, { withCredentials: true });

            setNewComment("");
            fetchDiscussions(); // Refresh list
        } catch (err) {
            alert("Failed to post comment");
        }
    };

    return (
        <div className="mt-8 bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Discussion: {questionTitle}</h3>
                <Rating questionId={questionId} initialRating={userRating} onRate={handleRate} />
            </div>

            {/* New Comment Input */}
            <div className="mb-8">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full bg-gray-900 text-white rounded-lg p-3 mb-2 focus:ring-2 focus:ring-teal-500 outline-none h-24"
                    placeholder="Ask a question or share your approach..."
                />
                <button
                    onClick={() => postComment()}
                    disabled={!newComment.trim()}
                    className="bg-teal-600 hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-semibold transition"
                >
                    Post Comment
                </button>
            </div>

            {/* Discussion List */}
            {loading ? (
                <div className="text-center text-gray-400 py-4">Loading discussions...</div>
            ) : discussions.length === 0 ? (
                <div className="text-center text-gray-500 py-8 italic">No discussions yet. Be the first to start one!</div>
            ) : (
                <div className="space-y-2">
                    {discussions.map(discussion => (
                        <Comment
                            key={discussion.id}
                            comment={discussion}
                            onReply={(parentId, content) => postComment(parentId, content)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default QuestionForum;
