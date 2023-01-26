import React from 'react';
import NavMenu from '../nav/NavMenu';
import Home from './../home/Home';
import './layout.css'
import Login from "./../login/login"

const Layout = () => {
  return (
      <div className="mainLayout">
        {/*<NavMenu/>*/}
        {/*<Home/>*/}
        <Login/>
      </div>
  );
};

export default Layout;

