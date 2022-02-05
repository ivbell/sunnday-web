import {
  Box,
  Button,
  Container,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { observer } from 'mobx-react'
import React, { FC } from 'react'
import Cookie from 'universal-cookie'
import UserStore from '../../lib/store/UserStore'
import { RouterLink } from '../common/RouterLink'
import Logo from '../Logo'
import ToggleColorMode from '../ToggleColorMode'

const NavbarEmpty: FC = observer(() => {
  const cookie = new Cookie()
  const logout = () => {
    cookie.remove('token')
    UserStore.userIdUpdate('')
    UserStore.userLogout()
  }

  return (
    <Box
      py={3}
      borderBottom={'1px'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container maxW={'container.xl'}>
        <Stack
          direction={['column', 'row']}
          justify={'space-between'}
          alignItems={'center'}
        >
          <Box>
            <RouterLink to='/'>
              <Logo />
            </RouterLink>
          </Box>
          {UserStore.isAuth ? (
            <Stack direction={['column', 'row']} alignItems={'center'}>
              <RouterLink to='/dashboard'>
                <Button>Go to app</Button>
              </RouterLink>
              <ToggleColorMode />
              <Button onClick={logout} variant={'solid'}>
                Log out
              </Button>
            </Stack>
          ) : (
            <Stack direction={['column', 'row']} alignItems={'center'}>
              <ToggleColorMode />
              <RouterLink to='/login'>
                <Button variant={'solid'}>Log in</Button>
              </RouterLink>
            </Stack>
          )}
        </Stack>
      </Container>
    </Box>
  )
})

export default NavbarEmpty
