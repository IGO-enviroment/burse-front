import { createSlice } from "@reduxjs/toolkit"
import { STATUS } from "../../../../shared/types"
import { getUser } from "../services/get-user-thunk"

const name = "user"

interface User {
  phone: string
}

export interface UserState {
  data: User | null
  status: STATUS
  error: unknown
  fetchCount: number
}

const initialState: UserState = {
  data: null,
  status: STATUS.initial,
  error: null,
  fetchCount: 0,
}

export const { reducer, actions } = createSlice({
  name,
  initialState,
  reducers: {
    logout: (state) => {
      state.data = initialState.data
      localStorage.removeItem("accessToken")
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.status = STATUS.fetching
    })
    builder.addCase(getUser.fulfilled, (state) => {
      state.status = STATUS.success
      state.error = null
      state.fetchCount = state.fetchCount + 1
    })
    builder.addCase(getUser.rejected, (state, { payload: error }) => {
      state.status = STATUS.failure
      if (error) {
        state.error = error
      }
      state.fetchCount = state.fetchCount + 1
    })
  },
})
