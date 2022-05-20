import React from "react";
import "./Header.css"
import logo from '../../logo_donathor.png'
import AccountInfoCard from '../AccountInfoCard/AccountInfoCard'

const Header = ({ username }) => {
    const handleLogoButton = () => {
        console.log("Go to MainPageUser");
    }

    // return <AccountInfoCard className="account-info-card" username={username} handleDonationButton={handleDonationButton} handleNotifButton={handleNotifButton} />
    return <div className="header-box">
        <div className="logo-box">
            <button className="buttons" onClick={() => handleLogoButton()}>
                <img className="logo-image" src={logo}></img>
            </button>
        </div>
        <AccountInfoCard className="account-info-card" username={username} />
    </div>
}

export default Header;