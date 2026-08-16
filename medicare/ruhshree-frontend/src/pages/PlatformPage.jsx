import React from "react";
import "./PlatformPage.css";

function PlatformPage() {
    return (
        <div className="platform-page">
            <section className="platform-hero">

                <p className="platform-label">
                    RUHSHREE HEALTH 😃
                </p>

                <h1>
                    Everything you need for
                    <span> better healthcare</span>
                </h1>

                <p className="platform-description">
                    A simple, connected healthcare platform designed
                    to bring patients, doctors and clinics together.
                </p>

            </section>
            <section className="platform-features">

                <div className="platform-card">

                    <div className="platform-card-icon">
                        ♡
                    </div>

                    <h2>
                        For Patients
                    </h2>

                    <p>
                        Manage your health profile, book appointments
                        and stay connected with your doctors.
                    </p>

                </div>


                <div className="platform-card">

                    <div className="platform-card-icon">
                        ✚
                    </div>

                    <h2>
                        For Doctors
                    </h2>

                    <p>
                        Manage appointments, review patient information
                        and provide better care from one place.
                    </p>

                </div>

                <div className="platform-card">

                    <div className="platform-card-icon">
                        ⌂
                    </div>

                    <h2>
                        For Clinics
                    </h2>

                    <p>
                        Organize your healthcare operations and create
                        a smoother experience for everyone.
                    </p>

                </div>

            </section>

            <section className="platform-cta">

                <div>

                    <p className="platform-cta-label">
                        HUMAN-FIRST CARE
                    </p>

                    <h2>
                        Healthcare that feels
                        <span> simpler.</span>
                    </h2>

                    <p>
                        Connect with the right people, at the right time,
                        without unnecessary complexity.
                    </p>

                </div>

                <a
                    href="/appointments/book"
                    className="platform-cta-button"
                >
                    Book an Appointment
                </a>

            </section>

        </div>
    );
}

export default PlatformPage;