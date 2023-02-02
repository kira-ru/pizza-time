import { configureStore } from '@reduxjs/toolkit'
import { pizzaSlice } from 'store/pizzas/pizzas.slice'
import { filterSlice } from 'store/filter/filter.slice'
import { cartSlice } from 'store/cart/cart.slice'

export const store = configureStore({
	reducer: {
		pizzas: pizzaSlice.reducer,
		filter: filterSlice.reducer,
		cart: cartSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
