import React, { FC } from 'react'

type Props = {
  title?: string
}

const MainLayout: FC<Props> = ({ children, title }) => {
  document.title = `${title} | Sunnday | A note-taking app and a little more`
  
  return (
    <div>
      {children}
    </div>
  )
}

export default MainLayout
