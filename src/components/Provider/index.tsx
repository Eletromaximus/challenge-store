import { useReducer, createContext, ReactNode } from 'react'
import { reducerProduct, ActionProduct, IProduct } from './ShoppingCartContext'

const INITIAL_STATE_MOVIE: IProduct[] = []

export const ContextCart = createContext({
  product: INITIAL_STATE_MOVIE,
  dispatchProduct: (action: ActionProduct) => {}
})

interface ICart {
  children: ReactNode
}

export default function ContextProvider ({ children }: ICart) {
  const [product, dispatchProduct] = useReducer(reducerProduct, [])

  return <ContextCart.Provider value={{
    product,
    dispatchProduct
  }}>
    {children}
  </ContextCart.Provider>
}
