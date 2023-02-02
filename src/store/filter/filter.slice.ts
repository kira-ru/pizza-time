import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterState, SortType } from 'store/filter/filter.types'

export const initialState: FilterState = {
	categoryId: 0,
	sort: {
		name: 'Популярности',
		queryParamName: 'rating',
	},
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategory(state, action: PayloadAction<number>) {
			state.categoryId = action.payload
		},
		setSortParams(state, action: PayloadAction<SortType>) {
			state.sort = action.payload
		},
	},
})

export const { setCategory, setSortParams } = filterSlice.actions
