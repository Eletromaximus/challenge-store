import { MenuWrapper } from './styles'
import Text from '../foundation/Text'
import { useContext, useEffect, useState } from 'react'
import { ModeContext } from '../WebSiteWrapper/provider'
import Button from '../foundation/Button'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { ContextCart } from '../Provider'

interface IMenu {
  onCheckout: () => void
}

export default function Menu ({ onCheckout }: IMenu) {
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
      ? <FavoriteBorderIcon fontSize='large' />
      : <FavoriteIcon fontSize='large' />

  return (
    <MenuWrapper>
      <Button
        href='/'
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
          onCheckout()
        }}
      >
        {changeIcon}
      </Button>
     </MenuWrapper>
  )
}
