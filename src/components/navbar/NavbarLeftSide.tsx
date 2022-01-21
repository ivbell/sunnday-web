import {observer} from 'mobx-react'
import React, {FC} from 'react'
import {
  AiOutlineBook,
  AiOutlineContainer,
  AiOutlineFileProtect,
  AiOutlineFileText,
  AiOutlineMenu,
  AiOutlineSetting,
  AiOutlineTag,
} from 'react-icons/ai'
import NavbarListItemAdd from './navbar-list-item/NavbarListItemAdd'
import NavbarListItemArrowStatus from './navbar-list-item/NavbarListItemArrowStatus'
import NavbarListItemCount from './navbar-list-item/NavbarListItemCount'
import NavbarListItemNoIconCount from './navbar-list-item/NavbarListItemNoIconCount'
import NavbarListItemArrowTags from './navbar-list-item/NavbarListItemArrowTags'


export type Notebooks = {
  name: string
  count: string
  slug: string
}

export type Templates = {
  name: string
  count: string
  slug: string
}

const NavbarLeftSide: FC = observer(() => {
  const notebooks: Notebooks[] = [
    {name: 'Test notebook name length overdohuya', count: '123', slug: 'test-slug-1'},
    {name: 'Test notebook name length overdohuya', count: '123', slug: 'test-slug-2'},
    {name: 'Test notebook name length overdohuya', count: '0', slug: 'test-slug-3'},
  ]

  const templates: Templates[] = [
    {name: 'Test template name length overdohuya', count: '123', slug: 'test-slug-1'},
    {name: 'Test template name length overdohuya', count: '123', slug: 'test-slug-2'},
    {name: 'Test template name length overdohuya', count: '0', slug: 'test-slug-3'},
  ]

  const templatesList = templates.map((n) => (
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
    <div className="navbar-left-side">
      <div className="title_box">
        <div className="title">SUNNDAY</div>
        <div className="icon_box">
          <div className="icon_item">
            <AiOutlineMenu/>
          </div>
          <div className="icon_item">
            <AiOutlineSetting/>
          </div>
        </div>
      </div>
      <div className="navbar-left-side__list-item">
        <NavbarListItemCount
          link="all-notes"
          title="All notes"
          count="0"
          icon={<AiOutlineContainer/>}
        />
      </div>
      <div className="navbar-left-side__list-item">
        <NavbarListItemAdd
          title="Notebooks"
          icon={<AiOutlineBook/>}
          onClick={() => console.log('123')}
        />
        {notebooksList}
      </div>

      <div className="navbar-left-side__list-item">
        <NavbarListItemAdd
          title="Templates"
          icon={<AiOutlineFileText/>}
          onClick={() => console.log('123')}
        />
        {templatesList}
      </div>

      <div className="navbar-left-side__list-item">
        <NavbarListItemArrowStatus
          icon={<AiOutlineFileProtect/>}
          title="Status"
          listOpen={true}
        />
      </div>
      <div className="navbar-left-side__list-item">
        <NavbarListItemArrowTags
          icon={<AiOutlineTag/>}
          title="Tags"
          listOpen={true}
        />
      </div>
    </div>
  )
})

export default NavbarLeftSide
