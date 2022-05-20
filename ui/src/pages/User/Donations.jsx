import React, { Component } from 'react';
import '../../App.css';
import logo from '../../logo_donathor.png'
import DonationCard from '../../components/DonationCard/DonationCard';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { Navigate } from "react-router-dom";

function handleDonate(city, center, product) {}

function handleNotif (city, center, product) {}

const UserDonations = () => {
    const { user, isAuthenticated } = useAuth0();
    const [redirect, setRedirect] = React.useState(false);
    let res = null;

    React.useEffect(() => {
        const sendRequest = async () => {
            try {
                res = await axios.post("http://localhost:8080", user);

                if (!res.data.isinDB) {
                    setRedirect(true);
                }
            } catch (error) {
                console.log(error);
            }
        }
        sendRequest().catch(console.error);
    }, [user, isAuthenticated])
    

    return (
        <div>
            {redirect && <Navigate to = "register" />}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            {/* Aici trebuie bagat un map pe fiecare produs */}
            <DonationCard city="Bucuresti" center="Centru A" product="Apa" q_current="50" q_target="100" metric="baxuri" active notif handleDonate={handleDonate} handleNotif={handleNotif} />
            <LogoutButton />
        </div>
    );

    
}

export default UserDonations;