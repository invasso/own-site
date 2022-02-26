/*! For license information please see 176.5554ff62.chunk.js.LICENSE.txt */
(this.webpackJsonplandrick=this.webpackJsonplandrick||[]).push([[176],{103:function(e,t,s){"use strict";var a=s(3),r=s(8),n=s(0),i=s.n(n),c=s(7),l=s.n(c),o=s(43),d=s.n(o),m=s(44),u={tag:m.tagPropType,listTag:m.tagPropType,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},j=function(e){var t=e.className,s=e.listClassName,n=e.cssModule,c=e.children,l=e.tag,o=e.listTag,u=e["aria-label"],j=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(m.mapToCssModules)(d()(t),n),h=Object(m.mapToCssModules)(d()("breadcrumb",s),n);return i.a.createElement(l,Object(a.a)({},j,{className:b,"aria-label":u}),i.a.createElement(o,{className:h},c))};j.propTypes=u,j.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=j},104:function(e,t,s){"use strict";var a=s(3),r=s(8),n=s(0),i=s.n(n),c=s(7),l=s.n(c),o=s(43),d=s.n(o),m=s(44),u={tag:m.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},j=function(e){var t=e.className,s=e.cssModule,n=e.active,c=e.tag,l=Object(r.a)(e,["className","cssModule","active","tag"]),o=Object(m.mapToCssModules)(d()(t,!!n&&"active","breadcrumb-item"),s);return i.a.createElement(c,Object(a.a)({},l,{className:o,"aria-current":n?"page":void 0}))};j.propTypes=u,j.defaultProps={tag:"li"},t.a=j},43:function(e,t,s){var a;!function(){"use strict";var s={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)){if(a.length){var i=r.apply(null,a);i&&e.push(i)}}else if("object"===n)if(a.toString===Object.prototype.toString)for(var c in a)s.call(a,c)&&a[c]&&e.push(c);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},44:function(e,t,s){"use strict";s.r(t),s.d(t,"getScrollbarWidth",(function(){return i})),s.d(t,"setScrollbarWidth",(function(){return c})),s.d(t,"isBodyOverflowing",(function(){return l})),s.d(t,"getOriginalBodyPadding",(function(){return o})),s.d(t,"conditionallyUpdateScrollbar",(function(){return d})),s.d(t,"setGlobalCssModule",(function(){return m})),s.d(t,"mapToCssModules",(function(){return u})),s.d(t,"omit",(function(){return j})),s.d(t,"pick",(function(){return b})),s.d(t,"warnOnce",(function(){return x})),s.d(t,"deprecated",(function(){return p})),s.d(t,"DOMElement",(function(){return O})),s.d(t,"targetPropType",(function(){return g})),s.d(t,"tagPropType",(function(){return N})),s.d(t,"TransitionTimeouts",(function(){return y})),s.d(t,"TransitionPropTypeKeys",(function(){return v})),s.d(t,"TransitionStatuses",(function(){return w})),s.d(t,"keyCodes",(function(){return T})),s.d(t,"PopperPlacements",(function(){return E})),s.d(t,"canUseDOM",(function(){return M})),s.d(t,"isReactRefObj",(function(){return k})),s.d(t,"toNumber",(function(){return P})),s.d(t,"isObject",(function(){return A})),s.d(t,"isFunction",(function(){return S})),s.d(t,"findDOMElements",(function(){return I})),s.d(t,"isArrayOrNodeList",(function(){return L})),s.d(t,"getTarget",(function(){return G})),s.d(t,"defaultToggleEvents",(function(){return D})),s.d(t,"addMultipleEventListeners",(function(){return R})),s.d(t,"focusableElements",(function(){return q}));var a,r=s(7),n=s.n(r);function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function c(e){document.body.style.paddingRight=e>0?e+"px":null}function l(){return document.body.clientWidth<window.innerWidth}function o(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function d(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],s=t?parseInt(t.style.paddingRight||0,10):0;l()&&c(s+e)}function m(e){a=e}function u(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function j(e,t){var s={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(s[a]=e[a])})),s}function b(e,t){for(var s,a=Array.isArray(t)?t:[t],r=a.length,n={};r>0;)n[s=a[r-=1]]=e[s];return n}var h={};function x(e){h[e]||("undefined"!==typeof console&&console.error(e),h[e]=!0)}function p(e,t){return function(s,a,r){null!==s[a]&&"undefined"!==typeof s[a]&&x('"'+a+'" property of "'+r+'" has been deprecated.\n'+t);for(var n=arguments.length,i=new Array(n>3?n-3:0),c=3;c<n;c++)i[c-3]=arguments[c];return e.apply(void 0,[s,a,r].concat(i))}}var f="object"===typeof window&&window.Element||function(){};function O(e,t,s){if(!(e[t]instanceof f))return new Error("Invalid prop `"+t+"` supplied to `"+s+"`. Expected prop to be an instance of Element. Validation failed.")}var g=n.a.oneOfType([n.a.string,n.a.func,O,n.a.shape({current:n.a.any})]),N=n.a.oneOfType([n.a.func,n.a.string,n.a.shape({$$typeof:n.a.symbol,render:n.a.func}),n.a.arrayOf(n.a.oneOfType([n.a.func,n.a.string,n.a.shape({$$typeof:n.a.symbol,render:n.a.func})]))]),y={Fade:150,Collapse:350,Modal:300,Carousel:600},v=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],w={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},T={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},E=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],M=!("undefined"===typeof window||!window.document||!window.document.createElement);function k(e){return!(!e||"object"!==typeof e)&&"current"in e}function C(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function P(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===C(e))return NaN;if(A(e)){var s="function"===typeof e.valueOf?e.valueOf():e;e=A(s)?""+s:s}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var a=/^0b[01]+$/i.test(e);return a||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),a?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function A(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function S(e){if(!A(e))return!1;var t=C(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function I(e){if(k(e))return e.current;if(S(e))return e();if("string"===typeof e&&M){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function L(e){return null!==e&&(Array.isArray(e)||M&&"number"===typeof e.length)}function G(e,t){var s=I(e);return t?L(s)?s:null===s?[]:[s]:L(s)?s[0]:s}var D=["touchstart","click"];function R(e,t,s,a){var r=e;L(r)||(r=[r]);var n=s;if("string"===typeof n&&(n=n.split(/\s+/)),!L(r)||"function"!==typeof t||!Array.isArray(n))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(n,(function(e){Array.prototype.forEach.call(r,(function(s){s.addEventListener(e,t,a)}))})),function(){Array.prototype.forEach.call(n,(function(e){Array.prototype.forEach.call(r,(function(s){s.removeEventListener(e,t,a)}))}))}}var q=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},73:function(e,t,s){"use strict";var a=s(3),r=s(8),n=s(0),i=s.n(n),c=s(7),l=s.n(c),o=s(43),d=s.n(o),m=s(44),u={tag:m.tagPropType,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},j=function(e){var t=e.className,s=e.cssModule,n=e.fluid,c=e.tag,l=Object(r.a)(e,["className","cssModule","fluid","tag"]),o="container";!0===n?o="container-fluid":n&&(o="container-"+n);var u=Object(m.mapToCssModules)(d()(t,o),s);return i.a.createElement(c,Object(a.a)({},l,{className:u}))};j.propTypes=u,j.defaultProps={tag:"div"},t.a=j},75:function(e,t,s){"use strict";var a=s(3),r=s(8),n=s(0),i=s.n(n),c=s(7),l=s.n(c),o=s(43),d=s.n(o),m=s(44),u=l.a.oneOfType([l.a.number,l.a.string]),j={tag:m.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var t=e.className,s=e.cssModule,n=e.noGutters,c=e.tag,l=e.form,o=e.widths,u=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),j=[];o.forEach((function(t,s){var a=e[t];if(delete u[t],a){var r=!s;j.push(r?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var b=Object(m.mapToCssModules)(d()(t,n?"no-gutters":null,l?"form-row":"row",j),s);return i.a.createElement(c,Object(a.a)({},u,{className:b}))};h.propTypes=j,h.defaultProps=b,t.a=h},76:function(e,t,s){"use strict";var a=s(3),r=s(8),n=s(0),i=s.n(n),c=s(7),l=s.n(c),o=s(43),d=s.n(o),m=s(44),u=l.a.oneOfType([l.a.number,l.a.string]),j=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:u,offset:u})]),b={tag:m.tagPropType,xs:j,sm:j,md:j,lg:j,xl:j,className:l.a.string,cssModule:l.a.object,widths:l.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},x=function(e,t,s){return!0===s||""===s?e?"col":"col-"+t:"auto"===s?e?"col-auto":"col-"+t+"-auto":e?"col-"+s:"col-"+t+"-"+s},p=function(e){var t=e.className,s=e.cssModule,n=e.widths,c=e.tag,l=Object(r.a)(e,["className","cssModule","widths","tag"]),o=[];n.forEach((function(t,a){var r=e[t];if(delete l[t],r||""===r){var n=!a;if(Object(m.isObject)(r)){var i,c=n?"-":"-"+t+"-",u=x(n,t,r.size);o.push(Object(m.mapToCssModules)(d()(((i={})[u]=r.size||""===r.size,i["order"+c+r.order]=r.order||0===r.order,i["offset"+c+r.offset]=r.offset||0===r.offset,i)),s))}else{var j=x(n,t,r);o.push(j)}}})),o.length||o.push("col");var u=Object(m.mapToCssModules)(d()(t,o),s);return i.a.createElement(c,Object(a.a)({},l,{className:u}))};p.propTypes=b,p.defaultProps=h,t.a=p},83:function(e,t,s){"use strict";var a=s(9),r=s(10),n=s(12),i=s(11),c=s(0),l=s.n(c),o=s(13),d=s(73),m=s(75),u=s(76),j=s(103),b=s(104),h=s(1),x=function(e){Object(n.a)(s,e);var t=Object(i.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props.pathItems.length;return Object(h.jsx)(l.a.Fragment,{children:Object(h.jsx)("section",{className:"bg-half bg-light d-table w-100",children:Object(h.jsx)(d.a,{children:Object(h.jsx)(m.a,{className:"justify-content-center",children:Object(h.jsx)(u.a,{lg:"12",className:"text-center",children:Object(h.jsxs)("div",{className:"page-next-level",children:[this.props.title?Object(h.jsxs)("h4",{className:"title",children:[" ",this.props.title]}):null,this.props.children?this.props.children:null,Object(h.jsx)("div",{className:"page-next",children:Object(h.jsx)("nav",{className:"d-inline-block",children:Object(h.jsx)(j.a,{"aria-label":"breadcrumb",listClassName:"bg-white rounded shadow mb-0",children:this.props.pathItems.map((function(t,s){return t.id!==e?Object(h.jsx)(b.a,{children:Object(h.jsx)(o.b,{to:t.link,className:"text-uppercase fw-bold text-dark me-1",children:t.name})},s):Object(h.jsx)(b.a,{active:!0,"aria-current":"page",children:t.name},s)}))})})})]})})})})})})}}]),s}(c.Component);t.a=x},836:function(e,t,s){"use strict";s.r(t);var a=s(9),r=s(10),n=s(12),i=s(11),c=s(0),l=s.n(c),o=s(73),d=s(75),m=s(76),u=s(13),j=s(83),b=s(1),h=function(e){Object(n.a)(s,e);var t=Object(i.a)(s);function s(e){var r;return Object(a.a)(this,s),(r=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},r.state={pathItems:[{id:1,name:"Landrick",link:"/index"},{id:2,name:"Help Center",link:"#"},{id:3,name:"Guides"}]},r}return Object(r.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(b.jsxs)(l.a.Fragment,{children:[Object(b.jsx)(j.a,{title:"Guides & Support",pathItems:this.state.pathItems}),Object(b.jsxs)("section",{className:"section",children:[Object(b.jsx)(o.a,{children:Object(b.jsxs)(d.a,{children:[Object(b.jsxs)(m.a,{lg:4,md:6,xs:12,children:[Object(b.jsx)("h5",{children:"Getting started"}),Object(b.jsxs)("ul",{className:"list-unstyled mt-4 mb-0",children:[Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Deciding to purchase"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"List your space"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Landing an experience or adventure"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Top uses questions"]})})]})]}),Object(b.jsxs)(m.a,{lg:4,md:6,xs:12,className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:[Object(b.jsx)("h5",{children:"Your calendar"}),Object(b.jsxs)("ul",{className:"list-unstyled mt-4 mb-0",children:[Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Pricing & availability"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Booking settings"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Responding to enquiries & requests"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Snoozing or deactivating your listing"]})})]})]}),Object(b.jsxs)(m.a,{lg:4,md:6,xs:12,className:"mt-4 mt-lg-0 pt-2 pt-lg-0 pt-2",children:[Object(b.jsx)("h5",{children:"Your listings"}),Object(b.jsxs)("ul",{className:"list-unstyled mt-4 mb-0",children:[Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Updating your listing"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Neighbourhoods"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Listing photos & photography"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Landrick Plus"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"API-connected software"]})})]})]}),Object(b.jsxs)(m.a,{lg:4,md:6,xs:12,className:"mt-4 pt-2",children:[Object(b.jsx)("h5",{children:"How payouts work"}),Object(b.jsxs)("ul",{className:"list-unstyled mt-4 mb-0",children:[Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Getting paid"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Adding payout info"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Your payout status"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Donations"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Taxes"]})})]})]}),Object(b.jsxs)(m.a,{lg:4,md:6,xs:12,className:"mt-4 pt-2",children:[Object(b.jsx)("h5",{children:"Your reservations"}),Object(b.jsxs)("ul",{className:"list-unstyled mt-4 mb-0",children:[Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Landrick safely"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Landrick Experiences and Adventures"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Changing a reservation"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Cancelling a reservation"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Long-term reservations"]})})]})]}),Object(b.jsxs)(m.a,{lg:4,md:6,xs:12,className:"mt-4 pt-2",children:[Object(b.jsx)("h5",{children:"Reservation help"}),Object(b.jsxs)("ul",{className:"list-unstyled mt-4 mb-0",children:[Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Help with a reservation or guest"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Guest cancellations"]})})]})]}),Object(b.jsxs)(m.a,{lg:4,md:6,xs:12,className:"mt-4 pt-2",children:[Object(b.jsx)("h5",{children:"Your account"}),Object(b.jsxs)("ul",{className:"list-unstyled mt-4 mb-0",children:[Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Your profile"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Account security"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Identification & verifications"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Reviews"]})}),Object(b.jsx)("li",{className:"mt-2",children:Object(b.jsxs)(u.b,{to:"#",className:"text-muted",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-right text-primary me-2"}),"Superhost status"]})})]})]})]})}),Object(b.jsx)(o.a,{className:"mt-100 mt-60",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(m.a,{lg:6,md:6,xs:12,children:Object(b.jsxs)("div",{className:"d-flex align-items-center features feature-clean shadow rounded p-4",children:[Object(b.jsx)("div",{className:"icons text-primary text-center",children:Object(b.jsx)("i",{className:"uil uil-envelope-check d-block rounded h3 mb-0"})}),Object(b.jsxs)("div",{className:"flex-1 content ms-4",children:[Object(b.jsx)("h5",{className:"mb-1",children:Object(b.jsx)(u.b,{to:"#",className:"text-dark",children:"Get in Touch !"})}),Object(b.jsx)("p",{className:"text-muted mb-0",children:"This is required when, for text is not yet available."}),Object(b.jsx)("div",{className:"mt-2",children:Object(b.jsx)(u.b,{to:"#",className:"btn btn-sm btn-soft-primary",children:"Submit a Request"})})]})]})}),Object(b.jsx)(m.a,{lg:6,md:6,xs:12,className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(b.jsxs)("div",{className:"d-flex align-items-center features feature-clean shadow rounded p-4",children:[Object(b.jsx)("div",{className:"icons text-primary text-center",children:Object(b.jsx)("i",{className:"uil uil-webcam d-block rounded h3 mb-0"})}),Object(b.jsxs)("div",{className:"flex-1 content ms-4",children:[Object(b.jsx)("h5",{className:"mb-1",children:Object(b.jsx)(u.b,{to:"#",className:"text-dark",children:"Start a Meeting"})}),Object(b.jsx)("p",{className:"text-muted mb-0",children:"This is required when, for text is not yet available."}),Object(b.jsx)("div",{className:"mt-2",children:Object(b.jsx)(u.b,{to:"#",className:"btn btn-sm btn-soft-primary",children:"Start Video Chat"})})]})]})})]})})]})]})}}]),s}(c.Component);t.default=h}}]);
//# sourceMappingURL=176.5554ff62.chunk.js.map