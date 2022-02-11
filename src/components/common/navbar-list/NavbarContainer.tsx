import { Box } from '@chakra-ui/react'
import React, { FC } from 'react'

const NavbarContainer: FC = ({ children }) => {
  return <Box borderBottom={'1px'} borderBottomColor={'sn.line'}>{children}</Box>
}

export default NavbarContainer
