import React, {FC} from 'react'

import {CATEGORIES} from 'constants/app'
import {useAppDispatch} from 'hooks/useAppDispatch'
import {setCategory} from 'store/filter/filter.slice'
import {useSearchParams} from 'react-router-dom'

interface CategoriesProps {
    activeCategory: number
}

const Categories: FC<CategoriesProps> = ({activeCategory}) => {
    const dispatch = useAppDispatch()
    const [_, setSearchParams] = useSearchParams()

    const clickHandler = (id: number) => {
        dispatch(setCategory(id))
        setSearchParams(searchParams => {
            searchParams.set('category', String(id))
            return searchParams
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

export {Categories}
