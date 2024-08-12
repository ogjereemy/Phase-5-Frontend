import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NutritionLogging.css';

const NutritionLogging = () => {
  const [logs, setLogs] = useState([]);
  const [date, setDate] = useState('');
  const [mealType, setMealType] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [carbs, setCarbs] = useState('');
  const [notes, setNotes] = useState('');

  const fetchNutritionLogs = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/app/nutrition_logs', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setLogs(response.data);
    } catch (error) {
      console.error('Error fetching nutrition logs:', error.response ? error.response.data : error.message);
    }
  };

  const addNutritionLog = async () => {
    if (!date || !mealType) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const newLog = {
        date,
        meal_type: mealType,
        calory_intake: calories,
        protein,
        fat,
        carbs,
        notes,
      };

      const response = await axios.post('http://127.0.0.1:5000/app/nutrition_logs', newLog, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setLogs([...logs, response.data]);

      // Clear form fields after adding log
      setDate('');
      setMealType('');
      setCalories('');
      setProtein('');
      setFat('');
      setCarbs('');
      setNotes('');
    } catch (error) {
      console.error('Error adding nutrition log:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchNutritionLogs();
  }, []);

  return (
    <div className="food-logger-container">
      <div className="header-section">
        <h2>Plan Your Diet Plan This Week</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="form-section">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input type="text" placeholder="Meal Type" value={mealType} onChange={(e) => setMealType(e.target.value)} required />
        <input type="number" placeholder="Calories" value={calories} onChange={(e) => setCalories(e.target.value)} />
        <input type="number" placeholder="Protein (g)" value={protein} onChange={(e) => setProtein(e.target.value)} />
        <input type="number" placeholder="Fat (g)" value={fat} onChange={(e) => setFat(e.target.value)} />
        <input type="number" placeholder="Carbs (g)" value={carbs} onChange={(e) => setCarbs(e.target.value)} />
        <textarea placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
        <button onClick={addNutritionLog}>Add Log</button>
      </div>

      <div className="log-table">
        <table>
          <thead>
            <tr>
              <th>Meal</th>
              <th>Calories</th>
              <th>Protein (g)</th>
              <th>Fat (g)</th>
              <th>Carbs (g)</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id}>
                <td>{log.meal_type}</td>
                <td>{log.calory_intake}</td>
                <td>{log.protein}g</td>
                <td>{log.fat}g</td>
                <td>{log.carbs}g</td>
                <td>{log.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NutritionLogging;
