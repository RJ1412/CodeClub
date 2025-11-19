import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useAuthStore = create((set) => ({
  authUser: null,
  loading: true,
  
  setAuthUser: (user) => set({ authUser: user }),
  
  checkAuth: async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/v1/auth/me`, {
        method: "GET",
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        set({ authUser: data.user, loading: false });
      } else {
        // Clear auth user and stop loading on auth failure
        set({ authUser: null, loading: false });
      }
    } catch (err) {
      console.error("Auth check failed:", err);
      // Always set loading to false even on error
      set({ authUser: null, loading: false });
    }
  },


  login: async ({ email, password }) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/api/v1/auth/login`,
      { email, password },
      { withCredentials: true }
    );
    set({ authUser: res.data.user });
    toast.success(res.data.message || "Login successful");
    console.log("Login successful:", res.data.user);
    
    return { success: true }; 
  } catch (err) {
    toast.error(err.response?.data?.error || "Login failed");
    return { success: false }; 
  }
},

  // In useAuthStore.js - update the signup function
signup: async ({ srn, email, password }) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/v1/auth/register`, {
      srn,
      email,
      password,
    }, {
      withCredentials: true,
    });
    toast.success(res.data.message || "OTP sent to your email");
    return { success: true }; // Return success status
  } catch (err) {
    const errorMessage = err.response?.data?.error || "Signup failed";
    toast.error(errorMessage);
    return { 
      success: false, 
      error: errorMessage 
    }; // Return error status
  }
},

  verifyOtp: async (email, otp) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/auth/verify`, {
        email,
        otp,
      }, {
  withCredentials: true,
});
      set({ authUser: res.data.user });
      toast.success(res.data.message || "Account verified");
    } catch (err) {
      toast.error(err.response?.data?.error || "OTP verification failed");
    }
  },

  logout: async () => {
    try {
      await axios.post(`${BASE_URL}/api/v1/auth/logout`, {}, { withCredentials: true });
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (err) {
      toast.error("Logout failed");
    }
  },

  forgotPassword: async (email) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/auth/forgot-password`, { email }, {
  withCredentials: true,
});
      toast.success(res.data.message || "OTP sent to your email");
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to send reset OTP");
    }
  },

  resetPassword: async (email, otp, newPassword) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/auth/forgot-password`, {
        email,
        otp,
        newPassword,
      }, {
  withCredentials: true,
});
      toast.success(res.data.message || "Password reset successful");
    } catch (err) {
      toast.error(err.response?.data?.error || "Reset failed");
    }
  },

}));
