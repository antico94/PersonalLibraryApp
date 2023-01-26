import React from 'react';
import './BottomRight.css';

const BotRight = () => {
  let friends = Array.from({length: 10},
      () => Math.random().toString(36).substring(2, 12));
  return (
      <div className="botRight">
        <h1>Friends Chat</h1>
        <ul>
          {friends.map(el => {
            return <li>{el}</li>;
          })}
        </ul>
      </div>
  );
};

export default BotRight;
