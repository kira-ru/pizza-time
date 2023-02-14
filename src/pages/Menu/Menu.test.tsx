import '@testing-library/jest-dom'
import {screen} from '@testing-library/react'
import {renderWithProviders} from 'utils/utils-for-tests'
import {Menu} from 'pages/Menu/Menu'
import {IPizza} from 'types/IPizza'
import {PizzasState} from 'store/pizzas/pizzas.types'

const pizzas: IPizza[] = [
    {
        size: [25, 40],
        type: [1, 2],
        category: 1,
        name: 'mock',
        price: 999,
        imageUrl: 'mock',
        id: 1,
        rating: 999,
    },
    {
        size: [25, 40],
        type: [1, 2],
        category: 1,
        name: 'mock',
        price: 999,
        imageUrl: 'mock',
        id: 1,
        rating: 999,
    },
    {
        size: [25, 40],
        type: [1, 2],
        category: 1,
        name: 'mock',
        price: 999,
        imageUrl: 'mock',
        id: 1,
        rating: 999,
    },
]

const mock: PizzasState = {
    items: pizzas,
    isError: false,
    isLoading: true,
}

describe('Menu', () => {
    it('should render all pizza carts', async function () {
        renderWithProviders(<Menu />)
        const pizzas = await screen.findAllByRole('button')

        expect(pizzas[0]).toBeInTheDocument()
    })
})
