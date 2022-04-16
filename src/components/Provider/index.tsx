import { useReducer, createContext, useState } from 'react'
import { reducerProduct, ActionProduct, IProduct } from './ShoppingCartContext'

const INITIAL_STATE_MOVIE: IProduct[] = []

export const ContextCart = createContext({
  product: INITIAL_STATE_MOVIE,
  dispatchProduct: (action: ActionProduct) => {},
  setShopping: () => {},
  shopping: false
})

export default function ContextProvider ({ children }: any) {
  const [product, dispatchProduct] = useReducer(reducerProduct, [])
  const [shopping, setShopping] = useState(false)

  return <ContextCart.Provider value={{
    product,
    dispatchProduct,
    setShopping: () => setShopping(!shopping),
    shopping
  }}>
    {children}
  </ContextCart.Provider>
}
