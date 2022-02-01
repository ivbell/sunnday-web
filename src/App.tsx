import { observer } from 'mobx-react-lite'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import AppRouter from './components/AppRouter'
import UiStore from './lib/store/UiStore'
import GlobalStyles from './styles/global'
import { darkTheme, lightTheme } from './styles/theme'

const App = observer(() => {
  const theme = UiStore.theme
  console.log(theme)

  console.log()

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <BrowserRouter>
        <AppRouter />
        <GlobalStyles />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
})

export default App
