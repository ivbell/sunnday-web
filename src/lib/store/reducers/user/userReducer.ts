import { UserAction, UserActionTypes, UserState } from './user.type'

const initialState: UserState = {
  user_id: '',
  loading: false,
  is_auth: false,
}

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.AUTH_USER:
      return { loading: true, user_id: '', is_auth: false }
    case UserActionTypes.AUTH_USER_SUCCESS:
      return {
        loading: false,
        user_id: action.payload.user_id,
        is_auth: action.payload.is_auth,
      }
    case UserActionTypes.AUTH_USER_ERROR:
      return {
        loading: true,
        user_id: '',
        is_auth: false,
      }
    default:
      return state
  }
}
