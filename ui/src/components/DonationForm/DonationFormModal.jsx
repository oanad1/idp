import React from "react";
import './NewDonationForm.css';
import ThankYouMessage from '../../components/ThankYouMessage/ThankYouMessage'

const DonationFormModal = ({
    city,
    center,
    product,
    q_current,
    q_target,
    setIsOpenForm,
    // setIsOpen,
    // setCantitateBack
}) => {

    const [cantitate, setCantitate] = React.useState("");

    const handleDonate = (event) => {
        event.preventDefault();
        console.log(`Donate ${ product } ${ cantitate } ${ city } ${ center }`);
        // setCantitateBack({cantitate});
        // setIsOpen(true);
        setIsOpenForm(false);
    }

    let max_quantity = q_target - q_current;

    return (
        
        <div className="new-donation">
            <button className="cancel-button" onClick={() => {setIsOpenForm(false)}}>X</button>
            <p className="form-title">
                Ce cantitate doresti sa donezi?
            </p>
            <form className="donation-form" onSubmit={handleDonate}>
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
                    <input className="cantitate" type="number" min="0" max={max_quantity} name="cantitate"onChange={e => {setCantitate(e.target.value)}}/>
                    <label className="label-cantitate"> /{max_quantity} :</label>
                </fieldset>
                <button className="confirm-button" type="submit" onSubmit={handleDonate}>Doneaza</button>
                
            </form>
        </div>
    );
};

export default DonationFormModal;