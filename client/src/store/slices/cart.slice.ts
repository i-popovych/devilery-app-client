import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartProduct} from "../../models/cartModel";
import {IProduct} from "../../models/db";
import {RootState} from "../index";

const initialState = {
    items: [] as ICartProduct[],
    price: 0,
    itemsCount: 0,
    currentShopId: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<IProduct | ICartProduct>) {
            const item = state.items.find(i => i.id === action.payload.id)
            let count = 1
            if (item) {
                count = item.count + 1
                state.items.some(i => {
                    if (i.id === action.payload.id) {
                        i.count = count
                        return true
                    }
                })
            }
            else {
                state.currentShopId = action.payload.shopId
                state.items.push({...action.payload, count})
            }
        },
        deleteItem(state, action: PayloadAction<number>) {
            const items = state.items.map(i => {
                if( i.id === action.payload ) {
                    i.count -= 1
                }
                return i
            })

            const newItems = items.filter(i => i.count)
            if(!newItems.length) state.currentShopId = 0

            state.items = newItems
        }
    }
})

export const getTotalPrice = (state: RootState) => state.cart.items.reduce((acc, item) => acc += item.price * item.count, 0)


export const {addItem, deleteItem} = cartSlice.actions