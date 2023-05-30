import React, {FC} from 'react';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {ICartProduct} from "../models/cartModel";
import GoodCardContent from "./shared/GoodCardContent";
import { useDispatch } from 'react-redux';
import {addItem, deleteItem} from "../store/slices/cart.slice";


export const GoodItemWithCount: FC<ICartProduct> = (props) => {
    const {count} = props
    const dispatch = useDispatch()

    const handleAddItem = () => {
        dispatch(addItem(props))
    }

    const handleDeleteItem = () => {
        dispatch(deleteItem(props.id))
    }

    return (
        <Card>
            <GoodCardContent {...props}/>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>
                <CardContent>
                    <Typography variant="subtitle2">Quantity: {count}</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleAddItem}>Add item</Button>
                    <Button onClick={handleDeleteItem}>Delete item</Button>
                </CardActions>
            </Box>
        </Card>
    );
};

