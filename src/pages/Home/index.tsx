import { Grid } from '../../components/layout/Grid'
import { ListStyle, Navbar } from './styles'
import { products } from '../../components/Products'
import Button from '../../components/foundation/Button'
import useOrder from '../../components/hooks/useOrder'
import Card, { IProduct } from '../../components/Card'
import ContextProvider, { ContextCart } from '../../components/Provider'
import Menu from '../../components/Menu'
import { useContext } from 'react'
import { Box } from '../../components/layout/Box'
import ShoppingCart from '../../components/ShoppingCart'

export default function Home () {
  const [items, setItems] = useOrder(products)
  const { shopping, setShopping } = useContext(ContextCart)

  return (
    <ContextProvider>
      <Menu onShopping={() => setShopping()
        }
      />

      <Grid.Col
        value={{
          md: 10
        }}
        offset={{
          md: 1
        }}
        padding='0'
      >
        <Navbar>
          <Button
            onClick={
              () => setItems('price')
            }
          >
            Preço
          </Button>

          <Button
            onClick={
              () => setItems('id')
            }
          >
            id
          </Button>

          <Button
            onClick={
              () => setItems('score')
            }
          >
            Score
          </Button>

          <Button
            onClick={
              () => setItems('name')
            }
          >
            Nome
          </Button>
        </Navbar>

        <Box
          display='flex'
          justifyContent='space-between'
          width='100%'
        >
          {shopping && <ShoppingCart
            onCheckout={
              () => setShopping()
            }
          />}
        </Box>

        <ListStyle>
          {items && items.map((item: IProduct) => {
            return <li key={item.id}>
              <Card
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                score={item.score}
              />
            </li>
          })}
        </ListStyle>
      </Grid.Col>
    </ContextProvider>
  )
}
