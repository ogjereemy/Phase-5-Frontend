import React, { useState } from 'react';
import axios from 'axios';
import fitnessLogo from "../../../src/svgs/picsvg_download.svg";
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import CustomNavbar from '../Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { email, password };
      const response = await axios.post('http://127.0.0.1:5000/auth/login', payload);

      // Set the role and token in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', 'user');  // Set role as 'user'

      setSuccessMessage('Login successful! Redirecting...');
      setErrorMessage('');  // Clear any previous error message

      // Redirect after a short delay to show the success message
      setTimeout(() => navigate('/overview'), 2000);
    } catch (error) {
      setErrorMessage('Login failed. Please check your email and password.');
      setSuccessMessage('');  // Clear any previous success message
    }
  };

  return (
    <div>
      <CustomNavbar />
      <div className="login-container">
        <div className="login-left">
          <img src={fitnessLogo} className='logo-1' alt="calorie tracker logo" />
          <h1>Welcome Back!!</h1>
          <p>Let's keep Fit</p>
        </div>
        <div className="login-right">
          <Container>
            <Form className="login-form" onSubmit={handleSubmit}>
              <h2>Log In</h2>
              {successMessage && <Alert variant="success">{successMessage}</Alert>}
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
              <Button variant="outline-primary" className="btn-google" block>
                Use Google Account
              </Button>
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
              <div className="mt-3">
                <a href="/password-reset">Forgot password?</a>
              </div>
              <div className="mt-2">
                Don’t have an account? <a href="/signup">Sign Up</a>
              </div>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Login;
