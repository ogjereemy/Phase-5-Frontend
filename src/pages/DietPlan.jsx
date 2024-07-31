// // src/components/DietPlan.js
// import React, { useState, useEffect } from 'react';

// const DietPlan = () => {
//     const [dietPlans, setDietPlans] = useState([]);
//     const [newDietPlan, setNewDietPlan] = useState('');

//     useEffect(() => {
//         const fetchDietPlans = async () => {
//             const response = await fetch('/api/diet-plans');
//             const data = await response.json();
//             setDietPlans(data);
//         };

//         fetchDietPlans();
//     }, []);

//     const handleAddDietPlan = async () => {
//         const response = await fetch('/api/diet-plans', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ name: newDietPlan }),
//         });
//         const data = await response.json();
//         setDietPlans([...dietPlans, data]);
//         setNewDietPlan('');
//     };

//     const handleDeleteDietPlan = async (id) => {
//         await fetch(`/api/diet-plans/${id}`, { method: 'DELETE' });
//         setDietPlans(dietPlans.filter(dietPlan => dietPlan.id !== id));
//     };

//     return (
//         <div className="diet-plan">
//             <h1>Diet Plans</h1>
//             <input 
//                 type="text" 
//                 value={newDietPlan} 
//                 onChange={(e) => setNewDietPlan(e.target.value)} 
//                 placeholder="New Diet Plan"
//             />
//             <button onClick={handleAddDietPlan}>Add Diet Plan</button>
//             <ul>
//                 {dietPlans.map(dietPlan => (
//                     <li key={dietPlan.id}>
//                         {dietPlan.name}
//                         <button onClick={() => handleDeleteDietPlan(dietPlan.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default DietPlan;
