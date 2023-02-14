import {createAsyncThunk, Dictionary} from '@reduxjs/toolkit'
import {IPizza} from 'types/IPizza'

import axios from 'axios'
import {ROOT_API} from 'constants/API'

export const fetchPizzas = createAsyncThunk<IPizza[], Dictionary<string | null>>(
    'pizzas/fetchPizzas',
    async (arg, {rejectWithValue}) => {
        const response = await axios.get<IPizza[]>(ROOT_API, {params: arg})

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue('error')
        }

        return response.data
    },
)
