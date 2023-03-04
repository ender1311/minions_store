import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
