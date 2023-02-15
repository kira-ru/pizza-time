import React, {FC} from 'react'
import {useTypedSelector} from 'hooks/useTypedSelector'
import {PizzaCard} from 'pages/Menu/components/PizzaCard/PizzaCard'
import {PizzaSkeleton} from 'components/UI/Skeleton/PizzaSkeleton'
import {Error} from 'components/Error/Error'

const Pizzas: FC = () => {
    const {items, isLoading, isError, isSuccess} = useTypedSelector(state => state.pizzas)

    const pizzasSkeleton = [...new Array(items.length || 8)].map(() => <PizzaSkeleton />)
    const pizzas = items.map(pizza => <PizzaCard key={pizza.id} {...pizza} />)

    if (isSuccess && pizzas.length === 0) return <h2>Похоже таких пицц еще нет 😕</h2>
    if (isError) return <Error />

    return <div className="content__items">{isLoading ? pizzasSkeleton : pizzas}</div>
}

export {Pizzas}
