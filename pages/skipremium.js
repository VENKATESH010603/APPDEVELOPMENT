// src/GoldenPackage.js
import React from 'react';
import '../assets/css/bpremium.css';
import { Link } from 'react-router-dom';
const cakesData = [
  {
    image: 'https://m.media-amazon.com/images/I/31OB-kVE-9L.jpg',
    name: 'helmet',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5yy8Tx9T23w22TXHuWiGUTJVPY3MOvtz64g&usqp=CAU',
    name: 'parachute',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUT94RWy1JmtIXmSgAVQ4-vH2UoEIDJIpdg&usqp=CAU',
    name: 'dress',
  },
  
];

function PremiumPackageBirthday() {
  return (
    <div className="golden-package">
      <h1 className="package-title">PREMIUM PACKAGES FOR SKIDIVING</h1>
      <img
        src="https://cdn.britannica.com/82/4182-004-86C2E4AB/freefall-hookup.jpg"
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
        <h2 className="section-title">Premium Package Includes(Added premium features are highlighted)</h2>
        <ul className="includes-list">
         
          <ul className="games-list">
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
      
        </ul>
        <h3 className='tamount'>Total Amount – JUST RS.500000 </h3> 
        <Link to="/birthdayform">< button className='purch'>Purchase </button></Link>
        <p className='bitto'>  Skydiving is an exhilarating and adrenaline-pumping adventure sport that involves jumping out of an aircraft from high altitudes and free-falling before deploying a parachute to slow down and safely land on the ground. It's a thrilling experience that attracts adventure enthusiasts from around the world. Here are some key aspects of skydiving.</p>
        <p className='kitto'><b>NOTE:</b>
CUSTOMER SAFETY IS MUST

</p>
       
      </section>
      <section className="cakes-section">
        <h2 className="section-title"> PREMIUM PACKAGES</h2>
        
        <div className="cakes-images">
          {cakesData.map((cake, index) => (
            <div className="cake-imaget" key={index}>
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

export default PremiumPackageBirthday;
