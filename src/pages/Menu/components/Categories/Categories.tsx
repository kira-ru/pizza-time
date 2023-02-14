import React, {FC} from 'react'
import {setCategory} from 'store/filter/filter.slice'
import {URLSearchParamsInit} from 'react-router-dom'
import {useActions} from 'hooks/useActions'
import {CATEGORIES} from 'constants/app'

interface CategoriesProps {
    setSearchParams: (
        nextInit: URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit),
    ) => void
    activeCategory: number
}

export const Categories: FC<CategoriesProps> = ({activeCategory, setSearchParams}) => {
    const actions = useActions({setCategory})

    const clickHandler = (id: number) => {
        actions.setCategory(id)

        setSearchParams(prevParams => {
            prevParams.set('category', String(id))
            return prevParams
        })
    }

    return (
        <div className="categories">
            <ul>
                {CATEGORIES.map((name, index) => (
                    <li
                        key={name}
                        onClick={() => clickHandler(index)}
                        className={index === activeCategory ? 'active' : ''}
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
