import { API } from "../../../shared/api"
import { Login } from "../types"

export const loginApi = (data: { email: string; password: string }) =>
  API.post<Login>("/v2/users", data)
