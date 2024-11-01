import React from 'react';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import Signup from './Signup.jsx';  
import Signin from './Signin.jsx';  
import Dashboard from './Dashboard.jsx';  
import { NavLink } from 'react-router-dom'; 
import PrivateRoute from './PrivateRoute.jsx';  

const App = () => {  
    return (  
        <Router>  
            <nav>  
                <NavLink to="/">Sign In</NavLink>  
                <NavLink to="/signup">Sign Up</NavLink>  
                <NavLink to="/dashboard">Dashboard</NavLink>  
            </nav>  
            <Route>  
                <Route path="/" element={<Signin />} />  
                <Route path="/signup" element={<Signup />} />  
                <Route path="/dashboard" element={<PrivateRoute />}>  
                    <Dashboard />  
                </Route>  
            </Route>  
        </Router>  
    );  
};  

export default App;