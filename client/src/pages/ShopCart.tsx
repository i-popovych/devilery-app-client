import {Box, Container, Grid, Typography} from '@mui/material';
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

    if (!items) return <div>No data</div>

    return (
        <>
        <ModalElement onClose={() => setModel(false)} open={model} title={data.title} description={data.description} />
        <Container sx={{mt: "20px"}}>
            <Grid container sx={{rowGap: "20px"}}>
                <Grid item md={3}>
                    <OrderForm onSubmit={onSubmit}/>
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
        </>
    );
};

export default ShopCart;