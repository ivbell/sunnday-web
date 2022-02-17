import axios from 'axios'
import { AppDispatch } from '..'
import { userSlice } from '../reducers/user/UserSlice'

export type UserIdResponseToken = {
  auth: boolean
  user_id: string
}

export const userAuthToken =
  (token: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.isAuth())
      const response = await axios.get<UserIdResponseToken>(
        `${import.meta.env.VITE_SERVER}/auth`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      dispatch(userSlice.actions.isAuthSuccess(response.data))
    } catch (error) {
      dispatch(userSlice.actions.isAuthError())
    }
  }

export const userLogout = () => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.isLogout())
}
