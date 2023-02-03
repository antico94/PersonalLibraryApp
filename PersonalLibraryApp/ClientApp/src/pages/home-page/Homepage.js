import React from 'react';
import './Homepage.css';
import generatePosts from './../../utils/utils'
import NavMenu from '../../components/individual-components/nav/NavMenu';
import BotRight
    from '../../components/homepage-components/right-bottom/BottomRight';
import TopRight
    from '../../components/homepage-components/right-top/TopRight';
import BotMiddle
    from '../../components/homepage-components/middle-bottom/BottomMiddle';
import TopMiddle
    from '../../components/homepage-components/middle-top/TopMiddle';
import BotLeft
    from '../../components/homepage-components/left-bottom/BotLeft';
import TopLeft from '../../components/homepage-components/left-top/TopLeft';
import SortBar from "../../components/homepage-components/sort-bar/SortBar";


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
