import { createAsyncThunk } from "@reduxjs/toolkit"
import { getUserApi } from "../../api"
import { AxiosError } from "axios"
import { User } from "../../types"

const thunkName = "user/get-user-thunk"

export const getUser = createAsyncThunk<
  User,
  undefined,
  { rejectValue: string }
>(thunkName, async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const { data } = await getUserApi()
    return data
  } catch (error) {
    return rejectWithValue((error as AxiosError).response?.data as string)
  }
})
