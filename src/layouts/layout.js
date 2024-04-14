import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.scss';

export function Layout() {
  return (
    <>
      <div className="app">
        <header className="app__header">HEADER</header>
        <nav className="app__navbar">NAVBAR</nav>
        <div className="app__content">
          <Outlet />
        </div>
        <footer className="app__footer">FOOTER</footer>
      </div>
    </>
  );
}
