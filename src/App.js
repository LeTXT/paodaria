import React from 'react';
import './style.css';

import RouteH from './components/RouteH.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div> 
      <NavBar />
      <RouteH />
      <br />
      <Footer />
    </div>

  );
}
