(window.webpackJsonp=window.webpackJsonp||[]).push([[1,6,19,20],{367:function(e,t,a){},372:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));var r=a(10),n=a.n(r),i=(a(367),a(63));function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function l(e){var t=e.gist,a=e.feturedText,s=e.variant,l=void 0===s?"default":s,c={default:"_9x16","new-release":"_32x9",series:"_16x9","original-series":"_16x9"},u=t&&t.imageGist[c[l]],m=u?"".concat(u,"?impolicy=resize&w=").concat(20,"&h=").concat(20/{_16x9:1.77,_9x16:.56,_1x1:1,_32x9:3.55}[c[l]]):"",d=o(Object(r.useState)(m),2),f=d[0],p=d[1],b=o(Object(r.useState)(),2),g=b[0],v=b[1];return Object(r.useEffect)((function(){var e,t=!1;return g&&f===m&&(IntersectionObserver?(e=new IntersectionObserver((function(e){e.forEach((function(e){var a,r;!t&&(e.intersectionRatio>0||e.isIntersecting)&&(a=u,(r=new Image).src=a,r.onload=function(){return p(a)})}))}),{threshold:.01,rootMargin:"20%"})).observe(g):p(u)),function(){t=!0,e&&e.unobserve&&e.unobserve(g)}})),n.a.createElement("div",{className:"big-poster-container ".concat("big-poster-".concat(l))},n.a.createElement("div",{className:"big-poster-wrapper"},n.a.createElement("div",{className:"big-poster-parent"},n.a.createElement("div",{className:"big-poster-img-container",ref:v,style:{backgroundImage:"url(".concat(f,"), linear-gradient(#212121, #212121)")}}),n.a.createElement("div",{className:"big-poster-info-container"},a&&n.a.createElement("div",{className:"big-poster-featured-text primary-gradient"},a),t&&t.title&&n.a.createElement("div",{className:"big-poster-title"},t.title),n.a.createElement("div",{className:"big -poster-feature"},n.a.createElement("ul",{className:"big-poster-feature-list"},t&&n.a.createElement("li",null,t&&Math.round(t.runtime/60)," mins"),t&&n.a.createElement("li",null,t.year),t&&t.primaryCategory&&t.primaryCategory.title&&n.a.createElement("li",null,t.primaryCategory.title))),n.a.createElement("div",{className:"big-poster-additional-info"},n.a.createElement("div",{className:"big-poster-buttons"},n.a.createElement("div",{className:"big-poster-play-button"},n.a.createElement("div",{className:"big-poster-play-icon"},n.a.createElement(i.PlayIcon,null)),n.a.createElement("div",{className:"big-poster-play-text"},"Play Now")),n.a.createElement("div",{className:"big-poster-info-button"},n.a.createElement("div",{className:"big-poster-info-icon"},n.a.createElement(i.InfoIcon,null))),n.a.createElement("div",{className:"big-poster-plus-button"},n.a.createElement("div",{className:"big-poster-plus-icon"},n.a.createElement(i.PlusIcon,null)))),n.a.createElement("div",{className:"big-poster-description"},"A love story amdist agitation and crime... Find out about the fight to survive, during the Bangladesh freedom struggle."))))))}},68:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var r=a(10),n=a.n(r),i=(a(372),a(64));function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function s(e){var t=e.moduleData,a=e.variant,r=void 0===a?"default":a;if(!t)return null;var s=t.title,l=t.subtitle,c=t.contentData;return n.a.createElement("div",{className:"big-posters-parent"},n.a.createElement("div",{className:"big-posters-heading"},s),l&&n.a.createElement("div",{className:"big-posters-subheading"},l),n.a.createElement("div",{className:"big-posters"},c.map((function(e,t){if(!("new-release"===r&&t>0))return n.a.createElement(i.default,o({key:(new Date).getTime()+t},e,{variant:r}))}))))}}}]);
//# sourceMappingURL=1.js.map