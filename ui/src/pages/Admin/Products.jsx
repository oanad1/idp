import React from "react";
import './MainPageUser.css';
import add from '../../media/add.png';
import HeaderAdmin from '../../components/Header/HeaderAdmin'
import DonationCardAdmin from "../../components/DonationCard/DonationCardAdmin";
import { Navigate } from "react-router-dom";

const Products = ({username}) =>
{
  const [redirectLink, setRedirectLink] = React.useState(undefined);
  const handleAdd = () => {
    setRedirectLink("/admin/new");
  }

  return (
    <div className="main-page-user">
        {(redirectLink !== undefined) && <Navigate to = {redirectLink} />}
        <div className='content'>
                     
            <div className="donations">
            <DonationCardAdmin city="Bucuresti" center="Centru A" product="Apa minerala" q_current="100" q_target="100"  active={false}  />
            <DonationCardAdmin city="Bucuresti" center="Centru A" product="Apa minerala" q_current="100" q_target="100" active={false}  />
            <DonationCardAdmin city="Bucuresti" center="Centru A" product="Apa minerala" q_current="50" q_target="50"  active={false}  />
            <DonationCardAdmin city="Bucuresti" center="Centru A" product="Apa minerala" q_current="100" q_target="100"  active={false} />
            </div>
            <div className="message">
                <p>Donatii finalizate la centrul tau</p>
            </div>  
        </div>
        <div className='header'>
          <HeaderAdmin username={username} />
        </div>
        <div className="add-donation">
          <button className="add-button" onClick={handleAdd}>
            <img src={add} className="add-icon"/>
          </button>
        </div>
      
    </div>
  );
};

export default Products;