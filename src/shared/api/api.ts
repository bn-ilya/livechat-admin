// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api/",
    headers: {
      // https://church-krop.ru:1336/api/
      Authorization:
        "Bearer 3c18afeebf892826c18c907ebc8fae706b4cd9baaaae625da480a7e6309d52b69d3bea126e22aeea21f087823f52a796cc8e8e95730121873b27b4bad62250bc32fc786beb2353bfef58a1932fcbf0c594d39358182c15e45d022ca5e894e27d66b570163a5005249ed4cf6cd4bbc5cd306b03694b0657084dfec001c54b8c5c",
      // "Authorization": "Bearer 0435e0b2b65f7c972d485fbab0a6199c5ee3993035f450516041c59c79aa39dd79fc99284940bceb9abee34fb726ffbc5b9ef8cc1a5ada8d5067d055862dfb403a5282c4a693fc35787a5125a07b487b9c5c1df5460f551bbeb4d5b17a579b2309082719ff5b8e3f10dfb273bf4a858208f66b10098a0b1c5a67abc1595ea5c2"
    },
  }),
  tagTypes: ["Users"],
  endpoints: () => ({}),
});
