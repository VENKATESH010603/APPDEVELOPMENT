// src/GoldenPackage.js
import React from 'react';
import '../assets/css/bgold.css';
import { Link } from 'react-router-dom';
const cakesData = [
  {
    image: 'https://www.skydivemag.com/new/wp-content/uploads/2022/01/Chuting-Star_Helmets-FI.jpg',
    name  : 'helmet'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/CH.VD.Bex_2007-09-02_Airshow_396_16x9-R_5120x2880_%28cropped%29.jpg/1200px-CH.VD.Bex_2007-09-02_Airshow_396_16x9-R_5120x2880_%28cropped%29.jpg',
    name : 'parachute'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_NCD0ICgXE1B29Il50vIag9LpaKMnq3GDg&usqp=CAU',
    name: 'dress'
  },
  
  
];

function GoldenPackageBirthday() {
  return (
    <div className="golden-package">
      <h1 className="package-title">GOLDEN PACKAGES FOR SKIDIVING</h1>
      <img
        src="https://images.pexels.com/photos/70361/california-parachutists-skydivers-flares-70361.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Golden Package"
        className="golden-image"
      />
      <section className="package-description">
        <h2 className="section-title">Description</h2>
        <p className='zoro'>
        Skydiving is an exhilarating and adrenaline-pumping adventure sport that involves jumping out of an aircraft from high altitudes and free-falling before deploying a parachute to slow down and safely land on the ground. It's a thrilling experience that attracts adventure enthusiasts from around the world. Here are some key aspects of skydiving.
        </p>
      </section>

      <section className="package-includes">
        <h2 className="section-title">Golden Package Includes</h2>
        <ul className="includes-list">
        
            <li> Appropriate Clothing</li>
            <li>Footwear</li>
            <li>Helmet</li>
            <li>Altimeter</li>
            <li>Parachute System</li>
            <li>Emergency Activation Device</li>
            <li>Safety Briefing</li>
            <li>Medical Clearance</li>
            <li>Minors' Consent (if applicable)</li>
         
        
        </ul>
        <h3 className='tamount'>Total Amount –  1,50,000 </h3> 
       <Link to="/birthdayform">< button className='purchasee'>Purchase ₹1,50,000</button></Link> 
        <p className='bitto'> </p>
        <p className='kitto'><b>NOTE:</b>
CUSTOMER SAFETY IS MUST

</p>
       
      </section>
      <section className="cakes-section">
        <h2 className="section-title"></h2>
        <div className="cakes-images">
          {cakesData.map((cake, index) => (
            <div className="cake-imagej" key={index}>
              <img
                src={cake.image}
                alt={cake.name}
                className="cake-img"
                // Add a class for specific styling and hover effect
              />
              <div className="cake-text">{cake.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default GoldenPackageBirthday;
