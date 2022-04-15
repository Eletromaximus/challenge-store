import WebSiteGlobalProvider from './components/WebSiteWrapper/provider'
import Home from './pages/Home'

function App () {
  return (
    <WebSiteGlobalProvider>
      <Home />
    </WebSiteGlobalProvider>
  )
}

export default App
