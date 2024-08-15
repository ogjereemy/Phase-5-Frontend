import React, { useState, useEffect } from 'react';
import axios from '../axiosInstance';


const ExerciseManager = () => {
    const [exercises, setExercises] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [formData, setFormData] = useState({
        workout_id: '',
        name: '',
        sets: '',
        reps: '',
        weight: '',
        description: ''
    });

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const response = await axios.get('https://fitt-track.onrender.com/app/exercises', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setExercises(response.data || []);
            } catch (error) {
                console.error('Error fetching exercises:', error);
                setExercises([]);
            }
        };
        fetchExercises();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedExercise) {
                await axios.patch('http://127.0.0.1:5000/app/exercises', formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
            } else {
                await axios.post('http://127.0.0.1:5000/app/exercises', formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
            }
            const response = await axios.get('http://127.0.0.1:5000/app/exercises', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setExercises(response.data || []);
            setSelectedExercise(null);
            setFormData({
                workout_id: '',
                name: '',
                sets: '',
                reps: '',
                weight: '',
                description: ''
            });
        } catch (error) {
            console.error('Error saving exercise:', error);
        }
    };

    const handleEdit = (exercise) => {
        setSelectedExercise(exercise);
        setFormData({
            workout_id: exercise.workout_id || '',
            name: exercise.name || '',
            sets: exercise.sets || '',
            reps: exercise.reps || '',
            weight: exercise.weight || '',
            description: exercise.description || ''
        });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://127.0.0.1:5000/app/exercises', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                data: { exercise_id: id }
            });
            const response = await axios.get('http://127.0.0.1:5000/app/exercises', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setExercises(response.data || []);
        } catch (error) {
            console.error('Error deleting exercise:', error);
        }
    };

    return (
        <div className='main-content'>
            <h1>Manage Exercises</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="workout_id" value={formData.workout_id} onChange={handleChange} placeholder="Workout ID" />
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                <input type="number" name="sets" value={formData.sets} onChange={handleChange} placeholder="Sets" />
                <input type="number" name="reps" value={formData.reps} onChange={handleChange} placeholder="Reps" />
                <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight" />
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
                <button type="submit">{selectedExercise ? 'Update Exercise' : 'Add Exercise'}</button>
            </form>
            <h2>Exercise List</h2>
            <div className='exercise-list'>
                {exercises.map(exercise => (
                    <div key={exercise.id} className='exercise-card'>
                        <h3>{exercise.name}</h3>
                        <p><strong>Sets:</strong> {exercise.sets}</p>
                        <p><strong>Reps:</strong> {exercise.reps}</p>
                        <p><strong>Weight:</strong> {exercise.weight}</p>
                        <p><strong>Description:</strong> {exercise.description}</p>
                        <button onClick={() => handleEdit(exercise)}>Edit</button>
                        <button onClick={() => handleDelete(exercise.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExerciseManager;
