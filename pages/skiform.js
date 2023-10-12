// BirthdayForm.js
import React, { Component } from 'react';
import "../assets/css/birthdayform.css";

class BirthdayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      dateOfBirth: '',
      email: '',
      phone: '',
      eventDate: '',
      eventTime: '',
      photoVideoPermission: 'yes',
      selectedPackage: 'gold package',
      cakeSelected: '',
      cakeInKg: '',
      address: '',
      emailValid: true,
      phoneValid: true,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  validateEmail = (email) => {
   
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  validatePhone = (phone) => {
   
    return /^[0-9]{10}$/.test(phone);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, phone } = this.state;

   
    const emailValid = this.validateEmail(email);
    const phoneValid = this.validatePhone(phone);

    if (emailValid && phoneValid) {
     
      console.log(this.state);
    } else {
      
      this.setState({ emailValid, phoneValid });
    }
  };

  render() {
    const { emailValid, phoneValid } = this.state;

    return (
      <div className="unique-birthday-form-container">
        <h1 className='ccc'>Registration Form</h1>
        <form onSubmit={this.handleSubmit} className='birthdayForm'>
          {/* Full Name */}
          <div className="unique-form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleChange}
            />
          </div>

          {/* Date of Birth */}
          <div className="unique-form-group">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
            />
          </div>

          {/* Email */}
          <div className={`unique-form-group ${emailValid ? '' : 'error'}`}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {!emailValid && <span className="error-text">Invalid email</span>}
          </div>

          {/* Phone */}
          <div className={`unique-form-group ${phoneValid ? '' : 'error'}`}>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            {!phoneValid && <span className="error-text">Invalid phone number</span>}
          </div>

          {/* Event Date */}
          <div className="unique-form-group">
            <label htmlFor="eventDate">Event Date:</label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={this.state.eventDate}
              onChange={this.handleChange}
            />
          </div>

          {/* Event Time */}
          <div className="unique-form-group">
            <label htmlFor="eventTime">Event Time:</label>
            <input
              type="time"
              id="eventTime"
              name="eventTime"
              value={this.state.eventTime}
              onChange={this.handleChange}
            />
          </div>

          {/* Photo/Video Permission */}
          <div className="unique-form-group">
            <label>Photo/Video Permission:</label>
            <label className="unique-radio-label">
              <input
                type="radio"
                name="photoVideoPermission"
                value="yes"
                checked={this.state.photoVideoPermission === 'yes'}
                onChange={this.handleChange}
              />
              Yes
            </label>
            <label className="unique-radio-label">
              <input
                type="radio"
                name="photoVideoPermission"
                value="no"
                checked={this.state.photoVideoPermission === 'no'}
                onChange={this.handleChange}
              />
              No
            </label>
          </div>

          {/* Selected Package */}
          <div className="unique-form-group">
            <label>Selected Package:</label>
            <select
              name="selectedPackage"
              value={this.state.selectedPackage}
              onChange={this.handleChange}
            >
              <option value="gold package">Gold Package</option>
              <option value="premium package">Premium Package</option>
            </select>
          </div>

          {/* Cake Selected */}
          <div className="unique-form-group">
            <label>Cake Selected:</label>
            <select
              name="cakeSelected"
              value={this.state.cakeSelected}
              onChange={this.handleChange}
            >
              <option value="">Select a Cake</option>
              <option value="cake1">Cake 1</option>
              <option value="cake2">Cake 2</option>
              {/* Add more cake options here */}
            </select>
          </div>

          {/* Cake in Kg */}
          <div className="unique-form-group">
            <label htmlFor="cakeInKg">Cake in Kg:</label>
            <input
              type="number"
              id="cakeInKg"
              name="cakeInKg"
              value={this.state.cakeInKg}
              onChange={this.handleChange}
            />
          </div>

          {/* Address */}
          <div className="unique-form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className='bbform'>Submit</button>
        </form>
      </div>
    );
  }
}

export default BirthdayForm;
