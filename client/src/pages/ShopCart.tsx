import { Box } from '@mui/material';
import React from 'react';
import { Form } from '../components/Form';
import {GoodItemWithCount} from "../components/GoodItemWithCount";
import GoodCardContent from "../components/shared/GoodCardContent";

const ShopCart = () => {
    return (
        <Box>
            <Form/>
            <GoodItemWithCount count={20}>
                <GoodCardContent/>
            </GoodItemWithCount>
        </Box>
    );
};

export default ShopCart;