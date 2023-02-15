import {combineReducers, configureStore, PreloadedState} from '@reduxjs/toolkit'
import {pizzaSlice} from 'store/pizzas/pizzas.slice'
import {filterSlice} from 'store/filter/filter.slice'
import {cartSlice} from 'store/cart/cart.slice'

export const rootReducer = combineReducers({
    pizzas: pizzaSlice.reducer,
    filter: filterSlice.reducer,
    cart: cartSlice.reducer,
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
