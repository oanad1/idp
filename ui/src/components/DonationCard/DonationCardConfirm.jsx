import React from "react";
import "./DonationCard.css";
import bell from '../../media/bell.png';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { Navigate } from "react-router-dom";

const DonationCardConfirm = ({
    q_donated,
    active,
    notif,
    id
}) => {
    const { user, isAuthenticated } = useAuth0();
    const [donations, setDonations] = React.useState(undefined);
    const [redirectLink, setRedirectLink] = React.useState(undefined);
    const handleNotifActive = () => {
        const obj = {
            user: user,
            id: id,
        }

        axios.post("http://localhost:8080/put-notification", obj).catch(error => {
            console.log(error);
            setRedirectLink(undefined);
        }).then(() => {
            setRedirectLink("/panel");
        });
    }

    const handleNotifInactive = () => {
        const obj = {
            user: user,
            id: id,
        }

        axios.post("http://localhost:8080/delete-notification", obj).catch(error => {
            console.log(error);
            setRedirectLink(undefined);
        }).then(() => {
            setRedirectLink("/panel");
        });
    }

    React.useEffect(() => {
        const getDonations = async () => {
          try {
            const obj = {id: id};
            const res = await axios.post("http://localhost:8080/get-product", obj);
            setDonations(res.data.prod);
          } catch (error) {
              console.log(error);
          }
        }
        getDonations().catch(console.error);
        
      }, [user, isAuthenticated])

    return(

    <div className={active ? "donation-card active" : "donation-card"}>
        {(redirectLink !== undefined) && <Navigate to = {redirectLink} />}
        <div>
        <div className="donation-group">
            <div className="donation-place">
                {donations !== undefined && <p> {donations.cityName} - {donations.centreName} </p> }
            </div>
            <div className="donation-product">
                {donations !== undefined && <p> {donations.name} </p>}
            </div>
            <div className="product-quantity">
                <p>
                    {q_donated} bucati
                </p>
            </div>
        </div>
        <div className="button-div">
        {
            !active && <button disabled className="donate-button inactive-button confirmed-donate"> Donatie confirmata</button>
        }
        {
            active &&  <button disabled className="donate-button unconfirmed-donate">
                Se asteapta donatia
            </button>
        }
        </div>
        </div>
        <div className="donation-notif">
            {
                notif && <button className="notif-icon" onClick={() => handleNotifActive()}>
                    <img className="notif-icon" src={bell}></img>
                </button>
            }{
                !notif && <button className="notif-icon inactive-notif" onClick={() => handleNotifInactive()}>
                <img className="notif-icon" src={bell}></img>
                </button>
            }
        </div>
    </div>

    
);
};

export default DonationCardConfirm;