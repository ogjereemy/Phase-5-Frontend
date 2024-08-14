import React, { useState } from 'react';
import axios from '../../axiosInstance';
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
    <Container className="mt-4 add-progress-log-container">
      <h2 className="form-title">Add Progress Log</h2>
      <Form onSubmit={handleSubmit} className="progress-log-form">
        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control 
            type="date" 
            placeholder='Date' 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
            className="input-field"
          />
        </Form.Group>
        <Form.Group controlId="formWeight">
          <Form.Control 
            type="number" 
            placeholder='Weight'
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            required 
            className="input-field"
          />
        </Form.Group>
        <Form.Group controlId="formBodyFatPercentage">
          <Form.Control 
            type="number" 
            placeholder='Body Fat Percentage'
            value={bodyFatPercentage} 
            onChange={(e) => setBodyFatPercentage(e.target.value)} 
            className="input-field"
          />
        </Form.Group>
        <Form.Group controlId="formMuscleMass">
          <Form.Control 
            type="number" 
            placeholder='Muscle Mass'
            value={muscleMass} 
            onChange={(e) => setMuscleMass(e.target.value)} 
            className="input-field"
          />
        </Form.Group>
        <Form.Group controlId="formNotes">
          <Form.Label>Notes</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            value={notes} 
            onChange={(e) => setNotes(e.target.value)} 
            className="input-field"
          />
        </Form.Group>
        {error && <Alert variant="danger" className="error-message">{error}</Alert>}
        {success && <Alert variant="success" className="success-message">{success}</Alert>}
        <Button variant="primary" type="submit" className="submit-button">
          Add Log
        </Button>
      </Form>
    </Container>
  );
};

export default AddProgressLog;
