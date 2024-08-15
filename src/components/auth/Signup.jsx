import React, { useState } from 'react';
import axios from 'axios';
import fitnessLogo from "../../../src/svgs/picsvg_download.svg";
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import CustomNavbar from '../Navbar';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photo, setPhoto] = useState('');
  const [coachId, setCoachId] = useState('');
  const [coachName, setCoachName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const payload = {
        username,
        email,
        password1: password,
        password2: confirmPassword,
        photo,
        coach_id: coachId,
        coach_name: coachName
      };
      

      const endpoint = 'https://fitt-track.onrender.com/auth/signup';
      await axios.post(endpoint, payload);
      setSuccessMessage('Signup successful! Redirecting...');
      setErrorMessage('');  

      
      setTimeout(() => navigate('/login'), 2000);
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
        <h2 className='p-t'>Start Your Fitness Journey Today</h2>
        <p className='p-t'>Join our Team!</p>
      </div>
      <div className="signup-right">
        <Container>
          <Form className="signup-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
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

            <Form.Group controlId="formBasicCoachId">

              <Form.Control
                type="number"
                placeholder="Coach ID..."
                value={coachId}
                onChange={(e) => setCoachId(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCoachName">

              <Form.Control
                type="text"
                placeholder="Coach Name..."
                value={coachName}
                onChange={(e) => setCoachName(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Sign Up
            </Button>
            <div className="mt-2">
              Already have an account? <a href="/login">Log In</a>
            </div>
          </Form>
        </Container>
      </div>
    </div>
    </div>
  );
};

export default Signup;
