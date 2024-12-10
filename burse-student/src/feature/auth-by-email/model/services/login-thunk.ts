import { createAsyncThunk } from "@reduxjs/toolkit"
import { loginApi } from "../../api"
import { LoginError } from "../slice"
import { AxiosError } from "axios"
import { UserFeature } from "../../../../entities/user"

const thunkName = "login-by-user-email-thunk"

interface LoginData {
  email: string
  password: string
}

export const loginByEmail = createAsyncThunk<
  undefined,
  LoginData,
  { rejectValue: LoginError }
>(thunkName, async (loginData, thunkAPI) => {
  const { rejectWithValue, dispatch } = thunkAPI
  try {
    const { data } = await loginApi(loginData)
    localStorage.setItem("accessToken", data.accessToken)
    dispatch(UserFeature.thunk.getUser())
  } catch (error) {
    return rejectWithValue((error as AxiosError).response?.data as LoginError)
  }
})
