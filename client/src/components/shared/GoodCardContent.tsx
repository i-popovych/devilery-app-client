import React, {FC} from 'react';
import {Button, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {IProduct} from "../../models/db";

const GoodCardContent: FC<IProduct> = ({id, imgUrl, shopId, title, price}) => {
    return (
        <>
            <CardMedia
                sx={{wight: "200px", height: "200px", objectFit: "cover"}}
                component="img"
                alt={title}
                image={imgUrl}
            />
            <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography>Price: {price}</Typography>
            </CardContent>
        </>
    );
};

export default GoodCardContent;