import { ReactNode } from 'react'
import { Box } from '../layout/Box'
import WebSiteGlobalProvider from './provider'

interface IWebSiteWrapper {
  children: ReactNode
}

export default function WebSiteWrapper ({ children }: IWebSiteWrapper) {
  return (
    <WebSiteGlobalProvider>
      <Box>
        {children}
      </Box>
    </WebSiteGlobalProvider>
  )
}
