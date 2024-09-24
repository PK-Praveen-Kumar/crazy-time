import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Signup' element={<SignUp />} />
      <Route path='/Profile' element={<Profile />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

