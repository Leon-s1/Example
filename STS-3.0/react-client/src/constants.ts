import * as process from "node:process"

export const BASE_URL =
  process.env.NODE_ENV === "production" ? "none" : "http://localhost:3000"
