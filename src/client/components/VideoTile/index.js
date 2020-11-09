import React, { useState, useEffect } from 'react';
import './styles.css';
import { PlayIcon, PlusIcon } from '../Icons';

export default function VideoTile({ gist, variant = 'short', ageRestriction, featureText, color }) {
  const variantToSize = {
    short: '_16x9',
    long: '_9x16',
    cube: '_1x1',
    circle: '_1x1',
    genre: '_16x9',
    'extra-wide': '_32x9',
  };

  const imageRatioForSmallSizeLoading = {
    _16x9: 1.77,
    _9x16: 0.56,
    _1x1: 1,
    _32x9: 3.55,
  };
  const imageUrl = gist && gist.imageGist[variantToSize[variant]];

  const placeholderWidth = 20;

  const placeholderImage = imageUrl
    ? `${imageUrl}?impolicy=resize&w=${placeholderWidth}&h=${
        placeholderWidth / imageRatioForSmallSizeLoading[variantToSize[variant]]
      }`
    : '';

  const [imageSrc, setImageSrc] = useState(placeholderImage);
  const [imageRef, setImageRef] = useState();

  const setProgressiveImage = (src) => {
    if (!src) return '';
    const img = new Image();
    img.src = src;
    img.onload = () => setImageSrc(src);
  };

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc === placeholderImage) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // when image is visible in the viewport + rootMargin
              if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                setProgressiveImage(imageUrl);
                // setImageSrc(imageSrc);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '20%',
          }
        );
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(imageUrl);
      }
    }
    return () => {
      didCancel = true;
      // on component unmount, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  });

  return (
    <div className="video-tile-container">
      <div className={`video-tile-wrapper video-tile-${variant}`}>
        <div
          className="video-tile-parent"
          ref={setImageRef}
          style={{
            backgroundImage: `url(${imageSrc}), linear-gradient(#212121, #212121)`,
          }}
        >
          {featureText && <div className="video-tile-new-label">{featureText}</div>}
          <div className="video-tile-progress" />
          <div className="video-tile-long-hover-info-container">
            <div className="video-tile-long-hover-title-action-container">
              <div className={`video-tile-long-hover-title ${gist ? gist.title : ''}`}>
                {gist ? gist.title : ''}
              </div>
              <div className="video-tile-long-hover-action-container">
                <div className="video-tile-long-hover-play-icon-container">
                  <PlayIcon />
                </div>
                <div className="video-tile-long-hover-plus-icon-container">
                  <PlusIcon />
                </div>
              </div>
            </div>
            <ul className="video-tile-long-hover-feature-list">
              {ageRestriction && (
                <li className="video-tile-long-hover-feature-item video-tile-age-rating">
                  {ageRestriction}
                </li>
              )}
              {gist && gist.runtime && (
                <li className="video-tile-long-hover-feature-item">
                  {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                  {Math.round(gist.runtime / 60)} mins
                </li>
              )}
              {gist && gist.year && (
                <li className="video-tile-long-hover-feature-item">{gist.year}</li>
              )}
              {gist && gist.primaryCategory && gist.primaryCategory.title && (
                <li className="video-tile-long-hover-feature-item">{gist.primaryCategory.title}</li>
              )}
            </ul>
          </div>
        </div>
        <div className="video-tile-info">
          <div className="video-tile-action-container">
            <div
              className="video-tile-title"
              style={{ '--genre-color': color ? `${color}6b` : '#b71c1c6b' }}
            >
              {gist ? gist.title : ''}
              {ageRestriction && <div className="video-tile-age-rating">{ageRestriction}</div>}
            </div>
            <div className="video-tile-icon-container">
              <div className="video-tile-play-icon video-tile-icon">
                <PlayIcon />
              </div>
              <div className="video-tile-plus-icon video-tile-icon">
                <PlusIcon />
              </div>
            </div>
          </div>
          <ul className="video-tile-feature-list">
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            {gist && gist.runtime && <li>{Math.round(gist.runtime / 60)} mins</li>}
            {gist && gist.year && <li>{gist.year}</li>}
            {gist && gist.primaryCategory && gist.primaryCategory.title && (
              <li>{gist.primaryCategory.title}</li>
            )}
          </ul>
          {gist && <div className="video-tile-description">{gist.description}</div>}
        </div>
      </div>
    </div>
  );
}
