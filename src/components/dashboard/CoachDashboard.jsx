// src/components/dashboard/CoachDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CoachDashboard.css';

function CoachDashboard() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/app/users');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Fetched clients:', data);
                setClients(data);
            } catch (error) {
                console.error('Failed to load clients:', error);
            }
        };

        fetchClients();
    }, []);

    return (
        <div className="coach-dashboard">
            <h1>Coach Dashboard</h1>

            <div className="clients-section">
                <h2>Your Clients</h2>
                <div className="client-cards">
                    {clients.map(client => (
                        <div key={client.id} className="client-card">
                            <img src={client.photo} alt={client.username} className="client-picture" />
                            <div className="client-info">
                                <h3>{client.username}</h3>
                                <div className="client-actions">
                                    <Link to={`/workout-plans/${client.id}`} className="btn btn-primary btn-small">Manage Workout Plans</Link>
                                    <Link to={`/client-progress/${client.id}`} className="btn btn-secondary btn-small">Track Client Progress</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CoachDashboard;
