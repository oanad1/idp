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
  const [products, setProducts] = React.useState({});
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

    const getProducts = async () => {
      try {
        const res = await axios.post("http://localhost:8080/get-products-location", user);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts().catch(console.error);
}, [user, isAuthenticated])

  return (
    <div className="main-page-user">
        {(redirectLink !== undefined) && <Navigate to = {redirectLink} />}
        <div className='content'>
                     
            <div className="donations">
              {products && products.prod && products.prod.map((x, index) => {
                return (
                  <div>
                    <DonationCardAdmin 
                    city={products.location.city}
                    center={products.location.name}
                    product={x.name} 
                    q_current={x.donatedQuantity + ""} 
                    q_target={x.requestedQuantity + ""}
                    active={x.requestedQuantity - x.donatedQuantity > 0}
                    id={x._id} />
                  </div>
                )
              })}
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