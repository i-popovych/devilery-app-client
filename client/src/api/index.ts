import axios from "axios";
import {IProduct, IShopItem} from "../models/db";

const base = axios.create({baseURL: 'http://localhost:8000/api/'})

class Api {
    async getShops() {
        return (await base.get<IShopItem[]>('shop')).data
    }

    async getGoodsByShopId(id: number) {
        return (await base.get<IProduct[]>(`product/${id}`)).data
    }

    async getGoods() {
        return (await base.get<IProduct[]>('product')).data
    }
}

export default new Api()