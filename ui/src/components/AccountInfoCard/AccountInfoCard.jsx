import React from "react";
import "./AccountInfoCard.css"
import heart from '../../media/heart.png'
import bell from '../../media/bell.png'
import user from '../../media/user.png'
import { Navigate } from 'react-router-dom'

const AccountInfoCard = ({
    username
}) => {
    const [redirectLink, setRedirectLink] = React.useState(undefined);
    const handleDonationButton = () => {
        setRedirectLink("/");
    }

    const handleNotifButton = () => {
        setRedirectLink("/subscriptions");
    }

    const handleAccountButton = () => {
        setRedirectLink("/panel");
    }

    return (
        <div className="account">
            {(redirectLink !== undefined) && <Navigate to = {redirectLink} />}
            <div className="donation-icon">
                <button className="buttons" onClick={() => handleDonationButton()}>
                    <img className="images" src={heart}></img>
                </button>
            </div>
            <div className="notif-icon">
                <div className="donation-icon">
                    <button className="buttons" onClick={() => handleNotifButton()}>
                        <img className="images" src={bell}></img>
                    </button>
                </div>
            </div>
            <div className="account-box">
                <div className="account-info">
                    <p className="username">{username}</p>
                    <p className="signout">Sign out</p>
                </div>
                <div className="profile-picture">
                    <button className="buttons" onClick={() => handleAccountButton()}>
                        <img className="images" src={user}></img>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AccountInfoCard;