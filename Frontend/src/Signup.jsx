import React, { useState } from 'react';  
import axios from 'axios';  

const Signup = () => {  
    const [username, setUsername] = useState('');  
    const [password, setPassword] = useState('');  
    const [role, setRole] = useState('client'); // Valeur par défaut  
    const [message, setMessage] = useState('');  

    const handleSignup = async (e) => {  
        e.preventDefault();  
        try {  
            const response = await axios.post('http://localhost:5000/signup', {  
                username,  
                password,  
                role,  
            });  
            setMessage('User created successfully');  
        } catch (error) {  
            setMessage(error.response.data || 'An error occurred');  
        }  
    };  

    return (  
        <form onSubmit={handleSignup}>  
            <h2>Sign Up</h2>  
            <input  
                type="text"  
                placeholder="Username"  
                value={username}  
                onChange={(e) => setUsername(e.target.value)}  
                required  
            />  
            <input  
                type="password"  
                placeholder="Password"  
                value={password}  
                onChange={(e) => setPassword(e.target.value)}  
                required  
            />  
            <select value={role} onChange={(e) => setRole(e.target.value)}>  
                <option value="client">Client</option>  
                <option value="admin">Admin</option>  
            </select>  
            <button type="submit">Sign Up</button>  
            {message && <p>{message}</p>}  
        </form>  
    );  
};  

export default Signup;