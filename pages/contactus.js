import React from 'react';
import '../assets/css/contactus.css';
import ContactusNavbar from '../components/contactusnavbar';

const ContactUs = () => {
  return (
    <div>
      <ContactusNavbar/>
      
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-content">
          <p className="contact-text">
            If you have any questions, inquiries, or need assistance, please feel free to contact us. Our team is here to help you.
          </p>

          <div className="contact-details">
            <div className="contact-info">
              <h2 className="contact-info-title">Contact Information</h2>
              <p>Email: DreamMaker@gmail.com</p>
              <p>Phone: 9025484672</p>
            </div>

            <div className="contact-form">
              <h2 className="contact-form-title">Send Us a Message</h2>
              <form className='contactUs'>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="submit-button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
