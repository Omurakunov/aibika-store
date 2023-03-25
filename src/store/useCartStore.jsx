import { create } from 'zustand'
export const useCartStore = create((set, get) => ({
    cart: [],
    addProduct: (data) => set(state=> (
        {
            cart:[
                ...state.cart,
                data
            ]
        }
    )),
    increaseCount: (index) => set({
        cart: get().cart.map(
            product => index === product.id ? {...product, count: product.count + 1} : product
        )
    }),
    decreaseCount: (index) => set({
        cart: get().cart.map(
            product => index === product.id ? {...product, count: product.count - 1} : product
        )
    }),
}))