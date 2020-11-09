import React from 'react';
import './styles.css';
// import BannerBG from '../../assets/images/banner_bg-cropped.png';
import { NextIcon } from '../Icons';

export default function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-wrapper">
        <div className="banner-parent">
          <div className="banner-content">
            <div className="banner-heading">Start watching for free!</div>
            <div className="banner-sub-heading">
              Don’t miss out on 20+ Hoichoi Original shows. Get your free trial now!
            </div>
            <button type="button" className="banner-cta">
              Subscribe For Free
            </button>
          </div>
          <div className="banner-image-container">
            {/* <img className="banner-image" src={BannerBG} alt="" /> */}
            <div className="banner-mobo-icon-container">
              <NextIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
