import React from 'react';
import './styles.css';
import BigPoster from '../BigPoster';

export default function BigPosters({ moduleData, variant='default' }) {
  if(!moduleData) return null;
  const {title, subtitle, contentData:posters} = moduleData;
  return (
    <div className="big-posters-parent">
      <div className="big-posters-heading">{title}</div>
      {subtitle && <div className="big-posters-subheading">{subtitle}</div>}
      <div className="big-posters">
        {posters.map((poster, index) => {
          if (variant === 'new-release' && index > 0) return;
          return <BigPoster key={new Date().getTime() + index} {...poster} variant={variant} />;
        })}
      </div>
    </div>
  );
}
