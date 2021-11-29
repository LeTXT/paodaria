import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Home.jsx'
import Us from './internal/Us.jsx'
import Cart from './internal/Cart.jsx'
import Login from './internal/Login.jsx'
import MenuP from './internal/MenuP.jsx'

export default function App() {
  return (
    <Router>
      <Routes>
      <Route element = { <Home /> } path='/' exact />
      <Route element = { <Us /> } path='/us' />
      {/* <Route element = { <Cart /> } path='/cart' /> */}
      {/* <Route element = { <Login /> } path='/login' /> */}
      <Route element = { <MenuP /> } path='/menup' />
      
      </Routes> 
    </Router>

  );
}