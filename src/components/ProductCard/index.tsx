import { Button } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { Box } from '../layout/Box'
import Text from '../foundation/Text'
interface IProductCard {
  title: string,
  nProduct: number,
  price: number,
  removeProduct: () => void
}

export default function ProductCard (item: IProductCard) {
  return (
    <Box
      className="product"
      width='100%'
      padding='5px'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
    >
      <Box
        width='64px'
        height='64px'
        className="icone-of-movie"
      >
        <img src="./icone-loading.png" alt="" />
      </Box>

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
        display='flex'
        width='100px'
      >
        <p>{item.nProduct}</p>
        <p>R$ {item.price}</p>
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
