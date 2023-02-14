import {IPizza} from 'types/IPizza'
import {fetchPizzas} from 'store/pizzas/pizzas.actions'
import {Dictionary} from '@reduxjs/toolkit'
import '@testing-library/jest-dom'
import axios from 'axios'

const mockData: IPizza[] = [
    {
        id: 0,
        imageUrl:
            'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg',
        name: 'Пицца с сыром',
        type: [0, 1],
        size: [30, 40],
        price: 500,
        category: 0,
        rating: 3,
    },
    {
        id: 1,
        imageUrl:
            'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
        name: 'Четыре сезона',
        type: [0, 1],
        size: [25, 40],
        price: 600,
        category: 0,
        rating: 5,
    },
]

const params: Dictionary<string | null> = {
    category: '1',
    sortBy: 'rating',
}

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('pizzas', () => {
    it('should fetch successfully', async function() {
        mockedAxios.get.mockReturnValueOnce({
            status: 200,
            data: mockData,
        })

        const dispatch = jest.fn()
        const thunk = fetchPizzas(params)
        // @ts-ignore
        await thunk(dispatch)
        const {calls} = dispatch.mock
        const [pending, fulfilled] = calls

        expect(pending[0].type).toBe(fetchPizzas.pending().type)
        expect(fulfilled[0].type).toBe(fetchPizzas.fulfilled().type)
        expect(fulfilled[0].payload).toBe(mockData)
        expect(fulfilled[0].payload).toBe(mockData)
    })

    it('should rejected', async function() {
        mockedAxios.get.mockReturnValueOnce({
            status: 400,
        })

        const dispatch = jest.fn()
        const thunk = fetchPizzas(params)
        // @ts-ignore
        await thunk(dispatch)
        const {calls} = dispatch.mock
        const [pending, rejected] = calls

        expect(pending[0].type).toBe(fetchPizzas.pending().type)
        expect(rejected[0].type).toBe(fetchPizzas.rejected().type)
        expect(rejected[0].payload).toBe('error')
    })
})
