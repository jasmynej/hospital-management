import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.scss';
import App from './App';
import AdminDashboard from './screens/admin';
import AllPatients from './screens/admin/patients';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/admin" element={<AdminDashboard/>} exact/>
      <Route path="/admin/patients" element={<AllPatients/>}/>
    </Routes>
  </BrowserRouter>
);

