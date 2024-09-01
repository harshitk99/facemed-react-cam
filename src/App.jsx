// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import LoginDoctor from './components/LoginDoctor';
import Camera from './components/Camera';
import Details from './components/Details';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-doctor" element={<LoginDoctor />} />
      <Route path="/camera" element={<Camera />} />
      <Route path="/details" element={<Details />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
