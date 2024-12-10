import { useDispatch as useReactReduxDispatch } from "react-redux"
import { Action, ThunkDispatch } from "@reduxjs/toolkit"

export const useDispatch = (): ThunkDispatch<unknown, unknown, Action> =>
  useReactReduxDispatch()
