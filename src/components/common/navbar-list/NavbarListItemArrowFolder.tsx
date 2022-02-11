import { Box, Icon, Stack, Text } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { TaskFolder } from '../../../lib/hooks/data/useTaskFolder'
import NavbarListItemCountLink from './NavbarListItemCountLink'

interface Props {
  title: string
  folder_list?: TaskFolder[]
  to: string
  count: number
}

const NavbarListItemArrowFolder: FC<Props> = (props) => {
  const [isShow, setIsShow] = useState<boolean>(false)

  const { title, folder_list, count } = props
  const folderList = folder_list?.map((r) => (
    <Box
      _hover={{ backgroundColor: 'sn.bg_accent' }}
      pl={12}
      py={1}
      pr={2}
      key={r._id}>
      <NavbarListItemCountLink title={r.name} count={r.count} to={r._id} />
    </Box>
  ))

  return (
    <Box position={'relative'}>
      <Stack
        _hover={{ backgroundColor: 'sn.bg_accent' }}
        pl={9}
        py={1}
        pr={2}
        cursor={'pointer'}
        direction={['column', 'row']}
        alignItems={'center'}
        justify={'space-between'}>
        <Text fontSize={'sm'}>{title}</Text>
        <Text fontSize={'xs'}>{count}</Text>
      </Stack>
      <Icon
        _hover={{ color: 'sn.accent' }}
        position={'absolute'}
        left={2}
        cursor={'pointer'}
        top={0.5}
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
