import React, {useEffect, useState} from 'react';
import {Grid, Typography} from "@mui/material";
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
            backgroundColor: 'red', width: '370px', padding: "10px 30px",
            rowGap: "20px", alignContent: "start"
        }}>
            <Typography component="h3">Shops:</Typography>
            {items && (
                <>
                    <NavLink to={'/shop'}><ShopItem title={"All goods"}/></NavLink>
                    {items.map(i => <NavLink to={`/shop/${i.id}`}><ShopItem title={i.title}/></NavLink>)}
                </>
            )}
        </Grid>
    );
};
