import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'components/App/App'

import {Provider} from 'react-redux'
import {setupStore} from 'store'
import {HashRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const store = setupStore()

root.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
)
