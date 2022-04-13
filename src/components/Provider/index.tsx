import { useReducer, createContext, ReactNode } from 'react'
import { reducerMovie, ActionMovie, IMovie } from './ShoppingCartContext'

const INITIAL_STATE_MOVIE: IMovie[] = []

export const Context = createContext({
  movie: INITIAL_STATE_MOVIE,
  dispatchMovie: (action: ActionMovie) => {},
})

interface IContext {
  children: ReactNode
}

export default function ContextProvider ({ children }: IContext) {
  const [movie, dispatchMovie] = useReducer(reducerMovie, [])

  return <Context.Provider value={{
    movie,
    dispatchMovie,
  }}>
    {children}
  </Context.Provider>
}
