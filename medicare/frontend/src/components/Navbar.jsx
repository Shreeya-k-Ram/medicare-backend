function Navbar() {
    return (
      <nav className="navbar">
        <div className="logo">
          <h2>RuhShree Health</h2>
        </div>
  
        <ul className="nav-links">
          <li><a href="#">For Patients</a></li>
          <li><a href="#">For Doctors</a></li>
          <li><a href="#">For Clinics</a></li>
          <li><a href="#">How it Works</a></li>
        </ul>
  
        <button className="demo-btn">Book a Demo</button>
      </nav>
    );
}
  
export default Navbar;