import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-2 text-3xl font-black text-[#ffd200]">
              <span>Blink</span>
              <span className="text-[#0c831f]">it</span>
            </div>
            <p className="max-w-sm text-sm leading-7 text-gray-300">
              Blinkit makes everyday shopping effortless with fast delivery, fresh groceries, and curated essentials.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex cursor-default items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition">
                Download App
              </span>
              <span className="inline-flex cursor-default items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition">
                Subscribe
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Shop
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><span className="cursor-default transition text-gray-300">Fruits & Vegetables</span></li>
              <li><span className="cursor-default transition text-gray-300">Breakfast & Dairy</span></li>
              <li><span className="cursor-default transition text-gray-300">Snacks & Beverages</span></li>
              <li><span className="cursor-default transition text-gray-300">Household Essentials</span></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><span className="cursor-default transition text-gray-300">About Us</span></li>
              <li><span className="cursor-default transition text-gray-300">Careers</span></li>
              <li><span className="cursor-default transition text-gray-300">Blog</span></li>
              <li><span className="cursor-default transition text-gray-300">Contact</span></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Help
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><span className="cursor-default transition text-gray-300">Customer Support</span></li>
              <li><span className="cursor-default transition text-gray-300">FAQs</span></li>
              <li><span className="cursor-default transition text-gray-300">Shipping Info</span></li>
              <li><span className="cursor-default transition text-gray-300">Returns</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-gray-800 pt-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Blinkit. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="transition hover:text-white">Terms</a>
            <a href="#" className="transition hover:text-white">Privacy</a>
            <a href="#" className="transition hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
