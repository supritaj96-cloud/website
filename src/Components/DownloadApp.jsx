import React from 'react';

export default function DownloadApp() {
  return (
    <section className="bg-gradient-to-r from-[#0c831f] via-[#1f9b2f] to-[#76d85c] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d8f7d5]">Download the App</p>
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Groceries delivered faster than ever.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#e9f8e8]">
              Get the Blinkit experience on your phone — fresh produce, everyday essentials, snacks and instant delivery all in one app.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <span
                className="inline-flex cursor-default items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0c831f] shadow-lg transition"
              >
                <span className="mr-3 h-9 w-9 rounded-full bg-[#0c831f] text-white flex items-center justify-center text-base font-bold">A</span>
                App Store
              </span>
              <span
                className="inline-flex cursor-default items-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition"
              >
                <span className="mr-3 h-9 w-9 rounded-full bg-white text-[#0c831f] flex items-center justify-center text-base font-bold">G</span>
                Google Play
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[28px] bg-white/15 p-8">
                <div className="h-[430px] w-full rounded-[28px] border border-white/20 bg-white/10 p-6">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <span className="text-sm uppercase tracking-[0.35em] text-[#d8f7d5]">Instant Delivery</span>
                      <h3 className="mt-4 text-2xl font-semibold text-white">Fresh groceries, delivered in minutes.</h3>
                    </div>
                    <div className="mt-6 space-y-4 text-sm text-[#e8f7e4]">
                      <p>• Fresh fruits, vegetables and dairy</p>
                      <p>• Ready-to-eat snacks and instant meals</p>
                      <p>• Household staples and cleaning essentials</p>
                    </div>
                    <div className="mt-8 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white shadow-inner">
                      <span className="mr-3 h-8 w-8 rounded-full bg-[#0c831f] text-white flex items-center justify-center">✓</span>
                      Delivered in 10 mins
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
