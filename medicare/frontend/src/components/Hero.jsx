import heroImg from "../images/doctor.jpg";

function Hero() {
  return (
    <section className="hero">
        <div className="hero-left">
          <span className="tag">✨ RuhShree Health</span>
  
          <h1>
            Because every life has a story,<br />
            and every story deserves better care.
          </h1>
  
          <p>
            RuhShree Health is a digital healthcare platform designed to bring
            patients, doctors and healthcare services together.
          </p>
  
          <div className="hero-buttons">
            <button className="primary-btn">Book an Appointment</button>
  
            <button className="secondary-btn">Explore Platform</button>
          </div>
        </div>
  
        <div className="hero-right">
          <img src={heroImg} alt="Doctor" />
        </div>
      </section>
  );
}

export default Hero;