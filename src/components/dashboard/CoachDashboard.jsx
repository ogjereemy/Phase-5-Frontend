// src/components/dashboard/CoachDashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CoachDashboard.css';

function CoachDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users who have signed up for workouts
    axios.get('/api/workout-users') // Adjust the endpoint according to your backend
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="coach-dashboard-container">
      <h1>Users Signed Up for Workouts</h1>
      <div className="users-list">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            {/* Display other relevant user details */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoachDashboard;
