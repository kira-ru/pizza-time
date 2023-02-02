import { createAsyncThunk } from '@reduxjs/toolkit'
import { IPizza } from 'types/IPizza'

import axios from 'axios'

// @ts-ignore
export const fetchPizzas = createAsyncThunk<IPizza[], Dictionary<string | null>>(
	'pizzas/fetchPizzas',
	async (arg, { rejectWithValue }) => {
		const response = await axios.get<IPizza[]>(
			`https://63d306b41780fd6ab9d11076.mockapi.io/pizzas`,
			{ params: arg }
		)

		if (response.status < 200 || response.status >= 300) {
			return rejectWithValue(response.data)
		}

		return response.data
	}
)
