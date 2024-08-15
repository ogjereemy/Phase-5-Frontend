import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const PasswordResetRequest = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://fitt-track.onrender.com/auth/request-reset', { email });
      setMessage('Password reset email sent');
    } catch (error) {
      setMessage('Failed to send password reset email');
    }
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Request Password Reset
        </Button>
        {message && <Alert className="mt-3">{message}</Alert>}
      </Form>
    </Container>
  );
};

export default PasswordResetRequest;
