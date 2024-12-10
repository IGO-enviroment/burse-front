import { loginByEmail } from "./model/services/login-thunk"
import { selectors } from "./model/selectors"
import { reducer, actions } from "./model/slice"

export const LoginFeature = {
  reducer,
  actions,
  selectors,
  thunk: { loginByEmail },
}
