import React, {FC, useEffect} from 'react'
import pickBy from 'lodash/pickBy'
import identity from 'lodash/identity'

import {Categories} from 'pages/Menu/components/Categories/Categories'
import {PizzaSkeleton} from 'components/UI/Skeleton/PizzaSkeleton'
import {PizzaCard} from 'pages/Menu/components/PizzaCard/PizzaCard'
import {useTypedSelector} from 'hooks/useTypedSelector'
import {useAppDispatch} from 'hooks/useAppDispatch'
import {Sort} from 'pages/Menu/components/Sort/Sort'
import {Error} from 'components/Error/Error'
import {useSearchParams} from 'react-router-dom'
import {fetchPizzas} from 'store/pizzas/pizzas.actions'

export const Menu: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useAppDispatch()

    const activeCategory = useTypedSelector(state => state.filter.categoryId)
    const sortParams = useTypedSelector(state => state.filter.sort)
    const {items, isLoading, isError} = useTypedSelector(state => state.pizzas)

    const sortBy = searchParams.get('sortBy') || sortParams.queryParamName
    const category = searchParams.get('category') === '0' ? '' : searchParams.get('category')
    const params = pickBy({category, sortBy}, identity)

    useEffect(() => {
        dispatch(fetchPizzas(params))
    }, [sortBy, category])

    if (isError) return <Error />

    const pizzasSkeleton = [...new Array(items.length)].map(() => <PizzaSkeleton />)
    const pizzas = items.length ? (
        items.map(pizza => <PizzaCard key={pizza.id} {...pizza} />)
    ) : (
        <h2>Похоже такой категории пицц нет 😕</h2>
    )

    return (
        <>
            <div className="content__top">
                <Sort sortParams={sortParams} setSearchParams={setSearchParams} />
                <Categories activeCategory={activeCategory} setSearchParams={setSearchParams} />
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">{isLoading ? pizzasSkeleton : pizzas}</div>
        </>
    )
}
