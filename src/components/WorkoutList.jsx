import React, { useState } from 'react';

const WorkoutLogging = () => {
  const [workout, setWorkout] = useState([{ exercise: '', sets: '', reps: '', weight: '', duration: '', category: '', caloriesBurned: '' }]);
  const [loggedWorkouts, setLoggedWorkouts] = useState([]);
  
  const handleChange = (index, e) => {
    const values = [...workout];
    values[index][e.target.name] = e.target.value;
    setWorkout(values);
  };

  const handleAdd = () => {
    setWorkout([...workout, { exercise: '', sets: '', reps: '', weight: '', duration: '', category: '', caloriesBurned: '' }]);
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
    setWorkout([{ exercise: '', sets: '', reps: '', weight: '', duration: '', category: '', caloriesBurned: '' }]); // Reset the form
  };

  const totalWeightLifted = loggedWorkouts.reduce((acc, curr) => acc + (parseFloat(curr.weight) || 0) * (parseFloat(curr.sets) || 0) * (parseFloat(curr.reps) || 0), 0);
  
  const totalCaloriesBurned = loggedWorkouts.reduce((acc, curr) => acc + (parseFloat(curr.caloriesBurned) || 0), 0);

  const getWeeklySummary = () => {
    const weeks = {};
    loggedWorkouts.forEach(workout => {
      const date = new Date(workout.date);
      const weekNumber = Math.ceil(date.getDate() / 7);
      const year = date.getFullYear();
      const key = `${year}-W${weekNumber}`;
      if (!weeks[key]) weeks[key] = 0;
      weeks[key] += (parseFloat(workout.weight) || 0) * (parseFloat(workout.sets) || 0) * (parseFloat(workout.reps) || 0);
    });
    return weeks;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Log Your Workout</h2>
        {workout.map((item, index) => (
          <div key={index}>
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
              type="text"
              name="duration"
              placeholder="Duration (minutes)"
              value={item.duration}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="text"
              name="category"
              placeholder="Category (e.g., Cardio, Strength)"
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
            <button type="button" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
        <button type="button" onClick={handleAdd}>Add Exercise</button>
        <button type="submit">Submit</button>
      </form>
      <h2>Total Weight Lifted</h2>
      <p>{totalWeightLifted} lbs</p>
      <h2>Total Calories Burned</h2>
      <p>{totalCaloriesBurned} calories</p>
      <h2>Weekly Workout Summary</h2>
      <ul>
        {Object.entries(getWeeklySummary()).map(([week, totalWeight], index) => (
          <li key={index}>{week}: {totalWeight} lbs</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutLogging;
