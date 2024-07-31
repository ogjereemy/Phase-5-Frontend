// // src/components/dashboard/ProgressCharts.js
// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ProgressCharts = () => {
//   const data = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//     datasets: [
//       {
//         label: 'Weight',
//         data: [65, 64, 63, 62, 61, 60],
//         borderColor: 'rgba(75,192,192,1)',
//         fill: false,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="card mb-4">
//       <div className="card-body">
//         <h5 className="card-title">Progress Charts</h5>
//         <div style={{ height: '300px' }}>
//           <Line data={data} options={options} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProgressCharts;
