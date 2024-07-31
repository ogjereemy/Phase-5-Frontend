import React, { useState } from 'react';

const GoalForm = ({ addGoal }) => {
  const [description, setDescription] = useState('');
  const [targetValue, setTargetValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addGoal({ description, targetValue: parseFloat(targetValue), currentValue: 0 });
    setDescription('');
    setTargetValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Goal</h2>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Target Value:
        <input type="number" value={targetValue} onChange={(e) => setTargetValue(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;
