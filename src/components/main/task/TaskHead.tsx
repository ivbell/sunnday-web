import { FC } from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import HeadListIconAdd from '../../common/navbar-list/HeadListIconAdd'
import React from 'react'

const TaskHead: FC = () => {
  return (
    <HeadListIconAdd
      title={'Tasks'}
      icon={<AiOutlineUnorderedList />}
      onClick={() => console.log(12)}
    />
  )
}

export default TaskHead
