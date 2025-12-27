import { useEffect, useState } from "react";
import { useQotdStore } from "../store/useQotdStore";
import { useAuthStore } from "../store/useAuthStore";
import EditorialModal from "../components/EditorialModal";
const { checkAuth } = useAuthStore.getState(); // or use hook
import LeaderboardModal from "../components/LeaderboardModal";
import AdminAnalytics from "../components/AdminAnalytics";
import SubmissionHistory from "../components/SubmissionHistory";
import QuestionForum from "../components/QuestionForum";
import {
  LogOut,
  UserCircle2,
  ListOrdered,
  ClipboardList,
  TerminalSquare,
  Code2,
  ShieldCheck,
  Link2,
  X,
  Clock,
  Activity,
} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

export default function DashboardPage() {
  const [handle, setHandle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedImage, setEditedImage] = useState("");
  const [showEditorial, setShowEditorial] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showSubmissionHistory, setShowSubmissionHistory] = useState(false);

  const todaysQuestion = useQotdStore((state) => state.todaysQuestion);
  const leaderboard = useQotdStore((state) => state.leaderboard);
  const allQuestions = useQotdStore((state) => state.allQuestions);
  const fetchTodaysQuestion = useQotdStore((state) => state.fetchTodaysQuestion);
  const fetchLeaderboard = useQotdStore((state) => state.fetchLeaderboard);
  const fetchAllQuestions = useQotdStore((state) => state.fetchAllQuestions);
  const verifyAndAward = useQotdStore((state) => state.verifyAndAward);
  const linkHandle = useQotdStore((state) => state.linkHandle);
  const fetchSubmissions = useQotdStore((state) => state.fetchSubmissions);
  const submissions = useQotdStore((state) => state.submissions);
  const fetchLinkedHandle = useQotdStore((state) => state.fetchLinkedHandle);
  const fetchEditorialIfAllowed = useQotdStore((state) => state.fetchEditorialIfAllowed);

  // admin actions + loading flag
  const adminSetQotd = useQotdStore((state) => state.adminSetQotd);
  const adminDeleteQuestion = useQotdStore((state) => state.adminDeleteQuestion);
  const adminLoading = useQotdStore((state) => state.adminLoading);

  const { authUser, logout, setAuthUser } = useAuthStore();

  // New state for Discussion Modal
  const [discussionQuestion, setDiscussionQuestion] = useState(null);

  const isAdmin = authUser?.role === "ADMIN";

  // Admin QOTD form state
  const [qotdForm, setQotdForm] = useState({
    title: "",
    link: "",
    date: "",
    rating: "",
    codeforcesId: "",
    editorialUrl: "",
  });

  // Single effect for initial data load
  useEffect(() => {
    (async () => {
      await Promise.all([
        fetchTodaysQuestion(),
        fetchLeaderboard(),
        fetchAllQuestions(),
        fetchSubmissions(),
      ]);

      if (authUser) {
        setEditedName(authUser.name || "");
        setEditedEmail(authUser.email || "");
        setEditedImage(authUser.profileImage || "");
      }

      if (authUser && !authUser.codeforcesHandle) {
        const res = await fetchLinkedHandle();
        if (res?.cfHandle) {
          setAuthUser({ ...authUser, codeforcesHandle: res.cfHandle });
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLink = async () => {
    if (!handle) return;
    try {
      const res = await linkHandle(handle);
      if (res.success && res.updatedUser) {
        setAuthUser(res.updatedUser);
        setHandle("");
        toast.success("Codeforces handle linked!");
      } else {
        toast.error(res.error || "Failed to link Codeforces handle.");
      }
    } catch (err) {
      console.error("Unexpected error linking handle", err);
      toast.error("Something went wrong while linking.");
    }
  };

  const handleUpdateStatus = async (title) => {
    if (!authUser?.codeforcesHandle) {
      toast.error("⚠️ Link your Codeforces handle first");
      return;
    }

    const res = await verifyAndAward(title, authUser.codeforcesHandle);

    if (res?.status === "ACCEPTED") {
      toast.success("✅ Solved!");
    } else if (res?.status === "REJECTED") {
      toast.error("❌ Not solved yet on Codeforces");
    } else if (res?.status === "EXPIRED") {
      toast.error("❌ This question has expired");
    }

    await fetchLeaderboard();
    await fetchSubmissions();
    await checkAuth();
  };

  const handleOpenEditorial = async (title) => {
    await fetchEditorialIfAllowed(title, authUser?.codeforcesHandle);
    setShowEditorial(true);
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put("/api/user/update-profile", {
        name: editedName,
        email: editedEmail,
        profileImage: editedImage,
      });

      if (response.data.success) {
        setAuthUser(response.data.updatedUser);
        setIsModalOpen(false);
      }
    } catch (err) {
      console.error("Failed to update profile", err);
    }
  };

  const latestQuestions = allQuestions?.slice(0, 4) || [];
  const displayCount = leaderboard?.length >= 3 ? 3 : leaderboard?.length || 0;

  // Admin: handle QOTD form field change
  const handleQotdFormChange = (e) => {
    const { name, value } = e.target;
    setQotdForm((prev) => ({ ...prev, [name]: value }));
  };

  // Admin: set / override Question of the Day (via store)
  const handleSetQotd = async (e) => {
    e.preventDefault();
    if (!qotdForm.title) {
      toast.error("Title is required");
      return;
    }

    const payload = {
      title: qotdForm.title,
      link: qotdForm.link || undefined,
      editorialUrl: qotdForm.editorialUrl || undefined,
      date: qotdForm.date || undefined,
      rating: qotdForm.rating ? Number(qotdForm.rating) : undefined,
      codeforcesId: qotdForm.codeforcesId ? Number(qotdForm.codeforcesId) : undefined,
    };

    const res = await adminSetQotd(payload);

    if (res?.success === false) {
      toast.error(res.error || "Failed to set Question of the Day");
      return;
    }

    toast.success("Question of the Day set!");
    setQotdForm({
      title: "",
      link: "",
      date: "",
      rating: "",
      codeforcesId: "",
      editorialUrl: "",
    });
  };

  // Admin: delete a question (via store)
  const handleAdminDeleteQuestion = async (id) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this question? This will also delete related submissions."
      )
    ) {
      return;
    }

    const res = await adminDeleteQuestion(id);

    if (res?.success === false) {
      toast.error(res.error || "Failed to delete question");
      return;
    }

    toast.success("Question deleted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-6 md:p-8 font-mono relative">
      {/* All questions modal */}
      {isQuestionModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <div className="bg-gray-900 p-6 rounded-xl w-[90%] max-w-5xl overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-yellow-400">All Questions</h2>
              <button onClick={() => setIsQuestionModalOpen(false)}>
                <X className="text-red-500 hover:text-red-600" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-400 border-b border-gray-600">
                    <th className="py-2">Title</th>
                    <th>Rating</th>
                    <th>Date</th>
                    <th>Actions</th>
                    <th>Editorial</th>
                    <th>Discuss</th>
                    {isAdmin && <th>Admin</th>}
                  </tr>
                </thead>
                <tbody>
                  {allQuestions.map((q, idx) => (
                    <tr
                      key={q.id || idx}
                      className="border-b border-gray-700 hover:bg-gray-700/20"
                    >
                      <td className="py-2 text-white">{q.title}</td>
                      <td className="text-cyan-300">{q.rating}</td>
                      <td className="text-gray-400">
                        {new Date(q.date).toLocaleDateString()}
                      </td>
                      <td className="flex gap-2 py-2">
                        <a
                          href={q.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
                        >
                          Visit
                        </a>
                        <button
                          onClick={() => handleUpdateStatus(q.title)}
                          className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
                        >
                          Check Submission
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleOpenEditorial(q.title)}
                          className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
                        >
                          View Editorial
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setDiscussionQuestion(q)}
                          className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
                        >
                          Discuss
                        </button>
                      </td>
                      {isAdmin && (
                        <td className="py-2">
                          <button
                            onClick={() => handleAdminDeleteQuestion(q.id)}
                            className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
                            disabled={adminLoading}
                          >
                            {adminLoading ? "Deleting..." : "Delete"}
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* User bar */}
      <div className="mb-4 text-xl font-bold text-cyan-300">
        User: {authUser?.srn} | Score: {authUser?.score || 0}
      </div>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Edit Profile</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="text-red-500 hover:text-red-600" />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
              <input
                type="email"
                placeholder="Email"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
              <input
                type="text"
                placeholder="Profile Image URL"
                value={editedImage}
                onChange={(e) => setEditedImage(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
              <button
                onClick={handleSaveChanges}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-cyan-400 flex items-center gap-2">
            <TerminalSquare className="text-cyan-500" />
            Welcome, {authUser?.srn || authUser?.email || "Coder"}!
          </h1>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setShowSubmissionHistory(true)}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 transition text-white rounded-lg font-bold"
          >
            <Clock size={18} /> My Submissions
          </button>
          {isAdmin && (
            <button
              onClick={() => setShowAnalytics(true)}
              className="flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 transition text-white rounded-lg font-bold"
            >
              <Activity size={18} /> Analytics
            </button>
          )}
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 transition text-white rounded-lg font-bold"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>

      {/* Codeforces Handle Linking */}
      <div className="mb-8 bg-gray-900 p-4 rounded-xl shadow-lg flex flex-col md:flex-row md:items-center gap-4">
        <Link2 className="text-pink-400" size={20} />
        {authUser?.codeforcesHandle ? (
          <p className="text-green-400 font-semibold">
            Linked Handle: <span className="text-white">{authUser.codeforcesHandle}</span>
          </p>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter Codeforces Handle"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white w-full md:w-auto"
            />
            <button
              onClick={handleLink}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg font-semibold"
            >
              Link Handle
            </button>
          </>
        )}
        {authUser?.codeforcesHandle && (
          <p className="text-xs text-gray-400 italic">Once linked, it cannot be changed.</p>
        )}
      </div>

      {/* Icons */}
      <div className="flex gap-6 text-cyan-300 text-xl mb-6 animate-pulse">
        <UserCircle2 />
        <ListOrdered />
        <ClipboardList />
        <Code2 />
        <ShieldCheck />
      </div>

      {/* Grid: QOTD + Leaderboard */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* QOTD */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-2xl">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">Question of the Day</h2>
          {todaysQuestion ? (
            <>
              <p className="text-xl font-semibold mb-2 text-white">
                {todaysQuestion.title}
              </p>
              <p className="text-sm text-gray-400 mb-1">
                Rating: {todaysQuestion.rating || "N/A"}
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Tags: {todaysQuestion.tags?.join(", ") || "None"}
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href={todaysQuestion.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition"
                >
                  Solve Now
                </a>
                <button
                  onClick={() => handleUpdateStatus(todaysQuestion.title)}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
                >
                  Update Status
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              {/* Skeleton Loader */}
              <div className="animate-pulse space-y-3">
                <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                <div className="flex gap-4 mt-4">
                  <div className="h-10 bg-gray-700 rounded w-24"></div>
                  <div className="h-10 bg-gray-700 rounded w-32"></div>
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center mt-4">
                {useQotdStore.getState().error
                  ? "Failed to load question. "
                  : "Loading today's question..."}
              </p>
              {useQotdStore.getState().error && (
                <button
                  onClick={() => fetchTodaysQuestion()}
                  className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition"
                >
                  Retry
                </button>
              )}
            </div>
          )}
        </div>

        {/* Leaderboard */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-2xl">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            Top {displayCount} Leader{displayCount === 1 ? "" : "s"}
          </h2>
          {displayCount > 0 ? (
            <>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-400 border-b border-gray-600">
                    <th className="py-2">User</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.slice(0, displayCount).map((u, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-700 hover:bg-gray-700/20"
                    >
                      <td className="py-2 text-white">{u.srn || u.email}</td>
                      <td className="text-cyan-300 font-bold">{u.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {leaderboard.length > displayCount && (
                <button
                  onClick={() => setShowModal(true)}
                  className="mt-4 text-sm text-cyan-400 underline hover:text-white"
                >
                  View Full Leaderboard
                </button>
              )}
            </>
          ) : (
            <p className="text-gray-400 italic">Loading leaderboard...</p>
          )}
        </div>
      </div>

      <LeaderboardModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Latest Questions */}
      <div className="mt-10 bg-gray-800 p-6 rounded-xl shadow-2xl">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Latest Questions</h2>
        {latestQuestions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-400 border-b border-gray-600">
                  <th className="py-2">Title</th>
                  <th>Rating</th>
                  <th>Date</th>
                  <th>Actions</th>
                  <th>Editorial</th>
                  <th>Discuss</th>
                </tr>
              </thead>
              <tbody>
                {latestQuestions.map((q, idx) => (
                  <tr
                    key={q.id || idx}
                    className="border-b border-gray-700 hover:bg-gray-700/20"
                  >
                    <td className="py-2 text-white">{q.title}</td>
                    <td className="text-cyan-300">{q.rating}</td>
                    <td className="text-gray-400">
                      {new Date(q.date).toLocaleDateString()}
                    </td>
                    <td className="flex gap-2 py-2">
                      <a
                        href={q.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
                      >
                        Visit
                      </a>
                      <button
                        onClick={() => handleUpdateStatus(q.title)}
                        className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
                      >
                        Check Submission
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleOpenEditorial(q.title)}
                        className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
                      >
                        View Editorial
                      </button>
                      <EditorialModal
                        isOpen={showEditorial}
                        onClose={() => setShowEditorial(false)}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => setDiscussionQuestion(q)}
                        className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
                      >
                        Discuss
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 text-right">
              <button
                onClick={() => setIsQuestionModalOpen(true)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white"
              >
                Show More
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-400 italic">Loading latest questions...</p>
        )}
      </div>

      {/* ADMIN PANEL */}
      {isAdmin && (
        <div className="mt-10 bg-gray-900 p-6 rounded-2xl shadow-2xl border border-yellow-500/40">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-2">
            <ShieldCheck className="text-yellow-400" />
            Admin Controls
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Set / override the Question of the Day or pre-schedule future questions by date.
          </p>

          <form onSubmit={handleSetQotd} className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs text-gray-400 mb-1">
                Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={qotdForm.title}
                onChange={handleQotdFormChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
                placeholder="e.g., 1234A - Balanced Team"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">
                Codeforces Problem ID
              </label>
              <input
                type="number"
                name="codeforcesId"
                value={qotdForm.codeforcesId}
                onChange={handleQotdFormChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
                placeholder="e.g., 1234"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">Rating</label>
              <input
                type="number"
                name="rating"
                value={qotdForm.rating}
                onChange={handleQotdFormChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
                placeholder="e.g., 1200"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs text-gray-400 mb-1">Problem Link</label>
              <input
                type="text"
                name="link"
                value={qotdForm.link}
                onChange={handleQotdFormChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
                placeholder="https://codeforces.com/contest/..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs text-gray-400 mb-1">
                Editorial URL (optional, for AI / resources)
              </label>
              <input
                type="text"
                name="editorialUrl"
                value={qotdForm.editorialUrl}
                onChange={handleQotdFormChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
                placeholder="https://..."
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">
                Date for this question
              </label>
              <input
                type="date"
                name="date"
                value={qotdForm.date}
                onChange={handleQotdFormChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
              />
              <p className="text-[10px] text-gray-500 mt-1">
                Leave empty to set for <span className="text-yellow-300">today</span>.
              </p>
            </div>

            <div className="md:col-span-2 flex justify-end items-end">
              <button
                type="submit"
                disabled={adminLoading}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 disabled:opacity-60 disabled:cursor-not-allowed text-black rounded-lg font-semibold text-sm"
              >
                {adminLoading ? "Setting QOTD..." : "Set Question of the Day"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* New Modals */}
      <AdminAnalytics isOpen={showAnalytics} onClose={() => setShowAnalytics(false)} />
      <SubmissionHistory isOpen={showSubmissionHistory} onClose={() => setShowSubmissionHistory(false)} />

      {/* Discussion Modal for Past Questions */}
      {discussionQuestion && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4">
          <div className="bg-gray-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-700 relative">
            <button
              onClick={() => setDiscussionQuestion(null)}
              className="absolute top-4 right-4 text-red-500 hover:text-red-600 transition z-10"
            >
              <X size={28} />
            </button>
            <div className="p-2">
              <QuestionForum
                questionId={discussionQuestion.id}
                questionTitle={discussionQuestion.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
