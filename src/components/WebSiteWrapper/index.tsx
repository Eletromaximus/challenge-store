import { ReactNode, useState } from 'react'
import { Box } from '../layout/Box'
import Menu from '../Menu'
import ShoppingCart from '../ShoppingCart'
import WebSiteGlobalProvider from './provider'

interface IWebSiteWrapper {
  children: ReactNode
}

export default function WebSiteWrapper ({ children }: IWebSiteWrapper) {
  const [shopping, setShopping] = useState(false)

  return (
    <WebSiteGlobalProvider>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        margin='0'
        padding='0'
      >
        <Menu onCheckout={() => setShopping(!shopping)} />

        {children}

        {shopping && <ShoppingCart
          onClose={() => setShopping(!shopping)}
        />}
      </Box>
    </WebSiteGlobalProvider>
  )
}
