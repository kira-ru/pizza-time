import React from 'react'
import 'styles/app.scss'

import {Menu} from 'pages/Menu/Menu'
import {Route, Routes} from 'react-router-dom'
import {Layout} from 'components/Layout/Layout'
import MiniLoader from 'components/UI/MiniLoader/MiniLoader'

const CartPage = React.lazy(() =>
    import('pages/CartPage/CartPage').then(({CartPage}) => ({default: CartPage})),
)
const NotFound = React.lazy(() =>
    import('pages/NotFound/NotFound').then(({NotFound}) => ({default: NotFound})),
)

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path={'/'} element={<Menu />} />

                <Route
                    path={'/cart'}
                    element={
                        <React.Suspense fallback={<MiniLoader />}>
                            <CartPage />
                        </React.Suspense>
                    }
                />

                <Route
                    path={'*'}
                    element={
                        <React.Suspense fallback={<MiniLoader />}>
                            <NotFound />
                        </React.Suspense>
                    }
                />
            </Route>
        </Routes>
    )
}

export default App

//react-scripts build
