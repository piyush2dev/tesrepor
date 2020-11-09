import React, { useState, useEffect } from 'react';
import './styles.css';
import { PlayIcon, InfoIcon, PlusIcon } from '../Icons';

export default function BigPoster({ gist, feturedText, variant = 'default' }) {
  const variantToSize = {
    default: '_9x16',
    'new-release': '_32x9',
    series: '_16x9',
    'original-series': '_16x9',
  };
  const imageRatioForSmallSizeLoading = {
    _16x9: 1.77,
    _9x16: 0.56,
    _1x1: 1,
    _32x9: 3.55,
  };

  const imageUrl = gist && gist.imageGist[variantToSize[variant]];

  // const placeholderWidth = 20;

  // const placeholderImage = imageUrl
  //   ? `${imageUrl}?impolicy=resize&w=${placeholderWidth}&h=${
  //       placeholderWidth / imageRatioForSmallSizeLoading[variantToSize[variant]]
  //     }`
  //   : '';
  // const [imageSrc, setImageSrc] = useState(placeholderImage);
  // const [imageRef, setImageRef] = useState();
  // const setProgressiveImage = (src) => {
  //   const img = new Image();
  //   img.src = src;
  //   img.onload = () => setImageSrc(src);
  // };

  // useEffect(() => {
  //   let observer;
  //   let didCancel = false;

  //   if (imageRef && imageSrc === placeholderImage) {
  //     if (IntersectionObserver) {
  //       observer = new IntersectionObserver(
  //         (entries) => {
  //           entries.forEach((entry) => {
  //             // when image is visible in the viewport + rootMargin
  //             if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
  //               setProgressiveImage(imageUrl);
  //               // setImageSrc(imageSrc);
  //             }
  //           });
  //         },
  //         {
  //           threshold: 0.01,
  //           rootMargin: '20%',
  //         }
  //       );
  //       observer.observe(imageRef);
  //     } else {
  //       // Old browsers fallback
  //       setImageSrc(imageUrl);
  //     }
  //   }
  //   return () => {
  //     didCancel = true;
  //     // on component unmount, we remove the listner
  //     if (observer && observer.unobserve) {
  //       observer.unobserve(imageRef);
  //     }
  //   };
  // });

  return (
    <div className={`big-poster-container ${`big-poster-${variant}`}`}>
      <div className="big-poster-wrapper">
        <div className="big-poster-parent">
          <div
            className="big-poster-img-container"
            style={{
              backgroundImage: `url(${imageUrl}), linear-gradient(#212121, #212121)`,
            }}
          />
          <div className="big-poster-info-container">
            {feturedText && (
              <div className="big-poster-featured-text primary-gradient">{feturedText}</div>
            )}
            {gist && gist.title && <div className="big-poster-title">{gist.title}</div>}
            <div className="big -poster-feature">
              <ul className="big-poster-feature-list">
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                {gist && <li>{gist && Math.round(gist.runtime / 60)} mins</li>}
                {gist && <li>{gist.year}</li>}
                {gist && gist.primaryCategory && gist.primaryCategory.title && (
                  <li>{gist.primaryCategory.title}</li>
                )}
              </ul>
            </div>
            <div className="big-poster-additional-info">
              <div className="big-poster-buttons">
                <div className="big-poster-play-button">
                  <div className="big-poster-play-icon">
                    <PlayIcon />
                  </div>
                  <div className="big-poster-play-text">Play Now</div>
                </div>
                <div className="big-poster-info-button">
                  <div className="big-poster-info-icon">
                    <InfoIcon />
                  </div>
                </div>
                <div className="big-poster-plus-button">
                  <div className="big-poster-plus-icon">
                    <PlusIcon />
                  </div>
                </div>
              </div>
              <div className="big-poster-description">
                A love story amdist agitation and crime... Find out about the fight to survive,
                during the Bangladesh freedom struggle.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
