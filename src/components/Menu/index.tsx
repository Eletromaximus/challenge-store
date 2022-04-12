import { MenuWrapper } from './styles'
import Text from '../foundation/Text'
import { useContext } from 'react'
import { ModeContext } from '../WebSiteWrapper/provider'
import Button from '../foundation/Button'

export default function Menu () {
  const modeChange = useContext(ModeContext)

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
    </MenuWrapper>
  )
}
