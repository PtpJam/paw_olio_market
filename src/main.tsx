import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router";
import {registerSW} from "virtual:pwa-register";

registerSW({immediate: true})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/paw_olio_market/">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
