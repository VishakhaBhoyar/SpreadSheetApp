import React from 'react';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import './globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          <Header />
          <Toolbar />
          <main className="flex-1 p-4 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;