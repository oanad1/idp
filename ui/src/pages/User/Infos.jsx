import React from "react";
import '../Admin/MainPageUser.css';
import Header from '../../components/Header/Header'
import AccountDataFormUser from '../../components/AccountDataForm/AccountDataFormUser'

const InfoPageUser= () =>
{
  const username = "Adrian Minune";
  return (
    <div className="donation-page-admin">
        
        <div className='new-donation-form'>
            <AccountDataFormUser username="Adrian Minune" email="minune@manele.ro" phone="0000111122"/>       
            
        </div>
        <div className='header'>
            <Header username={username}/>
        </div>
      
    </div>
  );
};

export default InfoPageUser;