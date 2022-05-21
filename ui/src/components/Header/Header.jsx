import React from "react";
import "./Header.css"
import logo from '../../logo_donathor.png'
import AccountInfoCard from '../AccountInfoCard/AccountInfoCard'
import { Navigate } from "react-router-dom";

const Header = ({ username }) => {
    const [redirectLink, setRedirectLink] = React.useState(undefined);
    const handleLogoButton = () => {
        setRedirectLink('/')
    }

    return (
        <div className="header-box">
            {(redirectLink !== undefined) && <Navigate to = {redirectLink} />}
            <div className="logo-box">
                <button className="buttons" onClick={() => handleLogoButton()}>
                    <img className="logo-image" src={logo}></img>
                </button>
            </div>
            <AccountInfoCard className="account-info-card" username={username} />
        </div>
    )
}

export default Header;