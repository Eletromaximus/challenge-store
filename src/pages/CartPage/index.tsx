import { useContext } from 'react'
import Button from '../../components/foundation/Button'
import { Grid } from '../../components/layout/Grid'
import { ContextCart } from '../../components/Provider'
import WebSiteWrapper from '../../components/WebSiteWrapper'

export default function CartPage () {
  const { dispatchProduct, product } = useContext(ContextCart)

  return (
    <WebSiteWrapper>
      <Grid.Col
        value={12}
      >
        {product && product.map(product => {
          return <Grid.Row
            key={product.game.name}
          >
            <Grid.Row>
              {product.game.name} Quantidade:
              {product.nProduct} X {product.game.price}
              Total: {product.nProduct * product.game.price}
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
    </WebSiteWrapper>
  )
}
