import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoachWorkouts = () => {
    const [workouts, setWorkouts] = useState([]);
    const [formData, setFormData] = useState({
        workout_plan_id: '',
        user_id: '',
        title: '',
        day_of_week: '',
        exercises: ''
    });

    useEffect(() => {
        fetchWorkouts();
    }, []);

    const fetchWorkouts = async () => {
        try {
            const response = await axios.get('/api/workouts'); // Fetch all workouts
            setWorkouts(response.data);
        } catch (error) {
            console.error('Error fetching workouts:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCreateWorkout = async () => {
        try {
            const response = await axios.post('/api/workouts', formData);
            setWorkouts([...workouts, response.data]);
            setFormData({ workout_plan_id: '', user_id: '', title: '', day_of_week: '', exercises: '' });
        } catch (error) {
            console.error('Error creating workout:', error);
        }
    };

    const handleUpdateWorkout = async (id) => {
        try {
            const response = await axios.patch(`/api/workouts`, { workout_id: id, ...formData });
            setWorkouts(workouts.map(workout => workout.id === id ? response.data : workout));
        } catch (error) {
            console.error('Error updating workout:', error);
        }
    };

    const handleDeleteWorkout = async (id) => {
        try {
            await axios.delete(`/api/workouts`, { data: { workout_id: id } });
            setWorkouts(workouts.filter(workout => workout.id !== id));
        } catch (error) {
            console.error('Error deleting workout:', error);
        }
    };

    return (
        <div>
            <h2>Manage Workouts</h2>
            <div>
                <input
                    type="text"
                    name="workout_plan_id"
                    value={formData.workout_plan_id}
                    onChange={handleInputChange}
                    placeholder="Workout Plan ID"
                />
                <input
                    type="text"
                    name="user_id"
                    value={formData.user_id}
                    onChange={handleInputChange}
                    placeholder="User ID"
                />
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Title"
                />
                <input
                    type="text"
                    name="day_of_week"
                    value={formData.day_of_week}
                    onChange={handleInputChange}
                    placeholder="Day of Week"
                />
                <input
                    type="text"
                    name="exercises"
                    value={formData.exercises}
                    onChange={handleInputChange}
                    placeholder="Exercises"
                />
                <button onClick={handleCreateWorkout}>Create Workout</button>
            </div>
            <h3>Existing Workouts</h3>
            <ul>
                {workouts.map(workout => (
                    <li key={workout.id}>
                        <h4>{workout.title}</h4>
                        <p>Day: {workout.day_of_week}</p>
                        <p>Exercises: {workout.exercises}</p>
                        <button onClick={() => handleUpdateWorkout(workout.id)}>Update</button>
                        <button onClick={() => handleDeleteWorkout(workout.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CoachWorkouts;
