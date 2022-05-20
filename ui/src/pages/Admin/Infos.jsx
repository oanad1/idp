import React from "react";
import './MainPageUser.css';
import HeaderAdmin from '../../components/Header/HeaderAdmin'
import AccountDataFormAdmin from '../../components/AccountDataForm/AccountDataFormAdmin'

const AdminInfos = () =>
{
  const username = "Adrian Minune";
  return (
    <div className="donation-page-admin">
        
        <div className='new-donation-form'>
            <AccountDataFormAdmin username="Adrian Minune" email="minune@manele.ro" phone="0000111122" center="Centru B"/>       
            
        </div>
        <div className='header'>
            <HeaderAdmin username={username}/>
        </div>
      
    </div>
  );
};

export default AdminInfos;