import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { observer } from 'mobx-react'
import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookie from 'universal-cookie'
import EmptyLayout from '../components/layouts/EmptyLayout'
import { useUser } from '../lib/data/useUser'
import UserStore from '../lib/store/UserStore'

interface User {
  readonly login: string
  readonly password: string
}

const Login: FC = observer(() => {
  const toast = useToast()
  const navigate = useNavigate()
  const cookie = new Cookie()
  const initialUser: User = {
    login: '',
    password: '',
  }

  const [user, setUser] = useState<User>(initialUser)
  const [isLoad, setIsLoad] = useState<boolean>(false)

  const { dataUser, isLoading, isError } = useUser(cookie.get('token'))

  console.log(dataUser)

  const handlerUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const login = () => {
    // TODO
    // - password validation
    // - error handler
    if (user.login && user.password) {
      setIsLoad(true)

      axios
        .post(`${import.meta.env.VITE_SERVER}/auth/login`, {
          login: user.login,
          password: user.password,
        })
        .then((res) => {
          cookie.set('token', res.data.accessToken, { path: '/' })
          UserStore.userAuth()
          navigate('/dashboard')
          toast({
            title: 'Welcome back',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        })
        .catch(() => {
          toast({
            title: 'Try again',
            description: 'Enter your current username and password',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        })
      setIsLoad(false)
    }
  }

  return (
    <EmptyLayout title={'Login'}>
      <Container maxW={'container.xl'}>
        <Center>
          <Box w={320} py={10}>
            <Text
              fontFamily={'Comfortaa'}
              fontWeight={'medium'}
              fontSize={'4xl'}
              py={2}
              align={'center'}
              color={'gray.600'}
            >
              Welcome in
            </Text>
            <Heading align={'center'} color={'accent.50'}>
              Sunnday
            </Heading>
            <Box p={3}>
              <Stack spacing={'10px'}>
                <Input
                  isRequired
                  isDisabled={isLoad}
                  onChange={handlerUser}
                  name={'login'}
                  placeholder={'Login'}
                />
                <Input
                  isDisabled={isLoad}
                  isRequired
                  type={'password'}
                  onChange={handlerUser}
                  name={'password'}
                  placeholder={'Password'}
                />
              </Stack>
              <Stack
                py={5}
                direction={['column', 'row']}
                justify={'space-between'}
              >
                <Button
                  onClick={login}
                  colorScheme={'violet'}
                  variant={'solid'}
                >
                  Log in
                </Button>
                <Button>Registration</Button>
              </Stack>
            </Box>
          </Box>
        </Center>
      </Container>
    </EmptyLayout>
  )
})

export default Login
