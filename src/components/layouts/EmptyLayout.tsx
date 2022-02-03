import React, { FC } from 'react'
import NavbarEmpty from '../empty/NavbarEmpty'

type Props = {
  title?: string
}

const EmptyLayout: FC<Props> = ({ children, title }) => {
  document.title = `${title} | Sunnday`

  return (
    <div>
      <NavbarEmpty />
      {children}
      {/* Footer */}
    </div>
  )
}

export default EmptyLayout
