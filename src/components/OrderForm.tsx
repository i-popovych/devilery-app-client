import {Button, TextField} from '@mui/material';
import React, {FC, useState} from 'react';
import {useDispatch} from "react-redux";
import {clearCart} from "../store/slices/cart.slice";

export const OrderForm:
    FC<{onSubmit: (name: string, email: string, phone: string, address: string) => void }>
    = ({onSubmit}) => {

    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(clearCart())
        onSubmit(name, email, phone, address)
    }

    const handleClearCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(clearCart())
    }

    return (
            <form onSubmit={handleSubmit}>
                <TextField
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Name"
                    variant="outlined"
                />
                <br />
                <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Email"
                    variant="outlined"
                />
                <br />
                <TextField
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Phone"
                    variant="outlined"
                />
                <br />
                <TextField
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Address"
                    variant="outlined"
                />
                <br/>
                <Button type="submit" sx={{mt: "5px"}}>Submit</Button>
                <Button sx={{mt: "5px"}} onClick={handleClearCart}>Clear the cart</Button>
            </form>
    );
};
