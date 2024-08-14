import React, { useState, useEffect } from 'react';
import axios from '../axiosInstance';
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
                setError(''); 
            }
        } catch (error) {
            console.error('Error fetching workouts:', error);
            setError('Error fetching workouts. Please try again later.');
        }
    };

    return (
        <div className='main-content'>
        <div className="user-workouts">
            <div className="workout-section">
                <h2>Your Workouts</h2>
                {error ? (
                    <p className="error-message">{error}</p> 
                ) : (
                    <ul className="workout-list">
                        {workouts.map(workout => (
                            <div key={workout.id} className="workout-item">
                                <h4 className="workout-title">{workout.title}</h4>
                                <p className="workout-day">Day: {workout.day_of_week}</p>
                                <p className="workout-exercises">Exercises: {workout.exercises}</p>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
            <div className="plans-section">
                <h3>Workout Plans</h3>
                <UserWorkoutPlans />
            </div>
            <div className="exercises-section">
                <h3>Exercises</h3>
                <ExerciseList />
            </div>
        </div>
        </div>
    );
};

export default UserWorkouts;
