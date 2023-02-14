import App from 'components/App/App'
import '@testing-library/jest-dom'
import {renderWithProviders} from 'utils/utils-for-tests'
import {screen} from '@testing-library/react'
import {act} from 'react-dom/test-utils'

describe('App router', () => {
    it('should navigate to Menu', function () {
        renderWithProviders(<App />, {routes: ['/']})

        expect(screen.getByTestId('pizzas page')).toBeInTheDocument()
    })

    it('should navigate to Cart', function () {
        act(() => {
            renderWithProviders(<App />, {routes: ['/cart']})
        })

        expect(screen.getByTestId('cart')).toBeInTheDocument()
    })

    it('should navigate to NotFound', function () {
        act(() => {
            renderWithProviders(<App />, {routes: ['/random-pathname123']})
        })

        expect(screen.getByText(/такой страницы не существуют/i)).toBeInTheDocument()
    })
})
