import React, { useState, useEffect } from 'react';
import axios from '../axiosInstance';

const UserWorkoutPlans = () => {
    const [workoutPlans, setWorkoutPlans] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchWorkoutPlans = async () => {
            try {
                const response = await axios.get('https://fitt-track.onrender.com/app/workout_plans', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                if (response.data.length === 0) {
                    setError('No workout plans have been assigned by your coach.');
                } else {
                    setWorkoutPlans(response.data);
                    setError(''); 
                }
            } catch (error) {
                console.error('Error fetching workout plans:', error);
                setError('Error fetching workout plans. Please try again later.');
            }
        };
        fetchWorkoutPlans();
    }, []);

    return (
        <div className='main-content'>
            <h1>My Workout Plans</h1>
            {error ? (
                <p>{error}</p> 
            ) : (
                <ul>
                    {workoutPlans.map(workoutPlan => (
                        <div key={workoutPlan.id}>
                            <h2>{workoutPlan.title}</h2>
                            <p>{workoutPlan.description}</p>
                            <p>Days per week: {workoutPlan.workout_days}</p>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserWorkoutPlans;
