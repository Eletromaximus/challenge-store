import { ReactNode } from 'react'
import { Box } from '../layout/Box'
import Menu from '../Menu'

interface IWebSiteWrapper {
  children: ReactNode,
  menuProps?: boolean
}

export default function WebSitePageWrapper ({
  menuProps,
  children
}: IWebSiteWrapper) {
  return (
    <Box
    display='flex'
    flex='1'
    flexDirection='column'
    >
      { menuProps && <Menu />}
      {children}
    </Box>
  )
}
