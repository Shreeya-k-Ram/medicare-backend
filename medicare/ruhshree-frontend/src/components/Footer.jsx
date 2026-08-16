import ScrollReveal from "./ScrollReveal";

import "./Footer.css";
import { HeartPulse, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <ScrollReveal>
    <footer className="footer">

      <div className="footer-container">
        <div className="footer-top">

          <div className="footer-heading">

            <h2>
              Ready to bring care and technology
              into the same room?
            </h2>

            <p>
              Explore RuhShree from the patient, doctor and admin side —
              no signup needed.
            </p>

          </div>

          <div className="footer-buttons">

            <a
              href="/patient"
              className="footer-button footer-button-light"
            >
              Patient view
            </a>

            <a
              href="/doctor"
              className="footer-button footer-button-light"
            >
              Doctor view
            </a>

            <a
              href="/admin"
              className="footer-button footer-button-admin"
            >
              Admin view

              <ArrowRight />

            </a>

          </div>

        </div>

        <div className="footer-bottom">
          <a href="/ruhshree" className="footer-brand">

            <span className="footer-logo">
              <HeartPulse />
            </span>

            <span className="footer-brand-text">

              <span className="footer-title">
                RuhShree Health
              </span>

              <span className="footer-subtitle">
                Human-first care
              </span>

            </span>

          </a>

          <p className="footer-copyright">
            © 2026 RuhShree Health. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
    </ScrollReveal>
  );
}