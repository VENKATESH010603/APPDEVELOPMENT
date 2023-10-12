import React from 'react';
import '../assets/css/birthdaydecoration.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link
const BirthdayDecorationPage = () => {
  return (
    <div className="decoration-page">
       
      <h1> SKIDIVING PACKAGES</h1>
      <h3>We provide u <span className='himik'>!</span></h3>

      <div className="decoration-package">
        <img
          className='gold-image'
          src="https://images.pexels.com/photos/13295019/pexels-photo-13295019.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Gold Package"
        />
        <h2>Gold Package</h2>

       <Link to="/goldenpackage/birthday"> <button className="view-details-button gold-button">View Details</button></Link>
      </div>

      <div className="decoration-package">
        <img
          className='premium-image'
          src="https://images.pexels.com/photos/4135041/pexels-photo-4135041.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Premium Package"
        />
        <h2>Premium Package</h2>
       <Link to="/premiumpackage/birthday"> <button className="view-details-button premium-button">View Details</button></Link>
      </div>
    </div>
  );
};

export default BirthdayDecorationPage;
