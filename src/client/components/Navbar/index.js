import React, { useState } from 'react';
import './styles.css';
// import { Link } from 'react-router-dom';
import logo140X40 from '../../assets/images/hoichoi-logo_140x40.png';
// import playstorePng from '../../assets/images/playstore.png';
// import appstorePng from '../../assets/images/appstore.png';
import { UserIcon, NextIcon } from '../Icons';
// import Menu from '../Menu';
// import Login from '../Login';
// import SearchLayout from '../SearchLayout';

export default function Navbar() {
  const sideBarRef = React.createRef();

  function handleHamburgMenu() {
    sideBarRef.current.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
  }

  function handleOverlayClick() {
    sideBarRef.current.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
  }

  // const [openMenu, setOpenMenu] = useState(false);
  // const [openLogin, setOpenLogin] = useState(false);
  // const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className="header-container">
      <header>
        <div className="desktop-header">
          <div className="header-primary-menu">
            <img src={logo140X40} alt="" className="header-logo" />
            <ul className="header-menu-container">
              <li className="active">
              <a href="#!">Home</a>
              </li>
              <li>
              <a href="#!">Movies</a>
              </li>
              <li>
                <a href="#!">Shows</a>
              </li>
              <li>
                <a href="#!">Live TV</a>
              </li>
              <li>
                <a href="#!">Free</a>
              </li>
            </ul>
          </div>

          <div className="header-secondary-menu">
            <ul className="header-menu-container">
              <li>
                <a href="#!">
                  <button
                    className="nav-search-button"
                    type="button"
                    onClick={() => setOpenSearch(true)}
                  >
                    {/* <span>Search</span> */}
                    <span className="nav-search-svg-icon-container">
                      <svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512">
                        <g>
                          <g>
                            <path
                              d="M225.474,0C101.151,0,0,101.151,0,225.474c0,124.33,101.151,225.474,225.474,225.474
                                c124.33,0,225.474-101.144,225.474-225.474C450.948,101.151,349.804,0,225.474,0z M225.474,409.323
                                c-101.373,0-183.848-82.475-183.848-183.848S124.101,41.626,225.474,41.626s183.848,82.475,183.848,183.848
                                S326.847,409.323,225.474,409.323z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M505.902,476.472L386.574,357.144c-8.131-8.131-21.299-8.131-29.43,0c-8.131,8.124-8.131,21.306,0,29.43l119.328,119.328
                                                    c4.065,4.065,9.387,6.098,14.715,6.098c5.321,0,10.649-2.033,14.715-6.098C514.033,497.778,514.033,484.596,505.902,476.472z"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                  </button>
                </a>
              </li>
              <li>
                <a href="#!" >
                  Login
                </a>
              </li>
              <li>
                <button className="primary-button" type="button">
                  Subscribe Now
                </button>
              </li>
              <li>
                <div className="navbar-user-and-menu-container">
                  <div className="navbar-user-icon-container">
                    <UserIcon />
                  </div>
                  <div
                    className="navbar-secondary-inner-menu-icon-container"
                    // onClick={() => setOpenMenu((prevMenuValue) => !prevMenuValue)}
                    role="button"
                    aria-hidden="true"
                  >
                    <NextIcon />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mobo-header-parent">
          <div className="mobo-header">
            <div
              className="hamburg-menu-icon-container"
              onClick={handleHamburgMenu}
              role="button"
              aria-hidden="true"
            >
              <svg viewBox="0 0 512 512">
                <path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" />
                <path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" />
                <path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z" />
              </svg>
            </div>
            <div className="logo-container">
              <img src={logo140X40} alt="hoichoi logo" />
            </div>
            <div className="search-icon-container">
              <span
                className="nav-search-svg-icon-container"
                //onClick={() => setOpenSearch(true)}
                role="button"
                aria-hidden="true"
              >
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512">
                  <g>
                    <path
                      d="M225.474,0C101.151,0,0,101.151,0,225.474c0,124.33,101.151,225.474,225.474,225.474
                                                        c124.33,0,225.474-101.144,225.474-225.474C450.948,101.151,349.804,0,225.474,0z M225.474,409.323
                                                        c-101.373,0-183.848-82.475-183.848-183.848S124.101,41.626,225.474,41.626s183.848,82.475,183.848,183.848
                                                        S326.847,409.323,225.474,409.323z"
                    />
                  </g>

                  <g>
                    <path
                      d="M505.902,476.472L386.574,357.144c-8.131-8.131-21.299-8.131-29.43,0c-8.131,8.124-8.131,21.306,0,29.43l119.328,119.328
                                                        c4.065,4.065,9.387,6.098,14.715,6.098c5.321,0,10.649-2.033,14.715-6.098C514.033,497.778,514.033,484.596,505.902,476.472z"
                    />
                  </g>
                </svg>
              </span>
            </div>
          </div>
          <div className="modo-sidebar" ref={sideBarRef}>
            <div
              className="mobo-overlay"
              onClick={handleOverlayClick}
              role="button"
              aria-hidden="true"
              aria-label="menu sidebar"
            />
            <nav className="mobo-nav">
              <div className="mobo-nav-logo-container">
                <img src={logo140X40} alt="" />
                <button
                  type="button"
                  className="mobo-nav-login-btn"
                  // onClick={() => {
                  //   setOpenLogin(true);
                  //   sideBarRef.current.classList.toggle('show');
                  // }}
                >
                  Login
                </button>
              </div>
              <ul>
                <li className="active">
                  <a href="#!">Home</a>
                </li>
                <li>
                  <a href="#!">Movies</a>
                </li>
                <li>
                  <a href="#Shows">Shows</a>
                </li>
                <li>
                  <a href="#!">Live TV</a>
                </li>
                <li>
                  <a href="#!">Free</a>
                </li>
              </ul>
              <button className="mobo-subscribe-btn" type="button">
                Subscribe Now
              </button>
              <div className="mobo-nav-bottom-bar">
                <small>Download App Now.</small>
                <div className="mobo-app-store-container">
                  <a href="#!">{/* <img src={playstorePng} alt="" srcSet="" /> */}</a>
                  <a href="#!">{/* <img src={appstorePng} alt="" srcSet="" /> */}</a>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="navbar-mobo-v2-container">
          <div className="navbar-mobo-v2-wrapper">
            <div className="nabar-mobo-v2-parent">
              <ul className="navabar-mobo-v2-list">
                <li className="navbar-mobo-v2-list-item active">All</li>
                <li className="navbar-mobo-v2-list-item">Movies</li>
                <li className="navbar-mobo-v2-list-item">Shows</li>
                <li className="navbar-mobo-v2-list-item">Music</li>
                <li className="navbar-mobo-v2-list-item">Live TV</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <Menu openMenu={openMenu} onMenuClosed={setOpenMenu} />
        <Login openLogin={openLogin} onLoginClosed={setOpenLogin} />
        <SearchLayout openSearch={openSearch} onSearchClosed={setOpenSearch} /> */}
      </header>
    </div>
  );
}