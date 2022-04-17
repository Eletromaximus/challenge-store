import CartPage from './pages/CartPage'
import Home from './pages/Home'
import WebSiteWrapper from './components/WebSiteWrapper'
import { useState } from 'react'
import Menu from './components/Menu'
import ShoppingCart from './components/ShoppingCart'
import { Box } from './components/layout/Box'

function App () {
  const [page, setPage] = useState(false)
  const [littleCart, setLittleCart] = useState(false)

  const selectPage = page === false
    ? <Home />
    : <CartPage />

  return (
    <WebSiteWrapper>
      <Box
        display='block'
      >
        <Menu
          onLittleCart={() => setLittleCart(!littleCart)}
          onHome={() => setPage(false)}
        />

        {selectPage}

        {littleCart && <ShoppingCart
          changePage={() => {
            setPage(true)
            setLittleCart(false)
          }}
          onClose={() => setLittleCart(!littleCart)}
          />
        }
      </Box>

    </WebSiteWrapper>
  )
}

export default App
