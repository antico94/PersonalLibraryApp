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
                    <img src={Logo}/>
                    <div className="search-container">
                        <div className="search-icon"></div>
                        <input type="text" className="search-input" placeholder="Search"/>
                        <Link className="navBarLink" tag={Link} to="/intro">Intro</Link>
                        <Link className="navBarLink" tag={Link} to="/">Book finder</Link>
                        <Link className="navBarLink" tag={Link} to="/">Popular</Link>
                        <Link className="navBarLink" tag={Link} to="/">Portfolio</Link>
                        <Link className="navBarLink" tag={Link} to="/">Community</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;