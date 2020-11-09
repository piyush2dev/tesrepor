import React from 'react';
import './styles.css';
import { PlayIcon, InfoIcon, PlusIcon } from '../Icons';

export default function VideoBanner({ backgroundImage, videoBannerThumb }) {
  return (
    <div className="video-banner-container">
      <div className="video-banner-wrapper">
        <div
          className="video-banner-parent"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 82%), rgb(0 0 0 / 0.60)), url(${backgroundImage})`,
          }}
        >
          <div className="video-banner-video-container">
            <img src={videoBannerThumb} alt="kedar" />
          </div>
          <div className="video-banner-info-container">
            <div className="video-banner-title">Kedara</div>
            <ul className="video-banner-feature-list">
              <li>99 mins</li>
              <li>9999</li>
              <li>Drama</li>
              <li className="video-banner-age-rating">13+</li>
            </ul>
            <div className="video-banner-action-container">
              <div className="video-banner-play-button-container primary-button">
                <div className="video-banner-play-icon">
                  <PlayIcon />
                </div>
                <div className="video-banner-play-text">Play Now</div>
              </div>
              <div className="video-banner-info-icon">
                <InfoIcon />
              </div>
              <div className="video-banner-plus-icon">
                <PlusIcon />
              </div>
            </div>
            <div className="video-banner-description">
              A despairing man fights against loneliness - with a dying art form. Can a chair open a
              door to a new world for him? Watch Indraadip Das Gupta&apos;s film on hoichoi.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
