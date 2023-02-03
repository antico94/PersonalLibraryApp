import React from 'react';
import './TopLeft.css';

const TopLeft = () => {
  var optionsList = ['Messages', 'Invites', 'Events', 'Settings', 'Clubs'];
  return (
      <div className="topLeft">
        <h1>Main functionalities</h1>
        <ul>
          {optionsList.map(el => {
            return <li>{el}</li>;
          })}
        </ul>
      </div>
  );
};

export default TopLeft;
