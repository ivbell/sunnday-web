import React, { FC } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'

type Props = {
  icon: React.ReactElement
  title: string
  onClick: React.MouseEventHandler
}

const NavbarListItemAdd: FC<Props> = (props) => {
  return (
    <div className='navbar-list-item-add'>
      <div className='left-box'>
        <div className='icon'>
          {props.icon}
        </div>
        <div className='title'>{props.title}</div>
      </div>
      <div onClick={props.onClick} className='add-icon'>
        <AiOutlinePlusCircle />
      </div>
    </div>
  )
}

export default NavbarListItemAdd
