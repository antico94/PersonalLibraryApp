import React from 'react';
import NavMenu from '../nav/NavMenu';
import Home from './../home/Home';
import './layout.css'

const Layout = () => {
  return (
      <div className="mainLayout">
        <NavMenu/>
        <Home/>
      </div>
  );
};

export default Layout;

