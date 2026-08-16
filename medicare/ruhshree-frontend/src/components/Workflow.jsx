import ScrollReveal from "./ScrollReveal";
import "./Workflow.css";

import {
  Users,
  CalendarClock,
  Stethoscope,
  ClipboardList,
  Activity,
} from "lucide-react";

import CardsReveal from "./CardsReveal";

export default function Workflow() {
  const steps = [
    {
      icon: Users,
      title: "Patient",
      description: "Signs up and completes their health record.",
    },
    {
      icon: CalendarClock,
      title: "Books appointment",
      description:
        "Picks a specialty, doctor, slot, then patient details.",
    },
    {
      icon: Stethoscope,
      title: "Doctor consultation",
      description: "In-clinic or video, with structured notes.",
    },
    {
      icon: ClipboardList,
      title: "Prescription & records",
      description:
        "Digital prescription and reports attached to the visit.",
    },
    {
      icon: Activity,
      title: "Health journey timeline",
      description:
        "Every visit becomes part of a single timeline.",
    },
  ];

  return (
    <ScrollReveal>
    <section id="how" className="workflow">

      <div className="workflow-container">

        <div className="workflow-heading">

          <p>How RuhShree works</p>

          <h2>
            A calm workflow from the first search to a lifelong record.
          </h2>

        </div>

        <ol className="workflow-steps">

          <span className="workflow-line"></span>


          {steps.map((step, index) => {

            const Icon = step.icon;

            return (
              <CardsReveal
              key={step.title}
              delay={index * 120}>
              
              <li className="workflow-card" key={step.title}>

                <div className="workflow-card-top">

                  <span className="workflow-icon">
                    <Icon />
                  </span>

                  <span className="workflow-step-number">
                    Step {index + 1}
                  </span>

                </div>


                <p className="workflow-card-title">
                  {step.title}
                </p>

                <p className="workflow-card-description">
                  {step.description}
                </p>

              </li>
              </CardsReveal>
            );
          })}

        </ol>

      </div>

    </section>
    </ScrollReveal>
  );
}





























/*import "./Workflow.css";
import {
  UserRound,
  CalendarDays,
  Stethoscope,
  ClipboardList,
  Activity
} from "lucide-react";

const steps = [
  {
    icon: <UserRound size={18} />,
    step: "STEP 1",
    title: "Patient",
    desc: "Signs up and completes their health record."
  },
  {
    icon: <CalendarDays size={18} />,
    step: "STEP 2",
    title: "Books appointment",
    desc: "Picks a specialty, doctor, slot, then patient details."
  },
  {
    icon: <Stethoscope size={18} />,
    step: "STEP 3",
    title: "Doctor consultation",
    desc: "In-clinic or video, with structured notes."
  },
  {
    icon: <ClipboardList size={18} />,
    step: "STEP 4",
    title: "Prescription & records",
    desc: "Digital prescription and reports attached."
  },
  {
    icon: <Activity size={18} />,
    step: "STEP 5",
    title: "Health journey timeline",
    desc: "Every visit becomes part of one timeline."
  }
];

export default function Workflow() {
  return (
    <section className="workflow">

      <span className="section-tag">
        HOW RUHSHREE WORKS
      </span>

      <h2>
        A calm workflow from the first search to
        <br />
        a lifelong record.
      </h2>

      <div className="workflow-grid">

        {steps.map((item, index) => (
          <div className="workflow-card" key={index}>

            <div className="workflow-icon">
              {item.icon}
            </div>

            <span>{item.step}</span>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}*/