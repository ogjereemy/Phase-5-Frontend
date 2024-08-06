import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Col, Row, Card } from 'react-bootstrap';
import axios from 'axios';
import './Dashboard.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: '',
    weight: '',
    height: '',
    totalWorkouts: 0,
    totalCaloriesBurned: 0,
  });

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/app/profile').then(response => {
      setUser(response.data);
    });
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('/api/user/profile', user).then(response => {
      alert('Profile updated successfully!');
    });
  };

  return (
    <Container className="profile-container">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center">
                <img src="path-to-user-image.jpg" alt="User" className="user-image" />
                <div className="ms-3">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">Fitness Enthusiast</p>
                </div>
              </div>
              <Form onSubmit={handleSubmit} className="mt-4">
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" value={user.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" value={user.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" name="age" value={user.age} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Weight (kg)</Form.Label>
                  <Form.Control type="number" name="weight" value={user.weight} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Height (cm)</Form.Label>
                  <Form.Control type="number" name="height" value={user.height} onChange={handleChange} />
                </Form.Group>
                <Button type="submit" className="mt-3">Update Profile</Button>
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

