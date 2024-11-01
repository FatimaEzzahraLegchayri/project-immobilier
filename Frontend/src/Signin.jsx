import React, { useState } from 'react';  
import axios from 'axios';  

const Signin = () => {  
    const [username, setUsername] = useState('');  
    const [password, setPassword] = useState('');  
    const [message, setMessage] = useState('');  

    const handleSignin = async (e) => {  
        e.preventDefault();  
        try {  
            const response = await axios.post('http://localhost:5000/signin', {  
                username,  
                password,  
            });  
            localStorage.setItem('token', response.data.token); // Stocker le token  
            setMessage('Login successful');  
        } catch (error) {  
            setMessage('Invalid credentials');  
        }  
    };  

    return (  
        <form onSubmit={handleSignin}>  
            <h2>Sign In</h2>  
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
            <button type="submit">Sign In</button>  
            {message && <p>{message}</p>}  
        </form>  
    );  
};  

export default Signin;