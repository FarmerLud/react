import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { axiosInstance as axios } from '../../../utils/axios'
import { Dispatch } from '../../store'

export interface Login {
  email: string
  password: string
}

export interface AuthState {
  accessToken: string | null
  isLoading: boolean
}

const initialState: AuthState = {
  accessToken: null,
  isLoading: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})

export const { setAccessToken, setIsLoading } = authSlice.actions
export default authSlice.reducer

export const login = async (data: Login, dispatch: Dispatch) => {
  dispatch(setIsLoading(true))
  try {
    const response = await axios.post('/login', data)
    dispatch(setAccessToken(response.data.token))
    return response
  } catch (error) {
    console.log(error)
  } finally {
    dispatch(setIsLoading(false))
  }
}
