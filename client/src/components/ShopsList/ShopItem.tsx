import {Card, CardActions, Grid, Typography} from '@mui/material';
import React, {FC} from 'react';

export const ShopItem: FC<{ text: string }> = ({text}) => {
    return (
        <Grid item md={12}>
            <Card sx={{minWidth: 100}}>
                <CardActions>
                    <Typography>
                        {text}
                    </Typography>
                </CardActions>
            </Card>
        </Grid>
    );
};
