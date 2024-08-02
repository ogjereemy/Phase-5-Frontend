import axios from 'axios';
import React, { useState } from 'react';


const WorkoutLogging = () => {
  const [workout, setWorkout] = useState([{ exercise: '', sets: '', reps: '', weight: '' }]);

  const handleChange = (index, e) => {
    const values = [...workout];
    values[index][e.target.name] = e.target.value;
    setWorkout(values);
  };

  const handleAdd = () => {
    setWorkout([...workout, { exercise: '', sets: '', reps: '', weight: '' }]);
  };

  const handleDelete = (index) => {
    const values = [...workout];
    values.splice(index, 1);
    setWorkout(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/workouts', { workout })
      .then(response => {
        console.log(response.data);
        // Handle successful submission here
      })
      .catch(error => {
        console.error('There was an error submitting the workout!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log Your Workout</h2>
      {workout.map((workout, index) => (
        <div key={index}>
          <input
            type="text"
            name="exercise"
            placeholder="Exercise"
            value={workout.exercise}
            onChange={(e) => handleChange(index, e)}
            required
          />
          <input
            type="number"
            name="sets"
            placeholder="Sets"
            value={workout.sets}
            onChange={(e) => handleChange(index, e)}
            required
          />
          <input
            type="number"
            name="reps"
            placeholder="Reps"
            value={workout.reps}
            onChange={(e) => handleChange(index, e)}
            required
          />
          <input
            type="number"
            name="weight"
            placeholder="Weight"
            value={workout.weight}
            onChange={(e) => handleChange(index, e)}
            required
          />
          <button type="button" onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      <button type="button" onClick={handleAdd}>Add Exercise</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default WorkoutLogging;
