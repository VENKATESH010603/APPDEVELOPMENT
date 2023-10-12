import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../assets/css/loginnavbar.css'; // Import the Navbar component's CSS file

const LoginNavbar = () => {
  return (
    <nav className="loginnavbar">
      <div className="loginnavbar-brand">
        <h4>DreamMaker</h4>
      </div>
      <ul className="loginnav-links">
        <li><Link to="/">login</Link></li>
        <li><Link to="/register">signup</Link></li>
        <li><Link to="/aboutus">aboutus</Link></li>
        <li><Link to="/services">services</Link></li>
      
      </ul>
    </nav>
  );
};

export default LoginNavbar;
