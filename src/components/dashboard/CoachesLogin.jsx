import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const CoachLogin = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { username, email, password };
      const response = await axios.post('http://127.0.0.1:5000/auth/login', payload);

      // Set the role and token in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', 'coach');  // Set role as 'coach'

      window.location.href = '/coach-dashboard'; // Redirect to Coach Dashboard
    } catch (error) {
      setErrorMessage('Login failed. Please check your username, email, and password.');
    }
  };

  return (
    <div className="coach-login-container">
      <Container>
        <Form className="coach-login-form" onSubmit={handleSubmit}>
          <h2>Coach Log In</h2>
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
  );
};

export default CoachLogin;
