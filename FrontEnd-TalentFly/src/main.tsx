import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'  //principal
import './index.css'
import AdminPage from './Reclutator.tsx'  //lista de aprovacion en vista de administrador

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AdminPage />
  </React.StrictMode>,
)
