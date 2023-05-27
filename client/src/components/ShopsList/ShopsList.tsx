import React from 'react';
import {Grid, Typography} from "@mui/material";
import { ShopItem } from './ShopItem';
import Grid2 from "@mui/material/Unstable_Grid2";

export const ShopsList = () => {
    return (
        <Grid container component="article" sx={{
            backgroundColor: 'red', maxWidth: '370px', padding: "10px 30px",
            rowGap: "20px", alignContent: "start"
        }}>
            <Typography component="h3">Shops:</Typography>
            <ShopItem text={'some data'} />
            <ShopItem text={'some data'} />
            <ShopItem text={'some data'} />
        </Grid>
    );
};
