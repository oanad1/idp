import React from "react";
import "./Header.css"
import logo from '../../logo_donathor.png'
import AccountInfoCardAdmin from '../AccountInfoCard/AccountInfoCardAdmin'
import { Navigate } from "react-router-dom";

const HeaderAdmin = ({username}) => {
    const [redirectLink, setRedirectLink] = React.useState(undefined);
    const handleLogoButton = () => {
        setRedirectLink("/admin")
    }

    return (
        <div className="header-box">
            {(redirectLink !== undefined) && <Navigate to = {redirectLink} />}
            <div className="logo-box">
                <button className="buttons" onClick={() => handleLogoButton()}>
                    <img className="logo-image" src={logo}></img>
                </button>
            </div>
            <AccountInfoCardAdmin className="account-info-card" username={username} />
        </div>
    )
}

export default HeaderAdmin;