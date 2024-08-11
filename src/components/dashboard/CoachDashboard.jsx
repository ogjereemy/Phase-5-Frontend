// src/components/dashboard/CoachDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CoachDashboard.css';

function CoachDashboard() {
    const [clients, setClients] = useState([]);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMzIwMTI0NSwianRpIjoiMGQyODhjNzktNzEzNi00MTBmLThmNmQtOGY3ZjY2MzI2MTU1IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6NCwidHlwZSI6ImNvYWNoIn0sIm5iZiI6MTcyMzIwMTI0NSwiY3NyZiI6IjYzNjk3MjIyLWI1MzgtNGMxYy05YjBiLTFkOTQ2YTgwMWI1ZSIsImV4cCI6MTcyMzIwMjc0NX0.9DALMg_VOsNcU95hgf-NOQKGII1km2jZe1Vh7if4IFQ';

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/app/users', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
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
    }, [token]);

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

