import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Col, Row, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import './Dashboard.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    photo: '', // Add photo field
    coach: '', // Add coach field
    totalWorkouts: 0,
    totalCaloriesBurned: 0,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Fetch user profile on component mount
    axios.get('http://127.0.0.1:5000/app/profile', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` // JWT token
      }
    }).then(response => {
      setUser(response.data);
    }).catch(error => {
      setError('Failed to fetch user profile');
      console.error('Error fetching user profile:', error.response ? error.response.data : error.message);
    });
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch('http://127.0.0.1:5000/app/profile', {
      username: user.username,
      photo: user.photo
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // JWT token
        'Content-Type': 'application/json' // Specify content type
      }
    }).then(response => {
      setSuccess('Profile updated successfully!');
      setUser(response.data); // Update user state with response data
    }).catch(error => {
      setError('Failed to update profile');
      console.error('Error updating profile:', error.response ? error.response.data : error.message);
    });
  };

  return (
    <Container className="profile-container">
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center">
                <img src={user.photo || 'path-to-default-image.jpg'} alt="User" className="user-image" />
                <div className="ms-3">
                  <h5 className="card-title">{user.username}</h5>
                  <p className="card-text">Coach: {user.coach_id || 'Not Assigned'}</p>
                </div>
              </div>
              <Form onSubmit={handleSubmit} className="mt-4">
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    disabled
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Photo URL</Form.Label>
                  <Form.Control
                    type="text"
                    name="photo"
                    value={user.photo}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button type="submit" className="mt-3">
                  Update Profile
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Statistics</Card.Title>
              <div className="stat-card">
                <div className="stat-info">
                  <h5>Total Workouts Completed</h5>
                  <p>{user.totalWorkouts}</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-info">
                  <h5>Total Calories Burned</h5>
                  <p>{user.totalCaloriesBurned}</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
