import { Grid } from '@mui/material';
import React from 'react';
import {GoodItem} from "./GoodItem";

export const GoodsList = () => {
    return (
        <Grid container md={4}>
            <GoodItem/>
            <GoodItem/>
            <GoodItem/>
            <GoodItem/>
        </Grid>
    );
};