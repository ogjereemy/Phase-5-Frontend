import React, { useState, useEffect } from 'react';
import axios from '../axiosInstance';
import '../WorkoutList.css';


const WorkoutLogging = () => {
  const [workout, setWorkout] = useState([{ date: '', exercise: '', sets: '', reps: '', weight: '', duration: '', category: '', caloriesBurned: '' }]);
  const [loggedWorkouts, setLoggedWorkouts] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('jwtToken');
    setToken(storedToken);

    if (storedToken) {
      const loadWorkouts = async () => {
        try {
          const response = await axios.get('https://fitt-track.onrender.com/app/workouts', {
            headers: {
              Authorization: `Bearer ${storedToken}`
            }
          });
          setLoggedWorkouts(response.data);
        } catch (error) {
          console.error('Error fetching workouts:', error);
        }
      };

      loadWorkouts();
    }
  }, []);

  useEffect(() => {

  }, [loggedWorkouts]);

  const handleChange = (index, e) => {
    const values = [...workout];
    values[index][e.target.name] = e.target.value;
    setWorkout(values);
  };

  const handleAdd = () => {
    setWorkout([...workout, { date: '', exercise: '', sets: '', reps: '', weight: '', duration: '', category: '', caloriesBurned: '' }]);
  };

  const handleDelete = async (index) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      const workoutToDelete = workout[index];
      try {
        await axios.delete('https://fitt-track.onrender.com/app/workouts', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: { workout_id: workoutToDelete.id } 
        });
        const updatedWorkouts = loggedWorkouts.filter((_, i) => i !== index);
        setLoggedWorkouts(updatedWorkouts);
      } catch (error) {
        console.error('Error deleting workout:', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      console.error('No JWT token found.');
      return;
    }
    try {
      await axios.post('https://fitt-track.onrender.com/app/workouts', workout, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const response = await axios.get('https://fitt-track.onrender.com/app/workouts', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setLoggedWorkouts(response.data);
      setWorkout([{ date: '', exercise: '', sets: '', reps: '', weight: '', duration: '', category: '', caloriesBurned: '' }]); // Reset the form
    } catch (error) {
      console.error('Error submitting workout:', error);
    }
  };

  const totalWeightLifted = loggedWorkouts.reduce((acc, curr) => acc + (parseFloat(curr.weight) || 0) * (parseFloat(curr.sets) || 0) * (parseFloat(curr.reps) || 0), 0);
  const totalCaloriesBurned = loggedWorkouts.reduce((acc, curr) => acc + (parseFloat(curr.caloriesBurned) || 0), 0);
  const totalHours = loggedWorkouts.reduce((acc, curr) => acc + (parseFloat(curr.duration) || 0) / 60, 0);
  const totalSets = loggedWorkouts.reduce((acc, curr) => acc + (parseFloat(curr.sets) || 0), 0);

  const achievements = [
    { value: totalHours.toFixed(2), label: 'hours' },
    { value: totalCaloriesBurned.toFixed(0), label: 'Kcal' },
    { value: totalSets, label: 'Sets' },
  ];

  return (
    <div className='main-content'>
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
                type="text"
                name="duration"
                placeholder="Duration (minutes)"
                value={item.duration}
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
          <button type="button" onClick={handleAdd}>Add More</button>
          <button type="submit">Save Workout</button>
        </form>
        <Achievements achievements={achievements} />
        <div className="summary">
          <h3>Summary</h3>
          <p>Total Weight Lifted: {totalWeightLifted.toFixed(0)} lbs</p>
          <p>Total Calories Burned: {totalCaloriesBurned.toFixed(0)} kcal</p>
        </div>
      </div>
    </div>
  );
};

export default WorkoutLogging;
