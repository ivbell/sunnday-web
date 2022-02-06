import axios from 'axios'
import { Dispatch } from 'react'
import { UserAction, UserActionTypes } from '../reducers/user/user.type'

export const userAuthToken = (token: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: UserActionTypes.AUTH_USER,
        payload: { user_id: '', is_auth: false },
      })

      const response = await axios.get(`${import.meta.env.VITE_SERVER}/auth`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      dispatch({
        type: UserActionTypes.AUTH_USER_SUCCESS,
        payload: {
          user_id: response.data.user_id,
          is_auth: response.data.auth,
        },
      })
    } catch (error) {
      dispatch({
        type: UserActionTypes.AUTH_USER_ERROR,
        payload: { message: 'User auth error' },
      })
    }
  }
}
