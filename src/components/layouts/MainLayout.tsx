import React, { FC } from 'react'
import Navbar from '../navbar'

const MainLayout: FC = ({ children }) => {
  return (
    <div className='main_layout'>
      <div className='main_layout-navbar'>
        <Navbar />
      </div>
      <main className='main_layout-content'>{children}</main>
    </div>
  )
}

export default MainLayout
