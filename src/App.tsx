import { ChakraProvider } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import theme from './lib/theme/theme'

const App = observer(() => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ChakraProvider>
  )
})

export default App
