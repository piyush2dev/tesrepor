// global functions

export const debounce = ( callback, delay ) => {
  let timeout;
  return function() {
      clearTimeout( timeout );
      timeout = setTimeout( callback, delay );
  }
}


export default [debounce]