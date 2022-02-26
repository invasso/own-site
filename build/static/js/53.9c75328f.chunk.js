/*! For license information please see 53.9c75328f.chunk.js.LICENSE.txt */
(this.webpackJsonplandrick=this.webpackJsonplandrick||[]).push([[53],{100:function(e,t,a){"use strict";t.a=a.p+"static/media/shopify.a3ea7712.svg"},107:function(e,t,a){"use strict";t.a=a.p+"static/media/spotify.8f600330.svg"},147:function(e,t,a){"use strict";var s=a(3),c=a(8),n=a(0),r=a.n(n),i=a(7),l=a.n(i),o=a(43),d=a.n(o),u=a(44),m={tag:u.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,n=e.active,i=e.tag,l=Object(c.a)(e,["className","cssModule","active","tag"]),o=Object(u.mapToCssModules)(d()(t,"nav-item",!!n&&"active"),a);return r.a.createElement(i,Object(s.a)({},l,{className:o}))};b.propTypes=m,b.defaultProps={tag:"li"},t.a=b},148:function(e,t,a){"use strict";var s=a(3),c=a(8),n=a(46),r=a(4),i=a(0),l=a.n(i),o=a(7),d=a.n(o),u=a(43),m=a.n(u),b=a(44),j={tag:b.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),disabled:d.a.bool,active:d.a.bool,className:d.a.string,cssModule:d.a.object,onClick:d.a.func,href:d.a.any},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(n.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.active,r=e.tag,i=e.innerRef,o=Object(c.a)(e,["className","cssModule","active","tag","innerRef"]),d=Object(b.mapToCssModules)(m()(t,"nav-link",{disabled:o.disabled,active:n}),a);return l.a.createElement(r,Object(s.a)({},o,{ref:i,onClick:this.onClick,className:d}))},t}(l.a.Component);h.propTypes=j,h.defaultProps={tag:"a"},t.a=h},150:function(e,t,a){"use strict";var s=a(3),c=a(4),n=a(0),r=a.n(n),i=a(7),l=a.n(i),o=a(43),d=a.n(o),u=a(81),m=a(44),b={tag:m.tagPropType,activeTab:l.a.any,className:l.a.string,cssModule:l.a.object},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}return Object(c.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.cssModule,c=e.tag,n=Object(m.omit)(this.props,Object.keys(b)),i=Object(m.mapToCssModules)(d()("tab-content",t),a);return r.a.createElement(u.a.Provider,{value:{activeTabId:this.state.activeTab}},r.a.createElement(c,Object(s.a)({},n,{className:i})))},t}(n.Component);t.a=j,j.propTypes=b,j.defaultProps={tag:"div"}},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var s=a(3),c=a(8),n=a(0),r=a.n(n),i=a(7),l=a.n(i),o=a(43),d=a.n(o),u=a(81),m=a(44),b={tag:m.tagPropType,className:l.a.string,cssModule:l.a.object,tabId:l.a.any};function j(e){var t=e.className,a=e.cssModule,n=e.tabId,i=e.tag,l=Object(c.a)(e,["className","cssModule","tabId","tag"]),o=function(e){return Object(m.mapToCssModules)(d()("tab-pane",t,{active:n===e}),a)};return r.a.createElement(u.a.Consumer,null,(function(e){var t=e.activeTabId;return r.a.createElement(i,Object(s.a)({},l,{className:o(t)}))}))}j.propTypes=b,j.defaultProps={tag:"div"}},162:function(e,t,a){"use strict";var s=a(3),c=a(8),n=a(0),r=a.n(n),i=a(7),l=a.n(i),o=a(43),d=a.n(o),u=a(44),m={tabs:l.a.bool,pills:l.a.bool,vertical:l.a.oneOfType([l.a.bool,l.a.string]),horizontal:l.a.string,justified:l.a.bool,fill:l.a.bool,navbar:l.a.bool,card:l.a.bool,tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,n=e.tabs,i=e.pills,l=e.vertical,o=e.horizontal,m=e.justified,b=e.fill,j=e.navbar,h=e.card,p=e.tag,f=Object(c.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),x=Object(u.mapToCssModules)(d()(t,j?"navbar-nav":"nav",!!o&&"justify-content-"+o,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(l),{"nav-tabs":n,"card-header-tabs":h&&n,"nav-pills":i,"card-header-pills":h&&i,"nav-justified":m,"nav-fill":b}),a);return r.a.createElement(p,Object(s.a)({},f,{className:x}))};b.propTypes=m,b.defaultProps={tag:"ul",vertical:!1},t.a=b},43:function(e,t,a){var s;!function(){"use strict";var a={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var n=typeof s;if("string"===n||"number"===n)e.push(s);else if(Array.isArray(s)){if(s.length){var r=c.apply(null,s);r&&e.push(r)}}else if("object"===n)if(s.toString===Object.prototype.toString)for(var i in s)a.call(s,i)&&s[i]&&e.push(i);else e.push(s.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(s=function(){return c}.apply(t,[]))||(e.exports=s)}()},44:function(e,t,a){"use strict";a.r(t),a.d(t,"getScrollbarWidth",(function(){return r})),a.d(t,"setScrollbarWidth",(function(){return i})),a.d(t,"isBodyOverflowing",(function(){return l})),a.d(t,"getOriginalBodyPadding",(function(){return o})),a.d(t,"conditionallyUpdateScrollbar",(function(){return d})),a.d(t,"setGlobalCssModule",(function(){return u})),a.d(t,"mapToCssModules",(function(){return m})),a.d(t,"omit",(function(){return b})),a.d(t,"pick",(function(){return j})),a.d(t,"warnOnce",(function(){return p})),a.d(t,"deprecated",(function(){return f})),a.d(t,"DOMElement",(function(){return O})),a.d(t,"targetPropType",(function(){return g})),a.d(t,"tagPropType",(function(){return v})),a.d(t,"TransitionTimeouts",(function(){return N})),a.d(t,"TransitionPropTypeKeys",(function(){return y})),a.d(t,"TransitionStatuses",(function(){return w})),a.d(t,"keyCodes",(function(){return T})),a.d(t,"PopperPlacements",(function(){return k})),a.d(t,"canUseDOM",(function(){return E})),a.d(t,"isReactRefObj",(function(){return M})),a.d(t,"toNumber",(function(){return P})),a.d(t,"isObject",(function(){return S})),a.d(t,"isFunction",(function(){return A})),a.d(t,"findDOMElements",(function(){return I})),a.d(t,"isArrayOrNodeList",(function(){return F})),a.d(t,"getTarget",(function(){return D})),a.d(t,"defaultToggleEvents",(function(){return R})),a.d(t,"addMultipleEventListeners",(function(){return L})),a.d(t,"focusableElements",(function(){return B}));var s,c=a(7),n=a.n(c);function r(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function i(e){document.body.style.paddingRight=e>0?e+"px":null}function l(){return document.body.clientWidth<window.innerWidth}function o(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function d(){var e=r(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],a=t?parseInt(t.style.paddingRight||0,10):0;l()&&i(a+e)}function u(e){s=e}function m(e,t){return void 0===e&&(e=""),void 0===t&&(t=s),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function b(e,t){var a={};return Object.keys(e).forEach((function(s){-1===t.indexOf(s)&&(a[s]=e[s])})),a}function j(e,t){for(var a,s=Array.isArray(t)?t:[t],c=s.length,n={};c>0;)n[a=s[c-=1]]=e[a];return n}var h={};function p(e){h[e]||("undefined"!==typeof console&&console.error(e),h[e]=!0)}function f(e,t){return function(a,s,c){null!==a[s]&&"undefined"!==typeof a[s]&&p('"'+s+'" property of "'+c+'" has been deprecated.\n'+t);for(var n=arguments.length,r=new Array(n>3?n-3:0),i=3;i<n;i++)r[i-3]=arguments[i];return e.apply(void 0,[a,s,c].concat(r))}}var x="object"===typeof window&&window.Element||function(){};function O(e,t,a){if(!(e[t]instanceof x))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")}var g=n.a.oneOfType([n.a.string,n.a.func,O,n.a.shape({current:n.a.any})]),v=n.a.oneOfType([n.a.func,n.a.string,n.a.shape({$$typeof:n.a.symbol,render:n.a.func}),n.a.arrayOf(n.a.oneOfType([n.a.func,n.a.string,n.a.shape({$$typeof:n.a.symbol,render:n.a.func})]))]),N={Fade:150,Collapse:350,Modal:300,Carousel:600},y=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],w={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},T={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},k=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],E=!("undefined"===typeof window||!window.document||!window.document.createElement);function M(e){return!(!e||"object"!==typeof e)&&"current"in e}function C(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function P(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===C(e))return NaN;if(S(e)){var a="function"===typeof e.valueOf?e.valueOf():e;e=S(a)?""+a:a}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var s=/^0b[01]+$/i.test(e);return s||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),s?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function S(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function A(e){if(!S(e))return!1;var t=C(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function I(e){if(M(e))return e.current;if(A(e))return e();if("string"===typeof e&&E){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function F(e){return null!==e&&(Array.isArray(e)||E&&"number"===typeof e.length)}function D(e,t){var a=I(e);return t?F(a)?a:null===a?[]:[a]:F(a)?a[0]:a}var R=["touchstart","click"];function L(e,t,a,s){var c=e;F(c)||(c=[c]);var n=a;if("string"===typeof n&&(n=n.split(/\s+/)),!F(c)||"function"!==typeof t||!Array.isArray(n))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(n,(function(e){Array.prototype.forEach.call(c,(function(a){a.addEventListener(e,t,s)}))})),function(){Array.prototype.forEach.call(n,(function(e){Array.prototype.forEach.call(c,(function(a){a.removeEventListener(e,t,s)}))}))}}var B=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},46:function(e,t,a){"use strict";function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return s}))},483:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var s=a(9),c=a(10),n=a(12),r=a(11),i=a(0),l=a.n(i),o=a(96),d=a(93),u=a(94),m=a(97),b=a(100),j=a(107),h=a(1),p=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).state={partners:[{id:1,img:o.a},{id:2,img:d.a},{id:3,img:u.a},{id:4,img:m.a},{id:5,img:b.a},{id:6,img:j.a}]},c}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsx)(l.a.Fragment,{children:Object(h.jsx)("section",{className:"py-4 border-top bg-light",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row justify-content-center",children:this.state.partners.map((function(e,t){return Object(h.jsx)("div",{className:"col-lg-2 col-md-2 col-6 text-center py-4",children:Object(h.jsx)("img",{src:e.img,className:"avatar avatar-ex-sm",alt:""})},t)}))})})})})}}]),a}(i.Component)},604:function(e,t,a){"use strict";t.a=a.p+"static/media/1.a87209cb.png"},605:function(e,t,a){"use strict";t.a=a.p+"static/media/about.192efbf9.png"},62:function(e,t,a){"use strict";var s=a(3),c=a(8),n=a(0),r=a.n(n),i=a(7),l=a.n(i),o=a(43),d=a.n(o),u=a(44),m={tag:u.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var t=e.className,a=e.cssModule,n=e.color,i=e.body,l=e.inverse,o=e.outline,m=e.tag,b=e.innerRef,j=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(u.mapToCssModules)(d()(t,"card",!!l&&"text-white",!!i&&"card-body",!!n&&(o?"border":"bg")+"-"+n),a);return r.a.createElement(m,Object(s.a)({},j,{className:h,ref:b}))};b.propTypes=m,b.defaultProps={tag:"div"},t.a=b},67:function(e,t,a){"use strict";var s=a(3),c=a(8),n=a(0),r=a.n(n),i=a(7),l=a.n(i),o=a(43),d=a.n(o),u=a(44),m={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var t=e.className,a=e.cssModule,n=e.innerRef,i=e.tag,l=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(u.mapToCssModules)(d()(t,"card-body"),a);return r.a.createElement(i,Object(s.a)({},l,{className:o,ref:n}))};b.propTypes=m,b.defaultProps={tag:"div"},t.a=b},73:function(e,t,a){"use strict";var s=a(3),c=a(8),n=a(0),r=a.n(n),i=a(7),l=a.n(i),o=a(43),d=a.n(o),u=a(44),m={tag:u.tagPropType,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,n=e.fluid,i=e.tag,l=Object(c.a)(e,["className","cssModule","fluid","tag"]),o="container";!0===n?o="container-fluid":n&&(o="container-"+n);var m=Object(u.mapToCssModules)(d()(t,o),a);return r.a.createElement(i,Object(s.a)({},l,{className:m}))};b.propTypes=m,b.defaultProps={tag:"div"},t.a=b},75:function(e,t,a){"use strict";var s=a(3),c=a(8),n=a(0),r=a.n(n),i=a(7),l=a.n(i),o=a(43),d=a.n(o),u=a(44),m=l.a.oneOfType([l.a.number,l.a.string]),b={tag:u.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},j={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,i=e.tag,l=e.form,o=e.widths,m=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];o.forEach((function(t,a){var s=e[t];if(delete m[t],s){var c=!a;b.push(c?"row-cols-"+s:"row-cols-"+t+"-"+s)}}));var j=Object(u.mapToCssModules)(d()(t,n?"no-gutters":null,l?"form-row":"row",b),a);return r.a.createElement(i,Object(s.a)({},m,{className:j}))};h.propTypes=b,h.defaultProps=j,t.a=h},76:function(e,t,a){"use strict";var s=a(3),c=a(8),n=a(0),r=a.n(n),i=a(7),l=a.n(i),o=a(43),d=a.n(o),u=a(44),m=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),j={tag:u.tagPropType,xs:b,sm:b,md:b,lg:b,xl:b,className:l.a.string,cssModule:l.a.object,widths:l.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},f=function(e){var t=e.className,a=e.cssModule,n=e.widths,i=e.tag,l=Object(c.a)(e,["className","cssModule","widths","tag"]),o=[];n.forEach((function(t,s){var c=e[t];if(delete l[t],c||""===c){var n=!s;if(Object(u.isObject)(c)){var r,i=n?"-":"-"+t+"-",m=p(n,t,c.size);o.push(Object(u.mapToCssModules)(d()(((r={})[m]=c.size||""===c.size,r["order"+i+c.order]=c.order||0===c.order,r["offset"+i+c.offset]=c.offset||0===c.offset,r)),a))}else{var b=p(n,t,c);o.push(b)}}})),o.length||o.push("col");var m=Object(u.mapToCssModules)(d()(t,o),a);return r.a.createElement(i,Object(s.a)({},l,{className:m}))};f.propTypes=j,f.defaultProps=h,t.a=f},81:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var s=a(0),c=a.n(s).a.createContext({})},902:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return A}));var s=a(9),c=a(10),n=a(12),r=a(11),i=a(0),l=a.n(i),o=a(73),d=a(75),u=a(76),m=a(13),b=a(604),j=a(1),h=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(j.jsx)(l.a.Fragment,{children:Object(j.jsx)(o.a,{className:"mt-100 mt-60",children:Object(j.jsxs)(d.a,{className:"align-items-center",children:[Object(j.jsx)(u.a,{lg:5,md:6,className:"order-1 order-md-2",children:Object(j.jsx)("img",{src:b.a,className:"img-fluid",alt:""})}),Object(j.jsx)("div",{className:"col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(j.jsxs)("div",{className:"section-title me-lg-5",children:[Object(j.jsxs)("h4",{className:"title mb-4",children:["Build tools and ",Object(j.jsx)("br",{})," extensive documention"]}),Object(j.jsx)("p",{className:"text-muted",children:"You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."}),Object(j.jsxs)("ul",{className:"list-unstyled text-muted",children:[Object(j.jsxs)("li",{className:"mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Digital Marketing Solutions for Tomorrow"]}),Object(j.jsxs)("li",{className:"mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Our Talented & Experienced Marketing Agency"]}),Object(j.jsxs)("li",{className:"mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Create your own skin to match your brand"]})]}),Object(j.jsx)("div",{className:"mt-4",children:Object(j.jsxs)(m.b,{to:"#",className:"btn btn-primary",children:["Read More"," ",Object(j.jsx)("i",{"data-feather":"arrow-right",className:"fea icon-sm"})]})})]})})]})})})}}]),a}(i.Component),p=a(62),f=a(67),x=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).state={keyfeatures:[{id:1,icon:"uil uil-layer-group d-block rounded h3 mb-0",hoverIcon:"uil uil-layer-group text-primary full-img",title:"Modular"},{id:2,icon:"uil uil-airplay d-block rounded h3 mb-0",hoverIcon:"uil uil-airplay text-primary full-img",title:"Responsive"},{id:3,icon:"uil uil-focus-target d-block rounded h3 mb-0",hoverIcon:"uil uil-focus-target text-primary full-img",title:"Customizable"},{id:4,icon:"uil uil-expand-arrows d-block rounded h3 mb-0",hoverIcon:"uil uil-expand-arrows text-primary full-img",title:"Scalable"}]},c}return Object(c.a)(a,[{key:"render",value:function(){return Object(j.jsx)(l.a.Fragment,{children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(d.a,{children:Object(j.jsx)(u.a,{xs:12,children:Object(j.jsxs)("div",{className:"section-title mb-4 pb-2",children:[Object(j.jsx)("h4",{className:"title mb-4",children:"Key Features"}),Object(j.jsxs)("p",{className:"para-desc text-muted mb-0",children:["Start working with"," ",Object(j.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ","that can provide everything you need to generate awareness, drive traffic, connect."]})]})})}),Object(j.jsx)(d.a,{className:" align-items-center",children:this.state.keyfeatures.map((function(e,t){return Object(j.jsx)(u.a,{lg:3,md:6,className:"mt-4 pt-2",children:Object(j.jsxs)(p.a,{className:"border-0 features feature-clean course-feature p-4 overflow-hidden shadow",children:[Object(j.jsx)("div",{className:"icons text-primary text-center",children:Object(j.jsx)("i",{className:e.icon})}),Object(j.jsxs)(f.a,{className:"p-0 mt-4",children:[Object(j.jsx)(m.b,{to:"#",className:"title h5 text-dark",children:e.title}),Object(j.jsx)("p",{className:"text-muted mt-2",children:"Composed in a pseudo-Latin language which more or less corresponds."}),Object(j.jsxs)(m.b,{to:"#",className:"text-primary read-more",children:["Read More ",Object(j.jsx)("i",{className:"mdi mdi-chevron-right"})]}),Object(j.jsx)("i",{className:e.hoverIcon})]})]})},t)}))})]})})}}]),a}(i.Component),O=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(j.jsx)(l.a.Fragment,{children:Object(j.jsx)(o.a,{className:"mt-100 mt-60",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-4 col-md-6 mt-4 pt-2",children:Object(j.jsx)("div",{className:"card pricing-rates business-rate border-0 p-4 rounded-md shadow",children:Object(j.jsxs)("div",{className:"card-body p-0",children:[Object(j.jsx)("span",{className:"py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg",children:"Basic"}),Object(j.jsx)("h2",{className:"fw-bold mb-0 mt-3",children:"$9.00"}),Object(j.jsx)("p",{className:"text-muted",children:"Per Month"}),Object(j.jsx)("p",{className:"text-muted",children:"All the basics for businesses that are just getting started."}),Object(j.jsxs)("ul",{className:"list-unstyled pt-3 border-top",children:[Object(j.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Full Access"]}),Object(j.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Enhanced Security"]}),Object(j.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Source Files"]}),Object(j.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"1 Domain Free"]}),Object(j.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Enhanced Security"]})]}),Object(j.jsxs)("div",{className:"mt-4 d-grid",children:[Object(j.jsx)(m.b,{to:"#",className:"btn btn-primary",children:"Buy Now"}),Object(j.jsx)("p",{className:"text-muted mt-3 mb-0",children:"*No credit card required"})]})]})})}),Object(j.jsx)("div",{className:"col-lg-4 col-md-6 mt-4 pt-2",children:Object(j.jsxs)("div",{className:"card pricing-rates business-rate border-0 p-4 rounded-md shadow",children:[Object(j.jsx)("div",{className:"ribbon ribbon-right ribbon-warning overflow-hidden",children:Object(j.jsx)("span",{className:"text-center d-block shadow small h6",children:"Best"})}),Object(j.jsxs)("div",{className:"card-body p-0",children:[Object(j.jsx)("span",{className:"py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg",children:"Business"}),Object(j.jsx)("h2",{className:"fw-bold mb-0 mt-3",children:"$39.00"}),Object(j.jsx)("p",{className:"text-muted",children:"Per Month"}),Object(j.jsx)("p",{className:"text-muted",children:"Better for growing businesses that want more customers."}),Object(j.jsxs)("ul",{className:"list-unstyled pt-3 border-top",children:[Object(j.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Full Access"]}),Object(j.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Enhanced Security"]}),Object(j.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Source Files"]}),Object(j.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"1 Domain Free"]}),Object(j.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Enhanced Security"]})]}),Object(j.jsxs)("div",{className:"mt-4 d-grid",children:[Object(j.jsx)(m.b,{to:"#",className:"btn btn-primary",children:"Buy Now"}),Object(j.jsx)("p",{className:"text-muted mt-3 mb-0",children:"*No credit card required"})]})]})]})}),Object(j.jsx)("div",{className:"col-lg-4 col-md-6 mt-4 pt-2",children:Object(j.jsx)("div",{className:"card pricing-rates business-rate border-0 p-4 rounded-md shadow",children:Object(j.jsxs)("div",{className:"card-body p-0",children:[Object(j.jsx)("span",{className:"py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg",children:"Enterprise"}),Object(j.jsx)("h2",{className:"fw-bold mb-0 mt-3",children:"$79.00"}),Object(j.jsx)("p",{className:"text-muted",children:"Per Month"}),Object(j.jsx)("p",{className:"text-muted",children:"Advanced features for pros who need more customization."}),Object(j.jsxs)("ul",{className:"list-unstyled pt-3 border-top",children:[Object(j.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Full Access"]}),Object(j.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Enhanced Security"]}),Object(j.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Source Files"]}),Object(j.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"1 Domain Free"]}),Object(j.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(j.jsx)("span",{className:"text-primary h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Enhanced Security"]})]}),Object(j.jsxs)("div",{className:"mt-4 d-grid",children:[Object(j.jsx)(m.b,{to:"#",className:"btn btn-primary",children:"Buy Now"}),Object(j.jsx)("p",{className:"text-muted mt-3 mb-0",children:"*No credit card required"})]})]})})})]})})})}}]),a}(i.Component),g=a(483),v=a(14),N=a(162),y=a(147),w=a(148),T=a(150),k=a(151),E=a(43),M=a.n(E),C=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).state={activeTab:"1"},c.toggleTab=c.toggleTab.bind(Object(v.a)(c)),c}return Object(c.a)(a,[{key:"toggleTab",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return Object(j.jsx)(l.a.Fragment,{children:Object(j.jsxs)(o.a,{className:"mt-100 mt-60",children:[Object(j.jsx)(d.a,{className:"row justify-content-center",children:Object(j.jsx)(u.a,{xs:12,children:Object(j.jsxs)("div",{className:"section-title text-center mb-4 pb-2",children:[Object(j.jsx)("h6",{className:"text-primary",children:"Quickstart"}),Object(j.jsx)("h4",{className:"title mb-4",children:"Awesome isn't it? Let's dive in!"}),Object(j.jsxs)("p",{className:"para-desc mx-auto text-muted mb-0",children:["Start working with"," ",Object(j.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ","that can provide everything you need to generate awareness, drive traffic, connect."]})]})})}),Object(j.jsx)(d.a,{className:"justify-content-center",children:Object(j.jsxs)(u.a,{lg:8,mg:10,className:"mt-4 pt-2",children:[Object(j.jsxs)("div",{className:"bg-dark bg-white-dark p-4 rounded shadow",children:[Object(j.jsx)(d.a,{children:Object(j.jsx)(u.a,{lg:12,children:Object(j.jsxs)(N.a,{className:"nav-pills nav-tabs nav-justified flex-column flex-sm-row rounded bg-soft-light",children:[Object(j.jsx)(y.a,{className:"hover-border",children:Object(j.jsx)(w.a,{className:M()({active:"1"===this.state.activeTab},"rounded nav-link-alt"),onClick:function(){e.toggleTab("1")},children:Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("h5",{className:"title font-weight-normal mb-0",children:"npm"})})})}),Object(j.jsx)(y.a,{className:"hover-border",children:Object(j.jsx)(w.a,{className:M()({active:"2"===this.state.activeTab},"rounded nav-link-alt"),onClick:function(){e.toggleTab("2")},children:Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("h5",{className:"title font-weight-normal mb-0",children:"nuget"})})})}),Object(j.jsx)(y.a,{className:"hover-border",children:Object(j.jsx)(w.a,{className:M()({active:"3"===this.state.activeTab},"rounded nav-link-alt"),onClick:function(){e.toggleTab("3")},children:Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("h5",{className:"title font-weight-normal mb-0",children:"spm"})})})}),Object(j.jsx)(y.a,{className:"hover-border",children:Object(j.jsx)(w.a,{className:M()({active:"4"===this.state.activeTab},"rounded nav-link-alt"),onClick:function(){e.toggleTab("4")},children:Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("h5",{className:"title font-weight-normal mb-0",children:"github"})})})})]})})}),Object(j.jsx)(d.a,{children:Object(j.jsx)(u.a,{xs:12,children:Object(j.jsxs)(T.a,{activeTab:this.state.activeTab,children:[Object(j.jsx)(k.a,{tabId:"1",className:"fade show",children:Object(j.jsxs)("p",{className:"text-muted fw-bold mb-0",children:[Object(j.jsx)("span",{className:"text-success",children:"$"})," npm install"," ",Object(j.jsx)("span",{className:"text-success",children:"-g"})," claps.js"]})}),Object(j.jsx)(k.a,{className:"fade show",tabId:"2",children:Object(j.jsx)("p",{className:"text-muted fw-bold mb-0",children:"coming soon ..."})}),Object(j.jsx)(k.a,{className:"fade show",tabId:"3",children:Object(j.jsx)("p",{className:"text-muted fw-bold mb-0",children:"coming soon ..."})}),Object(j.jsx)(k.a,{className:"fade show",tabId:"4",children:Object(j.jsx)("p",{className:"text-muted fw-bold mb-0",children:"coming soon ..."})})]})})})]}),Object(j.jsxs)("ul",{className:"list-unstyled text-muted mb-0 mt-3",children:[Object(j.jsxs)("li",{className:"list-inline-item me-lg-5 me-4",children:[Object(j.jsx)("span",{className:"text-success h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Organize your data"]}),Object(j.jsxs)("li",{className:"list-inline-item me-lg-5 me-4",children:[Object(j.jsx)("span",{className:"text-success h5 me-2",children:Object(j.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Work with any team"]})]})]})})]})})}}]),a}(i.Component),P=a(605),S=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(j.jsx)(l.a.Fragment,{children:Object(j.jsx)("section",{className:"bg-half bg-light d-table w-100",children:Object(j.jsx)(o.a,{children:Object(j.jsxs)(d.a,{className:"align-items-center",children:[Object(j.jsx)(u.a,{md:6,xs:12,children:Object(j.jsxs)("div",{className:"title-heading",children:[Object(j.jsx)("span",{className:"badge rounded-pill bg-soft-primary",children:"Development"}),Object(j.jsxs)("h1",{className:"fw-bold mt-2 mb-3",children:["A Complete ",Object(j.jsx)("br",{})," Developer Toolset"]}),Object(j.jsx)("p",{className:"para-desc text-muted",children:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."}),Object(j.jsxs)("div",{className:"mt-4 pt-2",children:[Object(j.jsx)(m.b,{to:"#",className:"btn btn-primary me-2",children:"Get Started"}),Object(j.jsx)(m.b,{to:"#",className:"btn btn-outline-primary",children:"Documentation"})]}),Object(j.jsx)("p",{className:"text-muted mb-0 mt-3",children:"Current Version: v3.1"})]})}),Object(j.jsx)("div",{className:"col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0",children:Object(j.jsx)("img",{src:P.a,className:"img-fluid d-block mx-auto",alt:""})})]})})})})}}]),a}(i.Component),A=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(j.jsxs)(l.a.Fragment,{children:[Object(j.jsx)(S,{}),Object(j.jsx)(g.a,{}),Object(j.jsx)("div",{className:"position-relative",children:Object(j.jsx)("div",{className:"shape overflow-hidden text-white",children:Object(j.jsx)("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"})})})}),Object(j.jsxs)("section",{className:"section",children:[Object(j.jsx)(x,{}),Object(j.jsx)(C,{}),Object(j.jsx)(h,{}),Object(j.jsx)(O,{})]})]})}}]),a}(i.Component)},93:function(e,t,a){"use strict";t.a=a.p+"static/media/google.fc295ce9.svg"},94:function(e,t,a){"use strict";t.a=a.p+"static/media/lenovo.b0f22f8b.svg"},96:function(e,t,a){"use strict";t.a=a.p+"static/media/amazon.b99a7cc4.svg"},97:function(e,t,a){"use strict";t.a=a.p+"static/media/paypal.2a7be383.svg"}}]);
//# sourceMappingURL=53.9c75328f.chunk.js.map