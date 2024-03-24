// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://church-krop.ru:1336/api/', headers: {
    // https://church-krop.ru:1336/api/
    "Authorization": "Bearer e37400827e7e0aae5840b4ac2347efdbc6f8c64946f168ad3119b0c00b2c7d4fba9009cbb048677436254349c56de6a08aac7d6f3f8eb42d8faa1f759f70826c28a354b850504c26d0f4d493d9ad3aab2d624debd103e58540dabebd934187191bd58d97da7807f993a08f1ac1878dd08d2f0f33543893fd168b0be465718b56"
    // "Authorization": "Bearer 0435e0b2b65f7c972d485fbab0a6199c5ee3993035f450516041c59c79aa39dd79fc99284940bceb9abee34fb726ffbc5b9ef8cc1a5ada8d5067d055862dfb403a5282c4a693fc35787a5125a07b487b9c5c1df5460f551bbeb4d5b17a579b2309082719ff5b8e3f10dfb273bf4a858208f66b10098a0b1c5a67abc1595ea5c2"
  } }),
  endpoints: () => ({}),
})