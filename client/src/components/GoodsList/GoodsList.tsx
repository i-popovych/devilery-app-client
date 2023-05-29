import {Grid, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {GoodItem} from "./GoodItem";
import {IProduct} from "../../models/db";
import Api from "../../api";
import {useParams} from "react-router-dom";

export const GoodsList = () => {
    const [items, setItems] = useState<IProduct[] | null>(null)
    const {shopId} = useParams()

    useEffect(() => {
        setItems(null)
        const fetchGoods = async () => {
            let data;
            if (shopId) {
                data = await Api.getGoodsByShopId(Number(shopId))
            } else {
                data = await Api.getGoods()
            }

            setItems(data)
        }
        fetchGoods()
    }, [shopId])

    return (
        <Grid container spacing={2}>
            {
                items
                    ?
                    items.map(i => <Grid key={i.id} item md={4}> <GoodItem {...i}/> </Grid>)
                    : <Typography>No data</Typography>
            }
        </Grid>
    );
};