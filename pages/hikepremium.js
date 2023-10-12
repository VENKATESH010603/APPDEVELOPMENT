// src/GoldenPackage.js
import React from 'react';
import '../assets/css/mpremium.css';
import { Link } from 'react-router-dom';

const cakesData = [
  {
    image: 'https://www.trekking-mont-blanc.com/wp-content/uploads/2020/09/couverture-1080x675-1.jpg',
     name:'',
  },
  {
    image: 'https://u7q2x7c9.stackpathcdn.com/photos/26/6/382128_20894_XL.jpg',
    name:'',
   
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmERDRo2Ou0lPO5FCwVFjUsRyjTxSjGGxz1Q&usqp=CAU',
   
    name:'',
  
  },
  {
    image: 'https://m.media-amazon.com/images/I/71PQlcihbiL._AC_UF894,1000_QL80_.jpg',
    name:'',
   
  },
  {
    image: 'https://travelfashiongirlpostphotos.s3.us-east-2.amazonaws.com/2022/Best+Hiking+Hats+for+Women/best-hiking-hat-womens-3.jpg',
    name:'',
    
  },
  {
    image: 'https://www.rei.com/assets/category-hub/camping-and-hiking/about-category/camp-hike-seo/live.jpg',
    name:'',
   
  },
];

function PremiumPackageMarriage() {
  return (
    <div className="golden-package">
      <h1 className="package-title">PREMIUM PACKAGES FOR HIKING</h1>
      <img
        src="https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        <h2 className="section-title">Premium Package Includes(Added premium features are highlighted)</h2>
        <ul className="includes-list">
        <li>Backpack: A comfortable and appropriately sized backpack to carry your gear.</li>
          <li>Footwear: High-quality hiking boots or shoes with good traction.</li>
          <li>Clothing: Weather-appropriate, moisture-wicking clothing, including layers for warmth and rain protection.</li>
          <li>Navigation: Maps, compass, and/or GPS device.</li>
          <li>Hydration: Water bottles or a hydration system.</li>
          <li>Food: Trail snacks and packed meals.</li>
          <li>First Aid Kit: Basic medical supplies for minor injuries.</li>     
          <span className='vip'>
          <li>Safety Gear: Whistle, flashlight, multi-tool or knife, and fire-starting equipment.</li>
          <li>Sun Protection: Sunscreen, sunglasses, and a hat.</li>
          <li>Backpacking Stove and Cookware: If you plan to cook on the trail.</li>
          <li>Permits and Maps: Ensure you have any required permits and trail maps.</li>
          <li>Trekking or First Aid Poles: Optional for first aid or added support.</li>
          </span>
        </ul>
        <h3 className='tamount'>Cost-Rs 3,00,000-4,99,999/-<span className='hhii'></span></h3> 
      <Link to="/weddingform"> < button className='ttut'>Purchase </button></Link> 
        <p className='bitto'>  </p>

<p className='kitto'><b>NOTE:</b>
CUSTOMER SAFETY IS MUST
</p>
       
      </section>
      <section className="cakes-section">
        <h2 className="section-title">OUR PREMIUM PACKAGES </h2>
        <div className="cakes-images">
          {cakesData.map((cake, index) => (
            <div className="cake-imaged" key={index}>
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

export default PremiumPackageMarriage;
