import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import { observer } from 'mobx-react-lite'
import UiStore from './lib/store/UiStore'

const App = observer(() => {
  return (
    <ThemeProvider theme={UiStore.theme}>
      <BrowserRouter>
        <AppRouter />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
})

export default App
