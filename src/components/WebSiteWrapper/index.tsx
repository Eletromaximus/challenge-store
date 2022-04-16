import { ReactNode } from 'react'
import WebSiteGlobalProvider from './provider'

interface IWebSiteWrapper {
  children: ReactNode
}

export default function WebSiteWrapper ({ children }:IWebSiteWrapper) {
  return (
    <WebSiteGlobalProvider>
      {children}
    </WebSiteGlobalProvider>
  )
}
