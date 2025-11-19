// src/pages/DashboardPage.jsx
import React, { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore.js";

export default function DashboardPage() {
  const { authUser, loading, checkAuth, logout } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (!authUser) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <h2>You are not logged in.</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <div className="w-full max-w-md text-center">
        <h1 style={{ marginBottom: 8 }}>Logged in successfully</h1>
        <p style={{ marginBottom: 12 }}>
          Welcome, <strong>{authUser.srn || authUser.email}</strong>
        </p>

        <div style={{ marginBottom: 16, textAlign: "left" }}>
          <div>
            <strong>SRN:</strong> {authUser.srn ?? "—"}
          </div>
          <div>
            <strong>Email:</strong> {authUser.email ?? "—"}
          </div>
          <div>
            <strong>Codeforces:</strong> {authUser.codeforcesHandle ?? "—"}
          </div>
          <div>
            <strong>Score:</strong> {typeof authUser.score === "number" ? authUser.score : "—"}
          </div>
        </div>

        <button
          onClick={logout}
          style={{
            padding: "10px 16px",
            borderRadius: 6,
            cursor: "pointer",
            border: "none",
            background: "#0f62fe",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
