import React from 'react';
import './Homepage.css';
import NavMenu from '../../components/individual-components/nav/NavMenu';
import BotRight
  from '../../components/homepage-components/BottomRightSide/BottomRight';
import TopRight
  from '../../components/homepage-components/TopRIghtSide/TopRight';
import BotMiddle
  from '../../components/homepage-components/BottomMiddle/BottomMiddle';
import TopMiddle
  from '../../components/homepage-components/TopMiddle/TopMiddle';
import BotLeft
  from '../../components/homepage-components/BottomLeftSide/BotLeft';
import TopLeft from '../../components/homepage-components/TopLeftSide/TopLeft';

const Homepage = () => {
  return (
      <div className="homePageOuter">
        <NavMenu/>

        <div className="homePageInner">
          <TopLeft/>
          <BotLeft/>
          <TopMiddle/>
          <BotMiddle/>
          <TopRight/>
          <BotRight/>
        </div>
      </div>
  );
};

export default Homepage;
