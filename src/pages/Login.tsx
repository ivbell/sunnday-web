import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Input,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import EmptyLayout from '../components/layouts/EmptyLayout'

interface User {
  readonly login: string
  readonly password: string
}

const Login: FC = () => {
  const initialUser: User = {
    login: '',
    password: '',
  }

  const [user, setUser] = useState<User>(initialUser)
  const [isLoad, setIsLoad] = useState<boolean>(false)

  const handlerUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  console.log(user)

  return (
    <EmptyLayout title={'Login'}>
      <Container maxW={'container.xl'}>
        <Center>
          <Box w={320} py={10}>
            <Heading py={2} align={'center'} color={'gray.600'}>
              Welcome in <Text color={'accent.50'}>Sunnday</Text>
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
                <Button colorScheme={'violet'} variant={'solid'}>
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
