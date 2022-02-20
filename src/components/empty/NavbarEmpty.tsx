import {
  Box,
  Button,
  Container,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import Cookie from 'universal-cookie'
import { useAppDispatch, useAppSelector } from '../../lib/hooks/redux/redux'
import { userLogout } from '../../lib/store/action-creators/user.action'
import Logo from '../common/Logo'
import { RouterLink } from '../common/RouterLink'
import ToggleColorMode from '../ToggleColorMode'

const NavbarEmpty: FC = () => {
  const cookie = new Cookie()
  const { is_auth } = useAppSelector((state) => state.userReducer)
  const dispatch = useAppDispatch()

  const logout = () => {
    cookie.remove('token')
    dispatch(userLogout())
  }

  return (
    <Box
      py={3}
      borderBottom={'1px'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}>
      <Container maxW={'container.xl'}>
        <Stack
          direction={['column', 'row']}
          justify={'space-between'}
          alignItems={'center'}>
          <Box>
            <RouterLink to='/'>
              <Logo />
            </RouterLink>
          </Box>
          {is_auth ? (
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
}

export default NavbarEmpty
