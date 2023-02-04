import React from 'react';
import './NavMenu.css'
import Logo from './../../../assets/images/logo/Logo.png'
import Friends from './../../../assets/svg/friends.svg'
import Notification from './../../../assets/svg/notification.svg'
import Message from './../../../assets/svg/message.svg'
import BookSwap from './../../../assets/svg/BookSwap.svg'
import Home from './../../../assets/svg/home.svg'
import Profile from './../../../assets/svg/avatar.svg'
import ArrowDown from './../../../assets/svg/arrowDown.svg'
import {Link, useNavigate} from 'react-router-dom';

const NavMenu = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/');
    };

    const handleProfileClick = () => {
        navigate('/login');
    };
    return (
        <div className='navBar'>
            <div className="actualNav">
                <div className="actualNavItems">
                    <div className="navStart">
                        <img src={Logo}/>
                        <div className="search-bar">
                            <input type="text" placeholder="Search"/>
                        </div>
                    </div>
                    <div className="navLinks">
                        <div className="navHome">
                            <img className='navLinksImages' src={Home} alt='Home_Icon'/>
                            <Link className="navBarLink" tag={Link} to="/">Home</Link>
                        </div>
                        <div className="navFriends">
                            <img className='navLinksImages' src={Friends} alt='Friends_Icon'/>
                            <Link className="navBarLink" tag={Link} to="/">Friends</Link>
                        </div>


                        <div className="navBookSwap">
                            <img className='navLinksImages' src={BookSwap} alt='Book_Icon'/>
                            <Link className="navBarLink" tag={Link} to="/">Book Swap</Link>
                        </div>
                        <div className="navMessages">
                            <img className='navLinksImages' src={Message} alt='Message_Icon'/>
                            <Link className="navBarLink" tag={Link} to="/">Messages</Link>
                        </div>
                        <div className="navNotifications">
                            <img className='navLinksImages' src={Notification} alt='Notification_Icon'/>
                            <Link className="navBarLink" tag={Link} to="/">Notifications</Link>
                        </div>
                        <div className="navProfile">
                            <img className='navLinksImages' id='navLinkImageNoFilter' src={Profile} alt='Profile_Icon'/>
                            <Link className="navBarLink" tag={Link} to="/">Me</Link>
                            <img id='navProfileDownArrow' src={ArrowDown} alt='Down_Arrow'/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default NavMenu;