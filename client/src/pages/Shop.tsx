import React from 'react';
import {Box, Grid} from "@mui/material";
import {ShopsList} from "../components/ShopsList/ShopsList";
import {GoodsList} from "../components/GoodsList/GoodsList";
import {useParams} from "react-router-dom";

const Shop = () => {

    return (
        <Grid container>
            <Grid item md={4}>
                <ShopsList />
            </Grid>
            <Grid item md={6}>
                <GoodsList />
            </Grid>


        </Grid>
    );
};

export default Shop;