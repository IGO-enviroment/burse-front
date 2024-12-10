import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { LoginFeature } from "../../../../feature/auth-by-email"
import { UserFeature } from "../../../../entities/user"
import { baseApi } from "../../../../shared/api"

const rootReducer = combineReducers({
  loginByEmail: LoginFeature.reducer,
  user: UserFeature.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
})

export function createReduxStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
    devTools: true,
  })

  return store
}
