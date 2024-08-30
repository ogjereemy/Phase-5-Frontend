// src/components/dashboard/ClientList.jsx
import React, { useState, useEffect } from 'react';
import './ClientList.css';

function ClientList() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch('https://phase-5-backend-2.onrender.com/app/users'); 
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
        <div className="client-list">
            {clients.length > 0 ? (
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
            ) : (
                <p>No clients found.</p>
            )}
        </div>
    );
}

export default ClientList;
