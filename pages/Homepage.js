import React, { useState, useEffect } from 'react';
import{Link }from 'react-router-dom'
import image1 from '../assets/images/home.jpg';
import party from '../party.json';
import Lottie from 'lottie-react';
import image3 from '../assets/images/home5.jpg';
import image4 from "../assets/images/home4.jpg";
import "../assets/css/homepage.css";
import gif from '../assets/images/balloons.gif';
import wedd from '../assets/images/Hiking1.jpeg';
import music from "../assets/images/biking.jpeg";
import day from "../assets/images/skidiving.jpeg";
import HomeNavbar from '../components/homenavbar';


function HomePage() {
  const imageUrls = [
    image1,
    image3,
    image4,
    
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => {
      clearInterval(imageChangeInterval);
    };
  }, []);


  return (
    <div>
      <HomeNavbar/>
      <div className="sliding-image-container">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className={`slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="image-text">
              {/* Customize your text here */}
              <h2 className='poppins'>We celebrate <span className='span-text'>your moments</span></h2>
            </div>
          </div>
        ))}
      </div>

      <div className='welcomenote'>
        <div className='half'>
          <div className='half-content'>
            {/* Left Half Content */}
          </div>
        </div>
        <div className='half'>
          {/* Right Half Content */}
          <p className='stylefont'>
            <img src={gif} style={{ marginBottom: '-120px', width:'90px'}} />
            <Lottie
              animationData={party}
              style={{ width: '500px', height: '150px' }}
            />
            <p className='stylefont'>Outdoor adventure is a journey into the heart of nature, a pursuit of the unknown, and a celebration of the wild. It's a chance to break free from the confines of our everyday lives, to escape the ordinary, and to connect with the extraordinary. In the great outdoors, we find ourselves immersed in a world where the possibilities are as boundless as the horizon. Whether it's hiking through towering forests, climbing majestic mountains, kayaking on serene lakes, or simply camping beneath a star-studded sky, outdoor adventures awaken our spirits, challenge our limits, and reveal the inherent beauty and resilience of the natural world.that the world beyond our screens is a place of wonder and infinite exploration.</p>
          </p>
        </div>
      </div>
      <hr className='black-line' />
      <div className='event1'>

      </div>
      <div className='event2'>
        <figure>
          <img width="100%" src={wedd} alt="Event 2" />
        </figure>
        <div>
          <h2 className='x'>HIKING</h2>
          <p className='f1'>
          Hiking is a wonderful outdoor activity that involves walking through natural landscapes, typically on trails or paths. It's a great way to connect with nature, stay physically active, and experience the beauty of the outdoors. Hikers often explore a variety of terrains, from lush forests and rugged mountains to serene lakesides and coastal cliffs. Hiking can range from leisurely strolls to challenging treks, making it accessible to people of all fitness levels. 
          </p>
          <Link to="/weddingdecoration" className='weddingbutton'><button>Book</button></Link>
        </div>
      </div>
      <div className='event3'>
        <div className='moveleft'>
          <h2 className='y'>MOUNTAIN BIKING</h2>
          <p className='f2'>
          Mountain biking is an exhilarating outdoor activity that combines adventure, fitness, and a connection with nature.s various muscle groups. It improves endurance, strength, balance, and coordination. Riders often find themselves in better shape and with enhanced stamina.
          </p>
          <Link to="/musicdecoration" className='musicbutton'><button>Book</button></Link>
        </div>
        <figure>
          <img width="100%" src={music} alt="Event 3" />
        </figure>
      </div>
      <div className='event4'>
        <figure>
          <img width="100%" src={day} alt="Event 4" />
        </figure>
        <div>
          <h2 className='z'>SKYDIVING</h2>
          <p className='f3'>
          Skydiving is an exhilarating and adrenaline-pumping adventure sport that involves jumping out of an aircraft from high altitudes and free-falling before deploying a parachute to slow down and safely land on the ground. It's a thrilling experience that attracts adventure enthusiasts from around the world. Here are some key aspects of skydiving.
          </p>
          <Link to="/birthdaydecoration" className='birthdaybutton'><button>Book</button></Link>
        </div>
      </div>
      <h2 className='poppinns'>Our Destination places<span className='exclamatory'>!</span></h2>
      <div className='destination'>
      </div>
      <h2 className='poppinns'>Our partners</h2>
      <div className='partners'>
     
      </div>
    </div>
  );
}

export default HomePage;
