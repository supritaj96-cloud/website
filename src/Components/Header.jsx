import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';
import { MdLocationOn } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header({ isLoggedIn, setCurrentUser, currentUser }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();
  const cartCount = Object.values(cart).reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('blinkit_user');
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="leading-tight">
            <span className="block text-xl font-black">
              <span className="text-[#FFC300]">Blink</span>
              <span className="text-[#22C55E]">it</span>
            </span>
            <span className="block text-xs font-semibold text-green-700">Fresh groceries</span>
          </span>
        </Link>
        <div className="hidden min-w-36 leading-tight md:block">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Deliver to</p>
          <p className="truncate text-sm font-bold text-gray-950 flex items-center gap-1">
            <MdLocationOn className="text-green-700" />
            My location
          </p>
        </div>

        <label className="relative hidden flex-1 md:block">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">Search</span>
          <input
            type="search"
            placeholder="Search for fruits, snacks and more"
            className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 pl-20 pr-4 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
          />
        </label>

    
        <div className="ml-auto hidden items-center gap-3 md:flex">
          {isLoggedIn ? (
            <>
              <p className="text-sm font-semibold text-gray-700">Hi, {currentUser?.name || 'Customer'}</p>
              <button
                className="flex h-11 items-center justify-center rounded-md border border-gray-200 px-5 text-sm font-bold text-gray-900 transition hover:border-gray-300 hover:bg-gray-50"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="flex h-11 items-center justify-center rounded-md border border-gray-200 px-5 text-sm font-bold text-gray-900 transition hover:bg-gray-50"
              >
                Signup
              </Link>
              <Link
                to="/login"
                className="flex h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-bold text-gray-900 transition border border-gray-200 hover:bg-gray-50"
              >
                Login
              </Link>
            </>
          )}
        </div>

         <Link
            to="/cart"
            className="relative flex h-11 items-center justify-center gap-2 rounded-md bg-green-600 px-5 text-sm font-bold text-white transition hover:bg-green-700"
          >
            <FaShoppingCart className="h-4 w-4" />
            <span>My Cart</span>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 min-w-6 rounded-full bg-gray-950 px-1.5 py-0.5 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>

        <button
          className="ml-auto h-10 rounded-md border border-gray-200 px-3 text-sm font-bold text-gray-900 md:hidden"
          type="button"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          Menu
        </button>
      </div>

      <div className="border-t border-gray-100 px-4 pb-3 md:hidden">
        <label className="relative block">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">Search</span>
          <input
            type="search"
            placeholder="Search groceries"
            className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 pl-20 pr-4 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
          />
        </label>

        {isMenuOpen && (
          <div className="mt-3 grid gap-3 rounded-md border border-gray-200 bg-white p-3 shadow-sm">
            <div className="rounded-md bg-gray-50 px-3 py-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Deliver to</p>
              <p className="text-sm font-bold text-gray-950">My location</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/login"
                className="h-11 rounded-md border border-gray-200 text-sm font-bold text-gray-900"
              >
                Login
              </Link>
              <Link
                to="/cart"
                className="h-11 rounded-md bg-green-600 text-sm font-bold text-white"
              >
                My Cart{cartCount > 0 ? ` (${cartCount})` : ''}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
