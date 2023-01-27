import React from 'react';
import './post.css'

const FeedPost = ({ post }) => {
  return (
    <div className={`feedPost ${post.PostType}`}>
      <div>
        <strong>{post.PostAuthor}</strong>
        <span>{post.PostType}</span>
      </div>
      <p>{post.Description}</p>
      {post.HasImage && <img src={post.Image} alt="Post Image" />}
    </div>
  );
};

export default FeedPost;
