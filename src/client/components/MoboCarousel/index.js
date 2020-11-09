import React, { useState, useEffect } from 'react';
import './styles.css';
import { PlayIcon, PlusIcon } from '../Icons';

export default function MoboCarousel({ moduleData: {contentData:slidesDataArray} }) {
  const [currentActiveImage, setCurrentActiveImage] = useState('');
  const handleMoboCarousel = (e) => {
    e.persist();
    const allIndicatorElements = document.getElementsByClassName(
      'mobo-carousel-indicator-list-item'
    );

    [...allIndicatorElements].forEach((element) => {
      element.classList.remove('active');
    });

    e.currentTarget.classList.add('active');
    const currentImageFromData = e.target.dataset.activeImage;
    setCurrentActiveImage(currentImageFromData);
  };

  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    if (slidesDataArray[0] && slidesDataArray[0].gist.imageGist._9x16) {
      // eslint-disable-next-line no-underscore-dangle
      setCurrentActiveImage(slidesDataArray[0].gist.imageGist._9x16);
    }
  }, []);

  return (
    <div className="mobo-carousel-container">
      <div className="mobo-carousel-wrapper">
        <div className="mobo-carousel-parent">
          <div
            className="mobo-carousel-active-image-container"
            style={{
              backgroundImage: `linear-gradient(180deg, rgb(0 0 0 / 0.9) 10%, transparent 40%), linear-gradient(360deg, #000000 30%, transparent 40%), url(${currentActiveImage})`,
            }}
          >
            <div className="mobo-carousel-active-image-info-container">
              <div className="mobo-carousel-active-play-icon">
                <PlayIcon />
              </div>
              <div className="mobo-carousel-active-info">
                <div className="mobo-carousel-heading">Byomkesh</div>
                <ul className="mobo-carousel-feature-list">
                  <li className="mobo-carousel-feature-item">2 Seasons</li>
                  <li className="mobo-carousel-feature-item">12 Episodes</li>
                  <li className="mobo-carousel-feature-item">Thriller</li>
                </ul>
              </div>
              <div className="mobo-carousel-active-plus-icon">
                <PlusIcon />
              </div>
            </div>
            <div className="mobo-carousel-indicator-container">
              <ul className="mobo-carousel-indicator-list">
                {slidesDataArray &&
                  slidesDataArray.map((slideData, index) => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                    <li
                      key={new Date().getTime() + index}
                      className={`mobo-carousel-indicator-list-item ${index === 0 ? 'active' : ''}`}
                      onClick={handleMoboCarousel}
                      role="button"
                    >
                      <img
                        // eslint-disable-next-line no-underscore-dangle
                        src={slideData.gist.imageGist._16x9}
                        alt=""
                        className="mobo-carousel-indicator-image"
                        // eslint-disable-next-line no-underscore-dangle
                        data-active-image={slideData.gist.imageGist._9x16}
                      />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
