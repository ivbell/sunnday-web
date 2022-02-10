import { Link as RoutesLink } from 'react-router-dom'
import React, { FC } from 'react'

interface Props {
  readonly to: string
  readonly onClick?: React.MouseEventHandler
}

export const RouterLink: FC<Props> = (props) => {
  return <RoutesLink to={props.to}>{props.children}</RoutesLink>
}
