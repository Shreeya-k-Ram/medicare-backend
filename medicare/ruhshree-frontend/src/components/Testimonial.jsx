import ScrollReveal from "./ScrollReveal";

import "./Testimonial.css";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <ScrollReveal>
    <section className="testimonial-section">
      <div className="container">

        <Quote
          size={20}
          strokeWidth={2}
          className="quote-icon"
        />

        <h2 className="testimonial-text">
          “For the first time, my mother's health information
          isn’t scattered across three folders and two hospitals.
          It’s one story, in one place.”
        </h2>

        <p className="testimonial-author">
          Ruhi, RuhShree patient family
        </p>

      </div>
    </section>
    </ScrollReveal>
  );
}