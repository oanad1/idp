import React from "react";
import './NewDonationForm.css';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const DonationFormModal = ({
    city,
    center,
    product,
    q_current,
    q_target,
    setIsOpenForm,
    id
}) => {
    const { user } = useAuth0();
    const [cantitate, setCantitate] = React.useState("");
    const [redirectLink, setRedirectLink] = React.useState(undefined);

    const handleDonate = (event) => {
        event.preventDefault();
        const obj = {
            user: user,
            id: id,
            quantity: cantitate
        }
        axios.post("http://localhost:8080/put-donation", obj).catch(error => {
            console.log(error);
        }).then(() => {
            setRedirectLink("/donations");
        });
    }

    let max_quantity = q_target - q_current;

    return (
        
        <div className="new-donation">
            {(redirectLink !== undefined) && <Navigate to = {redirectLink} />}
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