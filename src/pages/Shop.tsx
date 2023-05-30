import React from 'react';
import {Grid} from "@mui/material";
import {ShopsList} from "../components/ShopsList/ShopsList";
import {GoodsList} from "../components/GoodsList/GoodsList";

const Shop = () => {

    return (
        <Grid container>
            <Grid item md={4}>
                <ShopsList />
            </Grid>
            <Grid item md={8}>
                <GoodsList />
            </Grid>


        </Grid>
    );
};

export default Shop;