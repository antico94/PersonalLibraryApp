import React from 'react';
import './NavMenu.css'
import Logo from './../../../assets/images/logo/Logo.png'
import SearchIcon from './../../../assets/svg/search.svg'
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
                        <Link className="navBarLink" tag={Link} to="/">Home</Link>
                        <Link className="navBarLink" tag={Link} to="/">Friends</Link>
                        <Link className="navBarLink" tag={Link} to="/">Notifications</Link>
                        <Link className="navBarLink" tag={Link} to="/">Messages</Link>
                        <Link className="navBarLink" tag={Link} to="/">Book Swap</Link>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default NavMenu;