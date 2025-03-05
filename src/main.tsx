import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Workbox } from "workbox-window";

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        const wb = new Workbox("/service-worker.js");
        wb.register()
            .then(() => console.log("Service Worker registrado!"))
            .catch((err) => console.error("Error registrando el SW", err));
    });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
