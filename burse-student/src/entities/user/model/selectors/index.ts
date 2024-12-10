import { createSelector } from "@reduxjs/toolkit"
import { STATUS } from "../../../../shared/types"
import { UserState } from "../slice"

const root = (state: { user: UserState }) => state?.user

const data = createSelector(root, (state) => state?.data)

const error = createSelector(root, (state) => state?.error)

const status = createSelector(root, (state) => state?.status)

const isFailed = createSelector(status, (state) => state === STATUS.failure)

const isFetching = createSelector(status, (state) => state === STATUS.fetching)

const isSuccess = createSelector(status, (state) => state === STATUS.success)

const wasFetched = createSelector(root, (state) => state.fetchCount > 0)

export const selectors = {
  data,
  error,
  isFailed,
  isFetching,
  isSuccess,
  wasFetched,
}
