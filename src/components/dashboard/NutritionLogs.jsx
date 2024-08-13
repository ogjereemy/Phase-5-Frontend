import React, { useState, useEffect } from 'react';
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

  const fetchNutritionInfo = async (mealType) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/app/nutrition_logs?mealType=${mealType}`);
      const data = await response.json();

      if (data && data.hits && data.hits.length > 0) {
        const { calories, protein, fat, carbs } = data.hits[0].fields;
        setCalories(calories);
        setProtein(protein);
        setFat(fat);
        setCarbs(carbs);
      }
    } catch (error) {
      console.error('Error fetching nutrition info:', error);
    }
  };

  const handleAddLog = () => {
    if (!date || !mealType) {
      alert('Please fill in all required fields.');
      return;
    }

    const newLog = {
      id: Date.now(),
      date,
      mealType,
      calories,
      protein,
      fat,
      carbs,
      notes,
    };

    setLogs([...logs, newLog]);

    setDate('');
    setMealType('');
    setCalories('');
    setProtein('');
    setFat('');
    setCarbs('');
    setNotes('');
  };

  useEffect(() => {
    if (mealType) {
      fetchNutritionInfo(mealType);
    }
  }, [mealType]);

  return (
    <div className="food-logger-container">
      <div className="header-section">
        <h2>Plan Your Diet Plan This Week</h2>
        <p>
        "My favorite exercise is a cross between a lunge and a crunch... I call it lunch." — Anonymous </p>
        <p>Who says you can’t get a good workout while enjoying your favorite meal? It’s all about that multitasking!</p>
        
      </div>
      <div className="form-section">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="text" placeholder="Meal Type" value={mealType} onChange={(e) => setMealType(e.target.value)} />
        <input type="number" placeholder="Calories" value={calories} onChange={(e) => setCalories(e.target.value)} />
        <input type="number" placeholder="Protein (g)" value={protein} onChange={(e) => setProtein(e.target.value)} />
        <input type="number" placeholder="Fat (g)" value={fat} onChange={(e) => setFat(e.target.value)} />
        <input type="number" placeholder="Carbs (g)" value={carbs} onChange={(e) => setCarbs(e.target.value)} />
        <textarea placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
        <button onClick={handleAddLog}>Add Log</button>
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
                <td>{log.mealType}</td>
                <td>{log.calories}</td>
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
