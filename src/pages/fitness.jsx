zzzz
import React, { useState } from 'react';
import UserForm from './pages/components/UserForm';
import GoalForm from './pages/components/GoalForm';
import GoalList from './pages/components/GoalList';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  const updateGoal = (description, newValue) => {
    setGoals(goals.map(goal => goal.description === description ? { ...goal, currentValue: newValue } : goal));
  };

  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      {!user ? (
        <UserForm setUser={setUser} />
      ) : (
        <>
          <div>
            <h2>User Information</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Height: {user.height} cm</p>
            <p>Weight: {user.weight} kg</p>
          </div>
          <GoalForm addGoal={addGoal} />
          <GoalList goals={goals} updateGoal={updateGoal} />
        </>
      )}
    </div>
  );
};

export default App;