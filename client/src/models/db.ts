export interface IShopItem {
    id: number,
    title: string
}

export interface IProduct {
    id: number,
    title: string
    price: number,
    imgUrl: string,
    shopId: number
}