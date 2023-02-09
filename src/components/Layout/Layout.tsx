import React, {FC} from 'react'
import {Header} from 'components/Layout/Header/Header'
import {Outlet} from 'react-router-dom'

export const Layout: FC = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="content">
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
