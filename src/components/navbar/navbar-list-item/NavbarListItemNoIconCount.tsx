import React, { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  name: string
  count: string
  slug: string
}

const NavbarListItemNoIconCount: FC<Props> = (props) => {
  return (
    <Link to={props.slug} className='navbar-list-item-no-icon-count'>
      <div className="title">{
        props.name.length > 20
        ? props.name.substring(0, 20) + '...'
        : props.name
      }</div>
      <div className="count">{props.count}</div>
    </Link>
  )
}

export default NavbarListItemNoIconCount
