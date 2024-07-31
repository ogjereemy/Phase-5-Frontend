// // src/components/Progress.js
// import React, { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';

// const Progress = () => {
//     const [progressData, setProgressData] = useState({
//         labels: [],
//         datasets: [
//             {
//                 label: 'Progress',
//                 data: [],
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 1,
//             },
//         ],
//     });

//     useEffect(() => {
//         const fetchProgressData = async () => {
//             const response = await fetch('/api/progress');
//             const data = await response.json();
//             setProgressData({
//                 labels: data.labels,
//                 datasets: [
//                     {
//                         label: 'Progress',
//                         data: data.data,
//                         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                         borderColor: 'rgba(75, 192, 192, 1)',
//                         borderWidth: 1,
//                     },
//                 ],
//             });
//         };

//         fetchProgressData();
//     }, []);

//     const options = {
//         scales: {
//             y: {
//                 beginAtZero: true,
//             },
//         },
//     };

//     return (
//         <div className="progress">
//             <h1>Goal Progress</h1>
//             <Bar data={progressData} options={options} />
//         </div>
//     );
// };

// export default Progress;
