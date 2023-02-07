import React, {FC} from 'react'
import logo from 'assets/img/pizza-logo.png'
import {Link} from 'react-router-dom'
import {Search} from 'components/Search/Search'
import {Cart} from 'components/Cart/Cart'

const Header: FC = () => {
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

                <Search />
                <Cart />
            </div>
        </div>
    )
}

export {Header}
