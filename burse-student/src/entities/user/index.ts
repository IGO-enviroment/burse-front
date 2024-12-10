import { getUser } from "./model/services/get-user-thunk"
import { reducer, actions } from "./model/slice"
import { selectors } from "./model/selectors"

export const UserFeature = { reducer, actions, thunk: { getUser }, selectors }
