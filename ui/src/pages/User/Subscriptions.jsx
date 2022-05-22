import React from "react";
import '../Admin/MainPageUser.css';
import DonationCard from '../../components/DonationCard/DonationCard'
import Header from '../../components/Header/Header'
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const Subscriptions = () =>
{
  const [DBUser, setDBUser] = React.useState({});
  const { user, isAuthenticated } = useAuth0();
  const [products, setProducts] = React.useState({});
  
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

    const getProducts = async () => {
      try {
        const res = await axios.post("http://localhost:8080/get-all-products-location", user);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts().catch(console.error);
  }, [user, isAuthenticated])

  return (
    <div className="main-page-user">
        
        <div className='content'>
                     
            <div className="donations">
              {products && products.prod && products.prod.map((x, index) => {
                if (DBUser.notifications.indexOf(x._id) !== -1) {
                  return (
                    <div>
                      <DonationCard
                        city={x.cityName}
                        center={x.centreName}
                        product={x.name} 
                        q_current={x.donatedQuantity} 
                        q_target={x.requestedQuantity}
                        active={x.requestedQuantity - x.donatedQuantity > 0}
                        notif={false}
                        id={x._id} />
                    </div>
                  )
                }
                else {
                  return (
                    <div />
                  )
                }
              })}
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