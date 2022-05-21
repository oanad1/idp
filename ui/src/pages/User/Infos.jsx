import React from "react";
import '../Admin/MainPageUser.css';
import Header from '../../components/Header/Header'
import AccountDataFormUser from '../../components/AccountDataForm/AccountDataFormUser'
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const InfoPageUser= () =>
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
            <AccountDataFormUser username={DBUser.username} email={DBUser.email} phone={DBUser.phoneNumber}/>
        </div>
        <div className='header'>
            <Header username={DBUser.username}/>
        </div>
      
    </div>
  );
};

export default InfoPageUser;