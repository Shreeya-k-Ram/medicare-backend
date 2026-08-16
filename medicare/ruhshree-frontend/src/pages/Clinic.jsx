import React from "react";
import "./Clinic.css";

function Clinic() {
    return (
        <div className="clinic-page">

            {/* Hero */}
            <section className="clinic-hero">

                <div className="clinic-hero-content">

                    <p className="clinic-label">
                        FOR CLINICS
                    </p>

                    <h1>
                        Better care starts with
                        <span> a better connected clinic.</span>
                    </h1>

                    <p className="clinic-hero-text">
                        RuhShree Health brings patients, doctors, and
                        appointments together in one simple healthcare
                        experience.
                    </p>

                    <a
                        href="/appointments/book"
                        className="clinic-cta"
                    >
                        Book a demo →
                    </a>

                </div>

            </section>


            {/* What RuhShree provides */}
            <section className="clinic-section">

                <div className="clinic-heading">

                    <p className="clinic-label">
                        ONE CONNECTED PLATFORM
                    </p>

                    <h2>
                        Everything your clinic needs
                    </h2>

                    <p>
                        Simplify everyday healthcare operations while
                        keeping the experience human for everyone.
                    </p>

                </div>


                <div className="clinic-features">

                    <div className="clinic-card">
                        <div className="clinic-icon">♡</div>

                        <h3>
                            Patient Management
                        </h3>

                        <p>
                            Keep patient information organized and
                            accessible when your care team needs it.
                        </p>
                    </div>


                    <div className="clinic-card">
                        <div className="clinic-icon">+</div>

                        <h3>
                            Doctor Management
                        </h3>

                        <p>
                            Manage doctors and keep the right people
                            connected to the right patients.
                        </p>
                    </div>


                    <div className="clinic-card">
                        <div className="clinic-icon">◷</div>

                        <h3>
                            Appointment Management
                        </h3>

                        <p>
                            Make booking, approval, cancellation and
                            appointment tracking simple.
                        </p>
                    </div>


                    <div className="clinic-card">
                        <div className="clinic-icon">✓</div>

                        <h3>
                            Secure Access
                        </h3>

                        <p>
                            Protect your healthcare platform with
                            secure authentication and role-based access.
                        </p>
                    </div>

                </div>

            </section>


            {/* How it works */}
            <section className="clinic-workflow">

                <div className="clinic-heading">

                    <p className="clinic-label">
                        HOW IT WORKS
                    </p>

                    <h2>
                        A simpler healthcare workflow
                    </h2>

                </div>


                <div className="clinic-steps">

                    <div className="clinic-step">
                        <span>01</span>

                        <h3>
                            Patient books
                        </h3>

                        <p>
                            Patients choose an appointment and
                            provide the required information.
                        </p>
                    </div>


                    <div className="clinic-step">
                        <span>02</span>

                        <h3>
                            Doctor receives
                        </h3>

                        <p>
                            The appointment becomes available in
                            the doctor's dashboard.
                        </p>
                    </div>


                    <div className="clinic-step">
                        <span>03</span>

                        <h3>
                            Doctor responds
                        </h3>

                        <p>
                            The doctor can approve or cancel the
                            appointment.
                        </p>
                    </div>


                    <div className="clinic-step">
                        <span>04</span>

                        <h3>
                            Patient stays informed
                        </h3>

                        <p>
                            Patients can see their appointment
                            information and status.
                        </p>
                    </div>

                </div>

            </section>


            {/* Why RuhShree */}
            <section className="clinic-why">

                <div className="clinic-why-content">

                    <p className="clinic-label">
                        WHY RUHSHREE
                    </p>

                    <h2>
                        Technology that keeps
                        <span> care human.</span>
                    </h2>

                    <p>
                        RuhShree is designed around the people behind
                        healthcare. Instead of making healthcare more
                        complicated, we focus on making the experience
                        simple, connected and accessible.
                    </p>

                </div>


                <div className="clinic-points">

                    <div>
                        <strong>
                            Simple
                        </strong>

                        <p>
                            Easy-to-understand workflows for patients,
                            doctors and clinics.
                        </p>
                    </div>


                    <div>
                        <strong>
                            Connected
                        </strong>

                        <p>
                            Patients, doctors and appointments work
                            together through one platform.
                        </p>
                    </div>


                    <div>
                        <strong>
                            Secure
                        </strong>

                        <p>
                            Authentication and protected access help
                            keep healthcare information safe.
                        </p>
                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="clinic-final">

                <p className="clinic-label">
                    RUHSHREE HEALTH
                </p>

                <h2>
                    Ready to build a better
                    healthcare experience?
                </h2>

                <p>
                    See how RuhShree can bring your clinic,
                    doctors and patients together.
                </p>

                <a
                    href="/appointments/book"
                    className="clinic-cta clinic-cta-light"
                >
                    Book a demo →
                </a>

            </section>

        </div>
    );
}

export default Clinic;