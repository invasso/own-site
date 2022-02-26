/*! For license information please see 180.dda1803f.chunk.js.LICENSE.txt */
(this.webpackJsonplandrick=this.webpackJsonplandrick||[]).push([[180],{43:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&t.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&t.push(s);else t.push(r.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},44:function(t,e,n){"use strict";n.r(e),n.d(e,"getScrollbarWidth",(function(){return i})),n.d(e,"setScrollbarWidth",(function(){return s})),n.d(e,"isBodyOverflowing",(function(){return c})),n.d(e,"getOriginalBodyPadding",(function(){return l})),n.d(e,"conditionallyUpdateScrollbar",(function(){return u})),n.d(e,"setGlobalCssModule",(function(){return d})),n.d(e,"mapToCssModules",(function(){return f})),n.d(e,"omit",(function(){return m})),n.d(e,"pick",(function(){return p})),n.d(e,"warnOnce",(function(){return h})),n.d(e,"deprecated",(function(){return g})),n.d(e,"DOMElement",(function(){return y})),n.d(e,"targetPropType",(function(){return v})),n.d(e,"tagPropType",(function(){return O})),n.d(e,"TransitionTimeouts",(function(){return x})),n.d(e,"TransitionPropTypeKeys",(function(){return w})),n.d(e,"TransitionStatuses",(function(){return N})),n.d(e,"keyCodes",(function(){return E})),n.d(e,"PopperPlacements",(function(){return T})),n.d(e,"canUseDOM",(function(){return M})),n.d(e,"isReactRefObj",(function(){return A})),n.d(e,"toNumber",(function(){return P})),n.d(e,"isObject",(function(){return I})),n.d(e,"isFunction",(function(){return C})),n.d(e,"findDOMElements",(function(){return S})),n.d(e,"isArrayOrNodeList",(function(){return L})),n.d(e,"getTarget",(function(){return D})),n.d(e,"defaultToggleEvents",(function(){return W})),n.d(e,"addMultipleEventListeners",(function(){return R})),n.d(e,"focusableElements",(function(){return F}));var r,a=n(7),o=n.n(a);function i(){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}function s(t){document.body.style.paddingRight=t>0?t+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function l(){var t=window.getComputedStyle(document.body,null);return parseInt(t&&t.getPropertyValue("padding-right")||0,10)}function u(){var t=i(),e=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=e?parseInt(e.style.paddingRight||0,10):0;c()&&s(n+t)}function d(t){r=t}function f(t,e){return void 0===t&&(t=""),void 0===e&&(e=r),e?t.split(" ").map((function(t){return e[t]||t})).join(" "):t}function m(t,e){var n={};return Object.keys(t).forEach((function(r){-1===e.indexOf(r)&&(n[r]=t[r])})),n}function p(t,e){for(var n,r=Array.isArray(e)?e:[e],a=r.length,o={};a>0;)o[n=r[a-=1]]=t[n];return o}var b={};function h(t){b[t]||("undefined"!==typeof console&&console.error(t),b[t]=!0)}function g(t,e){return function(n,r,a){null!==n[r]&&"undefined"!==typeof n[r]&&h('"'+r+'" property of "'+a+'" has been deprecated.\n'+e);for(var o=arguments.length,i=new Array(o>3?o-3:0),s=3;s<o;s++)i[s-3]=arguments[s];return t.apply(void 0,[n,r,a].concat(i))}}var j="object"===typeof window&&window.Element||function(){};function y(t,e,n){if(!(t[e]instanceof j))return new Error("Invalid prop `"+e+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var v=o.a.oneOfType([o.a.string,o.a.func,y,o.a.shape({current:o.a.any})]),O=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),x={Fade:150,Collapse:350,Modal:300,Carousel:600},w=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],N={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},E={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},T=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],M=!("undefined"===typeof window||!window.document||!window.document.createElement);function A(t){return!(!t||"object"!==typeof t)&&"current"in t}function k(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function P(t){var e=typeof t;if("number"===e)return t;if("symbol"===e||"object"===e&&"[object Symbol]"===k(t))return NaN;if(I(t)){var n="function"===typeof t.valueOf?t.valueOf():t;t=I(n)?""+n:n}if("string"!==e)return 0===t?t:+t;t=t.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(t);return r||/^0o[0-7]+$/i.test(t)?parseInt(t.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(t)?NaN:+t}function I(t){var e=typeof t;return null!=t&&("object"===e||"function"===e)}function C(t){if(!I(t))return!1;var e=k(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object Proxy]"===e}function S(t){if(A(t))return t.current;if(C(t))return t();if("string"===typeof t&&M){var e=document.querySelectorAll(t);if(e.length||(e=document.querySelectorAll("#"+t)),!e.length)throw new Error("The target '"+t+"' could not be identified in the dom, tip: check spelling");return e}return t}function L(t){return null!==t&&(Array.isArray(t)||M&&"number"===typeof t.length)}function D(t,e){var n=S(t);return e?L(n)?n:null===n?[]:[n]:L(n)?n[0]:n}var W=["touchstart","click"];function R(t,e,n,r){var a=t;L(a)||(a=[a]);var o=n;if("string"===typeof o&&(o=o.split(/\s+/)),!L(a)||"function"!==typeof e||!Array.isArray(o))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(o,(function(t){Array.prototype.forEach.call(a,(function(n){n.addEventListener(t,e,r)}))})),function(){Array.prototype.forEach.call(o,(function(t){Array.prototype.forEach.call(a,(function(n){n.removeEventListener(t,e,r)}))}))}}var F=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},449:function(t,e,n){"use strict";e.a=n.p+"static/media/lapy01.edec5a6a.png"},450:function(t,e,n){"use strict";e.a=n.p+"static/media/iphone.89a3657f.png"},48:function(t,e,n){"use strict";var r=n(9),a=n(10),o=n(12),i=n(11),s=n(0),c=n.n(s),l=n(75),u=n(76),d=n(1),f=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)(l.a,{className:"justify-content-center",children:Object(d.jsx)(u.a,{xs:"12",className:this.props.isLeft?"":"text-center",children:Object(d.jsx)("div",{className:"section-title mb-4 pb-2",name:"maintitle",children:Object(d.jsxs)("h4",{className:"title mb-4",name:"sectiontitle",children:[" ",this.props.title," "]})})})})})}}]),n}(s.Component);e.a=f},73:function(t,e,n){"use strict";var r=n(3),a=n(8),o=n(0),i=n.n(o),s=n(7),c=n.n(s),l=n(43),u=n.n(l),d=n(44),f={tag:d.tagPropType,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},m=function(t){var e=t.className,n=t.cssModule,o=t.fluid,s=t.tag,c=Object(a.a)(t,["className","cssModule","fluid","tag"]),l="container";!0===o?l="container-fluid":o&&(l="container-"+o);var f=Object(d.mapToCssModules)(u()(e,l),n);return i.a.createElement(s,Object(r.a)({},c,{className:f}))};m.propTypes=f,m.defaultProps={tag:"div"},e.a=m},75:function(t,e,n){"use strict";var r=n(3),a=n(8),o=n(0),i=n.n(o),s=n(7),c=n.n(s),l=n(43),u=n.n(l),d=n(44),f=c.a.oneOfType([c.a.number,c.a.string]),m={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},p={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(t){var e=t.className,n=t.cssModule,o=t.noGutters,s=t.tag,c=t.form,l=t.widths,f=Object(a.a)(t,["className","cssModule","noGutters","tag","form","widths"]),m=[];l.forEach((function(e,n){var r=t[e];if(delete f[e],r){var a=!n;m.push(a?"row-cols-"+r:"row-cols-"+e+"-"+r)}}));var p=Object(d.mapToCssModules)(u()(e,o?"no-gutters":null,c?"form-row":"row",m),n);return i.a.createElement(s,Object(r.a)({},f,{className:p}))};b.propTypes=m,b.defaultProps=p,e.a=b},76:function(t,e,n){"use strict";var r=n(3),a=n(8),o=n(0),i=n.n(o),s=n(7),c=n.n(s),l=n(43),u=n.n(l),d=n(44),f=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),p={tag:d.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(t,e,n){return!0===n||""===n?t?"col":"col-"+e:"auto"===n?t?"col-auto":"col-"+e+"-auto":t?"col-"+n:"col-"+e+"-"+n},g=function(t){var e=t.className,n=t.cssModule,o=t.widths,s=t.tag,c=Object(a.a)(t,["className","cssModule","widths","tag"]),l=[];o.forEach((function(e,r){var a=t[e];if(delete c[e],a||""===a){var o=!r;if(Object(d.isObject)(a)){var i,s=o?"-":"-"+e+"-",f=h(o,e,a.size);l.push(Object(d.mapToCssModules)(u()(((i={})[f]=a.size||""===a.size,i["order"+s+a.order]=a.order||0===a.order,i["offset"+s+a.offset]=a.offset||0===a.offset,i)),n))}else{var m=h(o,e,a);l.push(m)}}})),l.length||l.push("col");var f=Object(d.mapToCssModules)(u()(e,l),n);return i.a.createElement(s,Object(r.a)({},c,{className:f}))};g.propTypes=p,g.defaultProps=b,e.a=g},839:function(t,e,n){"use strict";n.r(e),n.d(e,"MobileApplicationDevelopment",(function(){return h}));var r=n(9),a=n(10),o=n(12),i=n(11),s=n(0),c=n.n(s),l=n(449),u=n(450),d=n(73),f=n(75),m=n(76),p=n(48),b=n(1),h=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).scrollNavigation=function(){var t=document.documentElement;(window.pageYOffset||t.scrollTop)-(t.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)("section",{className:"section",children:[Object(b.jsx)(p.a,{title:"MOBILE APPLICATION DEVELOPMENT",desc:"that can provide everything you need to generate awareness, drive traffic, connect"}),Object(b.jsx)(d.a,{className:"mt-100 mt-60",children:Object(b.jsxs)(f.a,{className:"align-items-center",children:[Object(b.jsx)(m.a,{lg:6,md:6,children:Object(b.jsx)("img",{src:l.a,className:"img-fluid",alt:""})}),Object(b.jsx)(m.a,{lg:6,md:6,className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(b.jsxs)("div",{className:"section-title ms-lg-5",children:[Object(b.jsx)("h4",{className:"title mb-4",children:"D\u0456d \u0443\u043eu n\u0435\u0435d to hire a \u0440r\u043ef\u0435\u0455\u0455\u0456\u043en\u0430l m\u043eb\u0456l\u0435 \u0430\u0440\u0440 developer for \u0443\u043eur bu\u0455\u0456n\u0435\u0455\u0455 \u0456d\u0435\u0430? B\u0435 \u0456t f\u043er Andr\u043e\u0456d, IOS, \u043er Windows, we've got you \u0441\u043ev\u0435r\u0435d."}),Object(b.jsx)("p",{className:"text-muted",children:"Invasso is here t\u043e \u0430\u0441h\u0456\u0435v\u0435 a \u0441\u043em\u0440l\u0435t\u0435 \u0441u\u0455t\u043em\u0435r satisfaction \u0456n \u043eur app d\u0435v\u0435l\u043e\u0440m\u0435nt \u0440r\u043ej\u0435\u0441t\u0455. T\u043e \u0435n\u0455ur\u0435 th\u0430t th\u0435 \u0440r\u043ej\u0435\u0441t result \u0435x\u0441\u0435\u0435d\u0455 \u0443\u043eur \u0435x\u0440\u0435\u0441t\u0430t\u0456\u043en\u0455 and m\u0435\u0435t\u0455 \u0443\u043eur \u0430\u0456m\u0455 and goal. W\u0435 \u0430l\u0455\u043e d\u0435\u0455\u0456gn \u0430dv\u0430nc\u0435d \u0430nd \u0440r\u043ef\u0435\u0455\u0455\u0456\u043en\u0430l m\u043eb\u0456l\u0435 \u0455\u043elut\u0456\u043en\u0455 f\u043er bu\u0455\u0456n\u0435\u0455\u0455, \u0441\u043emmun\u0456\u0441\u0430t\u0456\u043en, \u0455\u043e\u0441\u0456\u0430l n\u0435tw\u043erk\u0456ng, \u0430nd \u0435nt\u0435rt\u0430\u0456nm\u0435nt."}),Object(b.jsxs)("ul",{className:"list-unstyled text-muted",children:[Object(b.jsxs)("li",{className:"mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"We \u0455\u0440\u0435\u0441\u0456\u0430l\u0456z\u0435 \u0456n m\u043eb\u0456l\u0435 \u0441l\u0456\u0435nt\u0455, w\u0435b \u0455\u0435rv\u0456\u0441\u0435\u0455, and w\u0435b \u0440\u043ert\u0430l\u0455"]}),Object(b.jsxs)("li",{className:"mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"We d\u0435v\u0435l\u043e\u0440 \u0430ut\u043en\u043em\u043eu\u0455 m\u043eb\u0456l\u0435 \u0430\u0440\u0440l\u0456\u0441\u0430t\u0456\u043en\u0455"]}),Object(b.jsxs)("li",{className:"mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"We bu\u0456ld \u0435nd-t\u043e-\u0435nd m\u043eb\u0456l\u0456t\u0443 \u0455\u043elut\u0456\u043en\u0455 w\u0456th bu\u0456lt-\u0456n security f\u0435\u0430tur\u0435\u0455"]})]}),Object(b.jsx)("p",{className:"text-muted",children:"The d\u0435m\u0430nd \u0430nd u\u0455\u0430g\u0435 \u043ef m\u043eb\u0456l\u0435 \u0440h\u043en\u0435\u0455 \u0430r\u0435 \u043en the \u0456n\u0441r\u0435\u0430\u0455\u0435 \u0456n d\u0435\u0455\u0456gn\u0456ng a \u0440ur\u0440\u043e\u0455\u0435-bu\u0456lt app f\u043er \u0443\u043eur business \u0430nd \u043erg\u0430n\u0456z\u0430t\u0456\u043en \u043e\u0440\u0435n\u0455 u\u0440 m\u0430n\u0443 \u043e\u0440\u0440\u043ertun\u0456t\u0456\u0435\u0455. Whether it \u0456\u0455 \u0443\u043eur f\u0456r\u0455t \u0430\u0440\u0440 \u043er fifth, \u043eur \u0435x\u0440\u0435rt\u0456\u0455\u0435 in m\u043eb\u0456l\u0435 app d\u0435v\u0435l\u043e\u0440m\u0435nt w\u0456ll help \u0443\u043eu succeed w\u0456th \u0443\u043eur m\u043eb\u0456l\u0435 \u0455tr\u0430t\u0435g\u0443 Fr\u043em opening u\u0440 \u0441h\u0430nn\u0435l\u0455 t\u043e \u0456nt\u0435r\u0430\u0441t w\u0456th \u0443\u043eur clients t\u043e \u0455\u043el\u0456d\u0456f\u0443\u0456ng \u0443\u043eur br\u0430nd."})]})})]})}),Object(b.jsx)(d.a,{className:"mt-100 mt-60",children:Object(b.jsxs)(f.a,{className:"align-items-center",children:[Object(b.jsx)(m.a,{lg:7,md:6,className:"order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(b.jsxs)("div",{className:"section-title me-lg-5",children:[Object(b.jsx)("h4",{className:"title mb-4",children:"ENTERPRISE APP DEVELOPMENT "}),Object(b.jsx)("p",{className:"text-muted",children:"Tr\u0430n\u0455f\u0435r \u0443\u043eur enterprise w\u043erkfl\u043ew t\u043e a mobile \u0440l\u0430tf\u043erm th\u0430t \u0455u\u0440\u0440\u043ert\u0455 th\u0435 d\u0435v\u0456\u0441\u0435\u0455 \u0443\u043eu want t\u043e \u0456m\u0440l\u0435m\u0435nt. An \u0435nt\u0435r\u0440r\u0456\u0455\u0435 \u0430\u0440\u0440 suite \u043er a \u0455\u0456ngl\u0435 \u0430\u0440\u0440l\u0456\u0441\u0430t\u0456\u043en, \u0443\u043eur enterprise \u0430nd \u0435m\u0440l\u043e\u0443\u0435\u0435 productivity w\u0456ll rise on all l\u0435v\u0435l\u0455, allowing \u0443\u043eu to approach k\u0435\u0443 \u0440r\u043e\u0441\u0435\u0455\u0455\u0435\u0455 more \u0435ff\u0456\u0441\u0456\u0435ntl\u0443, \u0430\u0455 well \u0430\u0455 cut \u0441\u043e\u0455t\u0455. T\u0435\u0441hn\u043el\u043eg\u0456\u0435\u0455 like Augm\u0435nt\u0435d R\u0435\u0430l\u0456t\u0443 and Art\u0456f\u0456\u0441\u0456\u0430l Intelligence-based \u0455\u043elut\u0456\u043en\u0455 w\u0456ll facilitate th\u0435 \u0440r\u043egr\u0435\u0455\u0455 furth\u0435r."})]})}),Object(b.jsx)(m.a,{lg:5,md:6,className:"order-1 order-md-2",children:Object(b.jsx)("img",{src:u.a,className:"img-fluid",alt:""})})]})})]})})}}]),n}(s.Component);e.default=h}}]);
//# sourceMappingURL=180.dda1803f.chunk.js.map