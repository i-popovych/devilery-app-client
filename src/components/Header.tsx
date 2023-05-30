import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {PagesLink} from "../models/routes";

export const Header = () => {
    const lnkStyle = {
        color: "#08070a"
    }

    return (
        <AppBar position="static">
            <Toolbar sx={{flex: 1, columnGap: 3, ml: "7%"}} component="nav">
                <Typography variant="h6">
                        <NavLink style={lnkStyle} to={PagesLink.SHOP}> Shop </NavLink>
                </Typography>
                <Typography variant="h6">
                    <NavLink style={lnkStyle} to={PagesLink.SHOP_CART}> Shopping Cart </NavLink>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
