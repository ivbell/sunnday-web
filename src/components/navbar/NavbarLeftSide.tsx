import { observer } from 'mobx-react'
import React, { FC } from 'react'
import {
  AiOutlineBook,
  AiOutlineContainer,
  AiOutlineFileProtect,
  AiOutlineFileText,
  AiOutlineMenu,
  AiOutlineSetting,
} from 'react-icons/ai'
import NotebooksStore from '../../lib/store/NotebooksStore'
import TemplatesStore from '../../lib/store/TemplatesStore'
import NavbarListItemAdd from './navbar-list-item/NavbarListItemAdd'
import NavbarListItemArrow from './navbar-list-item/NavbarListItemArrow'
import NavbarListItemCount from './navbar-list-item/NavbarListItemCount'
import NavbarListItemNoIconCount from './navbar-list-item/NavbarListItemNoIconCount'

const NavbarLeftSide: FC = observer(() => {
  const notebooks = NotebooksStore.notebooks
  const templates = TemplatesStore.templates

  const temlatesList = templates.map((n) => (
    <NavbarListItemNoIconCount
      key={n.slug}
      name={n.name}
      count={n.count}
      slug={n.slug}
    />
  ))

  const notebooksList = notebooks.map((n) => (
    <NavbarListItemNoIconCount
      key={n.slug}
      name={n.name}
      count={n.count}
      slug={n.slug}
    />
  ))

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
      <div className='navbar-left-side__list-item'>
        <NavbarListItemCount
          link='all-notes'
          title='All notes'
          count='0'
          icon={<AiOutlineContainer />}
        />
      </div>
      <div className='navbar-left-side__list-item'>
        <NavbarListItemAdd
          title='Notebooks'
          icon={<AiOutlineBook />}
          onClick={() => console.log('123')}
        />
        {notebooksList}
      </div>

      <div className='navbar-left-side__list-item'>
        <NavbarListItemAdd
          title='Templates'
          icon={<AiOutlineFileText />}
          onClick={() => console.log('123')}
        />
        {notebooksList}
      </div>

      <div className='navbar-left-side__list-item'>
        <NavbarListItemArrow
          icon={<AiOutlineFileProtect />}
          title='Status'
          listOpen={false}
        />
      </div>
    </div>
  )
})

export default NavbarLeftSide
