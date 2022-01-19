import React, { FC } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'

type Props = {
  icon: React.ReactElement
  title: string
  listOpen: boolean
}

const NavbarListItemArrow: FC<Props> = (props) => {
  return (
    <div className='navbar-list-item-arrow'>
      <div className='left-box'>
        <div className='icon'>{props.icon}</div>
        <div className='title'>{props.title}</div>
      </div>
      <div className='arrow'>
        {props.listOpen
        ? <AiOutlineCaretDown />
        : <AiOutlineCaretUp />
        }
      </div>
    </div>
  )
}

export default NavbarListItemArrow
