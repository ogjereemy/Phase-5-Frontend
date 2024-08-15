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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWorkoutPlans = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://fitt-track.onrender.com/app/workout_plans', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setWorkoutPlans(response.data || []);
                setError(null);
            } catch (error) {
                console.error('Error fetching workout plans:', error);
                setError('Error fetching workout plans');
                setWorkoutPlans([]);
            } finally {
                setLoading(false);
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
        if (!formData.user_id || !formData.title || !formData.workout_days) {
            setError('Please fill out all required fields.');
            return;
        }
        setLoading(true);
        try {
            if (selectedWorkoutPlan) {
                await axios.patch('https://fitt-track.onrender.com/app/workout_plans', formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
            } else {
                await axios.post('https://fitt-track.onrender.com/app/workout_plans', formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
            }
            const response = await axios.get('https://fitt-track.onrender.com/app/workout_plans', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setWorkoutPlans(response.data || []);
            setSelectedWorkoutPlan(null);
            setFormData({
                user_id: '',
                title: '',
                description: '',
                workout_days: ''
            });
            setError(null);
        } catch (error) {
            console.error('Error saving workout plan:', error);
            setError('Error saving workout plan');
        } finally {
            setLoading(false);
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
        setLoading(true);
        try {
            await axios.delete('https://fitt-track.onrender.com/app/workout_plans', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                data: { workout_plan_id: id }
            });
            const response = await axios.get('https://fitt-track.onrender.com/app/workout_plans', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setWorkoutPlans(response.data || []);
            setError(null);
        } catch (error) {
            console.error('Error deleting workout plan:', error);
            setError('Error deleting workout plan');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='main-content'>
            <h1>Manage Workout Plans</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="user_id" value={formData.user_id} onChange={handleChange} placeholder="User ID" />
                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
                <input type="number" name="workout_days" value={formData.workout_days} onChange={handleChange} placeholder="Workout Days (per week)" />
                <button type="submit">{selectedWorkoutPlan ? 'Update Workout Plan' : 'Add Workout Plan'}</button>
            </form>
            <h2>Workout Plan List</h2>
            {workoutPlans.length === 0 ? (
                <p>No workout plans available.</p>
            ) : (
                <ul>
                    {workoutPlans.map(workoutPlan => (
                        <li key={workoutPlan.id}>
                            {workoutPlan.title}
                            <button onClick={() => handleEdit(workoutPlan)}>Edit</button>
                            <button onClick={() => handleDelete(workoutPlan.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default WorkoutPlansManager;
