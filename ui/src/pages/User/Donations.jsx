import React, { Component } from 'react';
import '../../App.css';
import DonationCard from '../../components/DonationCard/DonationCard';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import Header from '../../components/Header/Header';

const MainUser = () => {
    const { user, isAuthenticated } = useAuth0();
    const [redirect, setRedirect] = React.useState(false);
    const [DBUser, setDBUser] = React.useState({});
    const [products, setProducts] = React.useState({});

    React.useEffect(() => {
        const sendRequest = async () => {
            try {
                const res = await axios.post("http://localhost:8080", user);

                if (!res.data.isinDB) {
                    setRedirect(true);
                } else {
                    setRedirect(false);
                }
            } catch (error) {
                console.log(error);
            }
        }
        sendRequest().catch(console.error);

        const getUsers = async () => {
            try {
                const res = await axios.post("http://localhost:8080/get-user", user);
                setDBUser(res.data.user);
            } catch (error) {
                console.log(error);
            }
        }
        getUsers().catch(console.error);

        const getProducts = async () => {
            try {
              const res = await axios.post("http://localhost:8080/get-all-products-location", user);
              console.log(res.data);
              setProducts(res.data);
            } catch (error) {
              console.log(error);
            }
          }
          getProducts().catch(console.error);
    }, [user, isAuthenticated])
    

    return (
        <div className="main-page-user">
            {redirect && <Navigate to = "register" />}
            <div className='content'>
                <div className="donations">
                    {products && products.prod && products.prod.map((x, index) => {
                    return (
                        <div>
                            <DonationCard
                            city={x.cityName}
                            center={x.centreName}
                            product={x.name} 
                            q_current={x.donatedQuantity} 
                            q_target={x.requestedQuantity}
                            active={x.requestedQuantity - x.donatedQuantity > 0}
                            notif={true}
                            id={x._id} />
                        </div>
                        )
                    })}
                </div>
                <div className="message">
                    <p>Doneaza azi pentru a ajuta oamenii afectati de razboi!</p>
                </div>
            </div>
            <div className='header'>
                <Header username={DBUser.username} />
            </div>
        </div>    
    );
}

export default MainUser;