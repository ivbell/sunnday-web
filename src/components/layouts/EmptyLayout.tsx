import React, { FC } from 'react'

type Props = {
  title?: string
}

const EmptyLayout: FC<Props> = ({ children, title }) => {
  document.title = 'Sunnday'
  return (
    <div>
      {title}
      {children}
    </div>
  )
}

export default EmptyLayout