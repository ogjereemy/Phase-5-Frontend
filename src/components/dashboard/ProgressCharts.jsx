

// import React, { useState, useEffect } from 'react';
// import { Container, Card } from 'react-bootstrap';
// import { Line } from 'react-chartjs-2';
// import axios from 'axios';

// const Progress = () => {
//   const [progressData, setProgressData] = useState({
//     weight: [],
//     bodyMeasurements: [],
//     performanceMetrics: [],
//   });

//   useEffect(() => {
//     // Fetch progress data from API
//     axios.get('/api/progress').then(response => {
//       setProgressData(response.data);
//     });
//   }, []);

//   const weightData = {
//     labels: progressData.weight.map(entry => entry.date),
//     datasets: [
//       {
//         label: 'Weight',
//         data: progressData.weight.map(entry => entry.value),
//         fill: false,
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         borderColor: 'rgba(75,192,192,1)',
//       },
//     ],
//   };

//   const bodyMeasurementsData = {
//     labels: progressData.bodyMeasurements.map(entry => entry.date),
//     datasets: [
//       {
//         label: 'Body Measurements',
//         data: progressData.bodyMeasurements.map(entry => entry.value),
//         fill: false,
//         backgroundColor: 'rgba(153,102,255,0.2)',
//         borderColor: 'rgba(153,102,255,1)',
//       },
//     ],
//   };

//   const performanceMetricsData = {
//     labels: progressData.performanceMetrics.map(entry => entry.date),
//     datasets: [
//       {
//         label: 'Performance Metrics',
//         data: progressData.performanceMetrics.map(entry => entry.value),
//         fill: false,
//         backgroundColor: 'rgba(255,159,64,0.2)',
//         borderColor: 'rgba(255,159,64,1)',
//       },
//     ],
//   };

//   return (
//     <Container>
//       <Card className="mb-4">
//         <Card.Body>
//           <Card.Title>Weight Progress</Card.Title>
//           <Line data={weightData} />
//         </Card.Body>
//       </Card>
//       <Card className="mb-4">
//         <Card.Body>
//           <Card.Title>Body Measurements Progress</Card.Title>
//           <Line data={bodyMeasurementsData} />
//         </Card.Body>
//       </Card>
//       <Card>
//         <Card.Body>
//           <Card.Title>Performance Metrics Progress</Card.Title>
//           <Line data={performanceMetricsData} />
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default Progress;

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
    axios.get('/api/progress').then(response => {
      setProgressData(response.data);
    });
  }, []);

  const createChartData = (label, data, color) => ({
    labels: data.map(entry => entry.date),
    datasets: [
      {
        label: label,
        data: data.map(entry => entry.value),
        fill: false,
        backgroundColor: color[0],
        borderColor: color[1],
      },
    ],
  });

  return (
    <Container>
      <h1>Your progress</h1>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Weight Progress</Card.Title>
          <Line data={createChartData('Weight', progressData.weight, ['rgba(75,192,192,0.2)', 'rgba(75,192,192,1)'])} />
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Body Measurements Progress</Card.Title>
          <Line data={createChartData('Body Measurements', progressData.bodyMeasurements, ['rgba(153,102,255,0.2)', 'rgba(153,102,255,1)'])} />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Performance Metrics Progress</Card.Title>
          <Line data={createChartData('Performance Metrics', progressData.performanceMetrics, ['rgba(255,159,64,0.2)', 'rgba(255,159,64,1)'])} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Progress;
