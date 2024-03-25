import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import { StoreProvider } from './app/providers/store-provider/ui.tsx'
import {NextUIProvider} from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <NextUIProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </NextUIProvider>
)
