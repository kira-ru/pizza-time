import React from 'react'
import './styles/app.scss'

import { Header } from 'components/Header/Header'
import { Home } from 'pages/Home'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from 'pages/NotFound'
import { CartPage } from 'pages/CartPage'

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<Routes>
						<Route path={'/'} element={<Home />} />
						<Route path={'/cart'} element={<CartPage />} />
						<Route path={'*'} element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App

//react-scripts build
