import { ChakraProvider } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Cookie from 'universal-cookie'
import AppRouter from './components/AppRouter'
import LoadingComponent from './components/common/LoadingComponent'
import { useActions } from './lib/hooks/useActions'
import { useTypedSelector } from './lib/hooks/useTypedSelector'
import Fonts from './lib/theme/fonts'
import theme from './lib/theme/theme'

const App = () => {
  const cookie = new Cookie()
  const token = cookie.get('token')
  const { loading } = useTypedSelector((store) => store.user)
  const { userAuthToken } = useActions()

  useEffect(() => {
    if (token) {
      userAuthToken(token)
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <BrowserRouter>
        {loading ? <LoadingComponent /> : <AppRouter />}
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
