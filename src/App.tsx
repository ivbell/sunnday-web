import { ChakraProvider } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import useTokenCookie from './lib/hooks/cookie/useTokenCookie'
import { useAppDispatch, useAppSelector } from './lib/hooks/redux/redux'
import { userAuthToken } from './lib/store/action-creators/user.action'
import Fonts from './lib/theme/fonts'
import theme from './lib/theme/theme'

const App = () => {
  const { token } = useTokenCookie()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (token) {
      dispatch(userAuthToken(token))
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
