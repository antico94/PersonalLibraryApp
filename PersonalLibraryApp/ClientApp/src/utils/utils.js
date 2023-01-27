import PostInFeed from './../classes/PostInFeed'
import generateAuthorName from './name-generator';
import {PostType} from '../enums/post-type';

const postTypesValues = Object.values(PostType);

const  generatePosts = (n) => {
  const posts = [];
  for (let i = 0; i < n; i++) {
    const authorName = generateAuthorName()
    const postType = postTypesValues[Math.floor(Math.random() * postTypesValues.length)];
    const hasImage = Math.random() > 0.5;
    const imageUrl = hasImage ? `https://picsum.photos/id/${i+1}/600/300` : null;
    const description = `Post #${i+1} - ${postType}`;
    const post = new PostInFeed(authorName, postType, description, hasImage, imageUrl);
    posts.push(post);
  }
  return posts;
}


export default generatePosts