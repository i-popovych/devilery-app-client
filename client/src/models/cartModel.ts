import {IProduct} from "./db";

export interface ICartProduct extends IProduct{
    count: number
}