import React, { FC } from 'react'

type Props = {
  title?: string
}

const EmptyLayout: FC<Props> = ({ children, title }) => {
  document.title = `${title} | Sunnday`
  
  return (
    <div>
      {children}
    </div>
  )
}

export default EmptyLayout
