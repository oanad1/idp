import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainUser from "../pages/User/Donations";
import Subscriptions from "../pages/User/Subscriptions";
import UserInfos from "../pages/User/Infos";
import UserDonations from "../pages/User/DonationsPageUser";
import MainAdmin from "../pages/Admin/Donations";
import Products from "../pages/Admin/Products";
import AdminInfos from "../pages/Admin/Infos";
import NewDonation from "../pages/Admin/NewDonation";
import Auth from "../pages/Auth";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Router = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const [isAdmin, setisAdmin] = React.useState(false);
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }

    else {
      const sendRequest = async () => {
        try {
            const res = await axios.post("http://localhost:8080/get-user", user);
            setisAdmin(res.data.user.isAdmin);
            
        } catch (error) {
            console.log(error);
        }
      }
      sendRequest().catch(console.error);
    }
  }, [user, isAuthenticated, loginWithRedirect]);
  return (
      isAuthenticated &&
      (
        isAdmin ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainAdmin />} />
              <Route path="/admin" element={<MainAdmin />} />
              <Route path="/admin/product" element={<Products />} />
              <Route path="/admin/panel" element={<AdminInfos />} />
              <Route path="/admin/new" element={<NewDonation />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainUser />} />
                <Route path="/register" element={<Auth />} />
                <Route path="/subscriptions" element={<Subscriptions />} />
                <Route path="/donations" element={<UserDonations />} />
                <Route path="/panel" element={<UserInfos />} />
            </Routes>
          </BrowserRouter>
        )
      )
  );
};

export default Router;