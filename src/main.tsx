import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js")
        .then(() => console.log("Service Worker registrado!"))
        .catch((err) => console.error("Error registrando el SW", err));
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
