import React from "react";
import "./DonationCard.css";
import bell from '../../media/bell.png';
import DonationFormModal from '../DonationForm/DonationFormModal';

const DonationCard = ({
    city,
    center,
    product,
    q_current,
    q_target,
    active,
    notif,
    id
}) => {
    const [isOpenForm, setIsOpenForm] = React.useState(false);
    const handleNotif = () => {
        console.log(`Notif ${ product } ${ city } ${ center }`);
    }

    const handleDonate = () => {
        setIsOpenForm(true);
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
            !active && <button disabled className="donate-button inactive-button"> Donatie incheiata</button>
        }
        {
            active &&  <button className="donate-button " onClick={() => handleDonate()}>
                Doneaza
            </button>
        }
        </div>
        </div>
        <div className="donation-notif">
            {
                notif && <button className="notif-icon" onClick={() => handleNotif()}>
                    <img className="notif-icon" src={bell}></img>
                </button>
            }{
                !notif && <button className="notif-icon inactive-notif" onClick={() => handleNotif()}>
                <img className="notif-icon" src={bell}></img>
                </button>
            }
        </div>
        {
            isOpenForm && <DonationFormModal city={city} center={center} product={product} q_current={q_current} q_target={q_target} setIsOpenForm={setIsOpenForm} id={id} />
        }
    </div>

    
);
};

export default DonationCard;