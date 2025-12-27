import { create } from "zustand";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useQotdStore = create((set, get) => ({
  loading: false,
  adminLoading: false,
  error: null,
  todaysQuestion: null,
  allQuestions: [],
  leaderboard: [],
  submissions: [],
  linkedHandle: null,
  editorialContent: null,

  // ----------------- USER FUNCTIONS -----------------

  linkHandle: async (handle) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/qotd/link-cf`,
        { handle },
        { withCredentials: true }
      );

      return response.data;
    } catch (error) {
      const message = error.response?.data?.error || "Failed to link handle";
      set({ error: message });
      return { success: false, error: message };
    } finally {
      set({ loading: false });
    }
  },

  // get today's question
  fetchTodaysQuestion: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/qotd/today`, {
        withCredentials: true,
      });
      set({ todaysQuestion: res.data.question });
    } catch (error) {
      set({
        error:
          error.response?.data?.error || "Failed to fetch today's question",
      });
    } finally {
      set({ loading: false });
    }
  },

  // fetch all QOTD questions (user-facing list)
  fetchAllQuestions: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/qotd/all`, {
        withCredentials: true,
      });
      set({ allQuestions: res.data.questions });
    } catch (error) {
      set({
        error:
          error.response?.data?.error || "Failed to fetch all questions",
      });
    } finally {
      set({ loading: false });
    }
  },

  fetchEditorialIfAllowed: async (questionTitle, codeforcesHandle) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(
        `${BASE_URL}/api/v1/qotd/editorial`,
        { questionTitle, codeforcesHandle },
        { withCredentials: true }
      );
      set({ editorialContent: res.data.editorial });
    } catch (error) {
      set({
        error:
          error.response?.data?.error || "Failed to fetch editorial content",
      });
    } finally {
      set({ loading: false });
    }
  },

  // leaderboard
  fetchLeaderboard: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/qotd/leaderboard`, {
        withCredentials: true,
      });
      set({ leaderboard: res.data.leaderboard });
    } catch (error) {
      set({
        error:
          error.response?.data?.error || "Failed to fetch leaderboard",
      });
    } finally {
      set({ loading: false });
    }
  },

  // submissions
  fetchSubmissions: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/qotd/submission`, {
        withCredentials: true,
      });
      set({ submissions: res.data.submissions });
    } catch (error) {
      set({
        error:
          error.response?.data?.error || "Failed to fetch submissions",
      });
    } finally {
      set({ loading: false });
    }
  },

  // verify solution + award points
  verifyAndAward: async (questionTitle, codeforcesHandle) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(
        `${BASE_URL}/api/v1/qotd/update-status`,
        { questionTitle, codeforcesHandle },
        { withCredentials: true }
      );
      return res.data;
    } catch (error) {
      set({
        error:
          error.response?.data?.message ||
          "Failed to verify Codeforces submission",
      });
      return null;
    } finally {
      set({ loading: false });
    }
  },

  fetchLinkedHandle: async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/qotd/cf-handle`, {
        withCredentials: true,
      });
      set({ linkedHandle: res.data.codeforcesHandle });
    } catch (err) {
      set({ error: "Failed to fetch linked handle" });
    }
  },

  // ----------------- ADMIN FUNCTIONS -----------------

  // Set / override Question of the Day (uses /api/admin/qotd)
  adminSetQotd: async (payload) => {
    set({ adminLoading: true, error: null });
    try {
      const res = await axios.post(`${BASE_URL}/api/admin/qotd`, payload, {
        withCredentials: true,
      });

      // Refresh relevant data in parallel
      await Promise.all([
        get().fetchTodaysQuestion(),
        get().fetchAllQuestions(),
      ]);

      return res.data; // { success, message, data }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Failed to set Question of the Day";
      set({ error: message });
      return { success: false, error: message };
    } finally {
      set({ adminLoading: false });
    }
  },

  // Delete question + related submissions (uses /api/admin/questions/:id)
  adminDeleteQuestion: async (id) => {
    set({ adminLoading: true, error: null });
    try {
      const res = await axios.delete(
        `${BASE_URL}/api/admin/questions/${id}`,
        { withCredentials: true }
      );

      // Refresh in parallel (in case you deleted today's question)
      await Promise.all([
        get().fetchAllQuestions(),
        get().fetchTodaysQuestion(),
      ]);

      return res.data; // { success, message }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Failed to delete question";
      set({ error: message });
      return { success: false, error: message };
    } finally {
      set({ adminLoading: false });
    }
  },
}));
