import { Box } from '@chakra-ui/react'
import React, { FC } from 'react'

const LoadingComponent: FC = () => {
  return (
    <Box w={'100wh'} h={'100vh'} bg={'red.200'}>
      Is Loading
    </Box>
  )
}

export default LoadingComponent
