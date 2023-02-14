import '@testing-library/jest-dom'
import {screen} from '@testing-library/react'
import {Header} from 'components/Layout/Header/Header'
import {renderWithProviders} from 'utils/utils-for-tests'

describe('Header', () => {
    it('logo should render', function () {
        renderWithProviders(<Header />)

        screen.debug()
        expect(screen.getByRole('heading', {name: /pizza time/i})).toBeInTheDocument()
    })

    it('cart should render', function () {
        renderWithProviders(<Header />)

        screen.debug()
        expect(screen.getByText(/руб/)).toBeInTheDocument()
    })
})
