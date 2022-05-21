import React from "react";
import '../Admin/MainPageUser.css';
import DonationCard from '../../components/DonationCard/DonationCard'
import Header from '../../components/Header/Header'

function handleDonate(city, center, product) {}

function handleNotif (city, center, product) {}

const Subscriptions = ({username}) =>
{
  return (
    <div className="main-page-user">
        
        <div className='content'>
                     
            <div className="donations">
            <DonationCard city="Bucuresti" center="Centru A" product="Apa minerala" q_current="50" q_target="100"  active={true} notif={true} handleDonate={handleDonate} handleNotif={handleNotif} />
            <DonationCard city="Bucuresti" center="Centru D" product="Apa minerala" q_current="100" q_target="100" active={false} notif={true} handleDonate={handleDonate} handleNotif={handleNotif} />
            <DonationCard city="Bucuresti" center="Centru E" product="Apa minerala" q_current="50" q_target="100"  active={true} notif={true} handleDonate={handleDonate} handleNotif={handleNotif} />
            <DonationCard city="Bucuresti" center="Centru H" product="Apa minerala" q_current="100" q_target="100"  active={false} notif={true} handleDonate={handleDonate} handleNotif={handleNotif} />
            </div>
            <div className="message">
                <p>Doneaza produsele care te intereseaza!</p>
            </div>  
        </div>
        <div className='header'>
          <Header username={username} />
        </div>
      
    </div>
  );
};

export default Subscriptions;