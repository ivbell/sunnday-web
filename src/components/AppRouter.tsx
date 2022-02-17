import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../lib/hooks/redux/redux'
import { privateRoutes, publicRoutes } from '../lib/router'

const AppRouter: FC = () => {
  const { is_auth } = useAppSelector((state) => state.userReducer)

  const publicRouter = publicRoutes.map((r) => (
    <Route key={r.path} path={r.path} element={r.element} />
  ))

  if (!is_auth) {
    return <Routes>{publicRouter}</Routes>
  }
  return (
    <Routes>
      {publicRouter}
      {privateRoutes.map((r) => (
        <Route key={r.path} path={r.path} element={r.element} />
      ))}
    </Routes>
  )
}

export default AppRouter
