import React, { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  link: string
  title: string
  count: string
  icon: React.ReactElement
}

const NavbarListItemCount: FC<Props> = (props) => {
  return (
    <Link to={props.link} className='navbar-list-item'>
      <div className='left-box'>
        <div className='icon'>{props.icon}</div>
        <div className='title'>{props.title}</div>
      </div>
      <div className='count'>{props.count}</div>
    </Link>
  )
}

export default NavbarListItemCount
