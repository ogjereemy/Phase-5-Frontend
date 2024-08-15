import React, { useState } from 'react';
import axios from 'axios';
import fitnessLogo from "../../../src/svgs/picsvg_download.svg";
import { Container, Form, Button, Alert } from 'react-bootstrap';
import CustomNavbar from '../Navbar';

const CoachLogin = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { username, email, password };
      const response = await axios.post('https://fitt-track.onrender.com/auth/login', payload);

      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', 'coach');  

      setSuccessMessage('Coach login successful! Redirecting...');
      setErrorMessage('');  

      
      setTimeout(() => window.location.href = '/coach-dashboard', 2000);
    } catch (error) {
      setErrorMessage('Login failed. Please check your username, email, and password.');
      setSuccessMessage('');  
    }
  };

  return (
    <div>
      <CustomNavbar />
      <div className="login-container">
        <div className="login-left">
          <img src={fitnessLogo} className='logo-1' alt="calorie tracker logo" />
          <h1>Welcome Back, Coach!</h1>
          <p>Ready to help others get fit?</p>
        </div>
        <div className="login-right">
          <Container>
            <Form className="login-form" onSubmit={handleSubmit}>
              <h2>Coach Log In</h2>
              {successMessage && <Alert variant="success">{successMessage}</Alert>}
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
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

              <Button variant="primary" type="submit" block>
                Log In
              </Button>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default CoachLogin;
