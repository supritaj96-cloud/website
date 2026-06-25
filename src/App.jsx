import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import ProductDetails from './Pages/ProductDetails'
import Loginpage from './Pages/Loginpage'
import Signup from './Pages/Signup'
import MyCart from './Pages/MyCart'
import ProtectRoutes from './Components/ProtectRoutes.jsx'
import CheckoutPage from './Pages/CheckoutPage'
import PaymentPage from './Pages/PaymentPage'
import OrderSuccess from './Pages/OrderSuccess'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('blinkit_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isLoggedIn = Boolean(currentUser);

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Header isLoggedIn={isLoggedIn} setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Loginpage setCurrentUser={setCurrentUser}/>}/>
        <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser}/>}/>
        <Route
          path="/products/:id"
          element={
            <ProtectRoutes isLoggedIn={isLoggedIn}>
              <ProductDetails/>
            </ProtectRoutes>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectRoutes isLoggedIn={isLoggedIn}>
              <MyCart/>
            </ProtectRoutes>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectRoutes isLoggedIn={isLoggedIn}>
              <CheckoutPage/>
            </ProtectRoutes>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectRoutes isLoggedIn={isLoggedIn}>
              <PaymentPage/>
            </ProtectRoutes>
          }
        />
        <Route path="/order-success" element={<OrderSuccess/>}/>
      </Routes>
      <Footer />
    </>   
  )
}
