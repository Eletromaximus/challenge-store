import { useState } from 'react'

interface IProducts {
  id: number,
  name: string,
  price: number,
  score: number,
  image: string
}

export default function useOrder (listItens : IProducts[]): [IProducts[] | null, (arg: string) => void] {
  const [items, setItems] = useState('id')

  function listId() {
    return listItens
      .sort((a, b) => {
        if(a.id < b.id) {
          return -1
        } else {
          return 0
        }
      })
  }

  function orderList () {
    switch (items) {
      case 'price':
        return listItens
          .sort((a, b) => a.price - b.price)
      case 'name':
        return listItens
          .sort((a, b) => {
            if (a.name < b.name) {
              return -1
            } else {
              return 0
            }
          })
      case 'score':
        return listItens
          .sort((a, b) => a.score - b.score)
      default:
        return listId()
    }
  }

  const result = orderList()

  const toogleList = (select: string) => setItems(select)

  return [result, toogleList]
}
