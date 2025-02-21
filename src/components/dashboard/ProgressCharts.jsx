// src/components/dashboard/Progress.jsx
import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import axios from '../../axiosInstance';
import AddProgressLog from './AddProgressLog';
import GoalTracker from '../GoalTracker';

const Progress = () => {
  const { clientId } = useParams();
  const [progressData, setProgressData] = useState({
    weight: [],
    bodyMeasurements: [],
    performanceMetrics: [],
  });

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        const response = await axios.get('https://phase-5-backend-2.onrender.com/app/progress_logs', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = response.data;
    
  

        setProgressData({
          weight: data.map(log => ({ date: log.date, value: log.weight })),
          bodyMeasurements: data.map(log => ({ date: log.date, value: log.body_fat_percentage })),
          performanceMetrics: data.map(log => ({ date: log.date, value: log.muscle_mass })),
        });
      } catch (error) {
        console.error('Error fetching progress data:', error.response ? error.response.data : error.message);
      }
    };

    fetchProgressData();
  }, [clientId]);

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
    <div className='main-content'>
      <div className='header-section'>  
        <h1 className="progress-title">Your Progress</h1>
        <p>Measuring every step forward, progress tracking illuminates your path to success, highlighting the dedication and effort that turns aspirations into reality.</p>
        <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <Container className="progress-container">
        <Card className="progress-card">
          <Card.Body>
            <Card.Title>Weight Progress</Card.Title>
            <Line data={createChartData('Weight', progressData.weight, ['rgba(75,192,192,0.2)', 'rgba(75,192,192,1)'])} />
          </Card.Body>
        </Card>
        <Card className="progress-card">
          <Card.Body>
            <Card.Title>Body Measurements Progress</Card.Title>
            <Line data={createChartData('Body Fat Percentage', progressData.bodyMeasurements, ['rgba(153,102,255,0.2)', 'rgba(153,102,255,1)'])} />
          </Card.Body>
        </Card>
        <Card className="progress-card">
          <Card.Body>
            <Card.Title>Performance Metrics Progress</Card.Title>
            <Line data={createChartData('Muscle Mass', progressData.performanceMetrics, ['rgba(255,159,64,0.2)', 'rgba(255,159,64,1)'])} />
          </Card.Body>
        </Card>
        <AddProgressLog/>
      </Container>
        {/* <GoalTracker /> */}
    </div>
  );
};

export default Progress;
