// src/components/dashboard/CoachDashboard.jsx
import React, { useState, useEffect } from 'react';
import './CoachDashboard.css'; // Import the CSS file for styling

function CoachDashboard() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('/api/clients'); // Adjust API endpoint as needed
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched clients:', data); // Log the fetched data
        setClients(data);
      } catch (error) {
        console.error('Failed to load clients:', error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="coach-dashboard">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Coach Dashboard</h1>
          <p>View and manage your clients efficiently. Get insights and keep track of their progress.</p>
        </div>
      </div>

      <div className="clients-section">
        <h2>Client List</h2>
        <div className="client-cards">
          {clients.map(client => (
            <div key={client.id} className="client-card">
              <img src={client.pictureUrl} alt={client.name} className="client-picture" />
              <div className="client-info">
                <h3>{client.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoachDashboard;
