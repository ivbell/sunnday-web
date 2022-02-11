import Dashboard from '../../pages/Dashboard'
import Error from '../../pages/Error'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import React from 'react'
import TaskFolder from '../../pages/TaskFolder'

export type Router = {
  path: string
  element: React.ReactElement
}

export enum RouterNames {
  HOME = '/',
  DASHBOARD = '/dashboard',
  LOGIN = '/login',
  ERROR = '*',
  TASK_FOLDER = '/task/folder/:id',
}

export const publicRoutes: Router[] = [
  { path: RouterNames.HOME, element: <Home /> },
  { path: RouterNames.ERROR, element: <Error /> },
  { path: RouterNames.LOGIN, element: <Login /> },
]

export const privateRoutes: Router[] = [
  { path: RouterNames.DASHBOARD, element: <Dashboard /> },
  { path: RouterNames.TASK_FOLDER, element: <TaskFolder /> },
]
