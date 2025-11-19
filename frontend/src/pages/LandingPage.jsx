// src/pages/LandingPage.jsx
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"; // We'll create this CSS file

export default function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/auth"); // Redirect to your existing HomePage (which we'll rename)
  };

  return (
    <div className="landing-container">
      <div className="container">
        <header>
          <div className="brand">
            <div className="logo">CC</div>
            <div>
              <div className="title">CodeClub</div>
              <div className="subtitle">Daily problems • automatic checking • leaderboard</div>
            </div>
          </div>

          <nav>
            <a href="#features">Features</a>
 <a href="#how">How it works</a>
            <button className="cta" onClick={handleGetStarted}>Get Started</button>
          </nav>
        </header>

        <main>
          <section className="hero">
            <h1>Build a daily coding habit with one real problem every day</h1>
            <p>
              CodeClub delivers a carefully selected coding problem each day. Students solve it within the day to earn points. 
              The platform provides explanations, automatically verifies solutions, and tracks progress on a leaderboard to motivate steady improvement.
            </p>

            <div className="cards" id="features">
              <div className="card">
                <h3>Daily problem</h3>
                <p>A unique problem is assigned to each student every day to ensure consistent practice.</p>
              </div>

              <div className="card">
                <h3>Automatic checking</h3>
                <p>Submissions are tested automatically against expected outputs to give immediate feedback.</p>
              </div>

              <div className="card">
                <h3>Explanations</h3>
                <p>Each problem includes a clear explanation and reference solution to help learning.</p>
              </div>
            </div>

            <section id="how">
              <h3>How it works</h3>
              <ol>
                <li>Each student receives a new problem every day.</li>
                <li>Solve and submit within the same day to earn points.</li>
                <li>The system verifies your solution and updates the leaderboard automatically.</li>
              </ol>
            </section>
          </section>

          <aside className="side" aria-labelledby="problem-heading">
            <div>
              <h4 className="problem-title" id="problem-heading">Today's problem</h4>
              <p className="problem-desc">
                Solve the assigned coding challenge within 24 hours to earn points and climb the leaderboard.
              </p>

              <div className="meta">
                <div className="pill">Time limit: 24 hours</div>
                <div className="pill">Points: 10</div>
                <div className="pill">Difficulty: Medium</div>
              </div>

              <button className="btn-full" onClick={handleGetStarted}>Start today's problem</button>
            </div>

            <div style={{marginTop: '14px', color: 'var(--muted)', fontSize: '0.9rem'}}>
              <strong className="muted">Goal:</strong> Encourage consistent, daily problem solving and measurable improvement.
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}