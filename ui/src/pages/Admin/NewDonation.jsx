import React from "react";
import './MainPageUser.css';
import HeaderAdmin from '../../components/Header/HeaderAdmin'
import NewDonationForm from "../../components/DonationForm/NewDonationForm";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const NewDonation = () =>
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
    <div className="donation-page-admin">
        
        <div className='new-donation-form'>
            <NewDonationForm />       
            
        </div>
        <div className='header'>
            <HeaderAdmin username={DBUser.username} />
        </div>
      
    </div>
  );
};

export default NewDonation;