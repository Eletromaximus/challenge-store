import { CardStyle } from './style'
import Text from '../foundation/Text'
import Button from '../foundation/Button'
import { useContext } from 'react'
import { ContextCart } from '../Provider'

export interface IProduct {
  id: number,
  name: string,
  price: number,
  score: number,
  image: string
}

export default function Card (game: IProduct) {
  const { dispatchProduct } = useContext(ContextCart)

  return (
    <CardStyle>
      <Button
        style={{
          borderRadius: '5px'
        }}
        onClick={() => dispatchProduct({
          type: 'addProduct',
          payload: game
        })}
      >
        <img
          src={`../assets/${game.image}`}
          alt={game.name}
          width={250}
        />
        <Text
          margin='20px 0 0 20px'
          color='#211B1B'
        >
          {game.name}
        </Text>
        <Text
          variant='title'
          margin='10px 0 0 20px'
          color='#211B1B'
        >
          R$ {game.price}
        </Text>
      </Button>
    </CardStyle>
  )
}
