import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import AdminPage from './Reclutator.tsx';
//import Circle from './components/Circle.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        
        <Route path="/reclutatorview" element={<AdminPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
