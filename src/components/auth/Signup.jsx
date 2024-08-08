import React, { useState } from 'react';
import axios from 'axios';
import fitnessLogo from "../../../src/picsvg_download.svg";
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photo, setPhoto] = useState('');
  const [coachId, setCoachId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
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
        coach_id: coachId
      };
      console.log(payload);

      const endpoint = 'http://127.0.0.1:5000/auth/signup';
      await axios.post(endpoint, payload);
      navigate('/login');
    } catch (error) {
      console.error(error.response?.data || error.message); // Log error response for debugging
      setErrorMessage('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={fitnessLogo} alt="calorie tracker logo" />
        <h1>Start Your Fitness Journey Today</h1>
        <p>Join our Team!</p>
      </div>
      <div className="signup-right">
        <Container>
          <Form className="signup-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Button variant="outline-primary" className="btn-google" block>
              Use Google Account
            </Button>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password..."
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPhoto">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Photo URL..."
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCoachId">
                  <Form.Label>Coach ID</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Coach ID..."
                    value={coachId}
                    onChange={(e) => setCoachId(e.target.value)}
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
  );
};

export default Signup;
