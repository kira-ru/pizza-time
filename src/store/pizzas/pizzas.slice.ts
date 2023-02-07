import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {PizzasState} from 'store/pizzas/pizzas.types'
import {fetchPizzas} from 'store/pizzas/pizzas.actions'
import {IPizza} from 'types/IPizza'

const init: PizzasState = {
    items: [],
    isLoading: false,
    isError: false,
}

export const pizzaSlice = createSlice({
    name: 'pizzas',
    initialState: init,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPizzas.pending, state => {
            state.isLoading = true
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<IPizza[]>) => {
            state.isLoading = false
            state.isError = false
            state.items = action.payload
        })
        builder.addCase(fetchPizzas.rejected, state => {
            state.isError = true
            state.isLoading = false
        })
    },
})
