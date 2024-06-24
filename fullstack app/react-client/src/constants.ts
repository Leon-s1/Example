import * as process from "process";

export const BASE_URL = process.env.NODE_ENV === 'production' ? 'none' : 'http//:localhost:3000'