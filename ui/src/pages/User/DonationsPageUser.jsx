import React from "react";
import '../Admin/MainPageUser.css';
import DonationCardConfirm from '../../components/DonationCard/DonationCardConfirm'
import Header from '../../components/Header/Header'
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const UserDonations = () =>
{
  const [DBUser, setDBUser] = React.useState({});
  const { user, isAuthenticated } = useAuth0();
  const [donations, setDonations] = React.useState([]);

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

    const getDonations = async () => {
      try {
        const res = await axios.post("http://localhost:8080/get-donations", user);
        setDonations(res.data.prod);
      } catch (error) {
          console.log(error);
      }
    }
    getDonations().catch(console.error);
    
  }, [user, isAuthenticated])

  return (
    <div className="main-page-user">
        
        <div className='content'>
                     
            <div className="donations">
              {donations !== [] && donations.map((x, index) => {
                    return (
                        <div>
                            <DonationCardConfirm
                            q_donated = {x.quantity}
                            active = {!x.confirmed}
                            notif={DBUser.notifications.indexOf(x.product) === -1}
                            id={x.product} />
                        </div>
                        )
                    })}
            </div>
            <div className="message">
                <p>Multumim ca ai ales sa ajuti!</p>
            </div>  
        </div>
        <div className='header'>
        <Header username={DBUser.username} />
        </div>
      
    </div>
  );
};

export default UserDonations;