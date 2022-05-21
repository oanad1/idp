import React, { Component } from 'react';
import '../../App.css';
import DonationCard from '../../components/DonationCard/DonationCard';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import Header from '../../components/Header/Header';

function handleDonate(city, center, product) {}
function handleNotif (city, center, product) {}
function handleLogoButton () {}
function handleDonationButton () {}
function handleNotifButton () {}
function handleAccountButton () {}

const MainUser = () => {
    const { user, isAuthenticated } = useAuth0();
    const [redirect, setRedirect] = React.useState(false);
    let res = null;

    React.useEffect(() => {
        const sendRequest = async () => {
            try {
                res = await axios.post("http://localhost:8080", user);
                console.log(res);

                if (!res.data.isinDB) {
                    setRedirect(true);
                } else {
                    setRedirect(false);
                }
            } catch (error) {
                console.log(error);
            }
        }
        sendRequest().catch(console.error);
    }, [user, isAuthenticated])
    

    return (
        <div className="main-page-user">
            {redirect && <Navigate to = "register" />}
            <div className='content'>
                <div className="donations">
                    <DonationCard city="Bucuresti" center="Centru A" product="Apa minerala" q_current="50" q_target="100"  active={true} notif={true} handleDonate={handleDonate} handleNotif={handleNotif} />
                    <DonationCard city="Bucuresti" center="Centru B" product="Apa minerala" q_current="100" q_target="100" active={false} notif={false} handleDonate={handleDonate} handleNotif={handleNotif} />
                    <DonationCard city="Bucuresti" center="Centru C" product="Apa minerala" q_current="50" q_target="100" active={true} notif={false} handleDonate={handleDonate} handleNotif={handleNotif} />
                    <DonationCard city="Bucuresti" center="Centru D" product="Apa minerala" q_current="100" q_target="100" active={false} notif={true} handleDonate={handleDonate} handleNotif={handleNotif} />
                    <DonationCard city="Bucuresti" center="Centru E" product="Apa minerala" q_current="50" q_target="100"  active={true} notif={true} handleDonate={handleDonate} handleNotif={handleNotif} />
                    <DonationCard city="Bucuresti" center="Centru F" product="Apa minerala" q_current="100" q_target="100"  active={false} notif={false} handleDonate={handleDonate} handleNotif={handleNotif} />
                    <DonationCard city="Bucuresti" center="Centru G" product="Apa minerala" q_current="50" q_target="100"  active={true} notif={false} handleDonate={handleDonate} handleNotif={handleNotif} />
                    <DonationCard city="Bucuresti" center="Centru H" product="Apa minerala" q_current="100" q_target="100"  active={false} notif={true} handleDonate={handleDonate} handleNotif={handleNotif} />
                </div>
                <div className="message">
                    <p>Doneaza azi pentru a ajuta oamenii afectati de razboi!</p>
                </div>            
            </div>
            <div className='header'>
                <Header username={user.nickname} />
            </div>
        </div>    
    );
}

export default MainUser;