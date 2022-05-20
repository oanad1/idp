import React from "react";
import "./AccountInfoCard.css"
import bell from '../../media/bell.png'
import user from '../../media/user.png'

const AccountInfoCardAdmin = ({
    username
}) => {
    const handleNotifButton = () => {
        console.log("Go to NotifPageAdmin");
    }

    const handleAccountButton = () => { 
        console.log("Go to user page?");
    }

    return <div className="account">
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
}

export default AccountInfoCardAdmin;