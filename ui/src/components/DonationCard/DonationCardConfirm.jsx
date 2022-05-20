import React from "react";
import "./DonationCard.css";
import bell from '../../media/bell.png';

const DonationCardConfirm = ({
    city,
    center,
    product,
    q_donated,
    active,
    notif
}) => {
    const handleNotif = () => {
        console.log(`Notif ${ product } ${ city } ${ center }`);
    }

    return(

    <div className={active ? "donation-card active" : "donation-card"}>
        <div>
        <div className="donation-group">
            <div className="donation-place">
                <p>{city}  -  {center}</p>
            </div>
            <div className="donation-product">
                <p>
                    {product}
                </p>
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
                notif && <button className="notif-icon" onClick={() => handleNotif({city, center, product})}>
                    <img className="notif-icon" src={bell}></img>
                </button>
            }{
                !notif && <button className="notif-icon inactive-notif" onClick={() => handleNotif({city, center, product})}>
                <img className="notif-icon" src={bell}></img>
                </button>
            }
        </div>
    </div>

    
);
};

export default DonationCardConfirm;