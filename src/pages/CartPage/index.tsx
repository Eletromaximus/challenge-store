import { useContext } from 'react'
import Button from '../../components/foundation/Button'
import Text from '../../components/foundation/Text'
import { Grid } from '../../components/layout/Grid'
import { ContextCart } from '../../components/Provider'
import WebSiteWrapper from '../../components/WebSiteWrapper'

export default function CartPage () {
  const { dispatchProduct, product } = useContext(ContextCart)

  return (
    <WebSiteWrapper>
      <Grid.Col
        value={12}
        color='black'
      >
        {product && product.map(product => {
          return <Grid.Row
            key={product.game.name}
          >
            <Grid.Row>
              <Text>
                {product.game.name} Quantidade:
              </Text>

              <Text>
                {product.nProduct} X {product.game.price}
              </Text>

              <Text>
                Total: {product.nProduct * product.game.price}
              </Text>
            </Grid.Row>

            <Button onClick={() => dispatchProduct({
              type: 'removeProduct',
              payload: product
            })}>
              Remover
            </Button>
          </Grid.Row>
        })}
      </Grid.Col>
    </ WebSiteWrapper >
  )
}
