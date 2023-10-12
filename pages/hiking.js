
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../assets/css/weddingdecoration.css';
const WeddingDecorationPage = () => {
  return (
    <div className="decoration-page">
      <h1>Hiking Packages</h1>
      <h3>We provide u <span className='himik'>!</span></h3>

      <div className="decoration-package">
        <img
          className='gold-image'
          src="https://images.pexels.com/photos/532803/pexels-photo-532803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Gold Package"
        />
        <h2>Gold Package</h2>
        <Link to="/goldenpackage/marriage"> {/* Use Link to navigate */}
          <button className="view-details-button gold-button">View Details</button>
        </Link>
      </div>

      <div className="decoration-package">
        <img
          className='premium-image'
          src="https://images.pexels.com/photos/1076109/pexels-photo-1076109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Premium Package"
        />
        <h2>Premium Package</h2>
        <Link to="/premiumpackage/marriage"> {/* Use Link to navigate */}
          <button className="view-details-button premium-button">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default WeddingDecorationPage;
