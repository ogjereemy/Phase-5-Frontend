import React, { useState, useEffect } from 'react';
import axios from '../axiosInstance';


const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const response = await axios.get('https://phase-5-backend-2.onrender.com/app/exercises', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setExercises(response.data || []);
                setError('');
            } catch (error) {
                console.error('Error fetching exercises:', error);
                setError('Failed to load exercises. Please try again later.');
                setExercises([]);
            } finally {
                setLoading(false);
            }
        };
        fetchExercises();
    }, []);

    return (
        <div className='main-content'>
            <h1>Exercise List</h1>
            {loading ? (
                <p>Loading exercises...</p>
            ) : error ? (
                <p>{error}</p>
            ) : exercises.length === 0 ? (
                <p>No exercises available.</p>
            ) : (
                <div className='exercise-list'>
                    {exercises.map(exercise => (
                        <div key={exercise.id} className='exercise-card'>
                            <h3>{exercise.name}</h3>
                            <p><strong>Sets:</strong> {exercise.sets}</p>
                            <p><strong>Reps:</strong> {exercise.reps}</p>
                            <p><strong>Weight:</strong> {exercise.weight}</p>
                            <p><strong>Description:</strong> {exercise.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ExerciseList;
