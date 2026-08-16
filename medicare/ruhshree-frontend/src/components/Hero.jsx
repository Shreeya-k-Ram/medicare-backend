import ScrollReveal from "./ScrollReveal";

import "./Hero.css";
import {
  Sparkles,
  ArrowRight,
  CalendarClock,
  Activity,
} from "lucide-react";

import heroImage from "../assets/doctor.jpg";

export default function Hero() {
  return (
    <ScrollReveal>
    <section className="rh-hero">

      <div className="rh-hero-container">

        <div className="rh-hero-content">

          <span className="rh-hero-badge">
            <Sparkles />
            RuhShree Health
          </span>

          <h1 className="rh-hero-title">
            Because every life has a story,
            <br />
              and every story deserves better care.
          </h1>

          <p className="rh-hero-description">
            RuhShree Health is a digital healthcare platform designed to
            bring patients, doctors, and healthcare services together —
            while keeping human care at the center.
          </p>

          <div className="rh-hero-buttons">

            <a
              href="/appointments/book"
              className="rh-hero-primary-button"
            >
              Book an appointment
              <ArrowRight />
            </a>

            <a
              href="/platform"
              className="rh-hero-secondary-button"
            >
              Explore the platform
            </a>

          </div>

          <dl className="rh-hero-stats">

            <div className="rh-hero-stat">
              <dt>3</dt>
              <dd>Role-based experiences</dd>
            </div>

            <div className="rh-hero-stat">
              <dt>1</dt>
              <dd>Continuous health timeline</dd>
            </div>

            <div className="rh-hero-stat">
              <dt>0</dt>
              <dd>Guesswork on records</dd>
            </div>

          </dl>

        </div>

        <div className="rh-hero-image-container">

          <div className="rh-hero-image-wrapper">

            <img
              src={heroImage}
              alt="A doctor speaking with a patient in a calm clinic room"
            />

          </div>

          <div className="rh-hero-appointment-card">

            <div className="rh-hero-floating-heading">

              <span className="rh-hero-floating-icon">
                <CalendarClock />
              </span>

              <span className="rh-hero-floating-label">
                Next appointment
              </span>

            </div>

            <div className="rh-hero-floating-content">

              <p>Dr. Vivek Menon</p>

              <span>
                Fri, 24 Jul · 10:30 AM · In-clinic
              </span>

            </div>

          </div>

          <div className="rh-hero-timeline-card">

            <div className="rh-hero-floating-heading">

              <span className="rh-hero-floating-icon">
                <Activity />
              </span>

              <span className="rh-hero-floating-label">
                Health timeline
              </span>

            </div>

            <div className="rh-hero-timeline-list">

              <div>
                <span>Jul 2</span>
                <strong>Consultation</strong>
              </div>

              <div>
                <span>Jul 1</span>
                <strong>CBC report</strong>
              </div>

              <div>
                <span>Jun 20</span>
                <strong>Home vitals</strong>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
    </ScrollReveal>
  )
}