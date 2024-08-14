import React, { useState, useEffect } from 'react';
import axios from '../axiosInstance';

const WorkoutPlansManager = () => {
    const [workoutPlans, setWorkoutPlans] = useState([]);
    const [selectedWorkoutPlan, setSelectedWorkoutPlan] = useState(null);
    const [formData, setFormData] = useState({
        user_id: '',
        title: '',
        description: '',
        workout_days: ''
    });

    useEffect(() => {
        const fetchWorkoutPlans = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/app/workout_plans', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setWorkoutPlans(response.data || []); // Ensure response data is an array
            } catch (error) {
                console.error('Error fetching workout plans:', error);
                setWorkoutPlans([]); // Handle errors by setting an empty array
            }
        };
        fetchWorkoutPlans();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedWorkoutPlan) {
                await axios.patch('http://127.0.0.1:5000/app/workout_plans', formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
            } else {
                await axios.post('http://127.0.0.1:5000/app/workout_plans', formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
            }
            const response = await axios.get('http://127.0.0.1:5000/app/workout_plans', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setWorkoutPlans(response.data || []); // Ensure response data is an array
            setSelectedWorkoutPlan(null);
            setFormData({
                user_id: '',
                title: '',
                description: '',
                workout_days: ''
            });
        } catch (error) {
            console.error('Error saving workout plan:', error);
        }
    };

    const handleEdit = (workoutPlan) => {
        setSelectedWorkoutPlan(workoutPlan);
        setFormData({
            user_id: workoutPlan.user_id || '',
            title: workoutPlan.title || '',
            description: workoutPlan.description || '',
            workout_days: workoutPlan.workout_days || ''
        });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://127.0.0.1:5000/app/workout_plans', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                data: { workout_plan_id: id }
            });
            const response = await axios.get('http://127.0.0.1:5000/app/workout_plans', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setWorkoutPlans(response.data || []); // Ensure response data is an array
        } catch (error) {
            console.error('Error deleting workout plan:', error);
        }
    };

    return (
        <div className='main-content'>
            <h1>Manage Workout Plans</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user_id" value={formData.user_id} onChange={handleChange} placeholder="User ID" />
                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
                <input type="number" name="workout_days" value={formData.workout_days} onChange={handleChange} placeholder="Workout Days (per week)" />
                <button type="submit">{selectedWorkoutPlan ? 'Update Workout Plan' : 'Add Workout Plan'}</button>
            </form>
            <h2>Workout Plan List</h2>
            <ul>
                {Array.isArray(workoutPlans) && workoutPlans.map(workoutPlan => (
                    <li key={workoutPlan.id}>
                        {workoutPlan.title}
                        <button onClick={() => handleEdit(workoutPlan)}>Edit</button>
                        <button onClick={() => handleDelete(workoutPlan.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkoutPlansManager;
