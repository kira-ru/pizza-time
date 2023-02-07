import React from 'react'
import './styles/app.scss'

import {Home} from 'pages/Home'
import {Route, Routes} from 'react-router-dom'
import {NotFound} from 'pages/NotFound'
import {CartPage} from 'pages/CartPage'
import {Layout} from 'components/Layout/Layout'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path={'/'} element={<Home />} />
                <Route path={'/cart'} element={<CartPage />} />
                <Route path={'*'} element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App

//react-scripts build
