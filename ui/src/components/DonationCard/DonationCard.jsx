import React from "react";
import "./DonationCard.css"
import bell from '../../media/bell.png'

const DonationCard = ({
    city,
    center,
    product,
    q_current,
    q_target,
    metric,
    active,
    notif,
    handleDonate,
    handleNotif
}) => {
    return(

    <div className={'donation-card ${active && "active"}'}>
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
                    {q_current} / {q_target} {metric}
                </p>
            </div>
        </div>
        <div className="button-div">
        {
            !active && <button disabled className="donate-button inactive-button"> Donatie incheiata</button>
        }
        {
            active &&  <button className="donate-button " onClick={() => handleDonate({city, center, product})}>
                Doneaza
            </button>
        }
        </div>
        </div>
        <div className="donation-notif">
            {
                notif && <button className="donation-notif" onClick={() => handleNotif({city, center, product})}>
                    <img className="notif-icon" src={bell}></img>
                </button>
            }{
                !notif && <button className="donation-notif inactive-notif" onClick={() => handleNotif({city, center, product})}>
                <img className="notif-icon" src={bell}></img>
                </button>
            }
        </div>
    </div>

    
);
};

export default DonationCard;