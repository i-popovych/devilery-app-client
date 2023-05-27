import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {PagesLink} from "../models/routes";

export const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{flex: 1, columnGap: 2}} component="nav">
                <Typography variant="h6">
                    <NavLink to={PagesLink.SHOP}> Shop </NavLink>
                </Typography>
                <Typography variant="h6">
                    <NavLink to={PagesLink.SHOP_CART}> Shopping Cart </NavLink>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
