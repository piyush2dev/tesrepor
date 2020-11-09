import React from 'react';
import { InfoIcon, PlayIcon, PlusIcon } from '../Icons';
import './styles.css';

export default function CarouselSlide({ slideData = {} }) {
  return (
    <div
      className="carousel-slide-container "
      style={{
        // eslint-disable-next-line no-underscore-dangle
        backgroundImage: `url(${slideData.gist.imageGist._16x9})`,
      }}
    >
      <div className="carousel-slide-details-container">
        <span className="carousel-slide-feature-text">EXCLUSIVE RELEASE</span>
        <div className="carousel-slide-title">{slideData.gist.title}</div>
        <div className="carousel-slide-feature-list-container">
          <div className="carousel-slide-age-rating">13+</div>
          <ul className="carousel-slide-feature-list-item">
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            {slideData.gist.runtime && <li>{Math.round(slideData.gist.runtime / 60)} mins</li>}
            {slideData.gist.year && <li>{slideData.gist.year}</li>}
            {slideData.categories[0] && <li>{slideData.categories[0].title}</li>}
          </ul>
        </div>
        <div className="carousel-slide-action-container">
          <div className="carousel-slide-cta-container">
            <button
              className="primary-button carousel-slide-cta carousel-slide-play-icon-container"
              type="button"
            >
              <PlayIcon />
              <span className="">Play Now</span>
            </button>
          </div>

          <div className="carousel-slide-info-icon-container">
            <button
              className="secondary-button carousel-slide-secondary-icon carousel-slide-info-icon"
              type="button"
            >
              <InfoIcon />
            </button>
          </div>
          <div className="carousel-slide-add-icon-container">
            <button className="secondary-button carousel-slide-secondary-icon" type="button">
              <PlusIcon />
            </button>
          </div>
        </div>
        <div className="carousel-slide-description">
          A game of tunes - or a clue to a hidden treasure? It&apos;s a
          <br />
          journey of music and riddles!
          <br />
          Watch the trailer of Tansener Tanpura.
        </div>
      </div>
    </div>
  );
}
