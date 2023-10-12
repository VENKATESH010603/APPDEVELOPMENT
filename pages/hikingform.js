import React, { useState } from 'react';
import '../assets/css/wedding.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function WeddingRegistrationForm() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email:'',
    place: '',
    time: '',
    date: '',
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     // Check if any of the required fields are empty
  if (
    formData.firstName.trim() === '' ||
    formData.lastName.trim() === '' ||
    formData.mobile.trim() === '' ||
    formData.place.trim() === '' ||
    formData.time.trim() === '' ||
    formData.date.trim() === '' 
   
  ) {
    alert('Please fill in all required fields.');
    return;
  }

  // Check the mobile number length
  if (formData.mobile.length !== 10) {
    alert('Mobile number must be exactly 10 digits.');
    return;
  }
  try {
    // Send the registration data to the backend
    const response =  axios.post('/api/v1/auth/postwedding', formData);

    if (response.status === 200) {
      alert('Registration successful!');
      navigate('/confirmation');
    } else {
      alert('Registration failed. Please try again.');
    }
  } catch (error) {
    console.error('Error registering:', error);
    alert('An error occurred while registering.');
  }
};

  return (
    <div>
     
    <div className="wedding-registration-form-container">
       
      <h2 className="popp"> Registration form</h2>
      <form onSubmit={handleSubmit}>
      <div className="wedding-form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="wedding-form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="wedding-form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="wedding-form-group">
  <label htmlFor="email">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
  />
</div>
        <div className="wedding-form-group">
        
        </div>
        <div className="wedding-form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="wedding-form-group">
            <label htmlFor="packageSelected">Package Selected:</label>
            <select
              id="packageSelected"
              name="packageSelected"
              value={formData.packageSelected}
              onChange={handleChange}
              className="custom-select"
            >
              <option value="Golden Package">Golden Package</option>
              <option value="Premium Package">Premium Package</option>
            </select>
          </div>
        <div className="wedding-form-group">
          <label htmlFor="date"> Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="wedding-form-group">
 
</div>
        <button className='booked' >Book</button>
      </form>
    </div>
    </div>
  );
}

export default WeddingRegistrationForm;