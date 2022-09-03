import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../css/Layout.css';

const Layout = ({ children }) => {
  return (<>
    <Header />
      {children}
    <div className='footer-container'>
      <Footer />
    </div>
    </>
  )
}

export default Layout