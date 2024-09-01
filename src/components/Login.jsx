// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === 'doctor') {
      navigate('/login-doctor'); // Redirect to the doctor login page
    } else if (role === 'user') {
      navigate('/details');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-8">Login</h1>
      <div className="w-full max-w-xs">
        <label className="block text-gray-700 text-sm font-bold mb-2">Select Your Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="block appearance-none w-full bg-white border border-gray-300 rounded-md py-3 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-6"
        >
          <option value="" disabled>Select your role</option>
          <option value="doctor">Doctor</option>
          <option value="user">User</option>
        </select>
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

export default Login;
