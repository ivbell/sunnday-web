import React, { FC } from 'react'
import {
  AiOutlineBook,
  AiOutlineContainer,
  AiOutlineMenu,
  AiOutlineSetting,
} from 'react-icons/ai'
import NavbarListItemAdd from './navbar-list-item/NavbarListItemAdd'
import NavbarListItemCount from './navbar-list-item/NavbarListItemCount'

const NavbarLeftSide: FC = () => {
  return (
    <div className='navbar-left-side'>
      <div className='title_box'>
        <div className='title'>SUNNDAY</div>
        <div className='icon_box'>
          <div className='icon_item'>
            <AiOutlineMenu />
          </div>
          <div className='icon_item'>
            <AiOutlineSetting />
          </div>
        </div>
      </div>
      <NavbarListItemCount
        link='/all-notes'
        title='All notes'
        count='0'
        icon={<AiOutlineContainer />}
      />

      <div className='border-bottom'>
        <NavbarListItemAdd
          title='Notebooks'
          icon={<AiOutlineBook />}
          onClick={() => console.log('123')}
        />
      </div>
    </div>
  )
}

export default NavbarLeftSide
