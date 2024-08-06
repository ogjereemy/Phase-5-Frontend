// src/components/dashboard/WorkoutPlanList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, ListGroup, Button } from 'react-bootstrap';

const WorkoutPlanList = () => {
  const { clientId } = useParams();
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWorkoutPlans = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/clients/${clientId}/workout-plans`);
        setWorkoutPlans(response.data);
      } catch (err) {
        setError('Failed to load workout plans. Please try again later.');
      }
    };

    fetchWorkoutPlans();
  }, [clientId]);

  const createWorkoutPlan = () => {
    // Handle workout plan creation logic
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <h1>Workout Plans</h1>
      <Button onClick={createWorkoutPlan}>Create New Workout Plan</Button>
      <ListGroup className="mt-3">
        {workoutPlans.map(plan => (
          <ListGroup.Item key={plan.id}>{plan.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default WorkoutPlanList;
