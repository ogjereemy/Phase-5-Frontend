// // src/components/MySchedule.js
// import React, { useState, useEffect } from 'react';

// const MySchedule = () => {
//     const [schedule, setSchedule] = useState([]);
//     const [newScheduleItem, setNewScheduleItem] = useState('');

//     useEffect(() => {
//         const fetchSchedule = async () => {
//             const response = await fetch('/api/schedule');
//             const data = await response.json();
//             setSchedule(data);
//         };

//         fetchSchedule();
//     }, []);

//     const handleAddScheduleItem = async () => {
//         const response = await fetch('/api/schedule', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ name: newScheduleItem }),
//         });
//         const data = await response.json();
//         setSchedule([...schedule, data]);
//         setNewScheduleItem('');
//     };

//     const handleDeleteScheduleItem = async (id) => {
//         await fetch(`/api/schedule/${id}`, { method: 'DELETE' });
//         setSchedule(schedule.filter(item => item.id !== id));
//     };

//     return (
//         <div className="my-schedule">
//             <h1>My Schedule</h1>
//             <input 
//                 type="text" 
//                 value={newScheduleItem} 
//                 onChange={(e) => setNewScheduleItem(e.target.value)} 
//                 placeholder="New Schedule Item"
//             />
//             <button onClick={handleAddScheduleItem}>Add Item</button>
//             <ul>
//                 {schedule.map(item => (
//                     <li key={item.id}>
//                         {item.name}
//                         <button onClick={() => handleDeleteScheduleItem(item.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default MySchedule;
