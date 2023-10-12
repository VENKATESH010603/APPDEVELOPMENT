import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../assets/css/homenavbar.css'; // Import the Navbar component's CSS file

const HomeNavbar = () => {
  return (
    <nav className="homenavbar">
      <div className="homenavbar-brand">
     <h4>DreamMaker</h4>
      </div>
      <ul className="homenav-links">
        <li><Link to="/homepage">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/services">Adventures</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/faq">FAQ's</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/dashboard">dashboard</Link></li>
       
      </ul>
    </nav>
  );
};

export default HomeNavbar;
