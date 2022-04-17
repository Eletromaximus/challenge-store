import { Button } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { Box } from '../layout/Box'
import Text from '../foundation/Text'
interface IProductCard {
  title: string,
  nProduct: number,
  price: number,
  image: string,
  removeProduct: () => void
}

export default function ProductCard (item: IProductCard) {
  return (
    <Box
      flexDirection='row'
      className="product"
      width='100%'
      padding='5px'
      display='flex'
      justifyContent='space-between'
    >
      <Box
        className="name-of-product"
        width={200}
      >
        <Text color='black'>
          {item.title.substring(0, 18)}
        </Text>
      </Box>

      <Box
        justifyContent='space-between'
        width='100px'
        flexDirection='row'
      >
        <Text
          color='black'
        >
          {item.nProduct}
        </Text>

        <Text
          color='black'
        >
          R$ {item.price}
        </Text>
      </Box>

      <Button
        variant='outlined'
        endIcon={<Delete />}
        size='small'
        onClick={() => item.removeProduct()}
      />
    </Box>
  )
}
