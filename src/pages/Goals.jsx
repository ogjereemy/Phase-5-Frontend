// // src/components/Goals.js
// import React, { useState, useEffect } from 'react';

// const Goals = () => {
//     const [goals, setGoals] = useState([]);
//     const [newGoal, setNewGoal] = useState('');

//     useEffect(() => {
//         const fetchGoals = async () => {
//             const response = await fetch('/api/goals');
//             const data = await response.json();
//             setGoals(data);
//         };

//         fetchGoals();
//     }, []);

//     const handleAddGoal = async () => {
//         const response = await fetch('/api/goals', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ name: newGoal }),
//         });
//         const data = await response.json();
//         setGoals([...goals, data]);
//         setNewGoal('');
//     };

//     const handleDeleteGoal = async (id) => {
//         await fetch(`/api/goals/${id}`, { method: 'DELETE' });
//         setGoals(goals.filter(goal => goal.id !== id));
//     };

//     return (
//         <div className="goals">
//             <h1>Goals</h1>
//             <input 
//                 type="text" 
//                 value={newGoal} 
//                 onChange={(e) => setNewGoal(e.target.value)} 
//                 placeholder="New Goal"
//             />
//             <button onClick={handleAddGoal}>Add Goal</button>
//             <ul>
//                 {goals.map(goal => (
//                     <li key={goal.id}>
//                         {goal.name}
//                         <button onClick={() => handleDeleteGoal(goal.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Goals;
