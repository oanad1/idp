import React from "react";
import './NewDonationForm.css';
import ThankYouMessage from '../../components/ThankYouMessage/ThankYouMessage'

const DonationForm = ({
    city,
    center,
    product,
    q_current,
    q_target
}) => {

    const [cantitate, setCantitate] = React.useState("");

    const [isOpen, setIsOpen] = React.useState(false);
    const [isConfirmed, setIsConfirmed] = React.useState(false);

    const handleDonate = () => {
        console.log(`Donate ${{ product }} ${{ cantitate }} ${{ city }} ${{ center }}`);
        setIsOpen(true);
    }

    let max_quantity = q_target - q_current;

    return (
        
        <div className="new-donation">
            <p className="form-title">
                Ce cantitate doresti sa donezi?
            </p>
            <form className="donation-form" onSubmit={handleNewDonation}>
                <fieldset className="field">
                    <label className="label-cantitate">Produs:</label>
                    <label className="label-cantitate">{product}</label>
                </fieldset>
                <fieldset className="field">
                    <label className="label-cantitate">{city}</label>
                    <label className="label-cantitate"> - </label>
                    <label className="label-cantitate">{center}</label>
                </fieldset>
                <fieldset className="field">
                    <label className="label-cantitate">Cantitate:</label>
                    <input className="cantitate" type="number" min="0" max={max_quantity} name="cantitate" onChange={e => {setCantitate(e.target.value)}}/>
                    <label className="label-cantitate"> /{max_quantity} :</label>
                </fieldset>
                <button className="submit-button" type="submit" onClick={handleDonate}>Doneaza</button>
                {isOpen && <ThankYouMessage  product={product} city={city} center={center} cantitate={cantitate} setIsOpen={setIsOpen} />}
            </form>
        </div>
    );
};

export default DonationForm;