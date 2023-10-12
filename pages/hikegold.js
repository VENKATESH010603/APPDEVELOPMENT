// src/GoldenPackage.js
import React from 'react';
import '../assets/css/mgold.css';
import { Link } from 'react-router-dom';
const cakesData = [
  {
    image: 'https://u7q2x7c9.stackpathcdn.com/photos/27/74/398899_29304_XXL.jpg',
     name:'',
  },
  {
    image: 'https://cdn.pixabay.com/photo/2015/05/20/16/10/boots-775743_1280.jpg',
    name:'',
   
  },
  {
    image: 'https://m.media-amazon.com/images/I/611rxOzxPuL.jpg',
    name:'',
  
  },
  {
    image: 'https://images.pexels.com/photos/5125690/pexels-photo-5125690.jpeg?cs=srgb&dl=pexels-roger-brown-5125690.jpg&fm=jpg',
    name:'',
   
  },
  {
    image: 'https://m.media-amazon.com/images/I/31KL6QIzR9L._AC_UF1000,1000_QL80_.jpg',
    name:'',
    
  },
  {
    image: 'https://www.firstascent.co.za/media/catalog/product/cache/709121ab81870ba343d8b1e732449c77/f/a/fa2842-darkwillow_1_1.jpg',
    name:'',
   
  },
];

function GoldenPackageMarriage() {
  return (
    <div className="golden-package">
      <h1 className="package-title">Golden Package for Hiking</h1>
      <img
        src="https://images.pexels.com/photos/532803/pexels-photo-532803.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Golden Package"
        className="golden-image"
      />
      <section className="package-description">
        <h2 className="section-title">Description</h2>
        <p className='zoro'>
        When you're planning a hiking trip, it's important to consider the essentials and any additional packages or services that can enhance your experience. Here are some packages and items to consider when preparing for a hiking adventure.
        </p>
      </section>

      <section className="package-includes">
        <h2 className="section-title">Golden Package Includes</h2>
        <ul className="includes-list">
          <li>Backpack: A comfortable and appropriately sized backpack to carry your gear.</li>
          <li>Footwear: High-quality hiking boots or shoes with good traction.</li>
          <li>Clothing: Weather-appropriate, moisture-wicking clothing, including layers for warmth and rain protection.</li>
          <li>Navigation: Maps, compass, and/or GPS device.</li>
          <li>Hydration: Water bottles or a hydration system.</li>
          <li>Food: Trail snacks and packed meals.</li>
          <li>First Aid Kit: Basic medical supplies for minor injuries.</li>     
        </ul>
        <h3 className='tamount'>Cost-Rs 50,000-2,00,000/-<span className='hhii'></span></h3> 
       <Link to="/weddingform"> < button className='hiking'>Purchase </button></Link>
        <p className='bitto'> </p>

<p className='kitto'><b>NOTE:</b>
CUSTOMER SAFETY IS MUST

</p>
       
      </section>
      <section className="cakes-section">
        <h2 className="section-title">OUR PAKEGES</h2>
        <div className="cakes-images">
          {cakesData.map((cake, index) => (
            <div className="cake-imagee" key={index}>
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

export default GoldenPackageMarriage;
