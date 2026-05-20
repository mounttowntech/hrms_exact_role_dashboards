import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './styles.css';
import RoleLayout from './layouts/RoleLayout.jsx';
import { roles } from './data/roles.js';

function App(){
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/admin/dashboard" />} />
      {roles.map(role => <Route key={role.key} path={`/${role.key}/*`} element={<RoleLayout roleKey={role.key} />} />)}
    </Routes>
  </BrowserRouter>
}

createRoot(document.getElementById('root')).render(<App/>);
