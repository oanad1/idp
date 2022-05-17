import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDonations from "../pages/User/Donations";
import Subscriptions from "../pages/User/Subscriptions";
import UserInfos from "../pages/User/Infos";
import AdminDonations from "../pages/Admin/Donations";
import Products from "../pages/Admin/Products";
import AdminInfos from "../pages/Admin/Infos";
import Auth from "../pages/Auth";
import { useAuth0 } from "@auth0/auth0-react";

const Router = () => {
      <BrowserRouter>
        <Routes>
            <Route path="/" key={"userdonations"} element={<UserDonations />} />
            <Route path="/login" key={"login"} element={<Auth />} />
            <Route path="/subscriptions" key={"subscriptions"} element={<Subscriptions />} />
            <Route path="/panel" key={"userpanel"} element={<UserInfos />} />
            <Route path="/admin" key={"admindonations"} element={<AdminDonations />} />
            <Route path="/admin/product" key={"products"} element={<Products />} />
            <Route path="/admin/panel" key={"adminpanel"} element={<AdminInfos />} />
        </Routes>
      </BrowserRouter>
};

export default Router;