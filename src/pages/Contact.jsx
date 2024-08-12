import React, { useState } from 'react';
import { Container, Form, Button, Col, Row, Alert } from 'react-bootstrap';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    if (!name || !email || !message) {
      setErrorMessage('All fields are required.');
      return;
    }

    try {
      setSuccessMessage('Thank you for your message! We will get back to you shortly.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setErrorMessage('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <Container className="contact-container mt-5">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to contact us using the form below.</p>
      <Row>
        <Col md={6}>
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Send Message
            </Button>
          </Form>
        </Col>
        <Col md={6} className="office-info">
          <h3>Our Office</h3>
          <p>123 Fitness St, Wellness City, Healthville, 12345</p>
          <p>
            <strong>Email:</strong> contact@fittrack.com<br />
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <h3>Business Hours</h3>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
