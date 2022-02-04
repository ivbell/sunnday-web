import {
  Box,
  Button,
  Container,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { RouterLink } from '../common/RouterLink'
import Logo from '../Logo'
import ToggleColorMode from '../ToggleColorMode'

const NavbarEmpty: FC = () => {
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
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <ToggleColorMode />
            <RouterLink to='/login'>
              <Button variant={'solid'}>
                Log in
              </Button>
            </RouterLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default NavbarEmpty
