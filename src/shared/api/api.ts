// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.4:1337/api/', headers: {
    "Authorization": "Bearer e215f74deddb838462844db403e4507dd7a22944a64c409e163f5650e44af6202dc3ed145c4fb495462398fb1f91b8f953adca5433085b1b49422e3bd8090fb34dfe1b07c50503ac8954126f9b189f1ff1a0aa6cbedcc83eb26fb38c60aa96c24c3d7a81615eea047a8a22ae203081a0526037e80f44ae886351ccecd607676c"
  } }),
  endpoints: () => ({}),
})