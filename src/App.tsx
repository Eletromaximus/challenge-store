import GlobalStyle from './theme/GlobalStyle'
import WebSiteGlobalProvider from './components/WebSiteWrapper/provider'
import Home from './pages/Home'

function App () {
  return (
    <WebSiteGlobalProvider>
      <GlobalStyle />
        <Home />
    </WebSiteGlobalProvider>
  )
}

export default App
