import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../assets/css/aboutusnavbar.css'; // Import the Navbar component's CSS file

const AboutusNavbar = () => {
  return (
    <nav className="aboutusnavbar">
      <div className="aboutusnavbar-brand">
        <h4>DreamMaker</h4>
      </div>
      <ul className="aboutusnav-links">
        <li><Link to="/">login</Link></li>
        <li><Link to="/register">signup</Link></li>
        <li><Link to="/contactus">contactus</Link></li>
        <li><Link to="/services">services</Link></li>
      
      </ul>
    </nav>
  );
};

export default AboutusNavbar;
