import React from 'react';

const GoalList = ({ goals, updateGoal }) => {
  const handleUpdate = (description) => {
    const newValue = parseFloat(prompt(`Enter new value for ${description}:`));
    updateGoal(description, newValue);
  };

  return (
    <div>
      <h2>Goals</h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal.description}>
            {goal.description}: {goal.currentValue}/{goal.targetValue} ({goal.currentValue >= goal.targetValue ? 'Completed' : 'In Progress'})
            <button onClick={() => handleUpdate(goal.description)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;
