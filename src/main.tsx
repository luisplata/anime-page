import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js")
        .then(() => console.log("Service Worker registrado!"))
        .catch((err) => console.error("Error registrando el SW", err));
}


const ensureClientUUID = () => {
    let uuid = Cookies.get('client_uuid');
    if (!uuid) {
        uuid = uuidv4();
        Cookies.set('client_uuid', uuid, { expires: 30 }); // Guarda por 30 días
    }
};

ensureClientUUID();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
