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
}

const NavbarListItemArrowFolder: FC<Props> = (props) => {
  const [isShow, setIsShow] = useState<boolean>(false)

  const { title, folder_list, to } = props
  const folderList = folder_list?.map((r) => (
    <Box _hover={{ backgroundColor: 'zinc.500' }} key={r._id} px={2} pl={6}>
      <NavbarListItemCountLink title={r.name} count={r.count} to={r._id} />
    </Box>
  ))
  return (
    <Box _hover={{ backgroundColor: 'sn.bg_accent' }} position={'relative'}>
      <Stack
        onClick={() => setIsShow(!isShow)}
        px={2}
        py={1}
        cursor={'pointer'}
        direction={['column', 'row']}
        justify={'space-between'}>
        <Text>{title}</Text>
        <Icon
          w={6}
          h={6}
          as={isShow ? MdKeyboardArrowDown : MdKeyboardArrowUp}
        />
      </Stack>
      <Box
        _hover={{ borderColor: 'sn.accent', color: 'sn.accent' }}
        px={1}
        rounded={15}
        fontSize={'13px'}
        position={'absolute'}
        right={10}
        top={1.5}
        border={'1px'}
        borderColor={'sn.text'}>
        <RouterLink
          onClick={() => setIsShow(!isShow)}
          to={`/task/folder/${to}`}>
          detail
        </RouterLink>
      </Box>
      {isShow && folderList}
    </Box>
  )
}

export default NavbarListItemArrowFolder
