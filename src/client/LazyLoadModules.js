import React, {useEffect}  from 'react';

// custom
import {debounce} from 'src/tools/globalFunc';


const LazyLoadModules = () => {

  isBottomOfPage = () =>  {
      return (window.innerHeight + window.scrollY) >= document.body.offsetHeight
  }

  handleScroll = event => {
    event && event.preventDefault();
    if (isBottomOfPage()) {
      if(this.scrollOffset !== this.offset && this.activateScroll) {
        this.loadData();
      }		
    }
  };
  useEffect(() => {
    ["wheel", "touchmove", "scroll"].forEach(e => {
      window.addEventListener(e, debounce(handleScroll, 50), {
        passive: false
      });
    })
    // window.addEventListener("wheel", debounce(this.handleScroll, 50), {
		// 	passive: false
		// });
		// window.addEventListener("touchmove", debounce(this.handleScroll, 50), {
		// 	passive: false
		// });
		// window.addEventListener("scroll", debounce(this.handleScroll, 50), {
		// 	passive: false
		// });		

  }, [])




}

export default LazyLoadModules;