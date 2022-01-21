import React, {FC, useState} from 'react'
import {AiOutlineCaretDown, AiOutlineCaretUp} from 'react-icons/ai'
import {Link} from 'react-router-dom'

type Props = {
  icon: React.ReactElement
  title: string
  listOpen: boolean
}

export type Tags = {
  to: string
  title: string
  color: string
}

const NavbarListItemArrowStatus: FC<Props> = (props) => {

  const [open, setOpen] = useState(props.listOpen)

  const tagsArray: Tags[] = [
    {to: '/active', title: 'Active', color: '#60A5FA'},
    {to: '/on-hold', title: 'On hold', color: '#FBBF24'},
    {to: '/completed', title: 'Completed', color: '#4ADE80'},
    {to: '/dropped', title: 'Dropped', color: '#F87171'},
  ]

  const tagsList = tagsArray.map(s => (
    <Link key={s.to} to={`/dashboard/tags/${s.to}`} className="tags-list__item">
      <div style={{backgroundColor: s.color}} className="icon">
      </div>
      <div className="title">
        {s.title}
      </div>
    </Link>
  ))

  return (
    <>
      <div onClick={() => setOpen(!open)} className="navbar-list-item-arrow">
        <div className="left-box">
          <div className="icon">{props.icon}</div>
          <div className="title">{props.title}</div>
        </div>
        <div className="arrow">
          {open
            ? <AiOutlineCaretDown/>
            : <AiOutlineCaretUp/>
          }
        </div>
      </div>
      {
        open && (
          <div className="tags-list">
            {tagsList}
          </div>
        )
      }
    </>
  )
}

export default NavbarListItemArrowStatus
