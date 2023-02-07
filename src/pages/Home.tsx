import React, {FC, useEffect, useState} from 'react'
import pickBy from 'lodash/pickBy'
import identity from 'lodash/identity'

import {Categories} from 'components/Categories/Categories'
import {PizzaSkeleton} from 'components/UI/Skeleton/PizzaSkeleton'
import {PizzaCard} from 'components/PizzaCard/PizzaCard'
import {useTypedSelector} from 'hooks/useTypedSelector'
import {useAppDispatch} from 'hooks/useAppDispatch'
import {Pagination} from 'components/Pagination/Pagination'
import {Sort} from 'components/Sort/Sort'
import {Error} from 'components/Error/Error'
import {useSearchParams} from 'react-router-dom'
import {fetchPizzas} from 'store/pizzas/pizzas.actions'
import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate'

interface testP {
    value: number
    setValue: React.Dispatch<React.SetStateAction<number>>
}

const Test: FC<testP> = ({setValue, value}) => {
    useWhyDidYouUpdate('test', {value, setValue})
    const onClick = () => {
        setValue(prev => prev + 1)
    }

    return <div onClick={onClick}>{value}</div>
}

const Home: FC = () => {
    const [count, setCount] = useState<number>(0)

    const [searchParams, set] = useSearchParams()
    const dispatch = useAppDispatch()

    const activeCategory = useTypedSelector(state => state.filter.categoryId)
    const sortParams = useTypedSelector(state => state.filter.sort)
    const {items: pizzas, isLoading, isError} = useTypedSelector(state => state.pizzas)

    const sortBy = searchParams.get('sortBy') || sortParams.queryParamName
    const category = searchParams.get('category') === '0' ? '' : searchParams.get('category')
    const params = pickBy({category, sortBy}, identity)

    useEffect(() => {
        dispatch(fetchPizzas(params))
    }, [sortBy, category])

    if (isError) return <Error />
    if (isLoading)
        return (
            <>
                {[...new Array(6)].map(() => (
                    <PizzaSkeleton />
                ))}
            </>
        )

    return (
        <>
            <Test setValue={setCount} value={count} />
            <div className="content__top">
                <Sort sortParams={sortParams} />
                <Categories activeCategory={activeCategory} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas.map(pizza => (
                    <PizzaCard key={pizza.id} {...pizza} />
                ))}
            </div>
            <Pagination currentPage={1} onChangePage={() => console.log('ckidk')} />
        </>
    )
}

export {Home}
