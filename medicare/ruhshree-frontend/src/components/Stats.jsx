import ScrollReveal from "./ScrollReveal";
import "./Stats.css";

export default function Stats() {
  const stats = [
    {
      number: "25K+",
      title: "Patients Served",
      text: "Trusted by thousands of patients across India."
    },
    {
      number: "500+",
      title: "Verified Doctors",
      text: "Experienced specialists across multiple fields."
    },
    {
      number: "120+",
      title: "Partner Clinics",
      text: "Quality healthcare partners in many cities."
    },
    {
      number: "98%",
      title: "Patient Satisfaction",
      text: "Rated highly for care, service and experience."
    }
  ];

  return (
    <ScrollReveal>
    <section className="stats">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.number}</h2>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
    </ScrollReveal>
  );
}