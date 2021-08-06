import {v4 as uuidv4} from 'uuid';


export interface ICart {
    id: string;
    cartItems: ICartItem[];
}

 export interface ICartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    productBrand: string;
    productType:  string;
}

export class Cart implements ICart{
    id = uuidv4();
    cartItems: ICartItem[] = [];

}

export interface ICartTotals {
    shipping: number;
    subtotal: number;
    total: number;
}