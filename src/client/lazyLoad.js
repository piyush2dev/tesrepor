import React from 'react';
import loadable from '@loadable/component'

import mapModule from './map';

const variant = ['', '', '', '', '', 'long', '', 'cube', '', 'extra-wide', '', 'circle', '', 'genre', 'series', 'new-release', 'original-series', '', '']


export const loadModules = (modules) => {

  // return null;

  let contentData= {};
  const CarouselData = modules.find(({id}) => id === '4b2947d7-7564-4110-a45d-eddc8fb015c7')
  const VideoTileData = modules.find(({id}) => id === '90e38be4-d9e4-4a51-8619-1680b478a90c')
  const VideoTileData2 = modules.find(({id}) => id === 'ea8e13ca-94af-4f60-a5fe-e60450494f06')

  return modules.map((module, idx) => {
    let moduleName = mapModule[idx.toString()]

    if(!moduleName) return null;
    
    if(moduleName === 'Carousel' || moduleName === 'MoboCarousel') {
      contentData = CarouselData
    } else if( moduleName  === 'VideoTiles') {
      contentData = VideoTileData2
    } else {
      contentData  = VideoTileData
    }

    let Module = loadable(props => import(`./components/${props.moduleName}`))
    return <Module  moduleData={contentData} moduleName={moduleName} />
  
  })


  }
  



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