import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";

export const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{flex: 1, columnGap: 2}} component="nav">
                    <Typography variant="h6">
                        Shop
                    </Typography>
                    <Typography variant="h6">
                        Shopping Cart
                    </Typography>
            </Toolbar>
        </AppBar>
    );
};
