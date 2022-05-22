import React from "react";
import './AccountInfo.css';

const AccountDataFormAdmin = ({
    username,
    email,
    phone,
    center
}) => {

    return (
        <div className="account-info-box">
            <p className="form-title">
                Informatii cont
            </p>
            <form>
                <fieldset className="field">
                    <label className="label">Username:</label>
                    <label className="value">{username}</label>    
                </fieldset>
                <fieldset className="field">
                    <label className="label">E-mail:</label>
                    <label className="value">{email}</label> 
                </fieldset>
                <fieldset className="field">
                    <label className="label">Telefon:</label>
                    <label className="value">{phone}</label> 
                </fieldset>
                <fieldset className="field">
                    <label className="label">Tip de utilizator:</label>
                    <label className="value">admin</label> 
                </fieldset>
                <fieldset className="field">
                    <label className="label">Centru: </label>
                    <label className="value">{center}</label> 
                </fieldset>
            </form>
        </div>
    );
};

export default AccountDataFormAdmin;