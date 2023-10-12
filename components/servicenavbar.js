import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../assets/css/servicenavbar.css'; // Import the Navbar component's CSS file

const ServiceNavbar = () => {
  return (
    <nav className="servicenavbar">
      <div className="servicenavbar-brand">
        <h4>DreamMaker</h4>
      </div>
      <ul className="servicenav-links">
        <li><Link to="/faq">faq's</Link></li>
        <li><Link to="/contactus">contactus</Link></li>
        <li><Link to="/aboutus">aboutus</Link></li>
        <li><Link to="/aboutus">Adventures</Link></li>
      
      </ul>
    </nav>
  );
};

export default ServiceNavbar;
