import React from 'react';
import './Homepage.css';
import NavMenu from '../../components/individual-components/nav/NavMenu';
import BotRight
  from '../../components/homepage-components/RightBottom/BottomRight';
import TopRight
  from '../../components/homepage-components/RIghtTop/TopRight';
import BotMiddle
  from '../../components/homepage-components/MiddleBottom/BottomMiddle';
import TopMiddle
  from '../../components/homepage-components/MiddleTop/TopMiddle';
import BotLeft
  from '../../components/homepage-components/LeftBottom/BotLeft';
import TopLeft from '../../components/homepage-components/LeftTop/TopLeft';

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
