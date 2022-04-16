import { ThemeProvider } from 'styled-components'
import { createContext } from 'react'
import useTheme from '../../hooks/useTheme'
import GlobalStyle from '../../../theme/GlobalStyle'
import ContextProvider from '../../Provider'

export const ModeContext = createContext({
  setThema: () => {}
})

export default function WebSiteGlobalProvider ({ children }: any) {
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
