import React, { useState, useEffect } from 'react';
import axios from '../../axiosInstance';
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
      const response = await axios.get('https://phase-5-backend-2.onrender.com/app/nutrition_logs', {
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

      const response = await axios.post('https://phase-5-backend-2.onrender.com/app/nutrition_logs', newLog, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setLogs([...logs, response.data]);

  
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
        <h2>Plan Your Diet This Week</h2>
        <p>
        "My favorite exercise is a cross between a lunge and a crunch... I call it lunch." </p>
        <p>Start planning for your week ahead by tracking your food intake and finding healthy recipes. You'll also be able to see how your progress compares to your goals.</p>
        <img src="https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        <p>Who says you can’t get a good workout while enjoying your favorite meal? It’s all about that multitasking!</p>
        
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
