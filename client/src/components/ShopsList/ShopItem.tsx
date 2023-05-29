import {Card, CardActions, Typography} from '@mui/material';
import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

export const ShopItem: FC<{ title: string, id: number }> = ({title, id}) => {
    const route = id === -1 ? '/shop/' : `/shop/${id}/`
    return (
        <NavLink style={{textDecoration: "none"}} to={route}>
            <Card sx={{
                minWidth: 80, backgroundColor: "#d3d2d2",
                minHeight: 50, display: "flex", justifyContent: "center", alignContent: "center"}}>
                <CardActions >
                    <Typography>
                        {title}
                    </Typography>
                </CardActions>
            </Card>
        </NavLink>
    );
};
