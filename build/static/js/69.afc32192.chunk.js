/*! For license information please see 69.afc32192.chunk.js.LICENSE.txt */
(this.webpackJsonplandrick=this.webpackJsonplandrick||[]).push([[69],{100:function(e,t,a){"use strict";t.a=a.p+"static/media/shopify.a3ea7712.svg"},107:function(e,t,a){"use strict";t.a=a.p+"static/media/spotify.8f600330.svg"},121:function(e,t,a){"use strict";var s=a(9),i=a(10),n=a(14),c=a(12),r=a(11),l=a(0),o=a.n(l),d=a(75),m=a(76),u=a(110),b=a.n(u),j=a(1),h=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).updateWindowSize=function(){window.outerWidth>=1230||window.outerWidth>=970&&window.outerWidth<1230?i.setState({itemCount:3,cols:4}):window.outerWidth<=970&&i.setState({itemCount:1,cols:12})},i.state={cols:4,step1:!0,step2:!1},i.updateWindowSize.bind(Object(n.a)(i)),i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWindowSize),this.updateWindowSize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowSize)}},{key:"render",value:function(){var e=this;return Object(j.jsx)(o.a.Fragment,{children:Object(j.jsx)(d.a,{className:"justify-content-center",children:Object(j.jsxs)(m.a,{lg:"12",className:"mt-4",children:[Object(j.jsx)("div",{id:"customer-testi",className:"tiny-three-item",children:Object(j.jsx)("div",{className:"tiny-slide",children:Object(j.jsx)(d.a,{children:!0===this.state.step1?this.props.reviews.map((function(t,a){return a>=0&&a<=2?Object(j.jsx)(m.a,{md:e.state.cols,className:"mb-1",children:Object(j.jsxs)("div",{className:"d-flex client-testi",name:"clientsreview",children:[Object(j.jsx)("img",{src:t.img,style:{height:65,width:65},className:"avatar avatar-small client-image rounded shadow",alt:""}),Object(j.jsxs)("div",{className:"flex-1 content p-3 shadow rounded bg-white position-relative",children:[Object(j.jsx)(b.a,{items:3,rating:t.rating,starRatedColor:"#F17425",numberOfStars:5,name:"rating",starDimension:"15px",starSpacing:"3px"}),Object(j.jsxs)("p",{className:"text-muted mt-2",children:['" ',t.desc,' "']}),Object(j.jsxs)("h6",{className:"text-primary",children:["- ",t.name," ",Object(j.jsx)("small",{className:"text-muted",children:t.post})]})]})]})},a):null})):this.props.reviews.map((function(t,a){return a>=3&&a<=5?Object(j.jsx)(m.a,{md:e.state.cols,className:"mb-1",children:Object(j.jsxs)("div",{className:"d-flex client-testi",name:"clientsreview",children:[Object(j.jsx)("img",{src:t.img,style:{height:65,width:65},className:"avatar avatar-small client-image rounded shadow",alt:""}),Object(j.jsxs)("div",{className:"flex-1 content p-3 shadow rounded bg-white position-relative",children:[Object(j.jsx)(b.a,{items:3,rating:t.rating,starRatedColor:"#F17425",numberOfStars:5,name:"rating",starDimension:"15px",starSpacing:"3px",className:"mb-0"}),Object(j.jsxs)("p",{className:"text-muted mt-2",children:['" ',t.desc,' "']}),Object(j.jsxs)("h6",{className:"text-primary",children:["- ",t.name," ",Object(j.jsx)("small",{className:"text-muted",children:t.post})]})]})]})},a):null}))})})}),Object(j.jsxs)("div",{className:"tns-nav",children:[Object(j.jsx)("button",{type:"button",onClick:function(){e.setState({step1:!0,step2:!1})},className:this.state.step1?"tns-nav-active":"tns-nav-inactive"}),Object(j.jsx)("button",{type:"button",onClick:function(){e.setState({step1:!1,step2:!0})},className:this.state.step2?"tns-nav-active":"tns-nav-inactive"})]})]})})})}}]),a}(l.Component);t.a=h},162:function(e,t,a){"use strict";var s=a(3),i=a(8),n=a(0),c=a.n(n),r=a(7),l=a.n(r),o=a(43),d=a.n(o),m=a(44),u={tabs:l.a.bool,pills:l.a.bool,vertical:l.a.oneOfType([l.a.bool,l.a.string]),horizontal:l.a.string,justified:l.a.bool,fill:l.a.bool,navbar:l.a.bool,card:l.a.bool,tag:m.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,n=e.tabs,r=e.pills,l=e.vertical,o=e.horizontal,u=e.justified,b=e.fill,j=e.navbar,h=e.card,p=e.tag,x=Object(i.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),f=Object(m.mapToCssModules)(d()(t,j?"navbar-nav":"nav",!!o&&"justify-content-"+o,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(l),{"nav-tabs":n,"card-header-tabs":h&&n,"nav-pills":r,"card-header-pills":h&&r,"nav-justified":u,"nav-fill":b}),a);return c.a.createElement(p,Object(s.a)({},x,{className:f}))};b.propTypes=u,b.defaultProps={tag:"ul",vertical:!1},t.a=b},43:function(e,t,a){var s;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var n=typeof s;if("string"===n||"number"===n)e.push(s);else if(Array.isArray(s)){if(s.length){var c=i.apply(null,s);c&&e.push(c)}}else if("object"===n)if(s.toString===Object.prototype.toString)for(var r in s)a.call(s,r)&&s[r]&&e.push(r);else e.push(s.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(s=function(){return i}.apply(t,[]))||(e.exports=s)}()},44:function(e,t,a){"use strict";a.r(t),a.d(t,"getScrollbarWidth",(function(){return c})),a.d(t,"setScrollbarWidth",(function(){return r})),a.d(t,"isBodyOverflowing",(function(){return l})),a.d(t,"getOriginalBodyPadding",(function(){return o})),a.d(t,"conditionallyUpdateScrollbar",(function(){return d})),a.d(t,"setGlobalCssModule",(function(){return m})),a.d(t,"mapToCssModules",(function(){return u})),a.d(t,"omit",(function(){return b})),a.d(t,"pick",(function(){return j})),a.d(t,"warnOnce",(function(){return p})),a.d(t,"deprecated",(function(){return x})),a.d(t,"DOMElement",(function(){return g})),a.d(t,"targetPropType",(function(){return O})),a.d(t,"tagPropType",(function(){return v})),a.d(t,"TransitionTimeouts",(function(){return y})),a.d(t,"TransitionPropTypeKeys",(function(){return N})),a.d(t,"TransitionStatuses",(function(){return w})),a.d(t,"keyCodes",(function(){return k})),a.d(t,"PopperPlacements",(function(){return T})),a.d(t,"canUseDOM",(function(){return E})),a.d(t,"isReactRefObj",(function(){return C})),a.d(t,"toNumber",(function(){return M})),a.d(t,"isObject",(function(){return I})),a.d(t,"isFunction",(function(){return L})),a.d(t,"findDOMElements",(function(){return D})),a.d(t,"isArrayOrNodeList",(function(){return z})),a.d(t,"getTarget",(function(){return A})),a.d(t,"defaultToggleEvents",(function(){return P})),a.d(t,"addMultipleEventListeners",(function(){return W})),a.d(t,"focusableElements",(function(){return F}));var s,i=a(7),n=a.n(i);function c(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function r(e){document.body.style.paddingRight=e>0?e+"px":null}function l(){return document.body.clientWidth<window.innerWidth}function o(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function d(){var e=c(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],a=t?parseInt(t.style.paddingRight||0,10):0;l()&&r(a+e)}function m(e){s=e}function u(e,t){return void 0===e&&(e=""),void 0===t&&(t=s),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function b(e,t){var a={};return Object.keys(e).forEach((function(s){-1===t.indexOf(s)&&(a[s]=e[s])})),a}function j(e,t){for(var a,s=Array.isArray(t)?t:[t],i=s.length,n={};i>0;)n[a=s[i-=1]]=e[a];return n}var h={};function p(e){h[e]||("undefined"!==typeof console&&console.error(e),h[e]=!0)}function x(e,t){return function(a,s,i){null!==a[s]&&"undefined"!==typeof a[s]&&p('"'+s+'" property of "'+i+'" has been deprecated.\n'+t);for(var n=arguments.length,c=new Array(n>3?n-3:0),r=3;r<n;r++)c[r-3]=arguments[r];return e.apply(void 0,[a,s,i].concat(c))}}var f="object"===typeof window&&window.Element||function(){};function g(e,t,a){if(!(e[t]instanceof f))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")}var O=n.a.oneOfType([n.a.string,n.a.func,g,n.a.shape({current:n.a.any})]),v=n.a.oneOfType([n.a.func,n.a.string,n.a.shape({$$typeof:n.a.symbol,render:n.a.func}),n.a.arrayOf(n.a.oneOfType([n.a.func,n.a.string,n.a.shape({$$typeof:n.a.symbol,render:n.a.func})]))]),y={Fade:150,Collapse:350,Modal:300,Carousel:600},N=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],w={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},k={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},T=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],E=!("undefined"===typeof window||!window.document||!window.document.createElement);function C(e){return!(!e||"object"!==typeof e)&&"current"in e}function S(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function M(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===S(e))return NaN;if(I(e)){var a="function"===typeof e.valueOf?e.valueOf():e;e=I(a)?""+a:a}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var s=/^0b[01]+$/i.test(e);return s||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),s?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function I(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function L(e){if(!I(e))return!1;var t=S(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function D(e){if(C(e))return e.current;if(L(e))return e();if("string"===typeof e&&E){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function z(e){return null!==e&&(Array.isArray(e)||E&&"number"===typeof e.length)}function A(e,t){var a=D(e);return t?z(a)?a:null===a?[]:[a]:z(a)?a[0]:a}var P=["touchstart","click"];function W(e,t,a,s){var i=e;z(i)||(i=[i]);var n=a;if("string"===typeof n&&(n=n.split(/\s+/)),!z(i)||"function"!==typeof t||!Array.isArray(n))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(n,(function(e){Array.prototype.forEach.call(i,(function(a){a.addEventListener(e,t,s)}))})),function(){Array.prototype.forEach.call(n,(function(e){Array.prototype.forEach.call(i,(function(a){a.removeEventListener(e,t,s)}))}))}}var F=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},48:function(e,t,a){"use strict";var s=a(9),i=a(10),n=a(12),c=a(11),r=a(0),l=a.n(r),o=a(75),d=a(76),m=a(1),u=function(e){Object(n.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsx)(l.a.Fragment,{children:Object(m.jsx)(o.a,{className:"justify-content-center",children:Object(m.jsx)(d.a,{xs:"12",className:this.props.isLeft?"":"text-center",children:Object(m.jsx)("div",{className:"section-title mb-4 pb-2",name:"maintitle",children:Object(m.jsxs)("h4",{className:"title mb-4",name:"sectiontitle",children:[" ",this.props.title," "]})})})})})}}]),a}(r.Component);t.a=u},53:function(e,t,a){"use strict";t.a=a.p+"static/media/01.6ac85de7.jpg"},54:function(e,t,a){"use strict";t.a=a.p+"static/media/05.a7ab2c82.jpg"},55:function(e,t,a){"use strict";t.a=a.p+"static/media/02.7df14e12.jpg"},59:function(e,t,a){"use strict";t.a=a.p+"static/media/03.ba5f8794.jpg"},60:function(e,t,a){"use strict";t.a=a.p+"static/media/04.35463172.jpg"},606:function(e,t,a){"use strict";t.a=a.p+"static/media/envelope.156b07b9.svg"},72:function(e,t,a){"use strict";t.a=a.p+"static/media/06.7365b7fa.jpg"},73:function(e,t,a){"use strict";var s=a(3),i=a(8),n=a(0),c=a.n(n),r=a(7),l=a.n(r),o=a(43),d=a.n(o),m=a(44),u={tag:m.tagPropType,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,n=e.fluid,r=e.tag,l=Object(i.a)(e,["className","cssModule","fluid","tag"]),o="container";!0===n?o="container-fluid":n&&(o="container-"+n);var u=Object(m.mapToCssModules)(d()(t,o),a);return c.a.createElement(r,Object(s.a)({},l,{className:u}))};b.propTypes=u,b.defaultProps={tag:"div"},t.a=b},75:function(e,t,a){"use strict";var s=a(3),i=a(8),n=a(0),c=a.n(n),r=a(7),l=a.n(r),o=a(43),d=a.n(o),m=a(44),u=l.a.oneOfType([l.a.number,l.a.string]),b={tag:m.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},j={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,r=e.tag,l=e.form,o=e.widths,u=Object(i.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];o.forEach((function(t,a){var s=e[t];if(delete u[t],s){var i=!a;b.push(i?"row-cols-"+s:"row-cols-"+t+"-"+s)}}));var j=Object(m.mapToCssModules)(d()(t,n?"no-gutters":null,l?"form-row":"row",b),a);return c.a.createElement(r,Object(s.a)({},u,{className:j}))};h.propTypes=b,h.defaultProps=j,t.a=h},76:function(e,t,a){"use strict";var s=a(3),i=a(8),n=a(0),c=a.n(n),r=a(7),l=a.n(r),o=a(43),d=a.n(o),m=a(44),u=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:u,offset:u})]),j={tag:m.tagPropType,xs:b,sm:b,md:b,lg:b,xl:b,className:l.a.string,cssModule:l.a.object,widths:l.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},x=function(e){var t=e.className,a=e.cssModule,n=e.widths,r=e.tag,l=Object(i.a)(e,["className","cssModule","widths","tag"]),o=[];n.forEach((function(t,s){var i=e[t];if(delete l[t],i||""===i){var n=!s;if(Object(m.isObject)(i)){var c,r=n?"-":"-"+t+"-",u=p(n,t,i.size);o.push(Object(m.mapToCssModules)(d()(((c={})[u]=i.size||""===i.size,c["order"+r+i.order]=i.order||0===i.order,c["offset"+r+i.offset]=i.offset||0===i.offset,c)),a))}else{var b=p(n,t,i);o.push(b)}}})),o.length||o.push("col");var u=Object(m.mapToCssModules)(d()(t,o),a);return c.a.createElement(r,Object(s.a)({},l,{className:u}))};x.propTypes=j,x.defaultProps=h,t.a=x},875:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ee}));var s=a(9),i=a(10),n=a(12),c=a(11),r=a(0),l=a.n(r),o=a.p+"static/media/shape2.5137596b.png",d=a.p+"static/media/freelancer.59a01d73.png",m=a(73),u=a(75),b=a(76),j=a(13),h=a(1),p=function(e){Object(n.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsx)(l.a.Fragment,{children:Object(h.jsx)("section",{className:"bg-half-170 pb-0 bg-light d-table w-100 overflow-hidden",style:{background:"url(".concat(o,") top z-index: 0")},children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(u.a,{className:"align-items-center mt-5 mt-sm-0",children:[Object(h.jsx)(b.a,{md:6,children:Object(h.jsxs)("div",{className:"title-heading text-center text-md-start",children:[Object(h.jsx)("span",{className:"badge rounded-pill bg-soft-primary",children:"Freelancing"}),Object(h.jsxs)("h4",{className:"heading mb-3 mt-2",children:["Grow your freelance ",Object(h.jsx)("span",{className:"fw-bold",children:"Business"})]}),Object(h.jsx)("p",{className:"text-muted mb-0 para-dark para-desc mx-auto ms-md-auto",children:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."}),Object(h.jsxs)("div",{className:"mt-4",children:[Object(h.jsx)(j.b,{to:"#",className:"btn btn-primary",children:"Sign up & Start growing"}),Object(h.jsx)("p",{className:"text-muted mt-1 mb-0",children:"*No Credit Card Required"})]})]})}),Object(h.jsx)(b.a,{md:6,className:"mt-4 pt-2 mt-sm-0 pt-sm-0",children:Object(h.jsx)("div",{className:"freelance-hero position-relative",children:Object(h.jsx)("div",{className:"bg-shape position-relative",children:Object(h.jsx)("img",{src:d,className:"mx-auto d-block img-fluid",alt:""})})})})]})})})})}}]),a}(r.Component),x=a(96),f=a(93),g=a(94),O=a(97),v=a(100),y=a(107),N=a(53),w=a(55),k=a(59),T=a(60),E=a(54),C=a(72),S=a(62),M=a(67),I=function(e){Object(n.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsx)(l.a.Fragment,{children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(u.a,{className:"align-items-center",children:[Object(h.jsx)(b.a,{lg:{size:5,order:2},xs:{size:12,order:1},children:Object(h.jsxs)("div",{className:"section-title text-center text-lg-start mb-4 mb-lg-0 pb-2 pb-lg-0",children:[Object(h.jsx)("span",{className:"badge rounded-pill bg-soft-primary",children:"Services"}),Object(h.jsx)("h4",{className:"title mt-3 mb-4",children:"Make more, Manage less"}),Object(h.jsxs)("p",{className:"text-muted para-desc mx-auto ms-lg-auto mb-0",children:["Start working with ",Object(h.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," that can provide everything you need to generate awareness, drive traffic, connect."]}),Object(h.jsx)("div",{className:"mt-4 d-lg-block d-none",children:Object(h.jsx)(j.b,{to:"#",className:"btn btn-primary",children:"See more"})})]})}),Object(h.jsxs)(b.a,{lg:{size:7,order:1},xs:{size:12,order:2},children:[Object(h.jsxs)(u.a,{className:"me-lg-5",children:[Object(h.jsx)(b.a,{md:6,xs:12,children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(b.a,{xs:12,className:"mt-4 mt-lg-0 pt-2 pt-lg-0",children:Object(h.jsxs)(S.a,{className:"border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow",children:[Object(h.jsx)("div",{className:"icons text-primary text-center mx-auto",children:Object(h.jsx)("i",{className:"uil uil-rocket d-block rounded-pill h3 mb-0"})}),Object(h.jsxs)(M.a,{className:"p-0 mt-4",children:[Object(h.jsxs)(j.b,{to:"#",className:"title h5 text-dark",children:["Targeted ",Object(h.jsx)("br",{})," High-quality Leads"]}),Object(h.jsx)("p",{className:"text-muted mt-2 mb-0",children:"It is a long established fact that a reader at its layout."}),Object(h.jsx)("i",{className:"uil uil-rocket text-primary full-img"})]})]})}),Object(h.jsx)(b.a,{xs:12,className:"mt-4 pt-2",children:Object(h.jsxs)(S.a,{className:"border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow",children:[Object(h.jsx)("div",{className:"icons text-primary text-center mx-auto",children:Object(h.jsx)("i",{className:"uil uil-airplay d-block rounded-pill h3 mb-0"})}),Object(h.jsxs)(M.a,{className:"p-0 mt-4",children:[Object(h.jsx)(j.b,{to:"#",className:"title h5 text-dark",children:"Send, Schedule, and Snooze Emails"}),Object(h.jsx)("p",{className:"text-muted mt-2 mb-0",children:"It is a long established fact that a reader at its layout."}),Object(h.jsx)("i",{className:"uil uil-airplay text-primary full-img"})]})]})})]})}),Object(h.jsx)(b.a,{xs:12,md:6,children:Object(h.jsxs)(u.a,{className:"pt-lg-4 mt-lg-4",children:[Object(h.jsx)(b.a,{xs:12,className:"mt-4 pt-2",children:Object(h.jsxs)(S.a,{className:"border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow",children:[Object(h.jsx)("div",{className:"icons text-primary text-center mx-auto",children:Object(h.jsx)("i",{className:"uil uil-envelope d-block rounded-pill h3 mb-0"})}),Object(h.jsxs)(M.a,{className:"p-0 mt-4",children:[Object(h.jsx)(j.b,{to:"#",className:"title h5 text-dark",children:"Library of the Best Email Templates"}),Object(h.jsx)("p",{className:"text-muted mt-2 mb-0",children:"It is a long established fact that a reader at its layout."}),Object(h.jsx)("i",{className:"uil uil-envelope text-primary full-img"})]})]})}),Object(h.jsx)(b.a,{xs:12,className:"mt-4 pt-2",children:Object(h.jsxs)(S.a,{className:"border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow",children:[Object(h.jsx)("div",{className:"icons text-primary text-center mx-auto",children:Object(h.jsx)("i",{className:"uil uil-bell d-block rounded-pill h3 mb-0"})}),Object(h.jsxs)(M.a,{className:"p-0 mt-4",children:[Object(h.jsx)(j.b,{to:"#",className:"title h5 text-dark",children:"Automated Follow-up Reminders"}),Object(h.jsx)("p",{className:"text-muted mt-2 mb-0",children:"It is a long established fact that a reader at its layout."}),Object(h.jsx)("i",{className:"uil uil-bell text-primary full-img"})]})]})})]})})]}),Object(h.jsx)("div",{className:"mt-4 d-lg-none d-block text-center",children:Object(h.jsx)(j.b,{to:"#",className:"btn btn-primary",children:"See more"})})]})]})})})}}]),a}(r.Component),L=a(14),D=a(162),z=a(147),A=a(148),P=a(150),W=a(151),F=a(43),q=a.n(F),R=a.p+"static/media/proposals.b25fa6ef.png",G=a.p+"static/media/contract.cb52a454.png",B=a.p+"static/media/crm.4ba47afc.png",$=a.p+"static/media/time.9b234bce.png",U=a.p+"static/media/invoice.dcbdc8f9.png",H=a.p+"static/media/task.494fa145.png",J=function(e){Object(n.a)(a,e);var t=Object(c.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).state={activeTab:"1"},i.toggle=i.toggle.bind(Object(L.a)(i)),i}return Object(i.a)(a,[{key:"toggle",value:function(e){this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return Object(h.jsx)(l.a.Fragment,{children:Object(h.jsx)("div",{className:"container mt-100 mt-60",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-4 mt-4 pt-2",children:Object(h.jsxs)(D.a,{pills:!0,justified:!0,id:"pills-tab",className:"flex-column bg-white rounded shadow p-3 mb-0 sticky-bar",children:[Object(h.jsx)(z.a,{children:Object(h.jsx)(A.a,{className:q()({active:"1"===this.state.activeTab},"rounded"),onClick:function(){e.toggle("1")},children:Object(h.jsxs)("div",{className:"text-start d-flex align-items-center justify-content-between py-1 px-2",children:[Object(h.jsxs)("h6",{className:"mb-0",children:[Object(h.jsx)("i",{className:"uil uil-postcard me-2 h5"})," Proposals"]}),Object(h.jsx)("i",{className:"uil uil-angle-right-b"})]})})}),Object(h.jsx)(z.a,{className:"mt-2",children:Object(h.jsx)(A.a,{className:q()({active:"2"===this.state.activeTab},"rounded"),onClick:function(){e.toggle("2")},children:Object(h.jsxs)("div",{className:"text-start d-flex align-items-center justify-content-between py-1 px-2",children:[Object(h.jsxs)("h6",{className:"mb-0",children:[Object(h.jsx)("i",{className:"uil uil-notes me-2 h5"})," Contracts"]}),Object(h.jsx)("i",{className:"uil uil-angle-right-b"})]})})}),Object(h.jsx)(z.a,{className:"mt-2",children:Object(h.jsx)(A.a,{className:q()({active:"3"===this.state.activeTab},"rounded"),onClick:function(){e.toggle("3")},children:Object(h.jsxs)("div",{className:"text-start d-flex align-items-center justify-content-between py-1 px-2",children:[Object(h.jsxs)("h6",{className:"mb-0",children:[Object(h.jsx)("i",{className:"uil uil-folder-check me-2 h5"})," Client CRM"]}),Object(h.jsx)("i",{className:"uil uil-angle-right-b"})]})})}),Object(h.jsx)(z.a,{className:"mt-2",children:Object(h.jsx)(A.a,{className:q()({active:"4"===this.state.activeTab},"rounded"),onClick:function(){e.toggle("4")},children:Object(h.jsxs)("div",{className:"text-start d-flex align-items-center justify-content-between py-1 px-2",children:[Object(h.jsxs)("h6",{className:"mb-0",children:[Object(h.jsx)("i",{className:"uil uil-clock me-2 h5"})," Time Tracking"]}),Object(h.jsx)("i",{className:"uil uil-angle-right-b"})]})})}),Object(h.jsx)(z.a,{className:"mt-2",children:Object(h.jsx)(A.a,{className:q()({active:"5"===this.state.activeTab},"rounded"),onClick:function(){e.toggle("5")},children:Object(h.jsxs)("div",{className:"text-start d-flex align-items-center justify-content-between py-1 px-2",children:[Object(h.jsxs)("h6",{className:"mb-0",children:[Object(h.jsx)("i",{className:"uil uil-invoice me-2 h5"})," Invoices"]}),Object(h.jsx)("i",{className:"uil uil-angle-right-b"})]})})}),Object(h.jsx)(z.a,{className:"mt-2",children:Object(h.jsx)(A.a,{className:q()({active:"6"===this.state.activeTab},"rounded"),onClick:function(){e.toggle("6")},children:Object(h.jsxs)("div",{className:"text-start d-flex align-items-center justify-content-between py-1 px-2",children:[Object(h.jsxs)("h6",{className:"mb-0",children:[Object(h.jsx)("i",{className:"uil uil-exchange-alt me-2 h5"})," Task Tracking"]}),Object(h.jsx)("i",{className:"uil uil-angle-right-b"})]})})})]})}),Object(h.jsx)(b.a,{md:8,xs:12,className:"mt-4 pt-2",children:Object(h.jsxs)(P.a,{id:"pills-tabContent",activeTab:this.state.activeTab,children:[Object(h.jsxs)(W.a,{tabId:"1",className:"p-4 rounded shadow",id:"developing",role:"tabpanel","aria-labelledby":"proposal",children:[Object(h.jsx)("h4",{className:"mb-4",children:"Win More Work"}),Object(h.jsx)("p",{className:"text-muted mb-0",children:"This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody."}),Object(h.jsx)("div",{className:"mt-4",children:Object(h.jsxs)(j.b,{to:"#",className:"text-primary h6",children:["Explore Proposals ",Object(h.jsx)("i",{className:"uil uil-angle-right-b align-middle"})]})}),Object(h.jsx)("div",{className:"mt-4",children:Object(h.jsx)("img",{src:R,className:"img-fluid",alt:""})})]}),Object(h.jsxs)(W.a,{tabId:"2",className:"p-4 rounded shadow",id:"data-analise",role:"tabpanel","aria-labelledby":"contract",children:[Object(h.jsx)("h4",{className:"mb-4",children:"Protect Your Business"}),Object(h.jsx)("p",{className:"text-muted mb-0",children:"This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody."}),Object(h.jsx)("div",{className:"mt-4",children:Object(h.jsxs)(j.b,{to:"#",className:"text-primary h6",children:["Explore Contracts ",Object(h.jsx)("i",{className:"uil uil-angle-right-b align-middle"})]})}),Object(h.jsx)("div",{className:"mt-4",children:Object(h.jsx)("img",{src:G,className:"img-fluid",alt:""})})]}),Object(h.jsxs)(W.a,{tabId:"3",className:"p-4 rounded shadow",id:"security",role:"tabpanel","aria-labelledby":"crm",children:[Object(h.jsx)("h4",{className:"mb-4",children:"Stay Organized"}),Object(h.jsx)("p",{className:"text-muted mb-0",children:"This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody."}),Object(h.jsx)("div",{className:"mt-4",children:Object(h.jsxs)(j.b,{to:"#",className:"text-primary h6",children:["Explore Projects ",Object(h.jsx)("i",{className:"uil uil-angle-right-b align-middle"})]})}),Object(h.jsx)("div",{className:"mt-4",children:Object(h.jsx)("img",{src:B,className:"img-fluid",alt:""})})]}),Object(h.jsxs)(W.a,{tabId:"4",className:"p-4 rounded shadow",id:"time-track",role:"tabpanel","aria-labelledby":"timetracking",children:[Object(h.jsx)("h4",{className:"mb-4",children:"Keep It Simple"}),Object(h.jsx)("p",{className:"text-muted mb-0",children:"This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody."}),Object(h.jsx)("div",{className:"mt-4",children:Object(h.jsxs)(j.b,{to:"#",className:"text-primary h6",children:["Explore Time Tracking ",Object(h.jsx)("i",{className:"uil uil-angle-right-b align-middle"})]})}),Object(h.jsx)("div",{className:"mt-4",children:Object(h.jsx)("img",{src:$,className:"img-fluid",alt:""})})]}),Object(h.jsxs)(W.a,{tabId:"5",className:"p-4 rounded shadow",id:"invoices",role:"tabpanel","aria-labelledby":"invoice",children:[Object(h.jsx)("h4",{className:"mb-4",children:"Get Paid Faster"}),Object(h.jsx)("p",{className:"text-muted mb-0",children:"This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody."}),Object(h.jsx)("div",{className:"mt-4",children:Object(h.jsxs)(j.b,{to:"#",className:"text-primary h6",children:["Explore Invoice ",Object(h.jsx)("i",{className:"uil uil-angle-right-b align-middle"})]})}),Object(h.jsx)("div",{className:"mt-4",children:Object(h.jsx)("img",{src:U,className:"img-fluid",alt:""})})]}),Object(h.jsxs)(W.a,{tabId:"6",className:"p-4 rounded shadow",id:"task-track",role:"tabpanel","aria-labelledby":"tasktracking",children:[Object(h.jsx)("h4",{className:"mb-4",children:"Be More Effective"}),Object(h.jsx)("p",{className:"text-muted mb-0",children:"This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody."}),Object(h.jsx)("div",{className:"mt-4",children:Object(h.jsxs)(j.b,{to:"#",className:"text-primary h6",children:["Explore Task Tracking ",Object(h.jsx)("i",{className:"uil uil-angle-right-b align-middle"})]})}),Object(h.jsx)("div",{className:"mt-4",children:Object(h.jsx)("img",{src:H,className:"img-fluid",alt:""})})]})]})})]})})})}}]),a}(r.Component),Y=a(48),K=a(121),V=a.p+"static/media/cta.888141b7.png",X=a(606),Q=a(18),Z=a.n(Q),_=function(e){Object(n.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsx)(l.a.Fragment,{children:Object(h.jsxs)("section",{className:"section overflow-hidden",children:[Object(h.jsx)(m.a,{children:Object(h.jsxs)(u.a,{className:"align-items-center",children:[Object(h.jsx)(b.a,{lg:6,md:{size:6,order:2},className:"order-1",children:Object(h.jsx)("img",{src:V,className:"img-fluid",alt:""})}),Object(h.jsx)(b.a,{lg:6,md:6,className:"order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(h.jsxs)("div",{className:"section-title ms-lg-5",children:[Object(h.jsx)("h4",{className:"title mb-4",children:"Turn new leads and past clients into more paid work"}),Object(h.jsx)("p",{className:"text-muted",children:"Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact."}),Object(h.jsxs)("ul",{className:"list-unstyled text-muted",children:[Object(h.jsxs)("li",{className:"mb-0",children:[Object(h.jsx)("span",{className:"text-primary h5 me-2",children:Object(h.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Digital Marketing Solutions for Tomorrow"]}),Object(h.jsxs)("li",{className:"mb-0",children:[Object(h.jsx)("span",{className:"text-primary h5 me-2",children:Object(h.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Create your own skin to match your brand"]})]}),Object(h.jsxs)(j.b,{to:"#",className:"mt-3 h6 text-primary",children:["Find Out More ",Object(h.jsx)("i",{className:"uil uil-angle-right-b"})]})]})})]})}),Object(h.jsx)(m.a,{className:"mt-100 mt-60",children:Object(h.jsxs)(u.a,{className:"align-items-center",children:[Object(h.jsx)(b.a,{lg:5,md:5,xs:12,children:Object(h.jsx)("img",{src:X.a,className:"img-fluid mx-auto d-block",alt:""})}),Object(h.jsx)(b.a,{lg:7,md:7,xs:12,className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(h.jsxs)("div",{className:"section-title",children:[Object(h.jsxs)("div",{className:"alert alert-light alert-pills",role:"alert",children:[Object(h.jsx)("span",{className:"badge bg-primary rounded-pill me-1",children:"Apps"}),Object(h.jsxs)("span",{className:"content",children:["Download now ",Object(h.jsx)("i",{className:"uil uil-angle-right-b align-middle"})]})]}),Object(h.jsxs)("h4",{className:"title mb-4",children:["Available for your ",Object(h.jsx)("br",{})," Smartphones"]}),Object(h.jsxs)("p",{className:"text-muted para-desc mb-0",children:["Start working with ",Object(h.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," that can provide everything you need to generate awareness, drive traffic, connect."]}),Object(h.jsxs)("div",{className:"my-4",children:[Object(h.jsxs)(j.b,{to:"#",className:"btn btn-lg btn-dark mt-2 me-2",children:[Object(h.jsx)("i",{className:"uil uil-apple"})," App Store"]}),Object(h.jsxs)(j.b,{to:"#",className:"btn btn-lg btn-dark mt-2",children:[Object(h.jsx)("i",{className:"uil uil-google-play"})," Play Store"]})]}),Object(h.jsx)("div",{className:"d-inline-block",children:Object(h.jsxs)("div",{className:"pt-4 d-flex align-items-center border-top",children:[Object(h.jsx)(Z.a,{icon:"smartphone",className:"fea icon-md me-2 text-primary"}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("h6",{className:"mb-0",children:"Install app now on your cellphones"}),Object(h.jsxs)(j.b,{to:"#",className:"text-primary h6",children:["Learn More ",Object(h.jsx)("i",{className:"uil uil-angle-right-b"})]})]})]})})]})})]})})]})})}}]),a}(r.Component),ee=function(e){Object(n.a)(a,e);var t=Object(c.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},i.state={partners:[{image:x.a},{image:f.a},{image:g.a},{image:O.a},{image:v.a},{image:y.a}],reviews:[{id:1,img:N.a,name:"Thomas Israel",post:"C.E.O",desc:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",rating:5},{id:2,img:w.a,name:"Barbara McIntosh",post:"M.D",desc:"One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",rating:4},{id:3,img:k.a,name:"Carl Oliver",post:"P.A",desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",rating:3},{id:4,img:T.a,name:"Christa Smith",post:"Manager",desc:"According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",rating:5},{id:5,img:E.a,name:"Dean Tolle",post:"Developer",desc:"There is now an abundance of readable dummy texts. These are usually used when a text is required.",rating:5},{id:6,img:C.a,name:"Jill Webb",post:"Designer",desc:"Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",rating:4}]},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(h.jsxs)(l.a.Fragment,{children:[Object(h.jsx)(p,{}),Object(h.jsx)("section",{className:"py-4 border-bottom",children:Object(h.jsx)(m.a,{children:Object(h.jsx)(u.a,{className:"justify-content-center",children:this.state.partners.map((function(e,t){return Object(h.jsx)(b.a,{lg:2,md:2,xs:6,className:"text-center py-4",children:Object(h.jsx)("img",{src:e.image,className:"avatar avatar-ex-sm",alt:"Landrick"})},t)}))})})}),Object(h.jsxs)("section",{className:"section",children:[Object(h.jsx)(I,{}),Object(h.jsx)(J,{})]}),Object(h.jsx)("section",{className:"section bg-light",style:{background:"url(".concat(o,") center center")},children:Object(h.jsxs)(m.a,{children:[Object(h.jsx)(Y.a,{title:"How Can We Help You ?",desc:"that can provide everything you need to generate awareness, drive traffic, connect."}),Object(h.jsx)(K.a,{reviews:this.state.reviews,colClass:"mt-4"})]})}),Object(h.jsx)(_,{})]})}}]),a}(r.Component)},93:function(e,t,a){"use strict";t.a=a.p+"static/media/google.fc295ce9.svg"},94:function(e,t,a){"use strict";t.a=a.p+"static/media/lenovo.b0f22f8b.svg"},96:function(e,t,a){"use strict";t.a=a.p+"static/media/amazon.b99a7cc4.svg"},97:function(e,t,a){"use strict";t.a=a.p+"static/media/paypal.2a7be383.svg"}}]);
//# sourceMappingURL=69.afc32192.chunk.js.map