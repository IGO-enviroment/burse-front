import axios from "axios"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseURL = "http://localhost:3001"

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
  }),
  endpoints: () => ({}),
})

export const API = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
})
