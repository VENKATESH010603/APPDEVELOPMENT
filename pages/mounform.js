import React, { Component } from 'react';
import '../assets/css/musicregister.css'; // Import the CSS file

class MusicRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      phone: '',
      eventDate: '',
      eventTime: '',
      photographyVideo: '',
      selectedPackage:'',
      selectedSinger: '',
      address: '',
      errors: {},
    };
  }

  validateForm = () => {
    const errors = {};
    if (!this.state.fullName) {
      errors.fullName = 'Full Name is required.';
    }
    if (!this.state.email) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email)) {
      errors.email = 'Invalid email address.';
    }
    if (!this.state.phone) {
      errors.phone = 'Phone is required.';
    }
    if (!this.state.eventDate) {
      errors.eventDate = 'Event Date is required.';
    }
    if (!this.state.eventTime) {
      errors.eventTime = 'Event Time is required.';
    }
    if (!this.state.address) {
      errors.address = 'Address is required.';
    }
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handlePackageChange = (e) => {
    const selectedPackage = e.target.value;
    const defaultSinger = selectedPackage === 'Gold Package' ? 'SingerG1' : 'SingerP1';
    this.setState({ selectedPackage, selectedSinger: defaultSinger });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      console.log('Form data submitted:', this.state);
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="unique-music-registration-form">
    <h2 className='vviu'>Registration Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleChange}
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label>Event Date:</label>
            <input
              type="date"
              name="eventDate"
              value={this.state.eventDate}
              onChange={this.handleChange}
            />
            {errors.eventDate && <span className="error">{errors.eventDate}</span>}
          </div>

          <div className="form-group">
            <label>Event Time:</label>
            <input
              type="time"
              name="eventTime"
              value={this.state.eventTime}
              onChange={this.handleChange}
            />
            {errors.eventTime && <span className="error">{errors.eventTime}</span>}
          </div>

          <div className="form-group">
            <label>Photography and Video:</label>
            <select
              name="photographyVideo"
              value={this.state.photographyVideo}
              onChange={this.handleChange}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="form-group">
            <label>Selected Package:</label>
            <select
              name="selectedPackage"
              value={this.state.selectedPackage}
              onChange={this.handlePackageChange} // Use handlePackageChange
            >
              <option value="Gold Package">Gold Package</option>
              <option value="Premium Package">Premium Package</option>
            </select>
          </div>

          <div className="form-group">
            <label>Selected Singer:</label>
            <select
              name="selectedSinger"
              value={this.state.selectedSinger}
              onChange={this.handleChange}
            >
              {this.state.selectedPackage === 'Gold Package' ? (
                <>
                  <option value="SingerG1">SingerG1</option>
                  <option value="SingerG2">SingerG2</option>
                  <option value="SingerG3">SingerG3</option>
                </>
              ) : (
                <>
                  <option value="SingerP1">SingerP1</option>
                  <option value="SingerP2">SingerP2</option>
                  <option value="SingerP3">SingerP3</option>
                </>
              )}
            </select>
          </div>

          <div className="form-group">
            <label>Address:</label>
            <textarea
              name="address"

              // style={{resize:'none'}} 
              value={this.state.address}
              onChange={this.handleChange}
            />
            {errors.address && <span className="error">{errors.address}</span>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MusicRegistrationForm;
