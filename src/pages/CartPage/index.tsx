import { useContext, useEffect } from 'react'
import Button from '../../components/foundation/Button'
import Text from '../../components/foundation/Text'
import { Grid } from '../../components/layout/Grid'
import { ContextCart } from '../../components/Provider'
import WebSiteWrapper from '../../components/WebSiteWrapper'

export default function CartPage () {
  const { dispatchProduct, product } = useContext(ContextCart)

  useEffect(() => {
    console.log(product)
  })
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
              <Text
                color='black'
              >
                {product.game.name} Quantidade:
              </Text>

              <Text
                color='black'
              >
                {product.nProduct} X {product.game.price}
              </Text>

              <Text
                color='black'
              >
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
