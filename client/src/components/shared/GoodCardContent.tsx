import React, {FC} from 'react';
import {Button, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {IProduct} from "../../models/db";

const GoodCardContent: FC<IProduct> = ({id, imgUrl, shopId, title, price}) => {
    return (
        <>
            <CardMedia
                sx={{wight: "180px", height: "180px", objectFit: "cover"}}
                component="img"
                alt={title}
                image={imgUrl}
            />
            <CardContent>
                <Typography variant="subtitle1">{title}</Typography>
                <Typography>Price: {price} ₴</Typography>
            </CardContent>
        </>
    );
};

export default GoodCardContent;