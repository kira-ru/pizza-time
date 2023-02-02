import React, { FC, useEffect, useState } from 'react'
import pickBy from 'lodash/pickBy'
import identity from 'lodash/identity'

import { Categories } from 'components/Categories/Categories'
import { PizzaSkeleton } from 'components/UI/Skeleton/PizzaSkeleton'
import { PizzaCard } from 'components/PizzaCard/PizzaCard'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { Pagination } from 'components/Pagination/Pagination'
import { Sort } from 'components/Sort/Sort'
import { useLocation, useSearchParams } from 'react-router-dom'
import { setCategory, setSortParams } from 'store/filter/filter.slice'
import { fetchPizzas } from 'store/pizzas/pizzas.actions'

const Home: FC = () => {
	const location = useLocation()
	const [searchParams, setSearchParams] = useSearchParams()
	const dispatch = useAppDispatch()

	const activeCategory = useTypedSelector(state => state.filter.categoryId)
	const sortParams = useTypedSelector(state => state.filter.sort)
	const { items: pizzas, isLoading } = useTypedSelector(state => state.pizzas)

	const sortBy = searchParams.get('sortBy') || sortParams.queryParamName
	const category = activeCategory || searchParams.get('category')
	const params = pickBy({ category, sortBy }, identity)

	const [isMounted, setIsMounted] = useState<boolean>(false)
	useEffect(() => {
		if (isMounted) {
			dispatch(fetchPizzas(params))
		}
	}, [category, sortBy])

	useEffect(() => {
		if (location.search) {
			dispatch(setSortParams({ queryParamName: sortBy }))
			dispatch(setCategory(Number(category)))
		}

		dispatch(fetchPizzas(params))
		setIsMounted(true)
	}, [])

	return (
		<>
			<div className='content__top'>
				<Sort sortParams={sortParams} />
				<Categories activeCategory={activeCategory} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(6)].map(() => <PizzaSkeleton />)
					: pizzas.map(pizza => <PizzaCard key={pizza.id} {...pizza} />)}
			</div>
			<Pagination currentPage={1} onChangePage={() => console.log('ckidk')} />
		</>
	)
}

export { Home }
