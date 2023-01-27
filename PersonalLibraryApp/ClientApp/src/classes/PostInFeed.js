export default class PostInFeed {
  constructor(PostAuthor, PostType, Description, HasImage, Image = null) {
    this.PostAuthor = PostAuthor
    this.PostType = PostType;
    this.Description = Description;
    this.HasImage = HasImage;
    this.Image = HasImage ? Image : null;
  }
}
