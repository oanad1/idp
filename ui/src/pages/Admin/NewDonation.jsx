import React from "react";
import './MainPageUser.css';
import HeaderAdmin from '../../components/Header/HeaderAdmin'
import NewDonationForm from "../../components/DonationForm/NewDonationForm";

function handleLogoButton () {}
function handleNotifButton () {}
function handleAccountButton () {}

const NewDonation = () =>
{
  const username = "Adrian Minune";

  return (
    <div className="donation-page-admin">
        
        <div className='new-donation-form'>
            <NewDonationForm />       
            
        </div>
        <div className='header'>
            <HeaderAdmin username={username} />
        </div>
      
    </div>
  );
};

export default NewDonation;