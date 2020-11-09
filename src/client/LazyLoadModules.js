import React, { useEffect, useState } from 'react';

// custom
import { debounce } from './tools/globalFunc';
import { loadModules } from './lazyLoad';
import Loader from './components/Loader';

const LazyLoadModules = (props) => {
  const [loading, setLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [newModules, setNewModules] = useState([]);
  let moreToloadData = true;
  const offset = props.offset;
  const moduleToLoadOnLazy = 4;
  const moduleList = props.moduleList;
  const components = props.components;

  const loadData = function () {
    console.log('I will load module.');
    console.log('and also remove scroll listner to avoid multiple listners.');
    moreToloadData = false;
    setLoading(true);
    setTimeout(() => {
      ['wheel', 'touchmove', 'scroll'].forEach((e) => {
        window.removeEventListener(e, handleScroll);
      }, 500);
      const newModuleData = moduleList.slice(
        parseInt(offset),
        parseInt(offset) + moduleToLoadOnLazy
      );
      if (newModuleData.length) {
        setNewModules(
          moduleList.slice(
            parseInt(offset),
            parseInt(offset) + moduleToLoadOnLazy
          )
        );
        setLoading(false);
        setHasLoaded(true);
      } else {
        console.log('no more data');
        setHasLoaded(false);
      }
    });
  };

  const isBottomOfPage = () => {
    return (
      window.innerHeight + Math.round(window.scrollY) >=
      document.body.offsetHeight
    );
  };

  const handleScroll = (event) => {
    event && event.preventDefault();
    if (isBottomOfPage() && moreToloadData) {
      // if (this.scrollOffset !== this.offset && this.activateScroll) {
      loadData();
      // }
    }
  };

  useEffect(() => {
    console.log('Adding eventlisteners');
    ['wheel', 'touchmove', 'scroll'].forEach((e) => {
      window.addEventListener(e, debounce(handleScroll, 50), {
        passive: false,
      });
    });
  }, []);

  return (
    <>
      {loading && <Loader />}
      {newModules.length !== 0 ? loadModules(newModules, components) : ''}
      {hasLoaded && (
        <LazyLoadModules
          components={components}
          moduleList={moduleList}
          offset={offset + moduleToLoadOnLazy}
        />
      )}
    </>
  );
};

export default LazyLoadModules;
