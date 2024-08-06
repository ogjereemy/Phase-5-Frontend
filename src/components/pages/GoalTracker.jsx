import React, { useState } from 'react';
import './goaltracker.css';

const GoalTracker = () => {
  const [goal, setGoal] = useState(null);
  const [goals, setGoals] = useState([
    { id: 1, type: 'Weight', metric: '61.2 kg', goal: '5.81 kg' },
    { id: 2, type: 'Steps', metric: '3560/4000' },
    { id: 3, type: 'Workout', metric: '19 min', average: '16 min' },
    { id: 4, type: 'Calories', metric: '80 cal', average: '102 cal' }
  ]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  const deleteGoal = (goalId) => {
    const updatedGoals = goals.filter((goal) => goal.id !== goalId);
    setGoals(updatedGoals);
  };

  const updateGoal = (goalId, updatedGoal) => {
    const updatedGoals = goals.map((goal) =>
      goal.id === goalId ? updatedGoal : goal
    );
    setGoals(updatedGoals);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Goal Tracker</h1>
        <h2>Record Changes</h2>
      </div>
      <div className="dailyContainer">
        <h3>Daily</h3>
        <div className="cardContainer">
          {goals.map((goal) => (
            <div className="card" key={goal.id}>
              <h4>{goal.type}</h4>
              <p className="metric">{goal.metric}</p>
              {goal.goal && <p className="goal">Goal: {goal.goal}</p>}
              {goal.average && <p>Weekly Average: {goal.average}</p>}
              <div className="chart"></div>
              <button onClick={() => deleteGoal(goal.id)}>Delete</button>
              <button onClick={() => updateGoal(goal.id, { ...goal, metric: 'Updated Metric' })}>Update</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalTracker;



// import React, { useState, useEffect } from 'react';
// import './goaltracker.css';
// import axios from 'axios';

// const GoalTracker = () => {
//   const [goals, setGoals] = useState([]);

//   useEffect(() => {
//     const fetchGoals = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:5000/app/goals');
//         const data = response.data;
//         setGoals(data);
//       } catch (error) {
//         console.error('Error fetching goals:', error);
//       }
//     };

//     fetchGoals();
//   }, []);

//   const addGoal = async (goal) => {
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/app/goals', goal);
//       setGoals([...goals, response.data]);
//     } catch (error) {
//       console.error('Error adding goal:', error);
//     }
//   };

//   const deleteGoal = async (goalId) => {
//     try {
//       await axios.delete(`http://127.0.0.1:5000/app/goals/${goalId}`);
//       const updatedGoals = goals.filter((goal) => goal.id !== goalId);
//       setGoals(updatedGoals);
//     } catch (error) {
//       console.error('Error deleting goal:', error);
//     }
//   };

//   const updateGoal = async (goalId, updatedGoal) => {
//     try {
//       const response = await axios.put(`http://127.0.0.1:5000/app/goals/${goalId}`, updatedGoal);
//       const updatedGoals = goals.map((goal) =>
//         goal.id === goalId ? response.data : goal
//       );
//       setGoals(updatedGoals);
//     } catch (error) {
//       console.error('Error updating goal:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <h1>Goal Tracker</h1>
//         <h2>Record Changes</h2>
//       </div>
//       <div className="dailyContainer">
//         <h3>Daily</h3>
//         <div className="cardContainer">
//           {goals.map((goal) => (
//             <div className="card" key={goal.id}>
//               <h4>{goal.type}</h4>
//               <p className="metric">{goal.metric}</p>
//               {goal.goal && <p className="goal">Goal: {goal.goal}</p>}
//               {goal.average && <p>Weekly Average: {goal.average}</p>}
//               <div className="chart"></div>
//               <button onClick={() => deleteGoal(goal.id)}>Delete</button>
//               <button onClick={() => updateGoal(goal.id, { ...goal, metric: 'Updated Metric' })}>Update</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GoalTracker;

