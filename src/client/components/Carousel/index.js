import React, { useEffect, useState } from 'react';
import CarouselSlide from '../CarouselSlide';
import './styles.css';

export default function Carousel({ moduleData: { contentData: slidesDataArray } }) {
  const carousel = React.createRef();
  const [carouselTimmer, setCarouselTimmer] = useState(0);
  const timer = () => setCarouselTimmer((prevTime) => prevTime + 1);
  const initCar = 0;

  useEffect(() => {
    // console.log('change slide');
    const carouselClasses = ['first-slide', 'second-slide'];
    const carouselNode = carousel.current;
    const carouselFirstItem = [...carouselNode.getElementsByClassName('first-slide')];
    const carouselSecondItem = [...carouselNode.getElementsByClassName('second-slide')];
    const carouselItems = [...carouselNode.children];

    if (carouselSecondItem[0] !== undefined) {
      carouselFirstItem[0].classList.remove(carouselClasses[0]);
      carouselSecondItem[0].classList.remove(carouselClasses[1]);
      carouselSecondItem[0].classList.add(carouselClasses[0]);
      if (carouselSecondItem[0].nextSibling) {
        carouselSecondItem[0].nextSibling.classList.add(carouselClasses[1]);
      } else {
        carouselItems[0].classList.add(carouselClasses[1]);
      }
    } else {
      // empty
    }

    setTimeout(timer, 6000);
  }, [carouselTimmer]);

  useEffect(() => {
    function initCarousel() {
      const carouselClasses = ['first-slide', 'second-slide'];
      const carouselNode = carousel.current;
      // console.log(carouselNode);
      const carouselItems = [...carouselNode.children];
      //   console.log(carouselItems);
      carouselItems.forEach((carouselItem, index) => {
        if (index >= carouselClasses.length) {
          return;
        }

        carouselItem.classList.add(carouselClasses[index]);
      });
    }
    initCarousel();
  }, [initCar]);

  return (
    <div>
      <div className="carousel-parent">
        <div className="carousel-mask" ref={carousel}>
          {slidesDataArray &&
            slidesDataArray.map((slideData, index) => <CarouselSlide slideData={slideData} key={`${index}-carousel-slide`} />)
          }
        </div>
      </div>
    </div>
  );
}
