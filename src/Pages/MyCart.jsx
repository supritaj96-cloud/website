import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';

export default function MyCart() {
  const { cart, addToCart, removeFromCart } = useCart();
  const cartItems = Object.values(cart);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.amount * item.quantity, 0);

  return (
    <section className="bg-gray-50 px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Cart</h1>
            <p className="mt-2 text-gray-600">Review your items, update quantities, and proceed to checkout.</p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            Back to Shop
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-md bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-semibold text-gray-900">Your cart is empty.</p>
            <p className="mt-3 text-gray-600">Add items from the product page to view them here.</p>
            <Link
              to="/"
              className="mt-6 inline-flex rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="rounded-md bg-white p-6 shadow-sm md:grid md:grid-cols-[120px_minmax(240px,_1fr)_180px] md:items-center md:gap-6">
                <div className="overflow-hidden rounded-md bg-gray-100">
                  <img className="h-32 w-full object-cover" src={item.image} alt={item.name} />
                </div>

                <div className="mt-4 md:mt-0">
                  <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                  <p className="mt-2 text-sm text-gray-600">{item.quantity} units</p>
                  <p className="mt-2 text-sm font-semibold text-gray-900">Rs. {item.amount}</p>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-md border border-gray-200 bg-gray-50 p-3 md:mt-0">
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white text-xl font-bold text-gray-900 transition hover:bg-gray-100"
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </button>
                  <span className="mx-4 min-w-[2rem] text-center text-lg font-semibold text-gray-900">{item.quantity}</span>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white text-xl font-bold text-gray-900 transition hover:bg-gray-100"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            <div className="rounded-md bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-gray-600">Subtotal</p>
                  <p className="text-3xl font-bold text-gray-900">Rs. {totalAmount}</p>
                </div>
                <button
                  type="button"
                  className="inline-flex rounded-md bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
