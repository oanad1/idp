import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDonations from "../pages/User/Donations";
import Subscriptions from "../pages/User/Subscriptions";
import UserInfos from "../pages/User/Infos";
import AdminDonations from "../pages/Admin/Donations";
import Products from "../pages/Admin/Products";
import AdminInfos from "../pages/Admin/Infos";
import { useAuth0 } from "@auth0/auth0-react";

const Router = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);
  return (
    isAuthenticated && (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={UserDonations} />
            <Route exact path="/subscriptions" element={Subscriptions} />
            <Route exact path="/panel" element={UserInfos} />
            <Route exact path="/admin" element={AdminDonations} />
            <Route exact path="/admin/product" element={Products} />
            <Route exact path="/admin/panel" element={AdminInfos} />
        </Routes>
      </BrowserRouter>
    )
  );
};

export default Router;