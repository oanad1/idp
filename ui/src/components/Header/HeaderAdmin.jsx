import React from "react";
import "./Header.css"
import logo from '../../logo_donathor.png'
import AccountInfoCardAdmin from '../AccountInfoCard/AccountInfoCardAdmin'

const HeaderAdmin = ({
    username
}) => {
    const handleLogoButton = () => {
        console.log("Go to MainPageAdmin");
    }
    // return <AccountInfoCard className="account-info-card" username={username} handleDonationButton={handleDonationButton} handleNotifButton={handleNotifButton} />
    return <div className="header-box">
        <div className="logo-box">
            <button className="buttons" onClick={() => handleLogoButton()}>
                <img className="logo-image" src={logo}></img>
            </button>
        </div>
        <AccountInfoCardAdmin className="account-info-card" username={username} />
    </div>
}

export default HeaderAdmin;