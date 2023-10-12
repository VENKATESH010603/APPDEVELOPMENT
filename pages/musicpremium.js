// src/GoldenPackage.js
import React from 'react';
import '../assets/css/musicpremium.css';
import { Link } from 'react-router-dom';
const cakesData = [
  {
    image: 'https://hips.hearstapps.com/hmg-prod/images/ride-mountain-bike-shorts-642ade5f2f26d.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*',
    name: ' bikes',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVrLQpGTxl8dfiyjyE7kkp-yB9iv_6fnqAAg&usqp=CAU',
    name: ' Helmet',
   
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZZkwz_jOGJVvuP-mAdwDfh0u10gXV6yZOqmdZpiCwQgACpmHlhG5JJId2ECeXikMfB0&usqp=CAU',
    name: 'glove',
  },
  
];

function PremiumPackageMusic() {
  return (
    <div className="golden-package">
      <h1 className="package-title">PREMIUM PACKAGES</h1>
      <img
        src="https://images.pexels.com/photos/11715051/pexels-photo-11715051.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Golden Package"
        className="golden-image"
      />
      <section className="package-description">
        <h2 className="section-title">Description</h2>
        <p className='zoro'>
        Mountain biking is an exhilarating outdoor activity that combines adventure, fitness, and a connection with nature. Enthusiasts of this sport navigate rugged terrains and mountainous landscapes on specialized bicycles designed to handle the rough conditions. Here are some key points about mountain biking
        </p>
        <p className='bbu'> Just have a glimpse of our package below.</p>
      </section>

      <section className="package-includes">
        <h2 className="section-title">Premium Package Includes(Added premium features are highlighted)</h2>
        <ul className="includes-list">
        <li>Mountain Bike</li>
          <li>Helmet </li>
          <li>Eye Protection</li>
          <li>Appropriate Clothing</li>
          <li>Footwear</li>
          <li>Bike Tools and Repair Kit</li>
          <li>Bike Lock</li>
         <span className='specially'>  <li>VIP Lounge Access</li>
         <li>Exclusive Bag</li>
         <li>Exclusive gear bikes</li>
        <li> Cool Drinks</li>
        <li>Premium Seating</li>
   
       </span>




        </ul>
        <h3 className='tamount'>Cost-Rs 2,50,000-4,00,000/- <span className='hhii'></span></h3> 
   
       <Link to="/musicform"> < button className='akkm'>Purchase </button></Link>
        <p className='bitto'>  </p>

<p className='kitto'><b>NOTE:</b>
CUSTOMER SAFETY WAS MUST
</p>
       
      </section>
      <section className="cakes-section">
        <h2 className="section-title">Our <span className='mmi'>Packages </span> </h2>
        <div className="cakes-images">
          {cakesData.map((cake, index) => (
            <div className="cake-imagea" key={index}>
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

export default PremiumPackageMusic;
