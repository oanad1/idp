import axios from "axios";
import React from "react";
import "./DonationCard.css";
import { Navigate } from "react-router-dom";

const DonationCardAdmin = ({
    city,
    center,
    product,
    q_current,
    q_target,
    active,
    id
}) => {
    const [redirectLink, setRedirectLink] = React.useState(undefined);

    const handleDelete = () => {
        const obj = {id: id};

        axios.post("http://localhost:8080/delete-product", obj).catch(error => {
            console.log(error);
        }).then(() => {
            setRedirectLink("/admin/panel");
        });
    }

    return(

    <div className={active ? "donation-card active" : "donation-card"}>
        {(redirectLink !== undefined) && <Navigate to = {redirectLink} />}
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
            !active && <button className="donate-button delete-button" onClick={() => handleDelete({id})}> Sterge</button>
        }
        {
            active &&  <button className="donate-button " onClick={() => handleDelete({id})}>
                Sterge
            </button>
        }
        </div>
        </div>
    </div>

    
);
};

export default DonationCardAdmin;