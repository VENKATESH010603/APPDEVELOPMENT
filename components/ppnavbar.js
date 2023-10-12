import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../assets/css/ppnavbar.css'; // Import the Navbar component's CSS file

const PPNavbar = () => {
  return (
    <nav className="ppnavbar">
      <div className="ppnavbar-brand">
        <h4>DreamMaker</h4>
      </div>
      <ul className="ppnav-links">
        <li><Link to="/faq">faq's</Link></li>
        <li><Link to="/contactus">contactus</Link></li>
        <li><Link to="/aboutus">aboutus</Link></li>
        <li><Link to="/services">Adventures</Link></li>
      
      </ul>
    </nav>
  );
};

export default PPNavbar;
