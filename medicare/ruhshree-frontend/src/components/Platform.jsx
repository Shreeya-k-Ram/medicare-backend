import ScrollReveal from "./ScrollReveal";

import "./Platform.css";
import {
  Activity,
  CalendarDays,
  FileText,
  Stethoscope,
  BarChart3,
} from "lucide-react";

const timeline = [
  {
    title: "Consultation",
    subtitle: "Dr. Vivek Menon · Allergy follow-up",
    date: "JUL 2, 2026",
  },
  {
    title: "Prescription",
    subtitle: "Cetirizine + Fluticasone",
    date: "JUL 2, 2026",
  },
  {
    title: "Report",
    subtitle: "Complete Blood Count — normal",
    date: "JUL 1, 2026",
  },
  {
    title: "Vitals",
    subtitle: "BP 118/76 · HR 72 · SpO₂ 98%",
    date: "JUN 20, 2026",
  },
  {
    title: "Consultation",
    subtitle: "Dr. Meera Iyer · Pulmonology review",
    date: "MAY 18, 2026",
  },
];

const features = [
  {
    icon: <CalendarDays size={14} />,
    title: "Appointments",
    text: "Specialty → doctor → slot → patient details → confirm.",
  },
  {
    icon: <FileText size={14} />,
    title: "Records & reports",
    text: "Prescriptions and lab reports attached to each visit.",
  },
  {
    icon: <Stethoscope size={14} />,
    title: "Consultation notes",
    text: "Structured SOAP notes with autosave for doctors.",
  },
  {
    icon: <BarChart3 size={14} />,
    title: "Clinic analytics",
    text: "Understand demand across specialties and weekdays.",
  },
];

export default function Platform() {
  return (
    <ScrollReveal>
    <section className="platform-section">
      <div className="container">

        <p className="platform-label">THE PLATFORM</p>

        <h2 className="platform-heading">
          Everything a patient visit needs —
          <br />
          nothing it doesn't.
        </h2>

        <div className="platform-wrapper">

          <div className="timeline-card">

            <Activity size={17} className="timeline-top-icon" />

            <h3>Patient Health Timeline</h3>

            <p className="timeline-desc">
              Consultations, diagnoses, prescriptions, reports and vitals —
              organised as one continuous story instead of scattered records.
            </p>

            <div className="timeline-list">

              {timeline.map((item, index) => (
                <div className="timeline-item" key={index}>

                  <div className="timeline-left">

                    <span className="green-dot"></span>

                    <div>

                      <h4>{item.title}</h4>

                      <p>{item.subtitle}</p>

                    </div>

                  </div>

                  <span className="timeline-date">
                    {item.date}
                  </span>

                </div>
              ))}

            </div>

          </div>

          <div className="feature-grid">

            {features.map((item, index) => (
              <div className="feature-card" key={index}>

                <div className="feature-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>{item.text}</p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
    </ScrollReveal>
  );
}