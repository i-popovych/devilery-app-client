import {Card, CardActions, Grid, Typography} from '@mui/material';
import React, {FC} from 'react';

export const ShopItem: FC<{ title: string }> = ({title}) => {
    return (
        <Grid item md={12}>
            <Card sx={{minWidth: 100}}>
                <CardActions>
                    <Typography>
                        {title}
                    </Typography>
                </CardActions>
            </Card>
        </Grid>
    );
};
