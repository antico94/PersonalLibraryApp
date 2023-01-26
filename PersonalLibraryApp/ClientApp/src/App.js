import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './custom.css';
import NavMenu from './components/nav/NavMenu';

const App = () => {
  return (
      <Routes>
        {AppRoutes.map((route, index) => {
          const {element, ...rest} = route;
          return <Route key={index} {...rest} element={element}/>;
        })}
      </Routes>
  );
};

export default App;