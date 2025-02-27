import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  // Check if the current location matches the specified routes
  const isAllowedRoute = ['/home', '/contact', '/about', '/product'].includes(location.pathname) || location.pathname === '/';

  return (
    <>
      <Header />
      <Outlet />
      {isAllowedRoute && <Footer />}
    </>
  );
}

export default Layout;
