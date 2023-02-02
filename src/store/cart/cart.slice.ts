import {CartState} from 'store/cart/cart.types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICart} from 'types/ICart';

const initialState: CartState = {
    totalCount: 0,
    totalPrice: 0,
    items: {},
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        /// добавляет пиццу в коризну с уникальным ID типа Традиционная-25-4 (pizza.type-pizza.size-pizza.id)
        addItemToCart(state, action: PayloadAction<ICart>) {
            const id = `${action.payload.type}-${action.payload.size}-${action.payload.id}`;
            const cartItem = state.items[id];

            if (!cartItem) state.items[id] = action.payload;
            if (cartItem) cartItem.count++;

            state.totalPrice += action.payload.price;
            state.totalCount += 1;
        },

        addOne(state, action: PayloadAction<string>) {
            const item = state.items[`${action.payload}`];

            item.count += 1;
            state.totalCount += 1;
            state.totalPrice += item.price;
        },
        removeOne(state, action: PayloadAction<string>) {
            const item = state.items[`${action.payload}`];

            item.count -= 1;
            state.totalCount -= 1;
            state.totalPrice -= item.price;
        },

        clear(state) {
            state.totalPrice = 0;
            state.totalCount = 0;
            state.items = {};
        },
    },
});

export const {addItemToCart, addOne, removeOne} = cartSlice.actions;
