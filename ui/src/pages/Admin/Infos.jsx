import React from "react";
import './MainPageUser.css';
import HeaderAdmin from '../../components/Header/HeaderAdmin'
import AccountDataFormAdmin from '../../components/AccountDataForm/AccountDataFormAdmin'
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const AdminInfos = () =>
{
  const [DBUser, setDBUser] = React.useState({});
  const [location, setLocation] = React.useState({});
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

    const getLocation = async () => {
      try {
        const res = await axios.post("http://localhost:8080/get-location", user);
        setLocation(res.data.location);
      } catch (error) {
        console.log(error);
      }
    }
    getLocation().catch(console.error);
  }, [user, isAuthenticated])

  return (
    <div className="donation-page-admin">
        
        <div className='new-donation-form'>
            <AccountDataFormAdmin username={DBUser.username} email={DBUser.email} phone={DBUser.phoneNumber} center={location.name}/>       
            
        </div>
        <div className='header'>
            <HeaderAdmin username={DBUser.username}/>
        </div>
      
    </div>
  );
};

export default AdminInfos;