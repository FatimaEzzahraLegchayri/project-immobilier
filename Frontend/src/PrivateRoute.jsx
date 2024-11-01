import React from 'react';  
import { Route, Redirect } from 'react-router-dom';  

const isAuthenticated = () => {  
    // Vérifiez si le token est stocké dans le localStorage  
    return !!localStorage.getItem('token');  
};  

const PrivateRoute = ({ component: Component, ...rest }) => {  
    return (  
        <Route  
            {...rest}  
            render={props =>  
                isAuthenticated() ? (  
                    <Component {...props} />  
                ) : (  
                    <Redirect to="/" />  
                )  
            }  
        />  
    );  
};  

export default PrivateRoute;