import {ICart} from 'types/ICart'

export interface CartItems {
    [id: string]: ICart
}

export interface CartState {
    totalCount: number
    totalPrice: number
    items: CartItems
}
