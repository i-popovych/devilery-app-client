import {Alert, Grid} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {GoodItem} from "./GoodItem";
import {IProduct} from "../../models/db";
import Api from "../../api";
import {useParams} from "react-router-dom";
import {useSyncReduxLS} from "../../hooks/useSyncReduxLS";
import {getCartItem} from "../../store/slices/cart.slice";

export const GoodsList = () => {
    const [items, setItems] = useState<IProduct[] | null>(null)
    const {shopId} = useParams()

    useSyncReduxLS('cart', getCartItem)

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
                    : <Grid item md={12} justifySelf="center"><Alert severity="info">Loading...</Alert></Grid>
            }
        </Grid>
    );
};