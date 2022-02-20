import { Box, Stack, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props {
  readonly title: string
  readonly count: number
  readonly to: string
}

const NavbarListItemCountLink: FC<Props> = (props) => {
  const { title, count } = props
  return (
    <Box cursor={'pointer'}>
      <Stack
        alignItems={'center'}
        justify={'space-between'}
        direction={['column', 'row']}>
        <Text fontSize={'sm'}>{title}</Text>
        <Text fontSize={'xs'}>{count}</Text>
      </Stack>
    </Box>
  )
}

export default NavbarListItemCountLink
