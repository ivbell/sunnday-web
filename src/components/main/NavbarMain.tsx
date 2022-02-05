import { Box, Stack } from '@chakra-ui/react'
import React, { FC } from 'react'
import LeftNavbarMain from './LeftNavabrMain'
import RightNavbarMain from './RightNavbarMain'

const NavbarMain: FC = () => {
  return (
    <Box>
      <Stack direction={['column', 'row']} spacing={'5px'}>
        <Box w={'45%'}>
          <LeftNavbarMain />
        </Box>
        <Box w={'55%'}>
          <RightNavbarMain />
        </Box>
      </Stack>
    </Box>
  )
}

export default NavbarMain
