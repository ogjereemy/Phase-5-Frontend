// // src/components/Workout.js
// import React, { useState, useEffect } from 'react';

// const Workout = () => {
//     const [workouts, setWorkouts] = useState([]);
//     const [newWorkout, setNewWorkout] = useState('');

//     useEffect(() => {
//         const fetchWorkouts = async () => {
//             const response = await fetch('/api/workouts');
//             const data = await response.json();
//             setWorkouts(data);
//         };

//         fetchWorkouts();
//     }, []);

//     const handleAddWorkout = async () => {
//         const response = await fetch('/api/workouts', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ name: newWorkout }),
//         });
//         const data = await response.json();
//         setWorkouts([...workouts, data]);
//         setNewWorkout('');
//     };

//     const handleDeleteWorkout = async (id) => {
//         await fetch(`/api/workouts/${id}`, { method: 'DELETE' });
//         setWorkouts(workouts.filter(workout => workout.id !== id));
//     };

//     return (
//         <div className="workout">
//             <h1>Workouts</h1>
//             <input 
//                 type="text" 
//                 value={newWorkout} 
//                 onChange={(e) => setNewWorkout(e.target.value)} 
//                 placeholder="New Workout"
//             />
//             <button onClick={handleAddWorkout}>Add Workout</button>
//             <ul>
//                 {workouts.map(workout => (
//                     <li key={workout.id}>
//                         {workout.name}
//                         <button onClick={() => handleDeleteWorkout(workout.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Workout;
