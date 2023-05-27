import React from 'react';
import {Box, Grid} from "@mui/material";
import {ShopsList} from "../components/ShopsList/ShopsList";
import {GoodsList} from "../components/GoodsList/GoodsList";

const Shop = () => {
    return (
        <Box sx={{display: "flex", columnGap: "15px", padding: "10px"}}>
            <ShopsList />
            <GoodsList />
        </Box>
    );
};

export default Shop;