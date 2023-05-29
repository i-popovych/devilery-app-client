import React, {FC} from 'react';
import {Button, Card, CardActions, CardContent} from "@mui/material";
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
            <CardContent>{count}</CardContent>
            <CardActions>
                <Button onClick={handleAddItem}>Add item</Button>
                <Button onClick={handleDeleteItem}>Delete item</Button>
            </CardActions>
        </Card>
    );
};

