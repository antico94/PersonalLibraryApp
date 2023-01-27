import React from 'react';
import './BottomMiddle.css';
import FeedPost from '../../individual-components/post-in-feed/post';

const BotMiddle = ({posts}) => {
  return (
      <div className="botMiddle">
        {posts.map(post=>{
          return <FeedPost post={post}/>
        })}
      </div>
  );
};

export default BotMiddle;
