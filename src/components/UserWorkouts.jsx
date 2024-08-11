import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserWorkoutPlans from './UserWorkoutPlans';
import ExerciseList from './ExerciseList';

const UserWorkouts = () => {
    const [workouts, setWorkouts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchWorkouts();
    }, []);

    const fetchWorkouts = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/app/workouts', { 
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            if (response.data.length === 0) {
                setError('No workouts have been assigned by your coach.');
            } else {
                setWorkouts(response.data);
                setError(''); // Clear error if workouts are found
            }
        } catch (error) {
            console.error('Error fetching workouts:', error);
            setError('Error fetching workouts. Please try again later.');
        }
    };

    return (
        <div className='main-content'>
            <div>
                <h2>Your Workouts</h2>
                {error ? (
                    <p>{error}</p> // Display error message if no workouts are assigned
                ) : (
                    <ul>
                        {workouts.map(workout => (
                            <li key={workout.id}>
                                <h4>{workout.title}</h4>
                                <p>Day: {workout.day_of_week}</p>
                                <p>Exercises: {workout.exercises}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <h3>Workout Plans</h3>
            <UserWorkoutPlans />
            <h3>Exercises</h3>
            <ExerciseList />
        </div>
    );
};

export default UserWorkouts;
