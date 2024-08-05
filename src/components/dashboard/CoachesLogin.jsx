// src/components/dashboard/CoachDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CoachDashboard.css';
import ClientList from './ClientList'; // Import the ClientList component

function CoachDashboard() {
  return (
    <div className="coach-dashboard">
      <h1>Coach Dashboard</h1>

      {/* Other sections such as managing workout plans, tracking progress, etc. */}
      
      <div className="clients-section">
        <h2>Your Clients</h2>
        <ClientList /> {/* Display the list of clients */}
      </div>

      <div className="actions">
        <Link to="/workout-plans" className="btn btn-primary">Manage Workout Plans</Link>
        <Link to="/client-progress" className="btn btn-primary">Track Client Progress</Link>
      </div>
    </div>
  );
}

export default CoachDashboard;
