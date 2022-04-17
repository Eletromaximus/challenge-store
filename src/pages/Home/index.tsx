import { Grid } from '../../components/layout/Grid'
import { ListStyle, Navbar } from './styles'
import { products } from '../../components/Products'
import Button from '../../components/foundation/Button'
import useOrder from '../../components/hooks/useOrder'
import Card, { IProduct } from '../../components/Card'
import WebSiteWrapper from '../../components/WebSiteWrapper'

export default function Home () {
  const [items, setItems] = useOrder(products)

  return (
    <WebSiteWrapper>
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

      <Grid.Col
        alignItems='center'
        value={{
          xl: 10,
          lg: 11,
          md: 11,
          sm: 11
        }}
        offset={1}
        padding='0'
      >

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
    </WebSiteWrapper>
  )
}
