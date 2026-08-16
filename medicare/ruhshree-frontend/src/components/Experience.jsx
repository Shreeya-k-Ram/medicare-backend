import ScrollReveal from "./ScrollReveal";
import CardsReveal from "./CardsReveal";

import "./Experience.css";
import {
  Heart,
  Stethoscope,
  Users,
  ArrowRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function Experience() {

  const navigate = useNavigate();
  
  return (
    <ScrollReveal>
      <section className="experience">

      <div className="features-section">

        <div className="feature-row">

          <div className="feature">
            <span className="dot"></span>

            <div>
              <h4>Compassionate</h4>
              <p>
                Care that starts with listening, not paperwork.
              </p>
            </div>
          </div>


          <div className="feature">
            <span className="dot"></span>

            <div>
              <h4>Reliable</h4>
              <p>
                Consistent workflows for patients, doctors, and clinics.
              </p>
            </div>
          </div>


          <div className="feature">
            <span className="dot"></span>

            <div>
              <h4>Innovative</h4>
              <p>
                Modern tools that stay quietly out of the way.
              </p>
            </div>
          </div>

        </div>

      </div>

      <div className="experiences-section">

        <div className="heading">

          <p>ONE PLATFORM, THREE EXPERIENCES</p>

          <h2>
            Built around the people who show up
            <br />
            for care.
          </h2>

        </div>

        <div className="cards">

          <CardsReveal delay={0}>

          <div className="card">

            <div className="icon">
              <Heart size={17} />
            </div>

            <h3>For patients</h3>

            <p>
              Book appointments, keep prescriptions and reports
              in one place, and see your whole health journey on a
              single timeline.
            </p>

            <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/patient");
                }}
            >
              Open patient view
              <ArrowRight size={14} />
            </a>

          </div>
          </CardsReveal>

          <CardsReveal delay={120}>

          <div className="card">

            <div className="icon">
              <Stethoscope size={17} />
            </div>

            <h3>For doctors</h3>

            <p>
              A calmer clinic day: today's schedule, patient history,
              consultation notes, and prescriptions in one flow.
            </p>

            <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/doctor");
                }}
            >
              Open doctor view
              <ArrowRight size={14} />
            </a>

          </div>
          </CardsReveal>

          <CardsReveal delay={240}>
          <div className="card">
        
            <div className="icon">
              <Users size={17} />
            </div>

            <h3>For clinics & admins</h3>

            <p>
              Verify doctors, monitor appointments, and understand
              how the platform is being used across specialties.
            </p>

            <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/admin");
                }}
            >
              Open admin view
              <ArrowRight size={14} />
            </a>

          </div>
          </CardsReveal>
          
        </div>

      </div>

      </section>
    </ScrollReveal>
  );
}
