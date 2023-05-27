import React from 'react';
import {Button, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

const GoodCardContent = () => {
    return (
        <>
            <CardMedia
                component="img"
                alt="some alt"
                height="170"
                image="https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg"
            />
            <CardContent>
                <Typography variant="h5">Burger</Typography>
                <Typography>Price: 50</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Order</Button>
            </CardActions>
        </>
    );
};

export default GoodCardContent;