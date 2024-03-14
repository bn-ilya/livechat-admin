// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://church-krop.ru:1336/api/', headers: {
    // https://church-krop.ru:1336/api/
    // "Authorization": "Bearer e215f74deddb838462844db403e4507dd7a22944a64c409e163f5650e44af6202dc3ed145c4fb495462398fb1f91b8f953adca5433085b1b49422e3bd8090fb34dfe1b07c50503ac8954126f9b189f1ff1a0aa6cbedcc83eb26fb38c60aa96c24c3d7a81615eea047a8a22ae203081a0526037e80f44ae886351ccecd607676c"
    "Authorization": "Bearer 0435e0b2b65f7c972d485fbab0a6199c5ee3993035f450516041c59c79aa39dd79fc99284940bceb9abee34fb726ffbc5b9ef8cc1a5ada8d5067d055862dfb403a5282c4a693fc35787a5125a07b487b9c5c1df5460f551bbeb4d5b17a579b2309082719ff5b8e3f10dfb273bf4a858208f66b10098a0b1c5a67abc1595ea5c2"
  } }),
  endpoints: () => ({}),
})