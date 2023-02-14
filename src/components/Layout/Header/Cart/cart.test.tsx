import {render} from '@testing-library/react'
import {Cart} from 'components/Layout/Header/Cart/Cart'
import * as reduxHooks from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

jest.mock('react-redux')

describe('Cart', () => {
    it('should render', function () {
        jest.spyOn(reduxHooks, 'useSelector').mockReturnValue({})
        const view = render(<Cart />, {wrapper: BrowserRouter})

        expect(view).toMatchSnapshot()
    })
})
