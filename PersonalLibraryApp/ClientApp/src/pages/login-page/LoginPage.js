import React from 'react';
import Login from '../../components/individual-components/login/login';
import NavMenu from '../../components/individual-components/nav/NavMenu';
import './loginPage.css';

const LoginPage = () => {
  return (
      <div className="loginPage">
        <NavMenu/>
        <Login/>
      </div>
  );
};

export default LoginPage;
