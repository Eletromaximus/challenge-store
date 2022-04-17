import { Grid } from '../../components/layout/Grid'
import { ListStyle, Navbar } from './styles'
import { products } from '../../components/Products'
import Button from '../../components/foundation/Button'
import useOrder from '../../components/hooks/useOrder'
import Card, { IProduct } from '../../components/Card'

export default function Home () {
  const [items, setItems] = useOrder(products)

  return (
    <>
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

    <Grid.Col
      alignItems='center'
      value={{
        md: 10,
        sm: 12
      }}
      offset={0}
      >

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
    </Grid.Col>
        </>
  )
}
