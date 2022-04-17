import { useReducer, createContext } from 'react'
import { reducerProduct, ActionProduct, IProduct } from './ShoppingCartContext'

const INITIAL_STATE_MOVIE: IProduct[] = []

export const ContextCart = createContext({
  product: INITIAL_STATE_MOVIE,
  dispatchProduct: (action: ActionProduct) => {}
})

export default function ContextProvider ({ children }: any) {
  const [product, dispatchProduct] = useReducer(reducerProduct, [])

  return <ContextCart.Provider value={{
    product,
    dispatchProduct
  }}>
    {children}
  </ContextCart.Provider>
}
