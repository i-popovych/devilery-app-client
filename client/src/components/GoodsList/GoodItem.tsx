import {Button, Card, CardActions} from '@mui/material';
import React, {FC} from 'react';
import GoodCardContent from "../shared/GoodCardContent";
import {IProduct} from "../../models/db";
import {useDispatch} from "react-redux";
import {addItem} from '../../store/slices/cart.slice';
import {useAppSelector} from "../../hooks/useAppDispatch";
import {ModalElement} from "../shared/ModalElement";


export const GoodItem: FC<IProduct> = (props) => {
    const dispatch = useDispatch()
    const shopId = useAppSelector(state => state.cart.currentShopId)

    const [open, setOpen] = React.useState(false);
    const onModelOpen = () => setOpen(true);
    const onModelClose = () => setOpen(false);


    const handleAddItem = () => {
        console.log(shopId)
        if (!shopId || shopId === props.shopId) {
            dispatch(addItem(props))
        } else {
            onModelOpen()
        }
    }

    return (
        <>
            <ModalElement onClose={onModelClose} open={open}
                          title={"You cannot buy goods from different stores"}
                          description={"You can remove a product from another store in the cart"}/>
            <Card>
                <GoodCardContent {...props}/>
                <CardActions>
                    <Button size="small" onClick={handleAddItem}>Order</Button>
                </CardActions>
            </Card>
        </>

    );
};
