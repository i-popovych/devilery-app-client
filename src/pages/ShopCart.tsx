import {Alert, Box, Container, Grid, Typography} from '@mui/material';
import React, {useState} from 'react';
import {GoodItemWithCount} from "../components/GoodItemWithCount";
import {OrderForm} from '../components/OrderForm';
import {useAppSelector} from "../hooks/useAppDispatch";
import {getTotalPrice} from "../store/slices/cart.slice";
import {ModalElement} from "../components/shared/ModalElement";
import Api from "../api";

const ShopCart = () => {
    const {items} = useAppSelector(state => state.cart)
    const totalPrice = useAppSelector(getTotalPrice)

    const [model, setModel] = useState(false)
    const [data, setData] = useState({title: "", description: ""})

    const onSubmit = async (name: string, email: string, phone: string, address: string) => {
        const isField = email && name && phone && address
        if (isField && items.length) {
            setModel(true)

            let foodArr: {productId: number, count: number}[] = [];
            items.forEach(i => {
                foodArr.push({productId: i.id, count: i.count})
            })

            try {
                await Api.createOrder(name, email, phone, address, foodArr)
            } catch (e) {
                console.log(e);
            }
            setData({title: "The order was successful", description: ""})
        } else {
            setModel(true)
            setData({title: "Check the correctness of the entered data", description: ""})
        }
    }

    return (
        <>
        <ModalElement onClose={() => setModel(false)} open={model} title={data.title} description={data.description} />
        <Container sx={{mt: "20px"}}>
            <Grid container sx={{rowGap: "20px"}}>
                <Grid item md={3}>
                    <OrderForm onSubmit={onSubmit}/>
                </Grid>
                <Grid item md={8}>
                    {items.length ? (
                    <Container sx={{height: "72vh", border: "2px solid black",
                        overflowY: "auto", p: "10px", borderRadius: "12px"}}>
                        <Grid container justifyContent="space-between" sx={{gap: "15px", pt: "10px"}}>
                            {items.map(i => <Grid key={i.id} item md={5.8}><GoodItemWithCount {...i} /></Grid>)}
                        </Grid>
                    </Container>
                    ) : <Alert severity="info">Cart is empty</Alert>}
                </Grid>
                <Grid item md={11}>
                    <Box sx={{display: "flex", justifyContent: "end", alignItems: "baseline", columnGap: "25px"}}>
                        <Typography>Total price: {totalPrice} ₴</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        </>
    );
};

export default ShopCart;