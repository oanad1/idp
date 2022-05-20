import React from "react";
import './AccountInfo.css';

const AccountDataFormUser = ({
    username,
    email,
    phone
}) => {

    return (
        <div className="account-info-box">
            <p className="form-title">
                Informatii cont
            </p>
            <form className="donation-form">
                <fieldset className="field">
                    <label className="label">Username:</label> 
                    <label className="value">{username}</label>    
                </fieldset>
                <fieldset className="field">
                    <label className="label">E-mail: </label>
                    <label className="value">{email}</label>
                </fieldset>
                <fieldset className="field">
                    <label className="label">Telefon: </label>
                    <label className="value">{phone}</label>
                </fieldset>
                <fieldset className="field">
                    <label className="label">Tip de utilizator: </label>
                    <label className="value">donator</label>
                </fieldset>
            </form>
        </div>
    );
};

export default AccountDataFormUser;