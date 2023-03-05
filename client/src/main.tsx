import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

declare global {
  var process: ImportMeta;
}

globalThis.process = import.meta;
globalThis.process.env.REACT_APP_DOMAIN = import.meta.env.VITE_REACT_APP_DOMAIN;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
