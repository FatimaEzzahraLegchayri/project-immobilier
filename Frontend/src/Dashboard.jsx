import React, { useEffect, useState } from 'react';  
import axios from 'axios';  

const Dashboard = () => {  
    const [userData, setUserData] = useState(null);  
    const [loading, setLoading] = useState(true);  

    useEffect(() => {  
        const fetchUserData = async () => {  
            const token = localStorage.getItem('token');  
            try {  
                const response = await axios.get('http://localhost:5000/userdata', {  
                    headers: { Authorization: token }  
                });  
                setUserData(response.data);  
            } catch (error) {  
                console.error('Error fetching user data:', error);  
            } finally {  
                setLoading(false);  
            }  
        };  

        fetchUserData();  
    }, []);  

    if (loading) {  
        return <p>Loading...</p>;  
    }  

    return (  
        <div>  
            <h2>Dashboard</h2>  
            {userData ? (  
                <div>  
                    <h3>Welcome, {userData.username}!</h3>  
                    <p>Role: {userData.role}</p>  
                    {userData.role === 'admin' && (  
                        <div>  
                            <h4>Admin Panel</h4>  
                            {/* Ajoutez ici des fonctionnalités spécifiques aux administrateurs */}  
                        </div>  
                    )}  
                </div>  
            ) : (  
                <p>No user data available.</p>  
            )}  
        </div>  
    );  
};  

export default Dashboard;