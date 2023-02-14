import {renderWithProviders} from 'utils/utils-for-tests'
import {screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {SORT_VALUES} from 'constants/app'
import {Sort} from 'pages/Menu/components/Sort/Sort'
import {SortType} from 'store/filter/filter.types'
import userEvent from '@testing-library/user-event'

const setSearch = jest.fn()
const sortParams: SortType = SORT_VALUES[0]

describe('Sort', () => {
    it('should render all sort values', function () {
        renderWithProviders(<Sort setSearchParams={setSearch} sortParams={sortParams} />)

        userEvent.click(screen.getByText(SORT_VALUES[0].name))
        expect(screen.getAllByRole('listitem')).toHaveLength(SORT_VALUES.length)
    })

    it('should change sort values', function () {
        renderWithProviders(<Sort setSearchParams={setSearch} sortParams={sortParams} />)

        userEvent.click(screen.getByTestId('sortBy'))
        userEvent.click(screen.getByText('Цене'))

        expect(screen.getByTestId('sortBy')).toBe(SORT_VALUES[1].name)
    })
})
