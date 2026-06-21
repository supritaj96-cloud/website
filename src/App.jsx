import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import MyCart from './Pages/MyCart'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/MyCart" element={<MyCart />} />
      </Routes>
      <Footer />
    </>
  );
}
