import { Provider } from "react-redux"
import { store } from "./config/store"
import { FC } from "react"
import { IStoreProviderProps } from "./ui.props"
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

export const StoreProvider: FC<IStoreProviderProps> = ({children}) => {
  return(
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Provider store={store}>
          {children}
        </Provider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}