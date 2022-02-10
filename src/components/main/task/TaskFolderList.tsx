import { Box } from '@chakra-ui/react'
import React, { FC } from 'react'
import useTokenCookie from '../../../lib/hooks/cookie/useTokenCookie'
import { useTaskFolder } from '../../../lib/hooks/data/useTaskFolder'
import NavbarListItemArrowFolder from '../../common/navbar-list/NavbarListItemArrowFolder'
import NavbarListItemCountLink from '../../common/navbar-list/NavbarListItemCountLink'

const TaskFolderList: FC = () => {
  const { token } = useTokenCookie()
  const { data_task_folder } = useTaskFolder(token)

  const parent_folder = data_task_folder?.filter((r) => r.parent === '0')

  const parentFolderList = parent_folder?.map((r) => {
    const child_folder = data_task_folder?.filter(
      (child) => child.parent === r._id
    )

    if (child_folder?.length) {
      return (
        <NavbarListItemArrowFolder
          to={r._id}
          key={r._id}
          title={r.name}
          folder_list={child_folder}
        />
      )
    }
    return (
      <Box
        _hover={{ backgroundColor: 'sn.bg_accent' }}
        px={2}
        py={1}
        key={r._id}>
        <NavbarListItemCountLink to={r._id} title={r.name} count={r.count} />
      </Box>
    )
  })
  return <Box>{parentFolderList}</Box>
}

export default TaskFolderList
