import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {PizzasState} from 'store/pizzas/pizzas.types'
import {fetchPizzas} from 'store/pizzas/pizzas.actions'
import {IPizza} from 'types/IPizza'

const init: PizzasState = {
    items: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
}

export const pizzaSlice = createSlice({
    name: 'pizzas',
    initialState: init,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPizzas.pending, state => {
            state.isLoading = true
            state.isSuccess = false
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<IPizza[]>) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.items = action.payload
        })
        builder.addCase(fetchPizzas.rejected, state => {
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
        })
    },
})
