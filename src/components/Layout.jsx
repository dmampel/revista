import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Verifica si la ruta actual es la ruta de error
    if (location.pathname === '/404') {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-100">
      {showNavbar && <Navbar />}
      {children}
    </div>
  );
};

export default Layout;