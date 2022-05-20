import React from "react";
import './NewDonationForm.css';

const NewDonationForm = ({}) => {

    const [produs, setProdus] = React.useState("");
    const [cantitate, setCantitate] = React.useState("");

    const handleNewDonation = (event) => {
        event.preventDefault();
        console.log(`New donation request ${produs} ${cantitate}`);
        // navigate('/', true);
    }

    return (
        <div className="new-donation-form">
            <p className="form-title">
                De ce produse este nevoie?
            </p>
            <form className="donation-form" onSubmit={handleNewDonation}>
                <fieldset className="field">
                    <label className="label-nume-produs">Nume produs:</label>
                    <input className="nume-produs" type="text" name="produs" onChange={e => {setProdus(e.target.value)}}/>
                </fieldset>
                <fieldset className="field">
                    <label className="label-cantitate">Cantitate:</label>
                    <input className="cantitate" type="number" name="cantitate" onChange={e => {setCantitate(e.target.value)}} />
                </fieldset>
                <button className="submit-button" type="submit">Inregistreaza cererea</button>
            </form>
        </div>
    );
};

export default NewDonationForm;