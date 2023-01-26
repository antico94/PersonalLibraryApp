import React from 'react';
import {Link} from 'react-router-dom';
import './NavMenu.css';
import WhiteLogo from '../../assets/images/logo/white_logo.png';
import NiceSearch from './NiceSearch';
import { useNavigate } from 'react-router-dom';

const NavMenu = () => {
    const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/")
  }

    const handleProfileClick = () => {
    navigate("/login")
  }

  return (
      <div>
        <div className="header">
          <div className="header-menu">
            <img className="logo" src={WhiteLogo} alt={'logo'} onClick={handleLogoClick}/>
            <Link className="navBarLink" tag={Link} to="/">Book finder</Link>
            <Link className="navBarLink" tag={Link} to="/">Popular</Link>
            <Link className="navBarLink" tag={Link} to="/">Portfolio</Link>
            <Link className="navBarLink" tag={Link} to="/">Community</Link>
          </div>
          <div className="header-icons">
            <NiceSearch/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={handleProfileClick}>
              <path
                  d="M437.02 330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521 243.251 404 198.548 404 148 404 66.393 337.607 0 256 0S108 66.393 108 148c0 50.548 25.479 95.251 64.262 121.962-36.21 12.495-69.398 33.136-97.281 61.018C26.629 379.333 0 443.62 0 512h40c0-119.103 96.897-216 216-216s216 96.897 216 216h40c0-68.38-26.629-132.667-74.98-181.02zM256 256c-59.551 0-108-48.448-108-108S196.449 40 256 40s108 48.448 108 108-48.449 108-108 108z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 208.955 208.955">
              <path
                  d="M190.85 200.227L178.135 58.626a7.5 7.5 0 00-7.47-6.829h-26.221V39.971c0-22.04-17.93-39.971-39.969-39.971-22.038 0-39.966 17.931-39.966 39.971v11.826H38.27a7.5 7.5 0 00-7.47 6.829L18.035 200.784a7.5 7.5 0 007.47 8.17h157.946a7.5 7.5 0 007.399-8.727zM79.509 39.971c0-13.769 11.2-24.971 24.967-24.971 13.768 0 24.969 11.202 24.969 24.971v11.826H79.509V39.971zm-45.8 153.984L45.127 66.797h19.382v13.412a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5V66.797h49.936v13.412a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5V66.797h19.364l11.418 127.158H33.709z"/>
            </svg>
          </div>
        </div>
      </div>
  );
};

export default NavMenu;