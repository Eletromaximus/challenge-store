import Button from '@mui/material/Button'
import Delete from '@mui/icons-material/Delete'
import { useContext } from 'react'
import { Box } from '../layout/Box'
import { ContextCart } from '../Provider'
import MovieCard from '../MovieCard'

interface IShoppingCart {
  onCheckout: () => void
}

export default function ShoppingCart ({ onCheckout }: IShoppingCart) {
  const { product, dispatchProduct } = useContext(ContextCart)

  return (
    <aside
      style={{
        position: 'absolute',
        zIndex: 1,
        right: 0
      }}
    >
        <Box
          className="shopping-car"
          width={{
            sm: '400px',
            xs: '320px'
          }}
          height='150vh'
          display='flex'
          flexDirection='column'
          border='1px solid gray'
          backgroundColor='#FFFFFF'
        >
          <Box
            display='flex'
            justifyContent='space-between'
            margin='5px'
          >
            <Button
              onClick={() => onCheckout()}
            >
              <h4>Meu Carrinho</h4>
            </Button>

            <Button
              variant='outlined'
              endIcon={<Delete />}
              size='small'
              onClick={() => dispatchProduct({ type: 'cleanCart' })}
            >
              Esvaziar
            </Button>
          </Box>

          {product.length > 0 && product.map((item) => (
            <MovieCard
              nProduct={item.nProduct}
              price={item.game.price}
              removeMovie={() => dispatchProduct({
                type: 'removeProduct',
                payload: item
              })}
              title={item.game.name}
              key={item.game.id}
            />
          ))}
        </Box>
      </aside>
  )
}
