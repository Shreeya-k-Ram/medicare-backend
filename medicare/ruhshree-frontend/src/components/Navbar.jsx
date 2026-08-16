import "./Navbar.css";

import {
  HeartPulse,
  ArrowRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-container">

        <div
            className="navbar-brand"
            onClick={() => navigate("/ruhshree")}
        >
    <span className="navbar-logo">
        <HeartPulse />
    </span>

          <span className="navbar-brand-text">

        <span className="navbar-title">
            RuhShree Health
        </span>

        <span className="navbar-subtitle">
            Human-first care
        </span>

    </span>
        </div>

        <nav className="navbar-links">

          <a href="/patient">
            For patients
          </a>

          <a href="/doctor">
            For doctors
          </a>

          <a href="/clinic">
            For clinics
          </a>

          <a href="#how">
            How it works
          </a>

        </nav>

        <div className="navbar-actions">

          <a
            href="/login"
            className="signin"
          >
            Sign in
          </a>

          <a
            href="/appointments/book"
            className="demo-button"
          >
            Book a demo
            <ArrowRight />

          </a>

        </div>

      </div>
    </header>
  );
}