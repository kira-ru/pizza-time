import {screen} from '@testing-library/react'
import {Categories} from 'pages/Menu/components/Categories/Categories'
import {renderWithProviders} from 'utils/utils-for-tests'
import {CATEGORIES} from 'constants/app'

const setSearch = jest.fn()

describe('Categories', () => {
    it('should render all categories', function () {
        renderWithProviders(<Categories setSearchParams={setSearch} activeCategory={1} />)

        expect(screen.getAllByRole('listitem')).toHaveLength(CATEGORIES.length)
    })
})
