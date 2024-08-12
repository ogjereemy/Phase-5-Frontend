import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const AddProgressLog = () => {
  const [date, setDate] = useState('');
  const [weight, setWeight] = useState('');
  const [bodyFatPercentage, setBodyFatPercentage] = useState('');
  const [muscleMass, setMuscleMass] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      const response = await axios.post('http://127.0.0.1:5000/app/progress_logs', {
        date,
        weight,
        body_fat_percentage: bodyFatPercentage,
        muscle_mass: muscleMass,
        notes
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Add JWT token for authorization
        }
      });

      setSuccess('Progress log added successfully!');
      // Clear form fields or redirect user
      setDate('');
      setWeight('');
      setBodyFatPercentage('');
      setMuscleMass('');
      setNotes('');
    } catch (error) {
      setError(error.response ? error.response.data.error : error.message);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Add Progress Log</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="formWeight">
          <Form.Label>Weight</Form.Label>
          <Form.Control 
            type="number" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="formBodyFatPercentage">
          <Form.Label>Body Fat Percentage</Form.Label>
          <Form.Control 
            type="number" 
            value={bodyFatPercentage} 
            onChange={(e) => setBodyFatPercentage(e.target.value)} 
          />
        </Form.Group>
        <Form.Group controlId="formMuscleMass">
          <Form.Label>Muscle Mass</Form.Label>
          <Form.Control 
            type="number" 
            value={muscleMass} 
            onChange={(e) => setMuscleMass(e.target.value)} 
          />
        </Form.Group>
        <Form.Group controlId="formNotes">
          <Form.Label>Notes</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            value={notes} 
            onChange={(e) => setNotes(e.target.value)} 
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Button variant="primary" type="submit">
          Add Log
        </Button>
      </Form>
    </Container>
  );
};

export default AddProgressLog;
