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

    async createOrder(name: string, email: string, phone: string, address: string,
                      foodArr: {productId: number, count: number}[]) {
        return await base.post('order', {
            name, email, phone, address, foodArr
        })
    }
}

export default new Api()