import { useState, useEffect } from "react";
import { useQotdStore } from "../store/useQotdStore";
import { X, TrendingUp, Users, FileQuestion, CheckCircle, Activity, TrendingUp as TrendsIcon } from "lucide-react";

export default function AdminAnalytics({ isOpen, onClose }) {
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isOpen) {
            fetchAnalytics();
        }
    }, [isOpen]);

    const fetchAnalytics = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/admin/analytics`, {
                credentials: "include",
            });
            const data = await response.json();
            if (data.success) {
                setAnalytics(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch analytics:", error);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4">
            <div className="bg-gray-900 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-yellow-400 flex items-center gap-2">
                        <Activity className="text-yellow-400" />
                        System Analytics
                    </h2>
                    <div className="flex gap-4">
                        <button
                            onClick={() => window.open(`${import.meta.env.VITE_BASE_URL}/api/admin/analytics/export`, "_blank")}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition"
                        >
                            <TrendsIcon size={20} /> Export CSV
                        </button>
                        <button onClick={onClose} className="text-red-500 hover:text-red-600 transition">
                            <X size={28} />
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    {loading ? (
                        <div className="text-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto"></div>
                            <p className="text-gray-400 mt-4">Loading analytics...</p>
                        </div>
                    ) : analytics ? (
                        <>
                            {/* Overview Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl shadow-lg">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-blue-200 text-sm">Total Users</p>
                                            <p className="text-4xl font-bold text-white mt-2">{analytics.overview.totalUsers}</p>
                                            <p className="text-blue-300 text-xs mt-1">
                                                {analytics.overview.usersWithHandles} with CF handles
                                            </p>
                                        </div>
                                        <Users className="text-blue-300" size={48} />
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-xl shadow-lg">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-purple-200 text-sm">Total Questions</p>
                                            <p className="text-4xl font-bold text-white mt-2">{analytics.overview.totalQuestions}</p>
                                        </div>
                                        <FileQuestion className="text-purple-300" size={48} />
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-green-900 to-green-800 p-6 rounded-xl shadow-lg">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-green-200 text-sm">Total Submissions</p>
                                            <p className="text-4xl font-bold text-white mt-2">{analytics.overview.totalSubmissions}</p>
                                            <p className="text-green-300 text-xs mt-1">
                                                {analytics.overview.acceptedSubmissions} accepted
                                            </p>
                                        </div>
                                        <CheckCircle className="text-green-300" size={48} />
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-orange-900 to-orange-800 p-6 rounded-xl shadow-lg">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-orange-200 text-sm">Acceptance Rate</p>
                                            <p className="text-4xl font-bold text-white mt-2">{analytics.overview.acceptanceRate}</p>
                                        </div>
                                        <TrendingUp className="text-orange-300" size={48} />
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Recent Users */}
                                <div className="bg-gray-800 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-4">Recent Users</h3>
                                    <div className="space-y-3">
                                        {analytics.recent.users.map((user) => (
                                            <div key={user.id} className="bg-gray-700 p-3 rounded-lg flex justify-between items-center">
                                                <div>
                                                    <p className="text-white font-semibold">{user.srn}</p>
                                                    <p className="text-gray-400 text-sm">{user.email}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-cyan-300 font-bold">{user.score} pts</p>
                                                    <p className="text-gray-400 text-xs">
                                                        {new Date(user.createdAt).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Recent Questions */}
                                <div className="bg-gray-800 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold text-purple-400 mb-4">Recent Questions</h3>
                                    <div className="space-y-3">
                                        {analytics.recent.questions.map((q) => (
                                            <div key={q.id} className="bg-gray-700 p-3 rounded-lg">
                                                <p className="text-white font-semibold truncate">{q.title}</p>
                                                <div className="flex justify-between items-center mt-2">
                                                    <span className="text-yellow-400 text-sm">Rating: {q.rating}</span>
                                                    <span className="text-gray-400 text-xs">
                                                        {new Date(q.date).toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Recent Submissions */}
                            <div className="mt-6 bg-gray-800 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-green-400 mb-4">Recent Submissions</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="text-left text-gray-400 border-b border-gray-600">
                                                <th className="py-2">User</th>
                                                <th>Question</th>
                                                <th>Status</th>
                                                <th>Score</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {analytics.recent.submissions.map((sub, idx) => (
                                                <tr key={idx} className="border-b border-gray-700 hover:bg-gray-700/20">
                                                    <td className="py-2 text-white">{sub.user.srn || sub.user.email}</td>
                                                    <td className="text-gray-300 truncate max-w-xs">{sub.question.title}</td>
                                                    <td>
                                                        <span
                                                            className={`px-2 py-1 rounded text-xs ${sub.status === "ACCEPTED"
                                                                ? "bg-green-600 text-white"
                                                                : sub.status === "REJECTED"
                                                                    ? "bg-red-600 text-white"
                                                                    : "bg-yellow-600 text-white"
                                                                }`}
                                                        >
                                                            {sub.status}
                                                        </span>
                                                    </td>
                                                    <td className="text-cyan-300">{sub.score}</td>
                                                    <td className="text-gray-400 text-xs">
                                                        {new Date(sub.submittedAt).toLocaleString()}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-12 text-gray-400">
                            <p>Failed to load analytics</p>
                            <button
                                onClick={fetchAnalytics}
                                className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg"
                            >
                                Retry
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
