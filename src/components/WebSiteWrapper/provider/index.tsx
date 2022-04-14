import { ThemeProvider } from 'styled-components'
import { createContext } from 'react'
import useTheme from '../../hooks/useTheme'
import GlobalStyle from '../../../theme/GlobalStyle'

export const ModeContext = createContext({
  toggleModeContext: () => {}
})

export default function WebSiteGlobalProvider ({ children }: any) {
  const [thema, setThema] = useTheme()

  return (
    <ModeContext.Provider value={{
      toggleModeContext: () => {
        setThema()
      }
    }}>
      <ThemeProvider theme={thema}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ModeContext.Provider>
  )
}
