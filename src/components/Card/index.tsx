import { CardStyle } from './style'
import Text from '../foundation/Text'
import Button from '../foundation/Button'

interface IProduct {
  product: {
    id: number,
    name: string,
    price: number,
    score: number,
    image: string
  }
}
export default function Card ({ product }: IProduct) {
  return (
    <CardStyle>

      <Button
        style={{
          borderRadius: '5px'
        }}
      >
        <img
          src={`../assets/${product.image}`}
          alt={product.name}
        />
        <Text
          margin='20px 0 0 20px'
        >
          {product.name}
        </Text>
        <Text
          variant='title'
          margin='10px 0 0 20px'
        >
          R$ {product.price}
        </Text>
      </Button>

    </CardStyle>
  )
}
