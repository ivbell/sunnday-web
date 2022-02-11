import { ChakraProvider } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import LoadingComponent from './components/common/LoadingComponent'
import useTokenCookie from './lib/hooks/cookie/useTokenCookie'
import { useActions } from './lib/hooks/redux/useActions'
import { useTypedSelector } from './lib/hooks/redux/useTypedSelector'
import Fonts from './lib/theme/fonts'
import theme from './lib/theme/theme'

const App = () => {
  const { token } = useTokenCookie()
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
