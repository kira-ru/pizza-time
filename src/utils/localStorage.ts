import {CartState} from 'store/cart/cart.types'

export const getCartFromLocalStorage = (key: string): null | CartState => {
    const data = localStorage.getItem(key)
    if (data) {
        return JSON.parse(data)
    }

    return null
}

export const setCartInLocalStorage = (key: string, data: CartState) => {
    localStorage.setItem(key, JSON.stringify(data))
}
