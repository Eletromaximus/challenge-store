import Button from '@mui/material/Button'
import { Delete, Close } from '@mui/icons-material'
import { useContext } from 'react'
import { Box } from '../layout/Box'
import { ContextCart } from '../Provider'
import ProductCard from '../ProductCard'
// import Text from '../foundation/Text'

interface IShoppingCart {
  onCheckout: () => void
}

export default function ShoppingCart ({ onCheckout }: IShoppingCart) {
  const { product, dispatchProduct } = useContext(ContextCart)

  return (
    <Box
    display='flex'
    flex-direction='column'
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      background: 'rgba(0, 0, 0, 0.9)'
    }}
    >
    <aside
      style={{
        position: 'absolute',
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
              onClick={() => onCheckout()}
            >
              {<Close />}
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
            <ProductCard
              nProduct={item.nProduct}
              price={item.game.price}
              removeProduct={() => dispatchProduct({
                type: 'removeProduct',
                payload: item
              })}
              title={item.game.name}
              key={item.game.id}
            />
          ))}

          <hr style={{
            width: '90%',
            border: 0,
            borderTop: '1px solid #CCC '
          }}/>
        </Box>
      </aside>
    </Box>
  )
}
