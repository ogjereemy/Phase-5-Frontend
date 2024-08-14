import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Col, Row, Card, Alert } from 'react-bootstrap';
import axios from '../../axiosInstance';
import AddProgressLog from './AddProgressLog';

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
      <h2 className="profile-title">My Profile</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Row>
        <Col md={6}>
          <Card className="profile-card">
            <Card.Body>
              <div className="d-flex align-items-center">
                <img src={user.photo || 'path-to-default-image.jpg'} alt="User" className="user-image" />
                <div className="ms-3">
                  <h5 className="card-title">{user.username}</h5>
                  <p className="card-text">Coach: {user.coach_id || 'Not Assigned'}</p>
                  <p className="card-text">Coach: {user.coach_name || 'Not Assigned'}</p>
                </div>
              </div>
              <Form onSubmit={handleSubmit} className="mt-4">
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder='Username'
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    className="input-field"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="email"
                    placeholder='Email Address'
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="input-field"
                    disabled
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder='Photo URL'
                    name="photo"
                    value={user.photo}
                    onChange={handleChange}
                    className="input-field"
                  />
                </Form.Group>
                <Button type="submit" className="update-button">
                  Update Profile
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <AddProgressLog/>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
