import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../lib/router'
import UserStore from '../lib/store/UserStore'

const AppRouter: FC = observer(() => {
  const isAuth = UserStore.isAuth

  const publicRouter = publicRoutes.map((r) => (
    <Route key={r.path} path={r.path} element={r.element} />
  ))

  if (!isAuth) {
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
})

export default AppRouter
