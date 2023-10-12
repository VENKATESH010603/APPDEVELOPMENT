import React from 'react';
import '../assets/css/musicdecoration.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link
const MusicDecorationPage = () => {
  return (
    <div className="decoration-page">
       
      <h1> MOUNTAIN BIKING</h1>
      <h3>We provide u <span className='himik'>!</span></h3>

      <div className="decoration-package">
        <img
          className='gold-image'
          src="https://images.pexels.com/photos/8927275/pexels-photo-8927275.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Gold Package"
        />
        <h2>Gold Package</h2>
        <Link to="/goldenpackage/music">
        <button className="view-details-button gold-button">View Details</button>
        </Link>
      </div>

      <div className="decoration-package">
        <img
          className='premium-image'
          src="https://images.pexels.com/photos/8927285/pexels-photo-8927285.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Premium Package"
        />
        <h2>Premium Package</h2>
        <Link to="/premiumpackage/music">
        <button className="view-details-button premium-button">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default MusicDecorationPage;
