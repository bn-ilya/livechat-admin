import { configureStore } from "@reduxjs/toolkit";
import statisticSlice from "../../../../entities/statistic/model/slices/statistic.slice";
import { api } from "../../../../shared/api";

export const store = configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      statistic: statisticSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware) 
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;