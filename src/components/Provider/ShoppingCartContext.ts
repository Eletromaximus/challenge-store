
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
          const newState = [...state]
          const newProduct = {
            game: newState[index].game,
            nProduct: newState[index].nProduct + 1
          }

          newState.splice(index, 1, newProduct)
          state = [...newState]

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
        const index = state.indexOf(action.payload)

        if (state[index]) {
          const newState = [...state]

          if (state[index].nProduct > 1) {
            const newProduct = {
              game: action.payload.game,
              nProduct: action.payload.nProduct - 1
            }

            newState.splice(index, 1, newProduct)
            state = [...newState]

            return state
          } else {
            newState.splice(index, 1)
            state = [...newState]

            return state
          }
        }

        return state
      }
      state = []

      return state
    case 'cleanCart':
      state = []

      return state
    default:
      return state
  }
}
