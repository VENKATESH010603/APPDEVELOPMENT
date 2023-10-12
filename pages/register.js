import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { setEmail } from '../app/actions';
/*import RegisterNavbar from '../components/registernavbar';*/
import '../assets/css/register.css';


const Register = ({ setEmail, email }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      toast.error('Password should be at least 8 characters long.');
      return;
    }

    if (username.length < 6) {
      toast.error('Username should be at least 6 characters long.');
      return;
    }

    if (!email.includes('@')) {
      toast.error('Email should contain "@" symbol.');
      return;
    }

    try {
      // Show a success toast with a custom autoClose duration
      toast.success('Registration successful!', {
        autoClose: 1000, // Set the duration in milliseconds (2 seconds in this case)
        onClose: () => {
          // After the toast is closed, navigate to the dashboard page
          navigate('/homepage');
        },
      });
    } catch (error) {
      console.error('Toast error:', error);
    }
  };

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <>
     <div className='bb7'>
      <div className="register-container-custom">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group-custom">
            <label className='label-custom' htmlFor="username">Username:</label>
            <input
              type="text"
              className='custom'
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group-custom">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className='custom'
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Dispatch setEmail action on input change
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group-custom">
            <label className='label-custom' htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className='ninja-custom'>Register</button>
        </form>
        <p className='custom'>
          Already have an account?{' '}
          <span className="login-link-custom" onClick={goToLogin}>
            <u className="kit-custom">Login</u>
          </span>
        </p>
        <ToastContainer position="top-right" />
      </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  email: state.user.email, // Map email from Redux state to component props
});

const mapDispatchToProps = {
  setEmail, // Map setEmail action to component props
};

export default connect(mapStateToProps, mapDispatchToProps)(Register); // Connect the component to Redux
