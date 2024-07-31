// // src/components/Overview.js
// import React from 'react';
// import { useContext } from'react';
// import { AuthContext } from '../context/AuthContext';
// import { Link } from 'react-router-dom';
// import Chart from 'chart.js/auto';
// import { Bar } from 'react-chartjs-2';

// const Overview = () => {
//     const { auth, logout } = useContext(AuthContext);
//     const data = {
//         labels: ['Food', 'Meal', 'Calories', 'Proteins', 'Carbs'],
//         datasets: [
//             {
//                 label: 'Progress',
//                 data: [50, 60, 70, 80, 90],
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 1,
//             },
//         ],
//     };

//     const options = {
//         scales: {
//             y: {
//                 beginAtZero: true,
//             },
//         },
//     };

//     return (
//         <div className="dashboard">
//             <div className="sidebar">
//                 <h2>Menu</h2>
//                 <Link to="/user-profile" className="sidebar-link">Profile</Link>
//                 <Link to="/overview" className="sidebar-link">Overview</Link>
//                 <Link to="/workout" className="sidebar-link">Workout</Link>
//                 <Link to ="/coach-dashboard" className='sidebar-link'>Coach Dashboard</Link>
//                 <Link to="/diet-plan" className="sidebar-link">Diet Plan</Link>
//                 <Link to="/goals" className="sidebar-link">Goals</Link>
//                 <Link to="/user-dashboard" className="sidebar-link">My Schedule</Link>
//                 <Link to="/progress" className="sidebar-link">Progress</Link>
//                 <Link to="/help" className="sidebar-link">Help</Link>
//                 <button onClick={logout} className="btn btn-danger">Logout</button>
//                 {/* <Link to="/logout" className="sidebar-link">Logout</Link> */}
//             </div>
//             <div className="main-content">
//                 <header className="header">
//                     <h1>Welcome Back!</h1>
//                     <div className="search-bar">
//                         <input type="text" placeholder="Search" />
//                     </div>
//                 </header>
//                 <div className="content">
//                     <div className="activity-cards">
//                         <div className="activity-card">Workout</div>
//                         <div className="activity-card">Calories</div>
//                         <div className="activity-card">Steps</div>
//                     </div>
//                     <div className="schedule-goals">
//                         <div className="schedule">
//                             <h2>My Schedule</h2>
//                             <ul>
//                                 <li>Monday: Yoga Stretch</li>
//                                 <li>Tuesday: Cardio</li>
//                                 <li>Wednesday: Strength Training</li>
//                                 <li>Thursday: Rest Day</li>
//                                 <li>Friday: HIIT</li>
//                             </ul>
//                         </div>
//                         <div className="goals">
//                             <h2>Goals</h2>
//                             <ul>
//                                 <li>Lose 5 lbs</li>
//                                 <li>Run 5k</li>
//                                 <li>Increase flexibility</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="progress-chart">
//                         <h2>Goal Progress</h2>
//                         <Bar data={data} options={options} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Overview;


