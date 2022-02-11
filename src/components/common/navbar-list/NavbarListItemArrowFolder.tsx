import { Box, Icon, Stack, Text } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { TaskFolder } from '../../../lib/hooks/data/useTaskFolder'
import { RouterLink } from '../RouterLink'
import NavbarListItemCountLink from './NavbarListItemCountLink'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

interface Props {
  title: string
  folder_list?: TaskFolder[]
  to: string
  count: number
}

const NavbarListItemArrowFolder: FC<Props> = (props) => {
  const [isShow, setIsShow] = useState<boolean>(false)

  const { title, folder_list, to, count } = props
  const folderList = folder_list?.map((r) => (
    <Box _hover={{ backgroundColor: 'sn.bg_accent' }} pl={12} py={1} pr={2} key={r._id}>
      <NavbarListItemCountLink title={r.name} count={r.count} to={r._id} />
    </Box>
  ))

  return (
    <Box position={'relative'}>
      <RouterLink to={`/task/folder/${to}`}>
        <Stack
        _hover={{ backgroundColor: 'sn.bg_accent' }}
          pl={9}
          py={1}
          pr={2}
          cursor={'pointer'}
          direction={['column', 'row']}
          justify={'space-between'}>
          <Text>{title}</Text>
          <Text fontSize={'sm'}>{count}</Text>
        </Stack>
      </RouterLink>
      <Icon
        _hover={{ color: 'sn.accent' }}
        position={'absolute'}
        left={2}
        cursor={'pointer'}
        top={1}
        onClick={() => setIsShow(!isShow)}
        w={6}
        h={6}
        as={isShow ? MdKeyboardArrowDown : MdKeyboardArrowUp}
      />
      {isShow && folderList}
    </Box>
  )
}

export default NavbarListItemArrowFolder
