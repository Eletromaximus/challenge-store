import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${normalize}
  body {
    display: flex;
    min-height: 100vh;
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family:  ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    text-decoration: none;
  
    div {
      width: 100%;
    }
  }
`
export default GlobalStyle
