// import { Grid } from '../../components/layout/Grid'
import { Container, ListStyle, Navbar } from './styles'
import { products } from '../../components/Products'
import Button from '../../components/foundation/Button'
import useOrder from '../../components/hooks/useOrder'
import Card, { IProduct } from '../../components/Card'
import { Box } from '../../components/layout/Box'

export default function Home () {
  const [items, setItems] = useOrder(products)

  return (
    <Box>
      <Navbar>
        <Button
          onClick={
            () => setItems('price')
          }
          color='black'
          >
          Preço
        </Button>

        <Button
          onClick={
            () => setItems('score')
          }
          color='black'
          >
          Avaliação
        </Button>

        <Button
          onClick={
            () => setItems('name')
          }
          color='black'
          >
          Nome
        </Button>
      </Navbar>

      <Container id='container'>
        <ListStyle id='list'>
          {items && items.map((item: IProduct) => {
            return <Card
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            score={item.score}
            />
          })}
        </ListStyle>
      </Container>
    </Box>
  )
}
