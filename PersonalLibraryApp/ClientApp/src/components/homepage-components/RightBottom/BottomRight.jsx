import React from 'react';
import './BottomRight.css';
import generateAuthorName from '../../../utils/name-generator';

const BotRight = () => {
  let friends = Array.from({length: 10},
      () => generateAuthorName());
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
