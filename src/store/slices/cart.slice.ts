import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartProduct} from "../../models/cartModel";
import {IProduct} from "../../models/db";
import {RootState} from "../index";
import {lsCartName} from "../../utils/constants";


const state = getCartFromLS(lsCartName)

const initialState = {
    items: state.items as ICartProduct[],
    currentShopId: state.currentShopId as number
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
export const getCountById = (id: number) => (state: RootState) => {
    const item = state.cart.items.find(i => i.id === id)
    return item ? item.count : 0
}

export const getCartItem = (state: RootState) => state.cart.items

function getCartFromLS(lsKey: string) {
    const itemsLS = localStorage.getItem(lsKey)
    const itemsParse  = itemsLS ? JSON.parse(itemsLS) : false
    const isValidItems = itemsParse && itemsParse.length

    const items = isValidItems ? itemsParse : []
    const currentShopId = isValidItems ? itemsParse[0].shopId : 0

    return {items, currentShopId}
}

export const {addItem, deleteItem} = cartSlice.actions