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
    const [selectedWorkout, setSelectedWorkout] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Load state from localStorage
        const savedFormData = localStorage.getItem('formData');
        const savedSelectedWorkout = localStorage.getItem('selectedWorkout');
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }
        if (savedSelectedWorkout) {
            setSelectedWorkout(JSON.parse(savedSelectedWorkout));
        }

        fetchWorkouts();
    }, []);

    useEffect(() => {
        // Save state to localStorage
        localStorage.setItem('formData', JSON.stringify(formData));
        localStorage.setItem('selectedWorkout', JSON.stringify(selectedWorkout));
    }, [formData, selectedWorkout]);

    const fetchWorkouts = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://fitt-track.onrender.com/app/workouts', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setWorkouts(response.data || []);
            setError(null);
        } catch (error) {
            console.error('Error fetching workouts:', error);
            setError('Error fetching workouts');
            setWorkouts([]);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCreateOrUpdateWorkout = async () => {
        setLoading(true);
        try {
            if (selectedWorkout) {
                // Update existing workout
                await axios.patch('https://fitt-track.onrender.com/app/workouts', { workout_id: selectedWorkout.id, ...formData }, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setWorkouts(workouts.map(workout => workout.id === selectedWorkout.id ? { ...workout, ...formData } : workout));
            } else {
                // Create new workout
                const response = await axios.post('https://fitt-track.onrender.com/app/workouts', formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setWorkouts([...workouts, response.data]);
            }
            setFormData({
                workout_plan_id: '',
                user_id: '',
                title: '',
                day_of_week: '',
                exercises: ''
            });
            setSelectedWorkout(null);
            setError(null);
        } catch (error) {
            console.error('Error saving workout:', error);
            setError('Error saving workout');
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (workout) => {
        setSelectedWorkout(workout);
        setFormData({
            workout_plan_id: workout.workout_plan_id || '',
            user_id: workout.user_id || '',
            title: workout.title || '',
            day_of_week: workout.day_of_week || '',
            exercises: workout.exercises || ''
        });
    };

    const handleDelete = async (id) => {
        setLoading(true);
        try {
            await axios.delete('https://fitt-track.onrender.com/app/workouts', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                data: { workout_id: id }
            });
            setWorkouts(workouts.filter(workout => workout.id !== id));
            setError(null);
        } catch (error) {
            console.error('Error deleting workout:', error);
            setError('Error deleting workout');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='main-content'>
            <h2>Manage Workouts</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
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
                <button onClick={handleCreateOrUpdateWorkout}>
                    {selectedWorkout ? 'Update Workout' : 'Create Workout'}
                </button>
            </div>
            <h3>Existing Workouts</h3>
            <ul>
                {workouts && workouts.length > 0 ? (
                    workouts.map(workout => (
                        <li key={workout.id}>
                            <h4>{workout.title}</h4>
                            <p>Day: {workout.day_of_week}</p>
                            <p>Exercises: {workout.exercises}</p>
                            <button onClick={() => handleEdit(workout)}>Edit</button>
                            <button onClick={() => handleDelete(workout.id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <p>No workouts available</p>
                )}
            </ul>
        </div>
    );
};

export default CoachWorkouts;
