(this.webpackJsonplandrick=this.webpackJsonplandrick||[]).push([[132],{258:function(e,t,i){"use strict";t.a=i.p+"static/media/2.183f34cb.jpg"},259:function(e,t,i){"use strict";t.a=i.p+"static/media/3.1a057574.jpg"},264:function(e,t,i){"use strict";t.a=i.p+"static/media/1.812bb19e.jpg"},265:function(e,t,i){"use strict";t.a=i.p+"static/media/4.e0c71c30.jpg"},437:function(e,t,i){"use strict";t.a=i.p+"static/media/6.6775924a.jpg"},440:function(e,t,i){"use strict";t.a=i.p+"static/media/5.2461b67b.jpg"},441:function(e,t,i){"use strict";t.a=i.p+"static/media/7.340868a6.jpg"},445:function(e,t,i){"use strict";t.a=i.p+"static/media/8.9d3c67af.jpg"},459:function(e,t,i){"use strict";t.a=i.p+"static/media/9.4edb435e.jpg"},478:function(e,t,i){"use strict";t.a=i.p+"static/media/10.7629c7ed.jpg"},505:function(e,t,i){"use strict";t.a=i.p+"static/media/12.6b500bce.jpg"},547:function(e,t,i){"use strict";t.a=i.p+"static/media/11.ab814eb7.jpg"},822:function(e,t,i){"use strict";i.r(t);var a=i(9),n=i(10),s=i(12),c=i(11),r=i(0),l=i.n(r),o=i(73),d=i(75),h=i(76),g=i(62),m=i(67),j=i(157),u=i(158),b=i(159),p=i(13),x=i(519),f=(i(484),i(83)),O=i(264),v=i(258),y=i(259),k=i(265),N=i(440),C=i(437),w=i(441),B=i(445),P=i(459),D=i(478),I=i(547),A=i(505),S=i(1),L=[O.a,v.a,y.a,k.a,N.a,C.a,w.a,B.a,P.a,D.a,I.a,A.a],M=function(e){Object(s.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(a.a)(this,i),(n=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement,t=(window.pageYOffset||e.scrollTop)-(e.clientTop||0),i=document.getElementById("topnav");t>80&&i?i.classList.add("nav-sticky"):i&&i.classList.remove("nav-sticky")},n.state={pathItems:[{id:1,name:"Landrick",link:"/index"},{id:2,name:"Pages",link:"#"},{id:3,name:"Work",link:"#"},{id:4,name:"Grid"}],works:[{image:O.a,title:"Iphone mockup",subtitle:"Branding",category:"Branding"},{image:v.a,title:"Mockup Collection",subtitle:"Mockup",category:"Designing"},{image:y.a,title:"Abstract images",subtitle:"Abstract",category:"Photography"},{image:k.a,title:"Yellow bg with Books",subtitle:"Company V-card",category:"Development"},{image:N.a,title:"Company V-card",subtitle:"V-card",category:"Branding"},{image:C.a,title:"Mockup box with paints",subtitle:"Photography",category:"Branding"},{image:w.a,title:"Coffee cup",subtitle:"Cups",category:"Designing"},{image:B.a,title:"Pen and article",subtitle:"Article",category:"Development"},{image:P.a,title:"White mockup box",subtitle:"Color",category:"Photography"},{image:D.a,title:"Logo Vectors",subtitle:"Logos",category:"Photography"},{image:I.a,title:"Black and white T-shirt",subtitle:"Clothes",category:"Branding"},{image:A.a,title:"Yellow bg with cellphone",subtitle:"Cellphone",category:"Branding"}],displayCategory:"All",photoIndex:0,isOpen:!1},n}return Object(n.a)(i,[{key:"setCategory",value:function(e){this.setState({displayCategory:e})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){var e=this,t=this.state,i=t.photoIndex,a=t.isOpen;return Object(S.jsxs)(l.a.Fragment,{children:[Object(S.jsx)(f.a,{title:"Work Grid",pathItems:this.state.pathItems}),Object(S.jsx)("div",{className:"position-relative",children:Object(S.jsx)("div",{className:"shape overflow-hidden text-white",children:Object(S.jsx)("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(S.jsx)("path",{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"})})})}),Object(S.jsx)("section",{className:"section",children:Object(S.jsxs)(o.a,{children:[Object(S.jsx)(d.a,{className:"justify-content-center",children:Object(S.jsx)("div",{className:"col-12 filters-group-wrap",children:Object(S.jsx)("div",{className:"filters-group",children:Object(S.jsxs)("ul",{className:"container-filter list-inline mb-0 filter-options text-center",id:"filter",children:[Object(S.jsx)("li",{onClick:function(){return e.setCategory("All")},className:"All"===this.state.displayCategory?"list-inline-item categories-name border text-dark rounded active":"list-inline-item categories-name border text-dark rounded",children:"All"})," ",Object(S.jsx)("li",{onClick:function(){return e.setCategory("Branding")},className:"Branding"===this.state.displayCategory?"list-inline-item categories-name border text-dark rounded active":"list-inline-item categories-name border text-dark rounded",children:"Branding"})," ",Object(S.jsx)("li",{onClick:function(){return e.setCategory("Designing")},className:"Designing"===this.state.displayCategory?"list-inline-item categories-name border text-dark rounded active":"list-inline-item categories-name border text-dark rounded",children:"Designing"})," ",Object(S.jsx)("li",{onClick:function(){return e.setCategory("Photography")},className:"Photography"===this.state.displayCategory?"list-inline-item categories-name border text-dark rounded active":"list-inline-item categories-name border text-dark rounded",children:"Photography"})," ",Object(S.jsx)("li",{onClick:function(){return e.setCategory("Development")},className:"Development"===this.state.displayCategory?"list-inline-item categories-name border text-dark rounded active":"list-inline-item categories-name border text-dark rounded",children:"Development"})]})})})}),Object(S.jsxs)(d.a,{className:"projects-wrapper",children:[this.state.works.filter((function(t){var i=t.category;return e.state.displayCategory===i||"All"===e.state.displayCategory})).map((function(t,i){var a=t.title,n=t.image,s=t.subtitle;return Object(S.jsx)(h.a,{lg:4,md:6,xs:12,className:"mt-4 pt-2 branding",children:Object(S.jsx)(g.a,{className:"border-0 work-container work-grid position-relative d-block overflow-hidden rounded",children:Object(S.jsxs)(m.a,{className:"p-0",children:[Object(S.jsx)(p.b,{className:"mfp-image d-inline-block",to:"#",onClick:function(t){t.preventDefault(),e.setState({isOpen:!0,photoIndex:i})},title:"",children:Object(S.jsx)("img",{src:n,className:"img-fluid",alt:"work"})}),Object(S.jsxs)("div",{className:"content bg-white p-3",children:[Object(S.jsx)("h5",{className:"mb-0",children:Object(S.jsx)(p.b,{to:"page-work-detail",className:"text-dark title",children:a})}),Object(S.jsx)("h6",{className:"text-muted tag mb-0",children:s})]})]})})},i)})),a&&Object(S.jsx)(x.a,{mainSrc:L[i],nextSrc:L[(i+1)%L.length],prevSrc:L[(i+L.length-1)%L.length],imagePadding:100,onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(i+L.length-1)%L.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(i+1)%L.length})}}),Object(S.jsx)(h.a,{xs:12,className:"mt-4 pt-2",children:Object(S.jsxs)(j.a,{listClassName:"justify-content-center mb-0",children:[Object(S.jsx)(u.a,{children:Object(S.jsx)(b.a,{href:"#","aria-label":"Previous",children:"Prev"})}),Object(S.jsx)(u.a,{active:!0,children:Object(S.jsx)(b.a,{href:"#",children:"1"})}),Object(S.jsx)(u.a,{children:Object(S.jsx)(b.a,{href:"#",children:"2"})}),Object(S.jsx)(u.a,{children:Object(S.jsx)(b.a,{href:"#",children:"3"})}),Object(S.jsx)(u.a,{children:Object(S.jsx)(b.a,{href:"#","aria-label":"Next",children:"Next"})})]})})]})]})})]})}}]),i}(r.Component);t.default=M},83:function(e,t,i){"use strict";var a=i(9),n=i(10),s=i(12),c=i(11),r=i(0),l=i.n(r),o=i(13),d=i(73),h=i(75),g=i(76),m=i(103),j=i(104),u=i(1),b=function(e){Object(s.a)(i,e);var t=Object(c.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(n.a)(i,[{key:"render",value:function(){var e=this.props.pathItems.length;return Object(u.jsx)(l.a.Fragment,{children:Object(u.jsx)("section",{className:"bg-half bg-light d-table w-100",children:Object(u.jsx)(d.a,{children:Object(u.jsx)(h.a,{className:"justify-content-center",children:Object(u.jsx)(g.a,{lg:"12",className:"text-center",children:Object(u.jsxs)("div",{className:"page-next-level",children:[this.props.title?Object(u.jsxs)("h4",{className:"title",children:[" ",this.props.title]}):null,this.props.children?this.props.children:null,Object(u.jsx)("div",{className:"page-next",children:Object(u.jsx)("nav",{className:"d-inline-block",children:Object(u.jsx)(m.a,{"aria-label":"breadcrumb",listClassName:"bg-white rounded shadow mb-0",children:this.props.pathItems.map((function(t,i){return t.id!==e?Object(u.jsx)(j.a,{children:Object(u.jsx)(o.b,{to:t.link,className:"text-uppercase fw-bold text-dark me-1",children:t.name})},i):Object(u.jsx)(j.a,{active:!0,"aria-current":"page",children:t.name},i)}))})})})]})})})})})})}}]),i}(r.Component);t.a=b}}]);
//# sourceMappingURL=132.1c792485.chunk.js.map