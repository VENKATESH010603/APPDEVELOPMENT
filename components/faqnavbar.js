import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../assets/css/faqnavbar.css'; // Import the Navbar component's CSS file

const FaqNavbar = () => {
  return (
    <nav className="faqnavbar">
      <div className="faqnavbar-brand">
        <h4>DreamMaker</h4>
      </div>
      <ul className="faqnav-links">
        <li><Link to="/contactus">contactus</Link></li>
        <li><Link to="/privacypolicy">privacypolicy</Link></li>
        <li><Link to="/termsandconditions">termsandconditions</Link></li>
        <li><Link to="/services">services</Link></li>
      
      </ul>
    </nav>
  );
};

export default FaqNavbar;
