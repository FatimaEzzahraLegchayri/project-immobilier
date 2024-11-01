// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { getDashboard } from '../api';

const Dashboard = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDashboard();
            setMessage(data.message || 'Accès refusé');
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Tableau de Bord</h2>
            <p>{message}</p>
        </div>
    );
};

export default Dashboard;
