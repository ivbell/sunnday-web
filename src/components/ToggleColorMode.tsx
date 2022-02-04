import { Button, useColorMode } from '@chakra-ui/react'
import React, { FC } from 'react'

const ToggleColorMode: FC = () => {
  const { toggleColorMode } = useColorMode()
  return <Button colorScheme={'blue'} onClick={toggleColorMode}>toggle mode</Button>
}

export default ToggleColorMode
