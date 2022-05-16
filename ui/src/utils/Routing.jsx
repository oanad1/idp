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
    console.log(isAuthenticated)
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);
  return (
    isAuthenticated && (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<UserDonations />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/panel" element={<UserInfos />} />
            <Route path="/admin" element={<AdminDonations />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/panel" element={<AdminInfos />} />
        </Routes>
      </BrowserRouter>
    )
  );
};

export default Router;