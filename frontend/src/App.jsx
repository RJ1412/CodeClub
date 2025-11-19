// App.jsx
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage";

export default function App() {
  const { authUser, loading, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-white bg-black">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
            authUser
              ? <DashboardPage />
              : <Navigate to="/" replace />
          }
        />
        <Route path="/auth" element={<HomePage />} />
      </Routes>
    </>
  );
}
