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
import LoadingComponent from './components/common/LoadingComponent'

const App = observer(() => {
  const cookie = new Cookie()
  const token = cookie.get('token')
  const { dataUser, isLoading } = useUser(token)

  useEffect(() => {
    if (dataUser && !isLoading) {
      UserStore.userIdUpdate(dataUser.user_id)
      UserStore.userAuth()
    }
  }, [dataUser])

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <BrowserRouter>
        {isLoading ? <LoadingComponent /> : <AppRouter />}
      </BrowserRouter>
    </ChakraProvider>
  )
})

export default App
