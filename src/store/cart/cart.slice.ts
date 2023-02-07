import {CartState} from 'store/cart/cart.types'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ICart} from 'types/ICart'
import {getCartFromLocalStorage} from 'utils/localStorage'

const initialState: CartState = getCartFromLocalStorage('cart') || {
    totalCount: 0,
    totalPrice: 0,
    items: {},
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        /// добавляет пиццу в коризну с уникальным ID типа Традиционная-25-4 (pizza.type-pizza.size-pizza.id)
        addItemToCart(state, action: PayloadAction<ICart>) {
            const id = `${action.payload.type}-${action.payload.size}-${action.payload.id}`
            const cartItem = state.items[id]

            if (!cartItem) state.items[id] = action.payload
            if (cartItem) cartItem.count++

            state.totalPrice += action.payload.price
            state.totalCount += 1
        },

        addOne(state, action: PayloadAction<string>) {
            const item = state.items[`${action.payload}`]

            item.count += 1
            state.totalCount += 1
            state.totalPrice += item.price
        },

        removeOne(state, action: PayloadAction<string>) {
            const item = state.items[`${action.payload}`]

            item.count -= 1
            state.totalCount -= 1
            state.totalPrice -= item.price
        },

        removePizza(state, action: PayloadAction<string>) {
            const item = state.items[`${action.payload}`]

            state.totalCount -= item.count
            state.totalPrice -= item.price * item.count
            delete state.items[action.payload]
        },

        clear(state) {
            state.totalPrice = 0
            state.totalCount = 0
            state.items = {}
        },
    },
})

export const {addItemToCart, addOne, removeOne, removePizza, clear} = cartSlice.actions
