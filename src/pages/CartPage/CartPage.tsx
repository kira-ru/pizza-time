import React, {FC} from 'react'
import {useTypedSelector} from 'hooks/useTypedSelector'
import {CartItem} from 'pages/CartPage/components/CartItem/CartItem'
import {EmptyCart} from 'pages/CartPage/components/EmptyCart/EmptyCart'
import {Order} from 'pages/CartPage/components/Order/Order'
import {CartHeader} from 'pages/CartPage/components/CartHeader/CartHeader'

export const CartPage: FC = () => {
    const cartItems = useTypedSelector(state => Object.values(state.cart.items))
    const totalPrice = useTypedSelector(state => state.cart.totalPrice)
    const totalCount = useTypedSelector(state => state.cart.totalCount)

    if (!cartItems.length) return <EmptyCart />

    return (
        <div className="container container--cart">
            <div className="cart">
                <CartHeader />

                <div className="cart__items">
                    {cartItems.map((item: any) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </div>

                <Order totalCount={totalCount} totalPrice={totalPrice} />
            </div>
        </div>
    )
}
