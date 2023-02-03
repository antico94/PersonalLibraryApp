import React from 'react';
import './Homepage.css';
import generatePosts from './../../utils/utils'
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
    let posts = generatePosts(30)
    return (
        <div className="homePageOuter">
            <NavMenu/>

            <div className="homePageContainer">
                <div className="left">
                    <TopLeft/>
                    <BotLeft/>
                </div>
                <div className="middle">
                    <TopMiddle/>
                    <SortBar/>
                    <BotMiddle posts={posts}/>
                </div>
                <div className="right">
                    <TopRight/>
                    <BotRight/>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
