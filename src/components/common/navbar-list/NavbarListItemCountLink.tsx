import { Box, Stack, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { RouterLink } from '../RouterLink'

interface Props {
  readonly title: string
  readonly count: number
  readonly to: string
}

const NavbarListItemCountLink: FC<Props> = (props) => {
  const { title, count, to } = props
  return (
    <RouterLink to={`/task/folder/${to}`}>
      <Box>
        <Stack justify={'space-between'} direction={['column', 'row']}>
          <Text>{title}</Text>
          <Text>{count}</Text>
        </Stack>
      </Box>
    </RouterLink>
  )
}

export default NavbarListItemCountLink
