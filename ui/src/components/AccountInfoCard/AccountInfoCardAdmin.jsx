import React from "react";
import "./AccountInfoCard.css"
import bell from '../../media/bell.png'
import user from '../../media/user.png'
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const AccountInfoCardAdmin = ({username}) => {
    const [redirectLink, setRedirectLink] = React.useState(undefined);
    const { logout } = useAuth0();
    const handleNotifButton = () => {
        setRedirectLink("/admin/product");
    }

    const handleAccountButton = () => { 
        setRedirectLink("/admin/panel");
    }

    return (
        <div className="account">
            {(redirectLink !== undefined) && <Navigate to = {redirectLink} />}
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
                    <p className="signout" onClick={() => logout({ returnTo: window.location.origin })}>Sign out</p>
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

export default AccountInfoCardAdmin;