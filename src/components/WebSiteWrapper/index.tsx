import React from 'react'
import { Box } from '../foundation/layout/Box'
import Menu from '../Menu'

interface IWebSiteWrapper {
  children: React.ReactNode,
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

// WebSitePageWrapper.defaulProps = {
//   menuProps: true
// }
