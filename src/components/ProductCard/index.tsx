import { Button } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { Box } from '../layout/Box'

interface IProductCard {
  title: string,
  nProduct: number,
  price: number,
  removeProduct: () => void
}

export default function ProductCard (item: IProductCard) {
  return (
    <Box
      key={item.title}
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
        {item.title.substring(0, 18)}
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
