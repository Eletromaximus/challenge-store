import { ThemeProvider } from 'styled-components'
import { createContext, ReactNode } from 'react'
import useTheme from '../../hooks/useTheme'
import GlobalStyle from '../../../theme/GlobalStyle'
import ContextProvider from '../../Provider'

export const ModeContext = createContext({
  setThema: () => {}
})

interface IWebSiteGlobalProvider {
  children: ReactNode
}

export default function WebSiteGlobalProvider (
  { children }: IWebSiteGlobalProvider
) {
  const [thema, setThema] = useTheme()

  return (
    <ModeContext.Provider value={{
      setThema
    }}>
      <ThemeProvider theme={thema}>
        <GlobalStyle />
        <ContextProvider>
          {children}
        </ContextProvider>
      </ThemeProvider>
    </ModeContext.Provider>
  )
}
