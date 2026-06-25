import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export default function Loginpage({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from?.pathname || '/';

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Email aur password daalo');
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/customers/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message || 'Login failed');
        return;
      }

      const user = result.customer;
      localStorage.setItem('blinkit_user', JSON.stringify(user));
      setCurrentUser(user);
      toast.success('Login successful!');
      navigate(redirectPath, { replace: true });
    } catch (error) {
      toast.error('Server se login nahi hua');
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <form className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-md" onSubmit={handleLogin}>
        <h2 className="mb-6 text-2xl font-bold text-gray-950">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-100"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-100"
        />

        <button
          type="submit"
          className="w-full rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Naya account?{' '}
          <Link to="/signup" className="font-semibold text-green-600 hover:text-green-700">
            Signup here
          </Link>
        </p>
      </form>
    </div>
  )
}
