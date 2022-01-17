import React, { FC } from 'react'
import NavbarLeftSide from './NavbarLeftSide'
import NavbarRightSide from './NavbarRightSide'

const Navbar: FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-left_side">
        <NavbarLeftSide />
      </div>
      <div className="navbar-right_side">
        <NavbarRightSide />
      </div>
    </div>
  )
}

export default Navbar
