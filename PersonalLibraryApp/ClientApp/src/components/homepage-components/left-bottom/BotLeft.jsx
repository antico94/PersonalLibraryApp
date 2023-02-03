import React from 'react';
import './BotLeft.css';

const BotLeft = () => {
  const optionsList = ['Mixed', 'Trending', 'Community', 'New Releases'];

  return (
      <div className="botLeft">
        <h1>Feed Control</h1>
        <ul>
          {optionsList.map(el => {
            return <li>{el}</li>;
          })}
        </ul>
      </div>
  );
};

export default BotLeft;
