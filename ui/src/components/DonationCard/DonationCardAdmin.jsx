import React from "react";
import "./DonationCard.css";

const DonationCardAdmin = ({
    city,
    center,
    product,
    q_current,
    q_target,
    active
}) => {
    const handleDelete = () => {
        console.log('Delete ${product} ${city} ${center}');
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
                    {q_current} / {q_target} bucati
                </p>
            </div>
        </div>
        <div className="button-div">
        {
            !active && <button className="donate-button delete-button" onClick={() => handleDelete({city, center, product})}> Sterge</button>
        }
        {
            active &&  <button className="donate-button " onClick={() => handleDelete({city, center, product})}>
                Sterge
            </button>
        }
        </div>
        </div>
    </div>

    
);
};

export default DonationCardAdmin;