import { MenuWrapper } from './styles'
import Text from '../foundation/Text'
import { useContext, useEffect, useState } from 'react'
import { ModeContext } from '../WebSiteWrapper/provider'
import Button from '../foundation/Button'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { ContextCart } from '../Provider'

interface IMenu {
  onLittleCart: () => void,
  onHome: () => void
}

export default function Menu ({
  onLittleCart,
  onHome
}: IMenu) {
  const { setThema } = useContext(ModeContext)
  const { product } = useContext(ContextCart)
  const [like, setLike] = useState(true)

  useEffect(() => {
    if (product.length > 0) {
      setLike(true)
    } else {
      setLike(false)
    }
  })

  const changeIcon =
    like === false
      ? <AddShoppingCartIcon fontSize='large' />
      : <ShoppingCartIcon fontSize='large' />

  return (
    <MenuWrapper>
      <Button
        onClick={() => onHome()}
      >
        <Text
          variant='title'
        >
          Game Shop
        </Text>
      </Button>

      <Button
        onClick={
          () => setThema()
        }
      >
        Light/Dark
      </Button>

      <Button
        onClick={() => {
          onLittleCart()
        }}
      >
        {changeIcon}
      </Button>
     </MenuWrapper>
  )
}
