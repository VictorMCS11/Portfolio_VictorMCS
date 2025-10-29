import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

// Silenciar warnings específicos de Google Maps (solo en desarrollo)
if (import.meta.env.DEV) {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    // Silenciar el warning específico del Marker deprecado
    if (args[0]?.includes?.('google.maps.Marker is deprecated')) {
      return;
    }
    // Silenciar el warning de React Router Future Flags si también quieres
    if (args[0]?.includes?.('React Router Future Flag Warning')) {
      return;
    }
    originalWarn.apply(console, args);
  };
}

if (import.meta.env.DEV) {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (args[0]?.includes?.('React Router Future Flag Warning')) {
      return;
    }
    originalWarn.apply(console, args);
  };
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
