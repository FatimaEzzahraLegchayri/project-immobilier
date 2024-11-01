// src/api.js
const API_URL = "http://localhost:5000"; // URL du serveur backend

export const signup = async (userData) => {
    const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const signin = async (userData) => {
    const response = await fetch(`${API_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (data.token) localStorage.setItem('token', data.token); // Stocker le token pour authentification future
    return data;
};

export const getDashboard = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/dashboard`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    return response.json();
};
