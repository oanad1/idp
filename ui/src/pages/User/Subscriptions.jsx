import React from "react";
import '../Admin/MainPageUser.css';
import DonationCard from '../../components/DonationCard/DonationCard'
import Header from '../../components/Header/Header'
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

function handleDonate(city, center, product) {}

function handleNotif (city, center, product) {}

const Subscriptions = () =>
{
  const [DBUser, setDBUser] = React.useState({});
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
        
        <div className='content'>
                     
            <div className="donations">
            <DonationCard city="Bucuresti" center="Centru A" product="Apa minerala" q_current="50" q_target="100"  active={true} notif={true} handleDonate={handleDonate} handleNotif={handleNotif} />
            <DonationCard city="Bucuresti" center="Centru D" product="Apa minerala" q_current="100" q_target="100" active={false} notif={true} handleDonate={handleDonate} handleNotif={handleNotif} />
            <DonationCard city="Bucuresti" center="Centru E" product="Apa minerala" q_current="50" q_target="100"  active={true} notif={true} handleDonate={handleDonate} handleNotif={handleNotif} />
            <DonationCard city="Bucuresti" center="Centru H" product="Apa minerala" q_current="100" q_target="100"  active={false} notif={true} handleDonate={handleDonate} handleNotif={handleNotif} />
            </div>
            <div className="message">
                <p>Doneaza produsele care te intereseaza!</p>
            </div>  
        </div>
        <div className='header'>
          <Header username={DBUser.username} />
        </div>
      
    </div>
  );
};

export default Subscriptions;