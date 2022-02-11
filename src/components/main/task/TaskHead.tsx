import { FC } from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import HeadListIconAdd from '../../common/navbar-list/HeadListIconAdd'
import React from 'react'
import AddTask from './AddTask'

const TaskHead: FC = () => {
  return (
    <HeadListIconAdd
      title={'Tasks'}
      icon={<AiOutlineUnorderedList />}
      onClick={() => console.log(12)}
      isShowElement={<AddTask />}
    />
  )
}

export default TaskHead
