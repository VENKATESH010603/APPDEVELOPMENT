// src/GoldenPackage.js
import React from 'react';
import '../assets/css/musicgold.css';
import { Link } from 'react-router-dom';

const cakesData = [
  {
    image: 'https://images.pexels.com/photos/2790150/pexels-photo-2790150.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'BIKE',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAN_uW6ytAxx014N9pQb2FqIAcwEs2-QOAug&usqp=CAU',
    name: ' HELMET',
   
  },
  {
    image: 'https://u7q2x7c9.stackpathcdn.com/photos/23/93/360874_26098_XL.jpg',
    name: 'GLOVES',
  },
 
];

function GoldenPackageMusic() {
  return (
    <div className="golden-package">
      <h1 className="package-title">Golden Package for mountain biking</h1>
      <img
        src="https://images.pexels.com/photos/93801/pexels-photo-93801.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Golden Package"
        className="golden-image"
      />
      <section className="package-description">
        <h2 className="section-title">Description</h2>
        <p className='zoro'>
        Mountain biking is an exhilarating outdoor activity that combines adventure, fitness, and a connection with nature. Enthusiasts of this sport navigate rugged terrains and mountainous landscapes on specialized bicycles designed to handle the rough conditions. Here are some key points about mountain biking
        <p > Just have a glimpse of our package below.</p>
        </p>
      </section>

      <section className="package-includes">
        <h2 className="section-title">Golden Package Includes</h2>
        <ul className="includes-list">
          <li>Mountain Bike</li>
          <li>Helmet </li>
          <li>Eye Protection</li>
          <li>Appropriate Clothing</li>
          <li>Footwear</li>
          <li>Bike Tools and Repair Kit</li>
          <li>Bike Lock</li>
     
        </ul>
        <h3 className='tamount'>Cost-Rs 1,00,000-1,50,000/- <span className='hhii'></span></h3> 
   
       <Link to="/musicform">< button className='giju'>Purchase </button></Link> 
        <p className='bitto'>  Mountain biking is an exciting outdoor activity that requires proper equipment and safety gear to ensure a safe and enjoyable experience. Here is a list of essential items and equipment needed for mountain biking.</p>

<p className='kitto'><b>NOTE:</b>CUSTOMER SAFETY IS MUST
</p>
       
      </section>
      <section className="cakes-section">
        <h2 className="section-title">Our <span className='mmi'> Packages</span></h2>
        <div className="cakes-images">
          {cakesData.map((cake, index) => (
            <div className="cake-imageg" key={index}>
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

export default GoldenPackageMusic;
