import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { loginByEmail } from "../services/login-thunk"
import { STATUS } from "../../../../shared/types"

const name = "login-by-user-email"

export type LoginError = {
  email: string
  password: string
} | null

export interface LoginState {
  error: LoginError
  status: STATUS
}

const initialState: LoginState = {
  error: null,
  status: STATUS.initial,
}

export const { reducer, actions } = createSlice({
  name,
  initialState,
  reducers: {
    resetError: (state, { payload }: PayloadAction<"email" | "password">) => {
      if (state.error && state.error?.[payload]) {
        state.error[payload] = ""
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByEmail.pending, (state) => {
      state.status = STATUS.fetching
    })
    builder.addCase(loginByEmail.fulfilled, (state) => {
      state.status = STATUS.success
      state.error = null
    })
    builder.addCase(loginByEmail.rejected, (state, { payload: error }) => {
      state.status = STATUS.failure
      if (error) {
        state.error = error
      }
    })
  },
})

