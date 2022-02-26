/*! For license information please see 90.d2e5f6e7.chunk.js.LICENSE.txt */
(this.webpackJsonplandrick=this.webpackJsonplandrick||[]).push([[90],{103:function(e,t,n){"use strict";var a=n(3),i=n(8),r=n(0),o=n.n(r),s=n(7),c=n.n(s),l=n(43),d=n.n(l),u=n(44),f={tag:u.tagPropType,listTag:u.tagPropType,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},m=function(e){var t=e.className,n=e.listClassName,r=e.cssModule,s=e.children,c=e.tag,l=e.listTag,f=e["aria-label"],m=Object(i.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(u.mapToCssModules)(d()(t),r),b=Object(u.mapToCssModules)(d()("breadcrumb",n),r);return o.a.createElement(c,Object(a.a)({},m,{className:p,"aria-label":f}),o.a.createElement(l,{className:b},s))};m.propTypes=f,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=m},104:function(e,t,n){"use strict";var a=n(3),i=n(8),r=n(0),o=n.n(r),s=n(7),c=n.n(s),l=n(43),d=n.n(l),u=n(44),f={tag:u.tagPropType,active:c.a.bool,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,n=e.cssModule,r=e.active,s=e.tag,c=Object(i.a)(e,["className","cssModule","active","tag"]),l=Object(u.mapToCssModules)(d()(t,!!r&&"active","breadcrumb-item"),n);return o.a.createElement(s,Object(a.a)({},c,{className:l,"aria-current":r?"page":void 0}))};m.propTypes=f,m.defaultProps={tag:"li"},t.a=m},43:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var o=i.apply(null,a);o&&e.push(o)}}else if("object"===r)if(a.toString===Object.prototype.toString)for(var s in a)n.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},44:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return o})),n.d(t,"setScrollbarWidth",(function(){return s})),n.d(t,"isBodyOverflowing",(function(){return c})),n.d(t,"getOriginalBodyPadding",(function(){return l})),n.d(t,"conditionallyUpdateScrollbar",(function(){return d})),n.d(t,"setGlobalCssModule",(function(){return u})),n.d(t,"mapToCssModules",(function(){return f})),n.d(t,"omit",(function(){return m})),n.d(t,"pick",(function(){return p})),n.d(t,"warnOnce",(function(){return g})),n.d(t,"deprecated",(function(){return j})),n.d(t,"DOMElement",(function(){return v})),n.d(t,"targetPropType",(function(){return y})),n.d(t,"tagPropType",(function(){return O})),n.d(t,"TransitionTimeouts",(function(){return x})),n.d(t,"TransitionPropTypeKeys",(function(){return N})),n.d(t,"TransitionStatuses",(function(){return k})),n.d(t,"keyCodes",(function(){return w})),n.d(t,"PopperPlacements",(function(){return T})),n.d(t,"canUseDOM",(function(){return E})),n.d(t,"isReactRefObj",(function(){return M})),n.d(t,"toNumber",(function(){return P})),n.d(t,"isObject",(function(){return I})),n.d(t,"isFunction",(function(){return A})),n.d(t,"findDOMElements",(function(){return D})),n.d(t,"isArrayOrNodeList",(function(){return R})),n.d(t,"getTarget",(function(){return S})),n.d(t,"defaultToggleEvents",(function(){return W})),n.d(t,"addMultipleEventListeners",(function(){return L})),n.d(t,"focusableElements",(function(){return $}));var a,i=n(7),r=n.n(i);function o(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function s(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function l(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function d(){var e=o(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;c()&&s(n+e)}function u(e){a=e}function f(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function m(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function p(e,t){for(var n,a=Array.isArray(t)?t:[t],i=a.length,r={};i>0;)r[n=a[i-=1]]=e[n];return r}var b={};function g(e){b[e]||("undefined"!==typeof console&&console.error(e),b[e]=!0)}function j(e,t){return function(n,a,i){null!==n[a]&&"undefined"!==typeof n[a]&&g('"'+a+'" property of "'+i+'" has been deprecated.\n'+t);for(var r=arguments.length,o=new Array(r>3?r-3:0),s=3;s<r;s++)o[s-3]=arguments[s];return e.apply(void 0,[n,a,i].concat(o))}}var h="object"===typeof window&&window.Element||function(){};function v(e,t,n){if(!(e[t]instanceof h))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var y=r.a.oneOfType([r.a.string,r.a.func,v,r.a.shape({current:r.a.any})]),O=r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func}),r.a.arrayOf(r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func})]))]),x={Fade:150,Collapse:350,Modal:300,Carousel:600},N=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],k={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},w={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},T=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],E=!("undefined"===typeof window||!window.document||!window.document.createElement);function M(e){return!(!e||"object"!==typeof e)&&"current"in e}function C(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function P(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===C(e))return NaN;if(I(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=I(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var a=/^0b[01]+$/i.test(e);return a||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),a?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function I(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function A(e){if(!I(e))return!1;var t=C(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function D(e){if(M(e))return e.current;if(A(e))return e();if("string"===typeof e&&E){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function R(e){return null!==e&&(Array.isArray(e)||E&&"number"===typeof e.length)}function S(e,t){var n=D(e);return t?R(n)?n:null===n?[]:[n]:R(n)?n[0]:n}var W=["touchstart","click"];function L(e,t,n,a){var i=e;R(i)||(i=[i]);var r=n;if("string"===typeof r&&(r=r.split(/\s+/)),!R(i)||"function"!==typeof t||!Array.isArray(r))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(r,(function(e){Array.prototype.forEach.call(i,(function(n){n.addEventListener(e,t,a)}))})),function(){Array.prototype.forEach.call(r,(function(e){Array.prototype.forEach.call(i,(function(n){n.removeEventListener(e,t,a)}))}))}}var $=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},506:function(e,t,n){"use strict";t.a=n.p+"static/media/07.e3f0e9f9.jpg"},507:function(e,t,n){"use strict";t.a=n.p+"static/media/08.28396265.jpg"},53:function(e,t,n){"use strict";t.a=n.p+"static/media/01.6ac85de7.jpg"},54:function(e,t,n){"use strict";t.a=n.p+"static/media/05.a7ab2c82.jpg"},55:function(e,t,n){"use strict";t.a=n.p+"static/media/02.7df14e12.jpg"},59:function(e,t,n){"use strict";t.a=n.p+"static/media/03.ba5f8794.jpg"},60:function(e,t,n){"use strict";t.a=n.p+"static/media/04.35463172.jpg"},62:function(e,t,n){"use strict";var a=n(3),i=n(8),r=n(0),o=n.n(r),s=n(7),c=n.n(s),l=n(43),d=n.n(l),u=n(44),f={tag:u.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var t=e.className,n=e.cssModule,r=e.color,s=e.body,c=e.inverse,l=e.outline,f=e.tag,m=e.innerRef,p=Object(i.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(u.mapToCssModules)(d()(t,"card",!!c&&"text-white",!!s&&"card-body",!!r&&(l?"border":"bg")+"-"+r),n);return o.a.createElement(f,Object(a.a)({},p,{className:b,ref:m}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},67:function(e,t,n){"use strict";var a=n(3),i=n(8),r=n(0),o=n.n(r),s=n(7),c=n.n(s),l=n(43),d=n.n(l),u=n(44),f={tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var t=e.className,n=e.cssModule,r=e.innerRef,s=e.tag,c=Object(i.a)(e,["className","cssModule","innerRef","tag"]),l=Object(u.mapToCssModules)(d()(t,"card-body"),n);return o.a.createElement(s,Object(a.a)({},c,{className:l,ref:r}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},72:function(e,t,n){"use strict";t.a=n.p+"static/media/06.7365b7fa.jpg"},73:function(e,t,n){"use strict";var a=n(3),i=n(8),r=n(0),o=n.n(r),s=n(7),c=n.n(s),l=n(43),d=n.n(l),u=n(44),f={tag:u.tagPropType,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,n=e.cssModule,r=e.fluid,s=e.tag,c=Object(i.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===r?l="container-fluid":r&&(l="container-"+r);var f=Object(u.mapToCssModules)(d()(t,l),n);return o.a.createElement(s,Object(a.a)({},c,{className:f}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},75:function(e,t,n){"use strict";var a=n(3),i=n(8),r=n(0),o=n.n(r),s=n(7),c=n.n(s),l=n(43),d=n.n(l),u=n(44),f=c.a.oneOfType([c.a.number,c.a.string]),m={tag:u.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},p={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,n=e.cssModule,r=e.noGutters,s=e.tag,c=e.form,l=e.widths,f=Object(i.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];l.forEach((function(t,n){var a=e[t];if(delete f[t],a){var i=!n;m.push(i?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var p=Object(u.mapToCssModules)(d()(t,r?"no-gutters":null,c?"form-row":"row",m),n);return o.a.createElement(s,Object(a.a)({},f,{className:p}))};b.propTypes=m,b.defaultProps=p,t.a=b},76:function(e,t,n){"use strict";var a=n(3),i=n(8),r=n(0),o=n.n(r),s=n(7),c=n.n(s),l=n(43),d=n.n(l),u=n(44),f=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),p={tag:u.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},j=function(e){var t=e.className,n=e.cssModule,r=e.widths,s=e.tag,c=Object(i.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(t,a){var i=e[t];if(delete c[t],i||""===i){var r=!a;if(Object(u.isObject)(i)){var o,s=r?"-":"-"+t+"-",f=g(r,t,i.size);l.push(Object(u.mapToCssModules)(d()(((o={})[f]=i.size||""===i.size,o["order"+s+i.order]=i.order||0===i.order,o["offset"+s+i.offset]=i.offset||0===i.offset,o)),n))}else{var m=g(r,t,i);l.push(m)}}})),l.length||l.push("col");var f=Object(u.mapToCssModules)(d()(t,l),n);return o.a.createElement(s,Object(a.a)({},c,{className:f}))};j.propTypes=p,j.defaultProps=b,t.a=j},801:function(e,t,n){"use strict";n.r(t);var a=n(9),i=n(10),r=n(12),o=n(11),s=n(0),c=n.n(s),l=n(73),d=n(75),u=n(76),f=n(62),m=n(67),p=n(13),b=n(83),g=n(18),j=n.n(g),h=n(53),v=n(55),y=n(59),O=n(60),x=n(54),N=n(72),k=n(506),w=n(507),T=n(1),E=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},i.state={pathItems:[{id:1,name:"Home",link:"/index"},{id:2,name:"Pages",link:"#"},{id:3,name:"Team"}],candidates:[{id:1,image:h.a,name:"Ronny Jofra",designation:"Web Developer",salary:"2300",link:"",socialIds:[{icon:"facebook",link:"#"},{icon:"instagram",link:"#"},{icon:"twitter",link:"#"},{icon:"linkedin",link:"#"}]},{id:2,image:v.a,name:"Micheal Carlo",designation:"Web Designer",salary:"1950",link:"",socialIds:[{icon:"facebook",link:"#"},{icon:"instagram",link:"#"},{icon:"twitter",link:"#"},{icon:"linkedin",link:"#"}]},{id:3,image:y.a,name:"Aliana Rosy",designation:"IOS Developer",salary:"2540",link:"",socialIds:[{icon:"facebook",link:"#"},{icon:"instagram",link:"#"},{icon:"twitter",link:"#"},{icon:"linkedin",link:"#"}]},{id:4,image:O.a,name:"Sofia Razaq",designation:"Php Developer",salary:"2190",link:"",socialIds:[{icon:"facebook",link:"#"},{icon:"instagram",link:"#"},{icon:"twitter",link:"#"},{icon:"linkedin",link:"#"}]},{id:5,image:x.a,name:"Calvin Carlo",designation:"C.E.O",salary:"2190",link:"",socialIds:[{icon:"facebook",link:"#"},{icon:"instagram",link:"#"},{icon:"twitter",link:"#"},{icon:"linkedin",link:"#"}]},{id:6,image:N.a,name:"Juhi Chawla",designation:"Director",salary:"2190",link:"",socialIds:[{icon:"facebook",link:"#"},{icon:"instagram",link:"#"},{icon:"twitter",link:"#"},{icon:"linkedin",link:"#"}]},{id:7,image:k.a,name:"Arlo Walker",designation:"Manager",salary:"2190",link:"",socialIds:[{icon:"facebook",link:"#"},{icon:"instagram",link:"#"},{icon:"twitter",link:"#"},{icon:"linkedin",link:"#"}]},{id:8,image:w.a,name:"Randeep Huda",designation:"Developer",salary:"2190",link:"",socialIds:[{icon:"facebook",link:"#"},{icon:"instagram",link:"#"},{icon:"twitter",link:"#"},{icon:"linkedin",link:"#"}]}],candidates2:[{id:1,image:h.a,name:"Ronny Jofra",designation:"Web Developer"},{id:2,image:v.a,name:"Micheal Carlo",designation:"Web Designer"},{id:3,image:y.a,name:"Aliana Rosy",designation:"IOS Developer"},{id:4,image:O.a,name:"Sofia Razaq",designation:"Php Developer"},{id:5,image:x.a,name:"Calvin Carlo",designation:"C.E.O"},{id:6,image:N.a,name:"Juhi Chawla",designation:"Director"}]},i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(T.jsxs)(c.a.Fragment,{children:[Object(T.jsx)(b.a,{title:"Team Members",pathItems:this.state.pathItems}),Object(T.jsx)("div",{className:"position-relative",children:Object(T.jsx)("div",{className:"shape overflow-hidden text-white",children:Object(T.jsx)("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(T.jsx)("path",{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"})})})}),Object(T.jsx)("section",{className:"section",children:Object(T.jsxs)(l.a,{children:[Object(T.jsx)(d.a,{children:Object(T.jsx)(u.a,{xs:12,className:"text-center",children:Object(T.jsx)("div",{className:"section-title mb-4 pb-2",children:Object(T.jsx)("h4",{className:"title",children:"Team #1"})})})}),Object(T.jsx)(d.a,{children:this.state.candidates.map((function(e,t){return Object(T.jsx)(u.a,{lg:"3",md:"6",className:"mt-4 pt-2",children:Object(T.jsxs)(f.a,{className:"team text-center border-0",children:[Object(T.jsxs)("div",{className:"position-relative",children:[Object(T.jsx)("img",{src:e.image,className:"img-fluid avatar avatar-ex-large rounded-circle shadow",alt:""}),Object(T.jsx)("ul",{className:"list-unstyled social-icon team-icon mb-0 mt-4",children:e.socialIds.map((function(e,t){return Object(T.jsx)("li",{className:"list-inline-item",children:Object(T.jsx)(p.b,{to:e.link,className:"rounded",children:Object(T.jsx)("i",{children:Object(T.jsx)(j.a,{icon:e.icon,className:"fea icon-sm fea-social"})})})},t)}))})]}),Object(T.jsxs)(m.a,{className:"py-3 px-0 content",children:[Object(T.jsx)("h5",{className:"mb-0",children:Object(T.jsx)(p.b,{to:e.link,className:"name text-dark",children:e.name})}),Object(T.jsx)("small",{className:"designation text-muted",children:e.designation})]})]})},t)}))}),Object(T.jsx)(d.a,{children:Object(T.jsx)(u.a,{xs:12,className:"text-center",children:Object(T.jsx)("div",{className:"section-title mb-4 pb-2",children:Object(T.jsx)("h4",{className:"title",children:"Team #2"})})})}),Object(T.jsx)(d.a,{children:this.state.candidates2.map((function(e,t){return Object(T.jsx)(u.a,{lg:4,md:6,xs:12,className:"mt-4 pt-2",children:Object(T.jsxs)("div",{className:"d-flex align-items-center",children:[Object(T.jsx)("img",{src:e.image,className:"avatar avatar-medium rounded-circle img-thumbnail",alt:"Landrick"}),Object(T.jsxs)("div",{className:"content ms-3",children:[Object(T.jsx)("h5",{className:"mb-0",children:Object(T.jsx)(p.b,{to:"#",className:"text-dark",children:e.name})}),Object(T.jsx)("small",{className:"position text-muted",children:e.designation})]})]})},t)}))})]})})]})}}]),n}(s.Component);t.default=E},83:function(e,t,n){"use strict";var a=n(9),i=n(10),r=n(12),o=n(11),s=n(0),c=n.n(s),l=n(13),d=n(73),u=n(75),f=n(76),m=n(103),p=n(104),b=n(1),g=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.pathItems.length;return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)("section",{className:"bg-half bg-light d-table w-100",children:Object(b.jsx)(d.a,{children:Object(b.jsx)(u.a,{className:"justify-content-center",children:Object(b.jsx)(f.a,{lg:"12",className:"text-center",children:Object(b.jsxs)("div",{className:"page-next-level",children:[this.props.title?Object(b.jsxs)("h4",{className:"title",children:[" ",this.props.title]}):null,this.props.children?this.props.children:null,Object(b.jsx)("div",{className:"page-next",children:Object(b.jsx)("nav",{className:"d-inline-block",children:Object(b.jsx)(m.a,{"aria-label":"breadcrumb",listClassName:"bg-white rounded shadow mb-0",children:this.props.pathItems.map((function(t,n){return t.id!==e?Object(b.jsx)(p.a,{children:Object(b.jsx)(l.b,{to:t.link,className:"text-uppercase fw-bold text-dark me-1",children:t.name})},n):Object(b.jsx)(p.a,{active:!0,"aria-current":"page",children:t.name},n)}))})})})]})})})})})})}}]),n}(s.Component);t.a=g}}]);
//# sourceMappingURL=90.d2e5f6e7.chunk.js.map