import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Input,
  Stack,
  Text,
  useToast
} from '@chakra-ui/react'
import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookie from 'universal-cookie'
import EmptyLayout from '../components/layouts/EmptyLayout'
import { useAppDispatch, useAppSelector } from '../lib/hooks/redux/redux'
import { userAuthToken } from '../lib/store/action-creators/user.action'

interface User {
  readonly login: string
  readonly password: string
}

const Login: FC = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const { is_auth } = useAppSelector((state) => state.userReducer)
  const cookie = new Cookie()
  const initial_user: User = {
    login: '',
    password: '',
  }
  const dispatch = useAppDispatch()
  const [user, setUser] = useState<User>(initial_user)
  const [is_load, setIsLoad] = useState<boolean>(false)

  const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (is_auth) {
      navigate('/dashboard')
    }
  }, [])

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
          cookie.set('token', res.data.accessToken, { path: '/', maxAge: 3600 })
          dispatch(userAuthToken(res.data.accessToken))
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
              color={'gray.600'}>
              Welcome in
            </Text>
            <Heading align={'center'} color={'sn.accent'}>
              Sunnday
            </Heading>
            <Box p={3}>
              <Stack spacing={'10px'}>
                <Input
                  isRequired
                  isDisabled={is_load}
                  onChange={handleUser}
                  name={'login'}
                  placeholder={'Login'}
                />
                <Input
                  isDisabled={is_load}
                  isRequired
                  type={'password'}
                  onChange={handleUser}
                  name={'password'}
                  placeholder={'Password'}
                />
              </Stack>
              <Stack
                py={5}
                direction={['column', 'row']}
                justify={'space-between'}>
                <Button
                  onClick={login}
                  colorScheme={'violet'}
                  variant={'solid'}>
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
}

export default Login
