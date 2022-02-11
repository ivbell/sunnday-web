import { Input } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import useTokenCookie from '../../../lib/hooks/cookie/useTokenCookie'
import { usePostTask } from '../../../lib/hooks/http/usePostTask'
import HeadListIconAdd from '../../common/navbar-list/HeadListIconAdd'

const TaskHead: FC = () => {
  const initialName = ''
  const [name, setName] = useState<string>(initialName)

  const { token } = useTokenCookie()

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <HeadListIconAdd
      title={'Tasks'}
      icon={<AiOutlineUnorderedList />}
      onClick={() => console.log(12)}
      modal_title={'Create new Task Folder'}
      modal_save={() => usePostTask(token, name)}>
      <Input value={name} onChange={nameHandler} />
    </HeadListIconAdd>
  )
}

export default TaskHead
