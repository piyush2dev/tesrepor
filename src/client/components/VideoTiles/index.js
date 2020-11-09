import React from 'react';
import './styles.css';
import VideoTile from '../VideoTile';

export default function VideoTiles({ moduleData, variant='short'}) {
  if(!moduleData) return null;

  const {contentData: tiles, title} = moduleData;
  console.log(tiles)

  return (
    <div className={`video-tiles-parent video-tiles-${variant}`}>
      <div className="video-tiles-heading">{title}</div>

      <div>
        <div className="video-tiles">
          {tiles.map((tile, index) => (
            <VideoTile
              // eslint-disable-next-line react/no-array-index-key
              key={`videotile-${index}-${variant}`}
              {...{ ...tile, variant }}
              //lazyload={lazyload}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
