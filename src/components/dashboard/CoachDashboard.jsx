import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CoachDashboard.css';

function CoachDashboard() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/app/users', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}` }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
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
                            <div >
                                <h3 className="client-info">{client.username}</h3>
                                <div className="client-actions">
                                    <Link to="/workouts"><button className="btn btn-dashboard">Manage Workouts</button></Link>
                                    <Link to="/exercises"><button className="btn btn-dashboard">Manage Exercises</button></Link>
                                    <Link to="/workout-plans"><button className="btn btn-dashboard">Create Workout Plan</button></Link>
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
