import React from 'react';
import './intro.css';
import blackFlower from '../../../assets/images/flower/black_Flower.png';

const Intro = () => {
  return (
      <div className="introPage">
        <div className="introPageInner">
          <div className="excerpt">
            <div className="title__container">
              <h1 className="title__first">Personal</h1>
              <h1 className="title__second">Library</h1>

              <img className="flower" src={blackFlower}
                   alt="flower silhouette"/>
              <h2>by Andrei Meiu</h2>
              <h3>A "short" introduction</h3>
            </div>
            <p>This website was created for the book lovers. I will summarise
              the
              advantages of using Personal Library in a book fashioned way.</p>
            <p>Once upon a time, there was a man named Jack who loved to read.
              He
              spent hours every day devouring books of all genres, from classic
              literature to mystery novels. He enjoyed the feeling of getting
              lost
              in a good story, but he often found it difficult to find new books
              to read that he would enjoy.</p>
            <p>One day, while browsing the internet, Jack stumbled upon a
              website
              called Personal Library. He was immediately intrigued by the
              website's mission to create a community of book lovers, and he
              decided to give it a try.</p>
            <p>When he first logged onto the website, he was greeted with a
              clean
              and easy-to-use interface. He was able to quickly search for books
              by author, title, or genre. The search function was so intuitive
              that he was able to find the books he was looking for with
              ease.</p>
            <p>But what really caught Jack's attention was the website's book
              recommendation engine. Based on his reading history and
              preferences,
              the app suggested books that he might enjoy reading. This feature
              made it easy for Jack to discover new authors and books that he
              may
              not have come across otherwise.</p>
            <p>The more Jack used Personal Library, the better the
              recommendations
              became. He found himself reading books he never would have picked
              up
              on his own, and he was constantly discovering new authors that he
              fell in love with.</p>
            <p>Personal Library also offered a feature that allowed Jack to keep
              track of his reading progress. He could easily add books to his
              wishlist, mark them as read, and even track his current reading
              progress. This way, he never lost track of where he left off.</p>
            <p>But Personal Library was more than just a platform to discover
              new
              books. It was also a community of book lovers, where Jack could
              interact with other readers, share his thoughts and opinions on
              books, and even get personalized book recommendations based on his
              reading history and preferences.</p>
            <p>The website's advanced AI algorithms analyzed Jack's reading
              habits
              and suggested books that aligned with his interests. This meant
              that
              he never had to waste time searching for his next read again.
              Plus,
              with the easy-to-use tracking system, he could keep track of the
              books he'd read, the ones he was currently reading, and the ones
              on
              his wishlist.</p>
            <p>Personal Library also offered features that allowed Jack to set
              reading goals, track his progress, and even earn rewards for
              reaching his milestones. This kept him motivated and always
              looking
              forward to expanding his reading horizons.</p>
            <p>One of Jack's favorite features on Personal Library was the
              ability
              to search for popular books on a particular subject. This was
              especially useful for when he wanted to dive deeper into a
              specific
              genre or topic. The advanced search function allowed him to filter
              his results by author, title, and even publication date.</p>
            <p>In short, Personal Library was the ultimate destination for book
              lovers like Jack. It was a one-stop-shop for discovering new
              books,
              interacting with other readers, tracking his progress, and finding
              popular books on a particular subject. The website was constantly
              updating and improving their platform to make sure he had the best
              possible reading experience.</p>
            <p>So, if you're a book lover like Jack, head over to Personal
              Library
              and start exploring today. You'll find a community of like-minded
              readers, personalized book recommendations, and a platform to
              discover new books that aligns with your interests. Happy
              reading!</p>
          </div>
        </div>
        <div className="btn btn__secondary"><p>Dive in!</p></div>

      </div>

  );
};

export default Intro;
