import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import React from 'react';
import GoodCardContent from "../shared/GoodCardContent";

export const GoodItem = () => {
    return (
        <Grid item sx={{minWidth: "250px"}} component="article">
            <Card>
                <GoodCardContent/>
            </Card>
        </Grid>
    );
};
