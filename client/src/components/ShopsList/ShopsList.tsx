import React, {useEffect, useState} from 'react';
import {Box, Divider, Grid, Typography} from "@mui/material";
import {ShopItem} from './ShopItem';
import {IShopItem} from "../../models/db";
import Api from "../../api";
import {NavLink, useParams} from "react-router-dom";

export const ShopsList = () => {
    const [items, setItems] = useState<IShopItem[] | null>(null);
    const {shopId} = useParams()

    useEffect(() => {
        const fetchShops = async () => {
            try {
                const data = await Api.getShops()
                setItems(data)
            } catch (e) {
                console.log(e);
            }
        }
        fetchShops()
    }, [])

    return (
        <Grid container component="article" sx={{
            width: '350px', padding: "20px 30px 40px 30px",
            border: "2px solid black", borderRadius: "12px",
            rowGap: "20px", justifyContent: "center"
        }}>
            <Grid item md={8}>
                    <Typography component="h3" variant="h5">Shops:</Typography>
            </Grid>
            {items && (
                <>
                    <Grid item md={8}> <ShopItem title={"All goods"} id={-1}/> </Grid>
                    {items.map(i => <Grid item key={i.id} md={8}> <ShopItem {...i}/> </Grid>)}
                </>
            )}
        </Grid>
    );
};
