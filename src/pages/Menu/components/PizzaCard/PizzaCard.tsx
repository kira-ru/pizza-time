import React, {FC, useState} from 'react'
import {addItemToCart} from 'store/cart/cart.slice'
import {IPizza} from 'types/IPizza'
import {useTypedSelector} from 'hooks/useTypedSelector'
import {useActions} from 'hooks/useActions'

const TYPES = ['Тонкая', 'Традиционная']

export const PizzaCard: FC<IPizza> = ({name, price, imageUrl, type, id, size}) => {
    const [activeSizeIndex, setActiveSize] = useState<number>(0)
    const [activeTypeIndex, setActiveType] = useState<number>(0)
    const actions = useActions({addItemToCart})

    const numberPizzasInCart = useTypedSelector(state => state.cart.items[id]?.count)

    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {type.map(index => (
                        <li
                            key={index}
                            onClick={() => setActiveType(index)}
                            className={activeTypeIndex === index ? 'active' : ''}
                        >
                            {TYPES[index]}
                        </li>
                    ))}
                </ul>

                <ul>
                    {size.map((size, index) => (
                        <li
                            key={index}
                            onClick={() => setActiveSize(index)}
                            className={activeSizeIndex === index ? 'active' : ''}
                        >
                            {size} см.
                        </li>
                    ))}
                </ul>
            </div>

            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div
                    onClick={() =>
                        actions.addItemToCart({
                            id,
                            name,
                            imageUrl,
                            price,
                            size: size[activeSizeIndex],
                            type: TYPES[activeTypeIndex],
                            count: 1,
                        })
                    }
                    className="button button--outline button--add"
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {numberPizzasInCart && <i>{numberPizzasInCart}</i>}
                </div>
            </div>
        </div>
    )
}