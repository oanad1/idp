import React, { Component } from 'react';
import '../../App.css';
import logo from '../../logo_donathor.png'
import DonationCard from '../../components/DonationCard/DonationCard';
import LogoutButton from '../../components/LogoutButton/LogoutButton';

function handleDonate(city, center, product) {}

function handleNotif (city, center, product) {}

class UserDonations extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                {/* Aici trebuie bagat un map pe fiecare produs */}
                <DonationCard city="Bucuresti" center="Centru A" product="Apa" q_current="50" q_target="100" metric="baxuri" active notif handleDonate={handleDonate} handleNotif={handleNotif} />
                <LogoutButton />
            </div>
        );
    }
}

export default UserDonations;