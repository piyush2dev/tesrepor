import React from 'react';
import { HomeIcon, SearchIcon, UpcomingIcon, UserIcon } from '../Icons';
import './styles.css';

export default function BottomMenuBar() {
  return (
    <div className="bottom-menu-bar-container">
      <div className="bottom-menu-bar-wrapper">
        <div className="bottom-menu-bar-parent">
          <ul className="bottom-menu-bar-menu-list">
            <li className="bottom-menu-bar-menu-item active">
              <div className="bottom-menu-bar-icon-container">
                <HomeIcon />
              </div>
              <div className="bottom-menu-bar-menu-text">Home</div>
            </li>
            <li className="bottom-menu-bar-menu-item">
              <div className="bottom-menu-bar-icon-container">
                <SearchIcon />
              </div>
              <div className="bottom-menu-bar-menu-text">Search</div>
            </li>
            <li className="bottom-menu-bar-menu-item">
              <div className="bottom-menu-bar-icon-container">
                <UpcomingIcon />
              </div>
              <div className="bottom-menu-bar-menu-text">Upcoming</div>
            </li>
            <li className="bottom-menu-bar-menu-item">
              <div className="bottom-menu-bar-icon-container">
                <UserIcon />
              </div>
              <div className="bottom-menu-bar-menu-text">Account</div>
            </li>
            {/* <li className="bottom-menu-bar-menu-item">
              <div className="bottom-menu-bar-icon-container" />
              <div className="bottom-menu-bar-menu-text" />
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
