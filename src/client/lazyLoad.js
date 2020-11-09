import React from 'react';
import loadable from '@loadable/component';

import mapModule from './map';

const variant = [
  '',
  '',
  '',
  '',
  '',
  'long',
  '',
  'cube',
  '',
  'extra-wide',
  '',
  'circle',
  '',
  'genre',
  'series',
  'new-release',
  'original-series',
  '',
  '',
];

export const loadModules = (layout, modules) => {
  // return null;

  let contentData = {};
  const CarouselData = modules.find(
    ({ id }) => id === '3f0f4c42-b040-4fab-9b3c-ab2135b107db'
  );
  const VideoTileData = modules.find(
    ({ id }) => id === 'aa967100-0b45-458c-853a-7963292fe3ca'
  );
  // const VideoTileData2 = modules.find(({ id }) => id === 'acb52d48-40b2-46d8-a519-9e385cb3b4ee')
  const VideoTileData2 = modules.find(
    ({ id }) => id === 'aa967100-0b45-458c-853a-7963292fe3ca'
  );
  console.log({ CarouselData, VideoTileData, VideoTileData2 });

  return layout.map((layoutData, idx) => {
    console.log('idx', idx);
    let { id, blockName } = layoutData;
    console.log({ id });
    let moduleName = mapModule[blockName];
    console.log(moduleName);
    if (!moduleName) return null;

    if (moduleName === 'Carousel' || moduleName === 'MoboCarousel') {
      contentData = CarouselData;
    } else if (moduleName === 'VideoTiles') {
      contentData = VideoTileData2;
    } else {
      contentData = VideoTileData;
    }

    let Module = loadable((props) =>
      import(`./components/${props.moduleName}`)
    );
    return (
      <Module
        moduleData={contentData}
        moduleName={moduleName}
        key={`${idx}-modules`}
      />
    );
  });
};

// const videoBannerData = {
//   title: 'Kedara',
//   duration: '99 mins',
//   year: '9999',
//   genre: 'Drama',
//   ageRestriction: '13+',
//   description:
//     'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
//   backgroundImage: videoTite3,
//   videoBannerThumb,
// };

// const footerData = {
//   logo: hoichoiLogo,
//   socialLinks: [
//     {
//       platform: 'facebook',
//       link: '#',
//     },
//     {
//       platform: 'twitter',
//       link: '#',
//     },
//     {
//       platform: 'youtube',
//       link: '#',
//     },
//     {
//       platform: 'instagram',
//       link: '#',
//     },
//   ],
//   links: [
//     {
//       anchorText: 'Report a Bug',
//       anchorLink: '#',
//     },
//     {
//       anchorText: 'Movie Report',
//       anchorLink: '#',
//     },
//     {
//       anchorText: 'Submit Your Story',
//       anchorLink: '#',
//     },
//     {
//       anchorText: 'Request a Movie',
//       anchorLink: '#',
//     },
//     {
//       anchorText: 'Privacy Policy',
//       anchorLink: '#',
//     },
//     {
//       anchorText: 'Terms of Service',
//       anchorLink: '#',
//     },
//     {
//       anchorText: 'Copyright © 2020 hoichoi',
//       anchorLink: '#',
//     },
//   ],
// };
