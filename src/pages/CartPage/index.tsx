import { useContext } from 'react'
import Button from '../../components/foundation/Button'
import Text from '../../components/foundation/Text'
import { Box } from '../../components/layout/Box'
import { Grid } from '../../components/layout/Grid'
import { ContextCart } from '../../components/Provider'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export default function CartPage () {
  const { dispatchProduct, product } = useContext(ContextCart)

  return (
    <Grid.Col
      value={12}
      backgroundColor='white'
      margin='0'
      padding='0'
    >
      {product && product.map(product => {
        return <Box
          display='grid'
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            textAlign: 'center',
            minWidth: '400px'
          }}
          key={product.game.name}
          height='50px'
        >
          <Text
            color='black'
          >
            {product.game.name}
          </Text>

          <Text
            color='black'
          >
            {product.nProduct} x
          </Text>

          <Text
            color='black'
          >
            Total: {(product.nProduct * product.game.price).toLocaleString(
            'pt-BR', { style: 'currency', currency: 'BRL' }
          )}
          </Text>

          <Box
            flexDirection='row'
            width='100px'
          >
            <Button
              onClick={() => dispatchProduct({
                type: 'addProduct',
                payload: product.game
              })}
              color='black'
            >
              <AddIcon />
            </Button>

            <Button
              onClick={() => dispatchProduct({
                type: 'removeProduct',
                payload: product
              })}
              color='black'
            >
              <RemoveIcon />
            </Button>
          </Box>
        </Box>
      })}

      <Box
        flexDirection='row'
        justifyContent='center'
      >
        <Text color='black'>
          <b>Total: </b> {product.reduce((prev, current) => {
            return current.nProduct * current.game.price + prev
          }, 0).toLocaleString(
            'pt-BR', { style: 'currency', currency: 'BRL' }
          )}
        </Text>
      </Box>
    </Grid.Col>
  )
}
