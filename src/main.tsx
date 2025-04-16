import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { v4 as uuidv4 } from 'uuid';


if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js")
    .then(() => console.log("Service Worker registrado!"))
    .catch((err) => console.error("Error registrando el SW", err));
}

const ensureClientUUID = () => {
  let uuid = localStorage.getItem('client_uuid'); // Obtener UUID del localStorage
  if (!uuid) {
    uuid = uuidv4();
    localStorage.setItem('client_uuid', uuid);
  }
};

ensureClientUUID();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
