import React, { useState, useEffect } from 'react';
import '../../../src/NutritionLogging.css';

const NutritionLogging = () => {
  const [logs, setLogs] = useState([]);
  const [userId, setUserId] = useState('');
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
    const newLog = {
      userId,
      date,
      mealType,
      calories,
      protein,
      fat,
      carbs,
      notes,
    };

    setLogs([...logs, newLog]);

    setUserId('');
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
    <div className="main-content">
      <div className="header-section">
        <h2>Plan Your Diet Plan This Week</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      
      <div className="form-section">
        <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
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
              <th>Food</th>
              <th>Meal</th>
              <th>Calories</th>
              <th>Protein</th>
              <th>Fat</th>
              <th>Carbs</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{log.userId}</td>
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

        
    