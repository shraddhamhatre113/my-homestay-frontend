import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailListEmail, setEmailListEmail] = useState('');
  const [emailListLoading, setEmailListLoading] = useState(false);
  const [emailListErrorMessage, setEmailListErrorMessage] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message
    setErrorMessage('');

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setErrorMessage('');
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(firstName)) {
      setErrorMessage('Please enter a valid first name.');
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(lastName)) {
      setErrorMessage('Please enter a valid last name.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!isPasswordValid(password)) {
      setErrorMessage('Please enter a valid password.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Password and Confirm Password should match.');
      return;
    }

    setLoading(true);
    try {
      // Make API call to the backend here
      // Simulating delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Registration successful!');
    } catch (error) {
      setErrorMessage('Email already used. Please choose a different email.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailListEmailChange = (e) => {
    setEmailListEmail(e.target.value);
  };

  const handleEmailListSubmit = async (e) => {
    e.preventDefault();

    // Reset error message
    setEmailListErrorMessage('');

    if (!emailListEmail) {
      setEmailListErrorMessage('Please enter a valid email address.');
      return;
    }

    setEmailListLoading(true);
    try {
      // Make API call to the backend for email list subscription here
      // Simulating delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Email list subscription successful!');
    } catch (error) {
      setEmailListErrorMessage('Email already subscribed. Please use a different email.');
    } finally {
      setEmailListLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-form">
        <h2 style={{ fontFamily: 'Montserrat' }}>Sign Up</h2>
        <p style={{ fontFamily: 'Montserrat' }}>Login or create a new bookMe.com account</p>
        {errorMessage && <p className="error-message" style={{ fontFamily: 'Montserrat' }}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" value={firstName} onChange={handleFirstNameChange} placeholder="First Name" style={{ fontFamily: 'Montserrat' }} />
            {firstName && !/^[a-zA-Z\s]+$/.test(firstName) && (
              <p className="error-message" style={{ fontFamily: 'Montserrat' }}>Please enter a valid first name.</p>
            )}
          </div>
          <div className="form-group">
            <input type="text" value={lastName} onChange={handleLastNameChange} placeholder="Last Name" style={{ fontFamily: 'Montserrat' }} />
            {lastName && !/^[a-zA-Z\s]+$/.test(lastName) && (
              <p className="error-message" style={{ fontFamily: 'Montserrat' }}>Please enter a valid last name.</p>
            )}
          </div>
          <div className="form-group">
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" style={{ fontFamily: 'Montserrat' }} />
            {email && !/\S+@\S+\.\S+/.test(email) && (
              <p className="error-message" style={{ fontFamily: 'Montserrat' }}>Please enter a valid email address.</p>
            )}
          </div>
          <div className="form-group">
            <div className="password-input">
              <input type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange} placeholder="Password" style={{ fontFamily: 'Montserrat' }} />
              <i className={`password-toggle ${showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'}`} onClick={togglePasswordVisibility}></i>
            </div>
            {password && !isPasswordValid(password) && (
              <p className="error-message" style={{ fontFamily: 'Montserrat' }}>Please enter a valid password (at least 8 characters long).</p>
            )}
          </div>
          <div className="form-group">
            <div className="password-input">
              <input type={showPassword ? 'text' : 'password'} value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm Password" style={{ fontFamily: 'Montserrat' }} />
              <i className={`password-toggle ${showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'}`} onClick={togglePasswordVisibility}></i>
            </div>
          </div>
          <button type="submit" disabled={loading} style={{ backgroundColor: '#FF9900', color: '#fff', fontFamily: 'Montserrat', borderRadius: '0' }}>
            {loading ? 'Loading...' : 'Register'}
          </button>
        </form>
      </div>
      <div className="email-list-form" >
        <p style={{ fontFamily: 'Montserrat' }}>Subscribe to our Newsletter</p>
        <p style={{ fontFamily: 'Montserrat' }}>Join our mailing list for the latest product updates</p>
        {emailListErrorMessage && <p className="error-message" style={{ fontFamily: 'Montserrat' }}>{emailListErrorMessage}</p>}
        <form onSubmit={handleEmailListSubmit}>
          <div className="form-group">
            <input type="email" value={emailListEmail} onChange={handleEmailListEmailChange} placeholder="Email" style={{ fontFamily: 'Montserrat' }} />
            {emailListEmail && !/\S+@\S+\.\S+/.test(emailListEmail) && (
              <p className="error-message" style={{ fontFamily: 'Montserrat' }}>Please enter a valid email address.</p>
            )}
          </div>
          <button type="submit" disabled={emailListLoading} style={{ backgroundColor: '#FF9900', color: '#fff', fontFamily: 'Montserrat', borderRadius: '0' }}>
            {emailListLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;