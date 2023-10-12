import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../assets/css/registernavbar.css'; // Import the Navbar component's CSS file

const RegisterNavbar = () => {
  return (
    <nav className="registernavbar">
      <div className="registernavbar-brand">
        <h4>DreamMaker</h4>
      </div>
      <ul className="registernav-links">
        <li><Link to="/">login</Link></li>
        <li><Link to="/register">signup</Link></li>
        <li><Link to="/aboutus">aboutus</Link></li>
        <li><Link to="/services">services</Link></li>
      
      </ul>
    </nav>
  );
};

export default RegisterNavbar;
