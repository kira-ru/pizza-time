import React, {FC, useEffect} from 'react'
import pickBy from 'lodash/pickBy'
import identity from 'lodash/identity'

import {Categories} from 'pages/Menu/components/Categories/Categories'
import {useTypedSelector} from 'hooks/useTypedSelector'
import {useAppDispatch} from 'hooks/useAppDispatch'
import {Sort} from 'pages/Menu/components/Sort/Sort'
import {useSearchParams} from 'react-router-dom'
import {fetchPizzas} from 'store/pizzas/pizzas.actions'
import {Pizzas} from 'pages/Menu/components/Pizzas/Pizzas'
import {Title} from 'components/UI/Title/Title'

export const Menu: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useAppDispatch()

    const activeCategory = useTypedSelector(state => state.filter.categoryId)
    const sortParams = useTypedSelector(state => state.filter.sort)

    const sortBy = searchParams.get('sortBy') || sortParams.queryParamName
    const category = searchParams.get('category') === '0' ? '' : searchParams.get('category')
    const params = pickBy({category, sortBy}, identity)

    useEffect(() => {
        dispatch(fetchPizzas(params))
    }, [sortBy, category])

    return (
        <>
            <div className="content__top">
                <Sort sortParams={sortParams} setSearchParams={setSearchParams} />
                <Categories activeCategory={activeCategory} setSearchParams={setSearchParams} />
            </div>
            <Title text="Все пиццы" />
            <Pizzas />
        </>
    )
}
