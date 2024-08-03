
import React, { useState } from 'react';


const NutritionLogging = () => {
  const [nutrition, setNutrition] = useState([{ meal: '', calories: '', protein: '', carbs: '', fats: '' }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    if (isNaN(value) && (name === 'calories' || name === 'protein' || name === 'carbs' || name === 'fats')) {
      return; 
    }
    const values = [...nutrition];
    values[index][name] = value;
    setNutrition(values);
  };

  const handleAdd = () => {
    setNutrition([...nutrition, { meal: '', calories: '', protein: '', carbs: '', fats: '' }]);
  };

  const handleRemove = (index) => {
    const values = [...nutrition];
    values.splice(index, 1);
    setNutrition(values);
  };

  const handleClear = () => {
    setNutrition([{ meal: '', calories: '', protein: '', carbs: '', fats: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem('nutritionData', JSON.stringify(nutrition));
    console.log(nutrition);
  };

  const calculateTotal = (type) => {
    return nutrition.reduce((total, entry) => total + (parseFloat(entry[type]) || 0), 0);
  };

  return (
    <div className="nutrition-container">
      <form onSubmit={handleSubmit} className="nutrition-form">
        {nutrition.map((nutrient, index) => (
          <div key={index} className="nutrition-entry">
            <input
              type="text"
              name="meal"
              placeholder="Meal"
              value={nutrient.meal}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <input
              type="number"
              name="calories"
              placeholder="Calories"
              value={nutrient.calories}
              onChange={(e) => handleChange(index, e)}
              min="0"
              required
            />
            <input
              type="number"
              name="protein"
              placeholder="Protein (g)"
              value={nutrient.protein}
              onChange={(e) => handleChange(index, e)}
              min="0"
              required
            />
            <input
              type="number"
              name="carbs"
              placeholder="Carbs (g)"
              value={nutrient.carbs}
              onChange={(e) => handleChange(index, e)}
              min="0"
              required
            />
            <input
              type="number"
              name="fats"
              placeholder="Fats (g)"
              value={nutrient.fats}
              onChange={(e) => handleChange(index, e)}
              min="0"
              required
            />
            <button type="button" onClick={() => handleRemove(index)} className="remove-button">Remove</button>
          </div>
        ))}
        <button type="button" onClick={handleAdd} className="add-button">Add Meal</button>
        <button type="button" onClick={handleClear} className="clear-button">Clear All</button>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <div className="nutrition-summary">
        <h3>Nutrition Summary</h3>
        <p>Total Calories: {calculateTotal('calories')}</p>
        <p>Total Protein: {calculateTotal('protein')} g</p>
        <p>Total Carbs: {calculateTotal('carbs')} g</p>
        <p>Total Fats: {calculateTotal('fats')} g</p>
      </div>
    </div>
  );
}

export default NutritionLogging;
