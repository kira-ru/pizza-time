import React, {FC} from 'react'
import logo from 'assets/img/pizza-logo.png'
import {Link, useLocation} from 'react-router-dom'
import {Cart} from 'components/Layout/Header/Cart/Cart'

export const Header: FC = () => {
    const location = useLocation()

    return (
        <div className="header">
            <div className="container">
                <Link to={'/'}>
                    <div className="header__logo">
                        <img src={logo} alt="Pizza logo" />
                        <div>
                            <h1>Pizza TIME</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>

                <Cart />
            </div>
        </div>
    )
}
