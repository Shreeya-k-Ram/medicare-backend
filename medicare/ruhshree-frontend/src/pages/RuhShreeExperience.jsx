import React, { useEffect, useState } from "react";
import {
    HeartPulse,
    UserRound,
    Stethoscope,
    ArrowRight,
    Sparkles
} from "lucide-react";

import "./RuhShreeExperience.css";

export default function RuhShreeExperience() {

    const [pulse, setPulse] = useState(false);

    useEffect(() => {

        const timer = setInterval(() => {
            setPulse(true);

            setTimeout(() => {
                setPulse(false);
            }, 650);

        }, 2200);

        return () => clearInterval(timer);

    }, []);

    return (

        <div className="ruh-experience">

            <div className="ruh-orb ruh-orb-one"></div>
            <div className="ruh-orb ruh-orb-two"></div>
            <div className="ruh-orb ruh-orb-three"></div>

            <div className="ruh-stars">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <main className="ruh-main">

                <div className="ruh-top-label">

                    <Sparkles size={13} />

                    <span>
                        THE RUHSHREE EXPERIENCE
                    </span>

                </div>

                <div className="ruh-hero">

                    <p className="ruh-eyebrow">
                        WHERE TECHNOLOGY MEETS CARE
                    </p>

                    <h1>
                        Healthcare,
                        <span> with a heartbeat.</span>
                    </h1>

                    <p className="ruh-intro">
                        One place where patients and doctors
                        come together through technology
                        designed around people.
                    </p>

                </div>

                <div className="ruh-network">

                    <div className="connection connection-left"></div>

                    <div className="connection connection-right"></div>

                    <div className="network-card patient-node">

                        <div className="node-icon">
                            <UserRound size={25} />
                        </div>

                        <div>
                            <span>FOR</span>
                            <h3>Patients</h3>
                        </div>

                    </div>

                    <div
                        className={`ruh-heart ${
                            pulse ? "heart-pulse" : ""
                        }`}
                    >

                        <div className="heart-aura"></div>

                        <div className="heart-ring ring-1"></div>
                        <div className="heart-ring ring-2"></div>
                        <div className="heart-ring ring-3"></div>

                        <div className="heart-core">

                            <HeartPulse
                                size={58}
                                strokeWidth={1.5}
                            />

                        </div>

                        <div className="heart-name">
                            RuhShree
                        </div>

                    </div>

                    <div className="network-card doctor-node">

                        <div className="node-icon">
                            <Stethoscope size={25} />
                        </div>

                        <div>
                            <span>FOR</span>
                            <h3>Doctors</h3>
                        </div>

                    </div>

                </div>

                <section className="ruh-message">

                    <div className="message-line"></div>

                    <p>
                        Listen
                    </p>

                    <span>•</span>

                    <p>
                        Connect
                    </p>

                    <span>•</span>

                    <p>
                        Care
                    </p>

                    <div className="message-line"></div>

                </section>

                <section className="ruh-statement">

                    <h2>
                        Because behind every
                        <br />
                        <strong>healthcare decision</strong>
                        <br />
                        is a human being.
                    </h2>

                </section>

                <div className="ruh-bottom">

                    <div className="ruh-bottom-line"></div>

                    <p>
                        Technology connects.
                        <strong> Humanity cares.</strong>
                    </p>

                    <div className="ruh-bottom-line"></div>

                </div>

                <a
                    href="/"
                    className="ruh-return"
                >

                    <span>
                        Return to RuhShree
                    </span>

                    <ArrowRight size={16} />

                </a>

            </main>

        </div>
    );
}