// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/footer.css'
const Footer = () => {
  const footerContent = (
    <div className="footer-content">
      <div className="footer-links">
        <ul className="links-list">
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <Link to="/termsandconditions">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/privacypolicy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="footer-social">
        <h3 >Follow Us On</h3>
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com//" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/atman_ricky/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <footer className="footer">
      {footerContent}
      <p className="copyright">© {new Date().getFullYear()} DreamMaker. All Rights Reserved.</p>
   
    </footer>
  );
};

export default Footer;
