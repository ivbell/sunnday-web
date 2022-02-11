import { Button, useColorMode } from '@chakra-ui/react'
import React, { FC } from 'react'
import { MdOutlineWbSunny } from 'react-icons/md'

const ToggleColorMode: FC = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Button colorScheme={'blue'} onClick={toggleColorMode}>
      <MdOutlineWbSunny />
    </Button>
  )
}

export default ToggleColorMode
