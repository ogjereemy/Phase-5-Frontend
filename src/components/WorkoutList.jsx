import React, { useState, useEffect } from 'react';
import '../WorkoutList.css';
import Achievements from './Achievement';

const WorkoutLogging = () => {
  const [workout, setWorkout] = useState([{ date: '', exercise: '', sets: '', reps: '', weight: '', duration: '', category: '', caloriesBurned: '' }]);
  const [loggedWorkouts, setLoggedWorkouts] = useState([]);

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem('loggedWorkouts')) || [];
    setLoggedWorkouts(storedWorkouts);
  }, []);

  useEffect(() => {
    localStorage.setItem('loggedWorkouts', JSON.stringify(loggedWorkouts));
  }, [loggedWorkouts]);

  const handleChange = (index, e) => {
    const values = [...workout];
    values[index][e.target.name] = e.target.value;
    setWorkout(values);
  };

  const handleAdd = () => {
    setWorkout([...workout, { date: '', exercise: '', sets: '', reps: '', weight: '', duration: '', category: '', caloriesBurned: '' }]);
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      const values = [...workout];
      values.splice(index, 1);
      setWorkout(values);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedWorkouts([...loggedWorkouts, ...workout]);
    setWorkout([{ date: '', exercise: '', sets: '', reps: '', weight: '', duration: '', category: '', caloriesBurned: '' }]); // Reset the form
  };

  const totalWeightLifted = loggedWorkouts.reduce((acc, curr) => acc + (parseFloat(curr.weight) || 0) * (parseFloat(curr.sets) || 0) * (parseFloat(curr.reps) || 0), 0);
  const totalCaloriesBurned = loggedWorkouts.reduce((acc, curr) => acc + (parseFloat(curr.caloriesBurned) || 0), 0);
  const totalHours = loggedWorkouts.reduce((acc, curr) => acc + (parseFloat(curr.duration) || 0) / 60, 0);
  const totalSets = loggedWorkouts.reduce((acc, curr) => acc + (parseFloat(curr.sets) || 0), 0);
  const totalPoses = loggedWorkouts.filter(curr => curr.category.toLowerCase() === 'yoga').reduce((acc, curr) => acc + (parseFloat(curr.reps) || 0), 0);

  const achievements = [
    { value: totalHours.toFixed(2), label: 'hours' },
    { value: totalCaloriesBurned.toFixed(0), label: 'Kcal' },
    { value: totalPoses, label: 'Poses' },
    { value: totalSets, label: 'Sets' },
  ];

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Log Your Workout</h2>
        {workout.map((item, index) => (
          <div key={index}>
            <input
              type="date"
              name="date"
              value={item.date}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <input
              type="text"
              name="exercise"
              placeholder="Exercise"
              value={item.exercise}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <input
              type="number"
              name="sets"
              placeholder="Sets"
              value={item.sets}
              onChange={(e) => handleChange(index, e)}
              min="1"
              required
            />
            <input
              type="number"
              name="reps"
              placeholder="Reps"
              value={item.reps}
              onChange={(e) => handleChange(index, e)}
              min="1"
              required
            />
            <input
              type="number"
              name="weight"
              placeholder="Weight (lbs)"
              value={item.weight}
              onChange={(e) => handleChange(index, e)}
              min="0"
              required
            />
            <input
              type="number"
              name="duration"
              placeholder="Duration (minutes)"
              value={item.duration}
              onChange={(e) => handleChange(index, e)}
              min="0"
            />
            <input
              type="text"
              name="category"
              placeholder="Category (e.g., Yoga)"
              value={item.category}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="number"
              name="caloriesBurned"
              placeholder="Calories Burned"
              value={item.caloriesBurned}
              onChange={(e) => handleChange(index, e)}
              min="0"
            />
            <button
              type="button"
              className="delete-exercise-btn"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAdd}>Add Exercise</button>
        <button type="submit">Save Workout</button>
      </form>
      <Achievements achievements={achievements} />
      <div className="summary">
        <h3>Summary</h3>
        <p>Total Weight Lifted: {totalWeightLifted.toFixed(0)} lbs</p>
        <p>Total Calories Burned: {totalCaloriesBurned.toFixed(0)} kcal</p>
      </div>
    </div>
  );
};

export default WorkoutLogging;
