import { MenuWrapper } from './styles'
import Text from '../foundation/Text'
import { useContext, useEffect, useState } from 'react'
import { ModeContext } from '../WebSiteWrapper/provider'
import Button from '../foundation/Button'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { ContextCart } from '../Provider'

interface IMenu {
  onShopping: () => void
}

export default function Menu ({ onShopping }: IMenu) {
  const modeChange = useContext(ModeContext)
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
      ? <FavoriteBorderIcon />
      : <FavoriteIcon />

  return (
    <MenuWrapper>
      <Text
        variant='paragraph1'
      >
        Game Shop
      </Text>

      <Button
        onClick={
          () => modeChange.toggleModeContext()
        }
      >
        Light/Dark
      </Button>

      <Button
        onClick={() => onShopping()}
      >
        {changeIcon}
      </Button>
    </MenuWrapper>
  )
}
