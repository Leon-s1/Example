import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { get } from "node:http"
import { BASE_URL } from "../../constants"
import { RootState } from "../store"

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}/api`,
  prepareHeaders: (headers, {getState}) => {
    const token = (getState() as RootState).auth.token ||
  }
})
