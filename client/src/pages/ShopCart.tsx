import {Box, Button, Container, Grid, Typography} from '@mui/material';
import React from 'react';
import {OrderForm} from '../components/OrderForm';
import {GoodItemWithCount} from "../components/GoodItemWithCount";
import {useAppSelector} from "../hooks/useAppDispatch";
import {getTotalPrice} from "../store/slices/cart.slice";

const ShopCart = () => {
    const {items} = useAppSelector(state => state.cart)
    const totalPrice = useAppSelector(getTotalPrice)

    if (!items) return <div>No data</div>

    return (
        <Container sx={{mt: "20px"}}>
            <Grid container sx={{rowGap: "20px"}}>
                <Grid item md={3}>
                    <OrderForm/>
                </Grid>
                <Grid item md={7}>
                    <Container sx={{height: "65vh", backgroundColor: "red", overflowY: "scroll"}}>
                        <Grid container>
                            <Grid item md={12}>
                                {items.map(i => <GoodItemWithCount {...i} />)}
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Grid item md={10} sx={{backgroundColor: "red"}}>
                    <Box sx={{display: "flex", justifyContent: "end", alignItems: "baseline", columnGap: "25px"}}>
                        <Typography sx={{mr: "20px"}}>Total price: {totalPrice}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ShopCart;