import { createSelector } from "@reduxjs/toolkit"
import { STATUS } from "../../../../shared/types"
import { LoginState } from "../slice"

const root = (state: { loginByEmail: LoginState }) => state?.loginByEmail

const error = createSelector(root, (state) => state?.error)

const status = createSelector(root, (state) => state?.status)

const isFailed = createSelector(status, (state) => state === STATUS.failure)

const isFetching = createSelector(status, (state) => state === STATUS.fetching)

const isSuccess = createSelector(status, (state) => state === STATUS.success)

const hasFormErrors = createSelector(
  error,
  (state) => state && Object.values(state).some(Boolean),
)

export const selectors = {
  error,
  isFailed,
  isFetching,
  isSuccess,
  hasFormErrors,
}
