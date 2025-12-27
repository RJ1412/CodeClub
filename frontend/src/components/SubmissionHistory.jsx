import { useState, useEffect } from "react";
import { X, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import axios from "axios";

export default function SubmissionHistory({ isOpen, onClose }) {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("ALL"); // ALL, ACCEPTED, REJECTED, PENDING

    useEffect(() => {
        if (isOpen) {
            fetchSubmissions();
        }
    }, [isOpen]);

    const fetchSubmissions = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/api/v1/qotd/submission`,
                { withCredentials: true }
            );

            if (response.data.recentSubmissions) {
                setSubmissions(response.data.recentSubmissions);
            }
        } catch (error) {
            console.error("Failed to fetch submissions:", error);
        } finally {
            setLoading(false);
        }
    };

    const filteredSubmissions = submissions.filter((sub) => {
        if (filter === "ALL") return true;
        return sub.verdict === filter;
    });

    const getStatusIcon = (verdict) => {
        if (verdict === "OK") return <CheckCircle className="text-green-400" size={20} />;
        if (verdict === "WRONG_ANSWER" || verdict === "RUNTIME_ERROR" || verdict === "TIME_LIMIT_EXCEEDED")
            return <XCircle className="text-red-400" size={20} />;
        return <AlertCircle className="text-yellow-400" size={20} />;
    };

    const getStatusColor = (verdict) => {
        if (verdict === "OK") return "bg-green-600";
        if (verdict === "WRONG_ANSWER" || verdict === "RUNTIME_ERROR" || verdict === "TIME_LIMIT_EXCEEDED")
            return "bg-red-600";
        return "bg-yellow-600";
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4">
            <div className="bg-gray-900 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-cyan-400 flex items-center gap-2">
                        <Clock className="text-cyan-400" />
                        Recent Submissions (Last 24 Hours)
                    </h2>
                    <button onClick={onClose} className="text-red-500 hover:text-red-600 transition">
                        <X size={28} />
                    </button>
                </div>

                <div className="p-6">
                    {/* Filter Buttons */}
                    <div className="flex gap-2 mb-6 flex-wrap">
                        {["ALL", "OK", "WRONG_ANSWER", "TIME_LIMIT_EXCEEDED", "RUNTIME_ERROR"].map((status) => (
                            <button
                                key={status}
                                onClick={() => setFilter(status)}
                                className={`px-4 py-2 rounded-lg font-semibold transition ${filter === status
                                        ? "bg-cyan-600 text-white"
                                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                    }`}
                            >
                                {status.replace("_", " ")}
                            </button>
                        ))}
                    </div>

                    {loading ? (
                        <div className="text-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto"></div>
                            <p className="text-gray-400 mt-4">Loading submissions...</p>
                        </div>
                    ) : filteredSubmissions.length > 0 ? (
                        <div className="space-y-4">
                            {filteredSubmissions.map((sub) => (
                                <div
                                    key={sub.id}
                                    className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                {getStatusIcon(sub.verdict)}
                                                <h3 className="text-lg font-semibold text-white">{sub.name}</h3>
                                            </div>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                                <span>Contest: {sub.contestId}</span>
                                                <span>Problem: {sub.index}</span>
                                                <span>Language: {sub.language}</span>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2">
                                                {new Date(sub.time).toLocaleString()}
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <span
                                                className={`px-3 py-1 rounded-lg text-white text-sm font-semibold ${getStatusColor(
                                                    sub.verdict
                                                )}`}
                                            >
                                                {sub.verdict}
                                            </span>
                                            <a
                                                href={sub.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-cyan-400 hover:text-cyan-300 text-sm underline"
                                            >
                                                View Submission
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-gray-400">
                            <p>No submissions found in the last 24 hours</p>
                            {filter !== "ALL" && (
                                <button
                                    onClick={() => setFilter("ALL")}
                                    className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg"
                                >
                                    Clear Filter
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
