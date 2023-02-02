import React, { FC } from 'react'

import { CATEGORIES } from 'constants/app'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { setCategory } from 'store/filter/filter.slice'

interface CategoriesProps {
	activeCategory: number
}

const Categories: FC<CategoriesProps> = ({ activeCategory }) => {
	const dispatch = useAppDispatch()

	return (
		<div className='categories'>
			<ul>
				{CATEGORIES.map((cat, index) => (
					<li
						key={cat}
						onClick={() => dispatch(setCategory(index))}
						className={index === activeCategory ? 'active' : ''}
					>
						{cat}
					</li>
				))}
			</ul>
		</div>
	)
}

export { Categories }
