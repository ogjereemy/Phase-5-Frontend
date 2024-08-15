import React, { useState } from 'react';
import axios from 'axios';
import fitnessLogo from "../../../src/svgs/picsvg_download.svg";
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import CustomNavbar from '../Navbar';

const CoachSignup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photo, setPhoto] = useState('');
  const [bio, setBio] = useState('');
  const [specialities, setSpecialities] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    if (!bio) {
      setErrorMessage("Bio is required.");
      return;
    }
    try {
      const payload = {
        username,
        email,
        password1: password,
        password2: confirmPassword,
        photo,
        bio,
        specialities,
        is_admin: isAdmin
      };
 

      const endpoint = 'https://fitt-track.onrender.com/auth/signup'; 
      await axios.post(endpoint, payload);
      setSuccessMessage('Coach signup successful! Redirecting...');
      setErrorMessage('');  

      
      setTimeout(() => navigate('/coaches-login'), 2000);
    } catch (error) {
      console.error(error.response?.data || error.message); 
      setErrorMessage('Signup failed. Please try again.');
      setSuccessMessage('');  
    }
  };

  return (
    <div>
      <CustomNavbar/>
    <div className="signup-container">
      <div className="signup-left">
        <img src={fitnessLogo} className='logo-1' alt="calorie tracker logo" />
        <h1>Become a Coach Today</h1>
        <p>Join our team and help others achieve their fitness goals!</p>
      </div>
      <div className="signup-right">
        <Container>
          <Form className="signup-form" onSubmit={handleSubmit}>
            <h2>Coach Sign Up</h2>
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Button variant="outline-primary" className="btn-google" block>
              Use Google Account
            </Button>
            <Form.Group controlId="formBasicUsername">

              <Form.Control
                type="text"
                placeholder="Username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">

              <Form.Control
                type="email"
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">

              <Form.Control
                type="password"
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">

              <Form.Control
                type="password"
                placeholder="Confirm Password..."
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPhoto">
    
              <Form.Control
                type="text"
                placeholder="Photo URL..."
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicBio">
          
              <Form.Control
                type="text"
                placeholder="Tell us about yourself..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicSpecialities">
           
              <Form.Control
                type="text"
                placeholder="Your specialities..."
                value={specialities}
                onChange={(e) => setSpecialities(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicIsAdmin">
              <Form.Check
                type="checkbox"
                label="Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Sign Up
            </Button>
            <div className="mt-2">
              Already have an account? <a href="/coaches-login">Log In</a>
            </div>
          </Form>
        </Container>
      </div>
    </div>
    </div>
  );
};

export default CoachSignup;
