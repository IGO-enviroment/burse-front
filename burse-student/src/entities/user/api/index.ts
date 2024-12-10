import { API } from "../../../shared/api"
import { User } from "../types"

export const getUserApi = () => API.get<User>("/v2/users/0")
