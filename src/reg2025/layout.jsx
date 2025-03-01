// src/components/Layout.js
import React from 'react';
import Header from './Header';
import Menu from './menu';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header />
    <Menu />
    <div style={{ flex: 1, padding: '20px' }}>{children}</div>
    <Footer />
  </div>
);

export default Layout;