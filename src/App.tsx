import { ChakraProvider } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { useUser } from './lib/data/useUser'
import Fonts from './lib/theme/fonts'
import theme from './lib/theme/theme'
import Cookie from 'universal-cookie'
import UserStore from './lib/store/UserStore'

const App = observer(() => {
  const cookie = new Cookie()
  const { dataUser, isLoading, isError } = useUser(cookie.get('token'))

  useEffect(() => {
    UserStore.userAuth()
    UserStore.userIdUpdate(dataUser.user_id)
  }, [dataUser])

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ChakraProvider>
  )
})

export default App
