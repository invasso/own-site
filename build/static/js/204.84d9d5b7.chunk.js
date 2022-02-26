/*! For license information please see 204.84d9d5b7.chunk.js.LICENSE.txt */
(this.webpackJsonplandrick=this.webpackJsonplandrick||[]).push([[204],{43:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&t.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&t.push(c);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},44:function(t,e,n){"use strict";n.r(e),n.d(e,"getScrollbarWidth",(function(){return i})),n.d(e,"setScrollbarWidth",(function(){return c})),n.d(e,"isBodyOverflowing",(function(){return s})),n.d(e,"getOriginalBodyPadding",(function(){return u})),n.d(e,"conditionallyUpdateScrollbar",(function(){return l})),n.d(e,"setGlobalCssModule",(function(){return d})),n.d(e,"mapToCssModules",(function(){return f})),n.d(e,"omit",(function(){return p})),n.d(e,"pick",(function(){return m})),n.d(e,"warnOnce",(function(){return y})),n.d(e,"deprecated",(function(){return g})),n.d(e,"DOMElement",(function(){return v})),n.d(e,"targetPropType",(function(){return j})),n.d(e,"tagPropType",(function(){return O})),n.d(e,"TransitionTimeouts",(function(){return x})),n.d(e,"TransitionPropTypeKeys",(function(){return w})),n.d(e,"TransitionStatuses",(function(){return E})),n.d(e,"keyCodes",(function(){return T})),n.d(e,"PopperPlacements",(function(){return N})),n.d(e,"canUseDOM",(function(){return M})),n.d(e,"isReactRefObj",(function(){return A})),n.d(e,"toNumber",(function(){return C})),n.d(e,"isObject",(function(){return S})),n.d(e,"isFunction",(function(){return k})),n.d(e,"findDOMElements",(function(){return D})),n.d(e,"isArrayOrNodeList",(function(){return G})),n.d(e,"getTarget",(function(){return I})),n.d(e,"defaultToggleEvents",(function(){return $})),n.d(e,"addMultipleEventListeners",(function(){return F})),n.d(e,"focusableElements",(function(){return L}));var r,o=n(7),a=n.n(o);function i(){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}function c(t){document.body.style.paddingRight=t>0?t+"px":null}function s(){return document.body.clientWidth<window.innerWidth}function u(){var t=window.getComputedStyle(document.body,null);return parseInt(t&&t.getPropertyValue("padding-right")||0,10)}function l(){var t=i(),e=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=e?parseInt(e.style.paddingRight||0,10):0;s()&&c(n+t)}function d(t){r=t}function f(t,e){return void 0===t&&(t=""),void 0===e&&(e=r),e?t.split(" ").map((function(t){return e[t]||t})).join(" "):t}function p(t,e){var n={};return Object.keys(t).forEach((function(r){-1===e.indexOf(r)&&(n[r]=t[r])})),n}function m(t,e){for(var n,r=Array.isArray(e)?e:[e],o=r.length,a={};o>0;)a[n=r[o-=1]]=t[n];return a}var b={};function y(t){b[t]||("undefined"!==typeof console&&console.error(t),b[t]=!0)}function g(t,e){return function(n,r,o){null!==n[r]&&"undefined"!==typeof n[r]&&y('"'+r+'" property of "'+o+'" has been deprecated.\n'+e);for(var a=arguments.length,i=new Array(a>3?a-3:0),c=3;c<a;c++)i[c-3]=arguments[c];return t.apply(void 0,[n,r,o].concat(i))}}var h="object"===typeof window&&window.Element||function(){};function v(t,e,n){if(!(t[e]instanceof h))return new Error("Invalid prop `"+e+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var j=a.a.oneOfType([a.a.string,a.a.func,v,a.a.shape({current:a.a.any})]),O=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),x={Fade:150,Collapse:350,Modal:300,Carousel:600},w=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],E={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},T={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},N=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],M=!("undefined"===typeof window||!window.document||!window.document.createElement);function A(t){return!(!t||"object"!==typeof t)&&"current"in t}function P(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function C(t){var e=typeof t;if("number"===e)return t;if("symbol"===e||"object"===e&&"[object Symbol]"===P(t))return NaN;if(S(t)){var n="function"===typeof t.valueOf?t.valueOf():t;t=S(n)?""+n:n}if("string"!==e)return 0===t?t:+t;t=t.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(t);return r||/^0o[0-7]+$/i.test(t)?parseInt(t.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(t)?NaN:+t}function S(t){var e=typeof t;return null!=t&&("object"===e||"function"===e)}function k(t){if(!S(t))return!1;var e=P(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object Proxy]"===e}function D(t){if(A(t))return t.current;if(k(t))return t();if("string"===typeof t&&M){var e=document.querySelectorAll(t);if(e.length||(e=document.querySelectorAll("#"+t)),!e.length)throw new Error("The target '"+t+"' could not be identified in the dom, tip: check spelling");return e}return t}function G(t){return null!==t&&(Array.isArray(t)||M&&"number"===typeof t.length)}function I(t,e){var n=D(t);return e?G(n)?n:null===n?[]:[n]:G(n)?n[0]:n}var $=["touchstart","click"];function F(t,e,n,r){var o=t;G(o)||(o=[o]);var a=n;if("string"===typeof a&&(a=a.split(/\s+/)),!G(o)||"function"!==typeof e||!Array.isArray(a))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(a,(function(t){Array.prototype.forEach.call(o,(function(n){n.addEventListener(t,e,r)}))})),function(){Array.prototype.forEach.call(a,(function(t){Array.prototype.forEach.call(o,(function(n){n.removeEventListener(t,e,r)}))}))}}var L=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},73:function(t,e,n){"use strict";var r=n(3),o=n(8),a=n(0),i=n.n(a),c=n(7),s=n.n(c),u=n(43),l=n.n(u),d=n(44),f={tag:d.tagPropType,fluid:s.a.oneOfType([s.a.bool,s.a.string]),className:s.a.string,cssModule:s.a.object},p=function(t){var e=t.className,n=t.cssModule,a=t.fluid,c=t.tag,s=Object(o.a)(t,["className","cssModule","fluid","tag"]),u="container";!0===a?u="container-fluid":a&&(u="container-"+a);var f=Object(d.mapToCssModules)(l()(e,u),n);return i.a.createElement(c,Object(r.a)({},s,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},e.a=p},75:function(t,e,n){"use strict";var r=n(3),o=n(8),a=n(0),i=n.n(a),c=n(7),s=n.n(c),u=n(43),l=n.n(u),d=n(44),f=s.a.oneOfType([s.a.number,s.a.string]),p={tag:d.tagPropType,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},m={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(t){var e=t.className,n=t.cssModule,a=t.noGutters,c=t.tag,s=t.form,u=t.widths,f=Object(o.a)(t,["className","cssModule","noGutters","tag","form","widths"]),p=[];u.forEach((function(e,n){var r=t[e];if(delete f[e],r){var o=!n;p.push(o?"row-cols-"+r:"row-cols-"+e+"-"+r)}}));var m=Object(d.mapToCssModules)(l()(e,a?"no-gutters":null,s?"form-row":"row",p),n);return i.a.createElement(c,Object(r.a)({},f,{className:m}))};b.propTypes=p,b.defaultProps=m,e.a=b},76:function(t,e,n){"use strict";var r=n(3),o=n(8),a=n(0),i=n.n(a),c=n(7),s=n.n(c),u=n(43),l=n.n(u),d=n(44),f=s.a.oneOfType([s.a.number,s.a.string]),p=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:f,offset:f})]),m={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:s.a.string,cssModule:s.a.object,widths:s.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(t,e,n){return!0===n||""===n?t?"col":"col-"+e:"auto"===n?t?"col-auto":"col-"+e+"-auto":t?"col-"+n:"col-"+e+"-"+n},g=function(t){var e=t.className,n=t.cssModule,a=t.widths,c=t.tag,s=Object(o.a)(t,["className","cssModule","widths","tag"]),u=[];a.forEach((function(e,r){var o=t[e];if(delete s[e],o||""===o){var a=!r;if(Object(d.isObject)(o)){var i,c=a?"-":"-"+e+"-",f=y(a,e,o.size);u.push(Object(d.mapToCssModules)(l()(((i={})[f]=o.size||""===o.size,i["order"+c+o.order]=o.order||0===o.order,i["offset"+c+o.offset]=o.offset||0===o.offset,i)),n))}else{var p=y(a,e,o);u.push(p)}}})),u.length||u.push("col");var f=Object(d.mapToCssModules)(l()(e,u),n);return i.a.createElement(c,Object(r.a)({},s,{className:f}))};g.propTypes=m,g.defaultProps=b,e.a=g},786:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var r=n(9),o=n(10),a=n(12),i=n(11),c=n(0),s=n.n(c),u=n(13),l=n(73),d=n(75),f=n(76),p=n(1),m=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(s.a.Fragment,{children:Object(p.jsx)("section",{className:"bg-home bg-light d-flex align-items-center",children:Object(p.jsx)(l.a,{children:Object(p.jsx)(d.a,{className:"justify-content-center",children:Object(p.jsx)(f.a,{xs:12,children:Object(p.jsxs)("div",{className:"text-center",children:[Object(p.jsx)("div",{className:"icon d-flex align-items-center justify-content-center bg-soft-primary rounded-circle mx-auto",style:{height:"90px",width:"90px"},children:Object(p.jsx)("i",{className:"uil uil-thumbs-up align-middle h1 mb-0"})}),Object(p.jsx)("h1",{className:"my-4 fw-bold",children:"Thank You"}),Object(p.jsx)("p",{className:"text-muted para-desc mx-auto",children:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."}),Object(p.jsx)(u.b,{to:"index",className:"btn btn-soft-primary mt-3",children:"Go To Home"})]})})})})})})}}]),n}(c.Component)}}]);
//# sourceMappingURL=204.84d9d5b7.chunk.js.map