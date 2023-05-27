import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {PagesLink} from "../models/routes";
import Shop from "../pages/Shop";
import ShopCart from "../pages/ShopCart";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={PagesLink.SHOP} element={<Shop />}/>
            <Route path={PagesLink.SHOP_CART} element={<ShopCart />}/>
            <Route path={''} element={<Navigate to={PagesLink.SHOP} />}/>
        </Routes>
    );
};