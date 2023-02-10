import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import ProductDetail from '../pages/ProductDetail'
import Shop from '../pages/Shop'
import Signup from '../pages/Signup'



const Routers = () => {
  return (
    <Routes>
    <Route>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/shop" element={<Shop/>} />
      <Route exact path="/shop:id" element={<ProductDetail />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/checkout" element={<Checkout />} />
      
    </Route>
  </Routes>
  )
}

export default Routers