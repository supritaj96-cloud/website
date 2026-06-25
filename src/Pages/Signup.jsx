import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export default function Signup({ setCurrentUser }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSignup = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.password) {
      toast.error('Name, email aur password daalo')
      return
    }

    try {
      setIsSubmitting(true)

      const response = await fetch(`${API_BASE}/api/customers/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const result = await response.json()

      if (!response.ok) {
        toast.error(result.message || 'Signup failed')
        return
      }

      localStorage.setItem('blinkit_user', JSON.stringify(result))
      setCurrentUser(result)
      toast.success('Signup successful!')
      navigate('/', { replace: true })
    } catch (error) {
      toast.error('Server se signup nahi hua')
      console.error('Signup error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <form className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-md" onSubmit={handleSignup}>
        <h2 className="mb-6 text-2xl font-bold text-gray-950">Signup</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-100"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-100"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-100"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-100"
        />
        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          rows="3"
          className="mb-4 w-full resize-none rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-100"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-green-400"
        >
          {isSubmitting ? 'Signing up...' : 'Signup'}
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-green-600 hover:text-green-700">
            Login here
          </Link>
        </p>
      </form>
    </div>
  )
}
