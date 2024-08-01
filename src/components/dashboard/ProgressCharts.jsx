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

import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const Progress = () => {
  const [progressData, setProgressData] = useState({
    weight: [],
    bodyMeasurements: [],
    performanceMetrics: [],
  });

  useEffect(() => {
    // Fetch progress data from API
    axios.get('/api/progress').then(response => {
      setProgressData(response.data);
    });
  }, []);

  const weightData = {
    labels: progressData.weight.map(entry => entry.date),
    datasets: [
      {
        label: 'Weight',
        data: progressData.weight.map(entry => entry.value),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const bodyMeasurementsData = {
    labels: progressData.bodyMeasurements.map(entry => entry.date),
    datasets: [
      {
        label: 'Body Measurements',
        data: progressData.bodyMeasurements.map(entry => entry.value),
        fill: false,
        backgroundColor: 'rgba(153,102,255,0.2)',
        borderColor: 'rgba(153,102,255,1)',
      },
    ],
  };

  const performanceMetricsData = {
    labels: progressData.performanceMetrics.map(entry => entry.date),
    datasets: [
      {
        label: 'Performance Metrics',
        data: progressData.performanceMetrics.map(entry => entry.value),
        fill: false,
        backgroundColor: 'rgba(255,159,64,0.2)',
        borderColor: 'rgba(255,159,64,1)',
      },
    ],
  };

  return (
    <Container>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Weight Progress</Card.Title>
          <Line data={weightData} />
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Body Measurements Progress</Card.Title>
          <Line data={bodyMeasurementsData} />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Performance Metrics Progress</Card.Title>
          <Line data={performanceMetricsData} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Progress;
