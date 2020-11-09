import React from 'react';
import './styles.css';
import BigPoster from '../BigPoster';

export default function OriginalSeries({ moduleData, variant='new-release' }) {
  const {title, subtitle='', contentData:posters, } = moduleData;
  return (
    <div className="original-series-container">
      <div className="original-series-parent">
        <div className="original-series-title">{title}</div>
        <div className="original-series-subtitle">{subtitle}</div>
        <div className="original-series-tiles">
          {posters.map((poster, index) => (
            <BigPoster key={`${index}-original-series`} {...poster} variant={variant} />
          ))}
        </div>
      </div>
    </div>
  );
}
