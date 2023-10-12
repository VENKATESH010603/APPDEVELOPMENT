import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../assets/css/contactusnavbar.css'; // Import the Navbar component's CSS file

const ContactusNavbar = () => {
  return (
    <nav className="contactusnavbar">
      <div className="contactusnavbar-brand">
        <h4>DreamMaker</h4>
      </div>
      <ul className="contactusnav-links">
        <li><Link to="/aboutus">aboutus</Link></li>
        <li><Link to="/privacypolicy">privacypolicy</Link></li>
        <li><Link to="/faq">FAQ'S</Link></li>
        <li><Link to="/services">services</Link></li>
      
      </ul>
    </nav>
  );
};

export default ContactusNavbar;
