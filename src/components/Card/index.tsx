import { CardStyle } from './style'
import Text from '../foundation/Text'
import Button from '../foundation/Button'
import { useContext } from 'react'
import { ContextCart } from '../Provider'
import { Box } from '../layout/Box'

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
      <Box>
        <img
          src={`../assets/${game.image}`}
          alt={game.name}
          width={250}
        />

        <Text
          margin='10px 5px'
          color='#211B1B'
          tag='p'
        >
          <b>{game.name}</b>
        </Text>
      </Box>

      <Text
        variant='paragraph1'
        margin='5px'
        color='#211B1B'
      >
        <b>Preço: </b> R$ {game.price}
      </Text>

      <Text
        variant='paragraph1'
        margin='5px'
        color='#211B1B'
      >
        <b>Avaliação: </b> {game.score}%
      </Text>

      <Box
        width='100%'
      >
        <Button
          onClick={() => dispatchProduct({
            type: 'addProduct',
            payload: game
          })}
          backgroundColor='#007FFF'
          color='white'
          width='100px'
          padding={8}
          borderRadius={5}
        >
          Comprar
        </Button>
      </Box>
    </CardStyle>
  )
}
