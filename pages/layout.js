import React from 'react';
import Footer from '../components/footer';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <main>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
