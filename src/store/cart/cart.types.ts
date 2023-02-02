import {ICart} from 'types/ICart';

export interface CartState {
    totalCount: number;
    totalPrice: number;
    items: {
        [id: string]: ICart;
    };
}
