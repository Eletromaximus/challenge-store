import { CardStyle } from './style'
import Text from '../foundation/Text'
import Button from '../foundation/Button'

interface IProduct {
  id: number,
  name: string,
  price: number,
  score: number,
  image: string
}
export default function Card ({ 
  price, name, image
 }: IProduct) {
  return (
    <CardStyle>
      <Button
        style={{
          borderRadius: '5px'
        }}
      >
        <img
          src={`../assets/${image}`}
          alt={name}
        />
        <Text
          margin='20px 0 0 20px'
        >
          {name}
        </Text>
        <Text
          variant='title'
          margin='10px 0 0 20px'
        >
          R$ {price}
        </Text>
      </Button>
    </CardStyle>
  )
}
