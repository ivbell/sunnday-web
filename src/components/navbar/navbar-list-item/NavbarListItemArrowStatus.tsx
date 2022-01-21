import React, {FC, useState} from 'react'
import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlinePauseCircle
} from 'react-icons/ai'
import {Link} from 'react-router-dom'

type Props = {
  icon: React.ReactElement
  title: string
  listOpen: boolean
}

export type Status = {
  to: string
  icon: React.ReactElement
  title: string
  color: string
}

const NavbarListItemArrowStatus: FC<Props> = (props) => {

  const [open, setOpen] = useState(props.listOpen)

  const statusArray = [
    {to: '/active', title: 'Active', icon: <AiOutlineClockCircle/>, color: '#60A5FA'},
    {to: '/on-hold', title: 'On hold', icon: <AiOutlinePauseCircle/>, color: '#FBBF24'},
    {to: '/completed', title: 'Completed', icon: <AiOutlineCheckCircle/>, color: '#4ADE80'},
    {to: '/dropped', title: 'Dropped', icon: <AiOutlineCheckCircle/>, color: '#F87171'},
  ]

  const statusList = statusArray.map(s => (
    <Link key={s.to} to={`/dashboard/status/${s.to}`} className="status-list__item">
      <div style={{color: s.color}} className="icon">
        {s.icon}
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
          <div className="status-list">
            {statusList}
          </div>
        )
      }
    </>
  )
}

export default NavbarListItemArrowStatus
