export enum UserActionTypes {
  AUTH_USER = 'AUTH_USER',
  AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS',
  AUTH_USER_ERROR = 'AUTH_USER',
  AUTH_USER_LOGOUT = 'AUTH_USER_LOGOUT',
}

export interface UserState {
  readonly user_id: string
  readonly loading: boolean
  readonly is_auth: boolean
}

// Payload types
interface AuthUserPayload {
  user_id: string
  is_auth: boolean
}

interface AuthUserSuccessPayload {
  user_id: string
  is_auth: boolean
}

interface AuthUserErrorPayload {
  message: string
}

// Action types

interface AuthUserAction {
  type: UserActionTypes.AUTH_USER
  payload: AuthUserPayload
}

interface AuthUserSuccessAction {
  type: UserActionTypes.AUTH_USER_SUCCESS
  payload: AuthUserSuccessPayload
}

interface AuthUserErrorAction {
  type: UserActionTypes.AUTH_USER_ERROR
  payload: AuthUserErrorPayload
}

interface AuthUserLogoutAction {
  type: UserActionTypes.AUTH_USER_LOGOUT
}

export type UserAction =
  | AuthUserAction
  | AuthUserSuccessAction
  | AuthUserErrorAction
  | AuthUserLogoutAction