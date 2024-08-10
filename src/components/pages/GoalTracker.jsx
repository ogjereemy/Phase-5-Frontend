import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';


const GoalTracker = () => {
  const [goalTitle, setGoalTitle] = useState('');
  const [goalDescription, setGoalDescription] = useState('');
  const [goalTargetDate, setGoalTargetDate] = useState('');
  const [goals, setGoals] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch goals on component mount
  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/app/goals', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Add JWT token for authorization
          }
        });
        setGoals(response.data);
      } catch (error) {
        console.error('Error fetching goals:', error.response ? error.response.data : error.message);
      }
    };

    fetchGoals();
  }, []);

  const handleAddGoal = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      const response = await axios.post('http://127.0.0.1:5000/app/goals', {
        title: goalTitle,
        description: goalDescription,
        target_date: goalTargetDate
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Add JWT token for authorization
        }
      });

      setGoals([...goals, response.data]);
      setSuccess('Goal added successfully!');
      setGoalTitle('');
      setGoalDescription('');
      setGoalTargetDate('');
    } catch (error) {
      setError(error.response ? error.response.data.error : error.message);
    }
  };

  const handleUpdateGoal = async (goalId, updatedGoal) => {
    try {
      const response = await axios.patch('http://127.0.0.1:5000/app/goals', {
        goal_id: goalId,
        description: updatedGoal.description,
        target_date: updatedGoal.target_date
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Add JWT token for authorization
        }
      });

      setGoals(goals.map(goal => goal.id === goalId ? response.data : goal));
      setSuccess('Goal updated successfully!');
    } catch (error) {
      setError(error.response ? error.response.data.error : error.message);
    }
  };

  const handleDeleteGoal = async (goalId) => {
    try {
      await axios.delete('http://127.0.0.1:5000/app/goals', {
        data: { goal_id: goalId },
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Add JWT token for authorization
        }
      });

      setGoals(goals.filter(goal => goal.id !== goalId));
      setSuccess('Goal deleted successfully!');
    } catch (error) {
      setError(error.response ? error.response.data.error : error.message);
    }
  };

  return (
    <div className='main-content'>

    <Container className="mt-4">
      <h1>Goal Tracker</h1>
      <h2>Record Changes</h2>

      <Form onSubmit={handleAddGoal} className="mb-4">
        <Form.Group controlId="formGoalTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={goalTitle}
            onChange={(e) => setGoalTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formGoalDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={goalDescription}
            onChange={(e) => setGoalDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formGoalTargetDate">
          <Form.Label>Target Date</Form.Label>
          <Form.Control
            type="date"
            value={goalTargetDate}
            onChange={(e) => setGoalTargetDate(e.target.value)}
            required
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Button variant="primary" type="submit">
          Add Goal
        </Button>
      </Form>

      <div className="dailyContainer">
        <h3>Daily</h3>
        <div className="cardContainer">
          {goals.map((goal) => (
            <div className="card" key={goal.id}>
              <h4>{goal.title}</h4>
              <p>{goal.description}</p>
              <p>Target Date: {goal.target_date}</p>
              <div className="chart"></div>
              <Button onClick={() => handleDeleteGoal(goal.id)}>Delete</Button>
              <Button onClick={() => handleUpdateGoal(goal.id, {
                ...goal,
                description: 'Updated Description', // Example update
                target_date: '2024-12-31' // Example update
              })}>Update</Button>
            </div>
          ))}
        </div>
      </div>
    </Container>
    </div>
  );
};

export default GoalTracker;
