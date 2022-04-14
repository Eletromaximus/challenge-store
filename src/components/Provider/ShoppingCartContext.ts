
interface IGame {
  id: number,
  name: string,
  price: number,
  score: number,
  image: string,
}
export interface IProduct {
  game: IGame,
  nProduct: number
}

export type ActionProduct = {
  type: 'addProduct',
  payload: IGame
} | {type: 'removeProduct', payload: IProduct }
  | {type: 'cleanCart' }

export function reducerProduct (state: IProduct[], action: ActionProduct) {
  switch (action.type) {
    case 'addProduct':
      if (state.length === 0) {
        state = [{
          game: action.payload,
          nProduct: 1
        }]

        return state
      } else {
        const isProduct = state.find(product =>
          product.game.id === action.payload.id
        )

        if (isProduct) {
          const index = state.indexOf(isProduct)
          const newCart = [...state]
          newCart[index].nProduct += 1
          state = newCart
          return state
        }

        state = [
          ...state,
          {
            game: action.payload,
            nProduct: 1
          }
        ]
        return state
      }

    case 'removeProduct':
      if (state.length > 0) {
        const isProduct = state.find(product =>
          product.game.id === action.payload.game.id
        )

        if (isProduct) {
          if (isProduct.nProduct > 1) {
            const index = state.indexOf(isProduct)
            const newCart = [...state]
            newCart[index].nProduct -= 1
            state = [...newCart]

            return state
          } else {
            const filteredCart = state.filter(
              (item) => item.game.id !== action.payload.game.id
            )
            state = [...filteredCart]

            return state
          }
        }
      }

      return state

    case 'cleanCart':
      state = []
      return state

    default:
      return state
  }
}
