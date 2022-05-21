import React from "react";
import './MainPageUser.css';
import DonationCardAdmin from '../../components/DonationCard/DonationCardAdmin';
import HeaderAdmin from '../../components/Header/HeaderAdmin';
import add from '../../media/add.png';
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const MainAdmin = () => {
  const [redirectLink, setRedirectLink] = React.useState(undefined);
  const [DBUser, setDBUser] = React.useState({});
  const handleAdd = () => {
    setRedirectLink("/admin/new");
  }
  const { user, isAuthenticated } = useAuth0();

  React.useEffect(() => {
    const getUsers = async () => {
        try {
            const res = await axios.post("http://localhost:8080/get-user", user);
            setDBUser(res.data.user);
        } catch (error) {
            console.log(error);
        }
    }
    getUsers().catch(console.error);
}, [user, isAuthenticated])

  return (
    <div className="main-page-user">
        {(redirectLink !== undefined) && <Navigate to = {redirectLink} />}
        <div className='content'>
                     
            <div className="donations">
            <DonationCardAdmin city="Bucuresti" center="Centru A" product="Apa minerala" q_current="50" q_target="100"  active={true} />
            <DonationCardAdmin city="Bucuresti" center="Centru B" product="Apa minerala" q_current="100" q_target="100"  active={false} />
            <DonationCardAdmin city="Bucuresti" center="Centru C" product="Apa minerala" q_current="50" q_target="100"  active={true} />
            <DonationCardAdmin city="Bucuresti" center="Centru D" product="Apa minerala" q_current="100" q_target="100"  active={false} />
            <DonationCardAdmin city="Bucuresti" center="Centru E" product="Apa minerala" q_current="50" q_target="100"  active={true} />
            <DonationCardAdmin city="Bucuresti" center="Centru F" product="Apa minerala" q_current="100" q_target="100"  active={false} />
            <DonationCardAdmin city="Bucuresti" center="Centru G" product="Apa minerala" q_current="50" q_target="100"  active={true} />
            <DonationCardAdmin city="Bucuresti" center="Centru H" product="Apa minerala" q_current="100" q_target="100" active={false}  />
            </div>
            <div className="message">
                <p>Donatii la centrul tau</p>
            </div>  
        </div>
        <div className='header'>
        <HeaderAdmin username={DBUser.username} />
        </div>
        <div className="add-donation">
          <button className="add-button" onClick={handleAdd}>
            <img src={add} className="add-icon"/>
          </button>
        </div>
      
    </div>
  );
};

export default MainAdmin;