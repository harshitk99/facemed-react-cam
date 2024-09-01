// src/components/LoginDoctor.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginDoctor() {
  const [doctorId, setDoctorId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Directly navigate to /camera without authentication for now
    navigate('/camera');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-8">Doctor Login</h1>
      <div className="w-full max-w-xs bg-white p-6 rounded-lg shadow-lg">
        <label className="block text-gray-700 text-sm font-bold mb-2">Doctor ID</label>
        <input
          type="text"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
          placeholder="Enter your doctor ID"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
          placeholder="Enter your password"
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginDoctor;
