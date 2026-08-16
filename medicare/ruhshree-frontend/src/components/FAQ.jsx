import ScrollReveal from "./ScrollReveal";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "./FAQ.css";

const faqs = [
  {
    question: "Is RuhShree Health a hospital or a healthcare platform?",
    answer:
      "RuhShree Health is a digital healthcare platform that connects patients, doctors, and clinics in one seamless ecosystem. It is not a hospital."
  },
  {
    question: "Can I book appointments online?",
    answer:
      "Yes. You can search doctors, choose a convenient time slot, and confirm your appointment online within minutes."
  },
  {
    question: "Are my medical records secure?",
    answer:
      "Yes. Your health records are encrypted and can only be accessed by you and healthcare professionals you authorize."
  },
  {
    question: "Do clinics get their own dashboard?",
    answer:
      "Yes. Clinics have a dedicated dashboard to manage appointments, doctors, analytics, and daily operations."
  }
];

export default function FAQ() {

  const [active, setActive] = useState(0);

  return (
    <ScrollReveal>
    <section className="faq-section">

      <div className="container">

        <p className="faq-label">
          SUPPORT
        </p>

        <h2 className="faq-heading">
          Frequently asked
        </h2>

        <div className="faq-wrapper">

          {faqs.map((item, index) => (

            <div
              key={index}
              className="faq-item"
            >

              <button
                className="faq-question"
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
              >

                <span>{item.question}</span>

                {active === index ? (
                  <Minus size={18}/>
                ) : (
                  <Plus size={18}/>
                )}

              </button>

              <div
                className={
                  active === index
                    ? "faq-answer active"
                    : "faq-answer"
                }
              >
                <p>{item.answer}</p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
    </ScrollReveal>
  );
}