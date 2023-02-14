import React, {PropsWithChildren} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import {PreloadedState} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import {RootState, setupStore} from 'store'
import {MemoryRouter, useLocation} from 'react-router-dom'
import {createMemoryHistory, MemoryHistory} from 'history'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    history?: MemoryHistory
    preloadedState?: PreloadedState<RootState>
    routes?: string[]
    store?: ReturnType<typeof setupStore>
}

export function renderWithProviders(
    view: React.ReactElement,
    {
        routes = ['/'],
        history = createMemoryHistory(),
        preloadedState = {},
        store = setupStore(preloadedState),
        ...renderOptions
    }: ExtendedRenderOptions = {},
) {
    function Wrapper({children}: PropsWithChildren<{}>) {
        return (
            <Provider store={store}>
                <MemoryRouter initialEntries={routes}>{children}</MemoryRouter>
            </Provider>
        )
    }

    return {store, history, ...render(view, {wrapper: Wrapper, ...renderOptions})}
}

export const LocationDisplay = () => {
    const location = useLocation()

    return <div data-testid="location-display">{location.pathname}</div>
}
