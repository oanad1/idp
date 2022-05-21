import React from "react";
import '../Admin/MainPageUser.css';
import DonationCardConfirm from '../../components/DonationCard/DonationCardConfirm'
import Header from '../../components/Header/Header'

const UserDonations = () =>
{
  const username = "Adrian Minune";
  return (
    <div className="main-page-user">
        
        <div className='content'>
                     
            <div className="donations">
            <DonationCardConfirm city="Bucuresti" center="Centru A" product="Apa minerala" q_donated="10"  active={true} notif={true} />
            <DonationCardConfirm city="Bucuresti" center="Centru D" product="Apa minerala" q_donated="20" active={false} notif={true} />
            <DonationCardConfirm city="Bucuresti" center="Centru E" product="Apa minerala" q_donated="30" active={true} notif={true} />
            <DonationCardConfirm city="Bucuresti" center="Centru H" product="Apa minerala" q_donated="40"  active={false} notif={true} />
            </div>
            <div className="message">
                <p>Multumim ca ai ales sa ajuti!</p>
            </div>  
        </div>
        <div className='header'>
        <Header username={username} />
        </div>
      
    </div>
  );
};

export default UserDonations;