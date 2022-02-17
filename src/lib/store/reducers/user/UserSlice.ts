import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  userAuthToken,
  UserIdResponseToken,
} from '../../action-creators/user.action'

export interface UserState {
  readonly user_id: string
  readonly loading: boolean
  readonly is_auth: boolean
}

const initialState: UserState = {
  is_auth: false,
  loading: false,
  user_id: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isAuth(state) {
      state.loading = true
    },
    isAuthSuccess(state, action: PayloadAction<UserIdResponseToken>) {
      state.loading = false
      state.is_auth = action.payload.auth
      state.user_id = action.payload.user_id
    },
    isAuthError(state) {
      state.loading = false
    },
    isLogout(state) {
      state.user_id = ''
      state.is_auth = false
    },
  },
})

export default userSlice.reducer
