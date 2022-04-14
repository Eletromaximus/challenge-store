import { Grid } from '../../components/layout/Grid'
import { ListStyle, Navbar } from './styles'
import { products } from '../../components/Products'
import Button from '../../components/foundation/Button'
import useOrder from '../../components/hooks/useOrder'
import Card, { IProduct } from '../../components/Card'
import WebSitePageWrapper from '../../components/WebSiteWrapper'

export default function Home () {
  const [items, setItems] = useOrder(products)

  return (
    <WebSitePageWrapper
      menuProps={true}
    >
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
    </WebSitePageWrapper>
  )
}
