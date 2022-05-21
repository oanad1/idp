import React from "react";
import { Navigate } from "react-router-dom";
import './NewDonationForm.css';
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const NewDonationForm = ({}) => {

    const [produs, setProdus] = React.useState("");
    const [cantitate, setCantitate] = React.useState("");
    const [redirectLink, setRedirectLink] = React.useState(undefined);
    const { user } = useAuth0();

    const handleNewDonation = (event) => {
        event.preventDefault();
        const obj = {
            user: user,
            produs: produs,
            cantitate: cantitate
        }
        axios.post("http://localhost:8080/req-donation", obj).catch(error => {
            console.log(error);
            setProdus("");
            setCantitate(0);
            setRedirectLink(undefined);
        }).then(() => {
            setRedirectLink("/admin");
        });
    }

    return (
        <div className="new-donation-form">
            {(redirectLink !== undefined) && <Navigate to = {redirectLink} />}
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