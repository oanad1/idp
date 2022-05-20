import React, { Component } from 'react';
import logo from '../logo_donathor.png';
import '../App.css';
import Register from '../components/RegisterForm/RegisterForm';
import { useAuth0 } from "@auth0/auth0-react";

const Auth = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className="App">
                 <header className="App-header">
                     <img src={logo} className="App-logo" alt="logo" />
                 </header>
                 <Register {... user} />
            </div>
        )
      );
}

export default Auth;