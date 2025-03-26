
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Store mock user data in localStorage on mount
  useEffect(() => {
    // Only add the demo user data if it doesn't exist yet
    if (!localStorage.getItem('userData')) {
      // Mock user data for demonstration
      const demoUserData = {
        name: 'John Doe',
        profilePicture: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=256&h=256',
        age: 32,
        gender: 'male',
        mobile: '+91 9876543210',
        farmingType: 'organic',
        location: '12.9716° N, 77.5946° E'
      };
      
      localStorage.setItem('userData', JSON.stringify(demoUserData));
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 page-transition">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
