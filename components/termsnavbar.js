import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../assets/css/termsnavbar.css'; // Import the Navbar component's CSS file

const TermsNavbar = () => {
  return (
    <nav className="termsnavbar">
      <div className="termsnavbar-brand">
        <h4>DreamMaker</h4>
      </div>
      <ul className="termsnav-links">
        <li><Link to="/privacypolicy">policy</Link></li>
        <li><Link to="/faq">faq's</Link></li>
        <li><Link to="/termsandconditions">termsandconditions</Link></li>
        <li><Link to="/services">services</Link></li>
      
      </ul>
    </nav>
  );
};

export default TermsNavbar;
