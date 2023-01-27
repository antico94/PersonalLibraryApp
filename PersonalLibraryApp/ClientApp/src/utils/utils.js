import PostInFeed from './../classes/PostInFeed'

const PostType = {
	Achievement: "Achievement",
	Regular: "Regular",
	Ad: "Ad",
	Update: "Update"
}
const postTypesValues = Object.values(PostType);
const firstNames = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Mia", "Charlotte", "Amelia", "Harper", "Evelyn"];
const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor"];

const generateAuthorName = () => {
  let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${firstName} ${lastName}`;
}

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