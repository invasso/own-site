(this.webpackJsonplandrick=this.webpackJsonplandrick||[]).push([[170],{121:function(e,t,a){"use strict";var s=a(9),c=a(10),i=a(14),n=a(12),r=a(11),l=a(0),o=a.n(l),d=a(75),m=a(76),j=a(110),b=a.n(j),u=a(1),h=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).updateWindowSize=function(){window.outerWidth>=1230||window.outerWidth>=970&&window.outerWidth<1230?c.setState({itemCount:3,cols:4}):window.outerWidth<=970&&c.setState({itemCount:1,cols:12})},c.state={cols:4,step1:!0,step2:!1},c.updateWindowSize.bind(Object(i.a)(c)),c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWindowSize),this.updateWindowSize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowSize)}},{key:"render",value:function(){var e=this;return Object(u.jsx)(o.a.Fragment,{children:Object(u.jsx)(d.a,{className:"justify-content-center",children:Object(u.jsxs)(m.a,{lg:"12",className:"mt-4",children:[Object(u.jsx)("div",{id:"customer-testi",className:"tiny-three-item",children:Object(u.jsx)("div",{className:"tiny-slide",children:Object(u.jsx)(d.a,{children:!0===this.state.step1?this.props.reviews.map((function(t,a){return a>=0&&a<=2?Object(u.jsx)(m.a,{md:e.state.cols,className:"mb-1",children:Object(u.jsxs)("div",{className:"d-flex client-testi",name:"clientsreview",children:[Object(u.jsx)("img",{src:t.img,style:{height:65,width:65},className:"avatar avatar-small client-image rounded shadow",alt:""}),Object(u.jsxs)("div",{className:"flex-1 content p-3 shadow rounded bg-white position-relative",children:[Object(u.jsx)(b.a,{items:3,rating:t.rating,starRatedColor:"#F17425",numberOfStars:5,name:"rating",starDimension:"15px",starSpacing:"3px"}),Object(u.jsxs)("p",{className:"text-muted mt-2",children:['" ',t.desc,' "']}),Object(u.jsxs)("h6",{className:"text-primary",children:["- ",t.name," ",Object(u.jsx)("small",{className:"text-muted",children:t.post})]})]})]})},a):null})):this.props.reviews.map((function(t,a){return a>=3&&a<=5?Object(u.jsx)(m.a,{md:e.state.cols,className:"mb-1",children:Object(u.jsxs)("div",{className:"d-flex client-testi",name:"clientsreview",children:[Object(u.jsx)("img",{src:t.img,style:{height:65,width:65},className:"avatar avatar-small client-image rounded shadow",alt:""}),Object(u.jsxs)("div",{className:"flex-1 content p-3 shadow rounded bg-white position-relative",children:[Object(u.jsx)(b.a,{items:3,rating:t.rating,starRatedColor:"#F17425",numberOfStars:5,name:"rating",starDimension:"15px",starSpacing:"3px",className:"mb-0"}),Object(u.jsxs)("p",{className:"text-muted mt-2",children:['" ',t.desc,' "']}),Object(u.jsxs)("h6",{className:"text-primary",children:["- ",t.name," ",Object(u.jsx)("small",{className:"text-muted",children:t.post})]})]})]})},a):null}))})})}),Object(u.jsxs)("div",{className:"tns-nav",children:[Object(u.jsx)("button",{type:"button",onClick:function(){e.setState({step1:!0,step2:!1})},className:this.state.step1?"tns-nav-active":"tns-nav-inactive"}),Object(u.jsx)("button",{type:"button",onClick:function(){e.setState({step1:!1,step2:!0})},className:this.state.step2?"tns-nav-active":"tns-nav-inactive"})]})]})})})}}]),a}(l.Component);t.a=h},48:function(e,t,a){"use strict";var s=a(9),c=a(10),i=a(12),n=a(11),r=a(0),l=a.n(r),o=a(75),d=a(76),m=a(1),j=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(m.jsx)(l.a.Fragment,{children:Object(m.jsx)(o.a,{className:"justify-content-center",children:Object(m.jsx)(d.a,{xs:"12",className:this.props.isLeft?"":"text-center",children:Object(m.jsx)("div",{className:"section-title mb-4 pb-2",name:"maintitle",children:Object(m.jsxs)("h4",{className:"title mb-4",name:"sectiontitle",children:[" ",this.props.title," "]})})})})})}}]),a}(r.Component);t.a=j},481:function(e,t,a){"use strict";t.a=a.p+"static/media/user.124786e3.svg"},53:function(e,t,a){"use strict";t.a=a.p+"static/media/01.6ac85de7.jpg"},54:function(e,t,a){"use strict";t.a=a.p+"static/media/05.a7ab2c82.jpg"},55:function(e,t,a){"use strict";t.a=a.p+"static/media/02.7df14e12.jpg"},59:function(e,t,a){"use strict";t.a=a.p+"static/media/03.ba5f8794.jpg"},60:function(e,t,a){"use strict";t.a=a.p+"static/media/04.35463172.jpg"},72:function(e,t,a){"use strict";t.a=a.p+"static/media/06.7365b7fa.jpg"},861:function(e,t,a){"use strict";a.r(t);var s=a(9),c=a(10),i=a(12),n=a(11),r=a(0),l=a.n(r),o=a(636),d=a.n(o),m=(a(637),a(73)),j=a(75),b=a(76),u=a(106),h=a(95),p=a(108),x=a(1),O=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(x.jsx)(l.a.Fragment,{children:Object(x.jsx)("section",{className:"bg-half-170 bg-light d-table w-100",children:Object(x.jsx)(m.a,{children:Object(x.jsx)(j.a,{className:"justify-content-center",children:Object(x.jsx)(b.a,{lg:"10",children:Object(x.jsxs)("div",{className:"title-heading text-center mt-5 pt-3",children:[Object(x.jsxs)(u.a,{color:"light",className:"alert-pills",role:"alert","data-aos":"fade-up","data-aos-duration":"1000",children:[Object(x.jsx)("span",{className:"badge rounded-pill bg-success me-1",children:"Support"}),Object(x.jsx)("span",{className:"content",children:" Customer Support 24/7"})]}),Object(x.jsx)("h1",{className:"heading mb-3","data-aos":"fade-up","data-aos-duration":"1400",children:"How Can We Help You ?"}),Object(x.jsx)("p",{className:"para-desc mx-auto text-muted","data-aos":"fade-up","data-aos-duration":"1800",children:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."}),Object(x.jsx)("div",{className:"subcribe-form mt-4 pt-2","data-aos":"fade-up","data-aos-duration":"2200",children:Object(x.jsx)(h.a,{children:Object(x.jsxs)("div",{className:"mb-0",children:[Object(x.jsx)("input",{type:"text",id:"help",name:"name",className:"form-control bg-white rounded-pill",required:!0,placeholder:"Search the help center"}),Object(x.jsx)(p.a,{type:"submit",color:"primary",className:"btn btn-pills btn-primary",children:"Search"})]})})})]})})})})})})}}]),a}(r.Component),f=a(13),g=a(62),v=a(67),N=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(x.jsx)(l.a.Fragment,{children:this.props.features.map((function(e,t){return Object(x.jsx)(b.a,{lg:"4",md:"6",xs:"12",className:"mt-4 pt-2",children:Object(x.jsx)(g.a,{className:"catagories text-center rounded border-0","data-aos":"fade-up","data-aos-duration":"1000",children:Object(x.jsxs)(v.a,{children:[Object(x.jsx)("img",{src:e.image,className:"avatar avatar-small mb-3",alt:""}),Object(x.jsx)("h5",{children:Object(x.jsx)(f.b,{to:e.link,className:"text-dark",children:e.title})}),Object(x.jsx)("p",{className:"text-muted mb-0 mt-3",children:e.desc})]})})},t)}))})}}]),a}(r.Component),y=a.p+"static/media/chat.92c8d51d.svg",w=a.p+"static/media/customer-service.ff3088bb.svg",k=a(481),C=a.p+"static/media/call.21660a6e.svg",S=a.p+"static/media/writing.a54478f3.svg",T=a.p+"static/media/mail.e697d2b1.svg",L=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(){var e;Object(s.a)(this,a);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={features:[{title:"Live Chat",image:y,desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making",link:""},{title:"Social",image:w,desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making",link:""},{title:"Support Portal",image:k.a,desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making",link:""},{title:"Phone Supports",image:C,desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making",link:""},{title:"Tickets",image:S,desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making",link:""},{title:"FAQ's",image:T,desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making",link:""}]},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(x.jsx)(l.a.Fragment,{children:Object(x.jsxs)(m.a,{children:[Object(x.jsx)(j.a,{className:"justify-content-center",children:Object(x.jsx)(b.a,{xs:"12",className:"text-center",children:Object(x.jsxs)("div",{className:"section-title mb-4 pb-2",children:[Object(x.jsx)("span",{className:"badge rounded-pill bg-success aos-init aos-animate","data-aos":"fade-up","data-aos-duration":"1000",children:"Features"}),Object(x.jsx)("h4",{className:"title my-4","data-aos":"fade-up","data-aos-duration":"1400",children:"Communication Resources"}),Object(x.jsxs)("p",{className:"text-muted para-desc mx-auto mb-0","data-aos":"fade-up","data-aos-duration":"1800",children:["Start working with"," ",Object(x.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ","that can provide everything you need to generate awareness, drive traffic, connect."]})]})})}),Object(x.jsx)(j.a,{children:Object(x.jsx)(N,{features:this.state.features})})]})})}}]),a}(r.Component),I=a(14),A=a(162),F=a(147),M=a(148),E=a(150),W=a(151),R=a(43),D=a.n(R),B=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(x.jsx)(l.a.Fragment,{children:Object(x.jsxs)(j.a,{className:"align-items-center",children:[Object(x.jsx)(b.a,{md:"6",children:Object(x.jsx)("img",{src:this.props.img,"data-aos":"fade-up","data-aos-duration":"1400",className:"img-fluid mx-auto d-block shadow rounded",alt:""})}),Object(x.jsx)(b.a,{md:"6",className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(x.jsxs)("div",{className:"section-title ms-md-4",children:[Object(x.jsx)("h4",{className:"title mb-4","data-aos":"fade-up","data-aos-duration":"1000",children:this.props.title}),Object(x.jsx)("p",{className:"text-muted","data-aos":"fade-up","data-aos-duration":"1400",children:this.props.desc}),Object(x.jsxs)("div",{className:"mt-4","data-aos":"fade-up","data-aos-duration":"1800",children:[Object(x.jsxs)(f.b,{to:this.props.readMoreLink,className:"text-primary p-1 px-2 shadow rounded me-3",children:["Read More ",Object(x.jsx)("i",{className:"mdi mdi-chevron-right"})]}),Object(x.jsx)(f.b,{to:this.props.blogLink,className:"text-warning p-1 px-2 shadow rounded",children:"Blogs"})]})]})})]})})}}]),a}(r.Component),z=a.p+"static/media/1.b99af4ab.png",q=a.p+"static/media/2.c25dc417.png",Y=a.p+"static/media/3.3de0063c.png",P=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).state={activeTab:"1"},c.toggleTab=c.toggleTab.bind(Object(I.a)(c)),c}return Object(c.a)(a,[{key:"toggleTab",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return Object(x.jsx)(l.a.Fragment,{children:Object(x.jsxs)(m.a,{className:"mt-100 mt-60",children:[Object(x.jsx)(j.a,{className:"justify-content-center",children:Object(x.jsx)(b.a,{xs:"12",className:"text-center",children:Object(x.jsxs)("div",{className:"section-title mb-4 pb-2",children:[Object(x.jsx)("h4",{className:"title mb-4","data-aos":"fade-up","data-aos-duration":"1000",children:"Need to CRM Support"}),Object(x.jsxs)("p",{className:"text-muted para-desc mb-0 mx-auto","data-aos":"fade-up","data-aos-duration":"1400",children:["Start working with"," ",Object(x.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ","that can provide everything you need to generate awareness, drive traffic, connect."]})]})})}),Object(x.jsx)(j.a,{className:"justify-content-center",children:Object(x.jsx)(b.a,{lg:"8",md:"12",className:"mt-4 pt-2 text-center",children:Object(x.jsxs)(A.a,{className:"flex-column flex-sm-row rounded",pills:!0,justified:!0,"data-aos":"fade-up","data-aos-duration":"1200",children:[Object(x.jsx)(F.a,{children:Object(x.jsx)(M.a,{className:D()({active:"1"===this.state.activeTab},"rounded"),onClick:function(){e.toggleTab("1")},children:Object(x.jsx)("div",{className:"text-center pt-1 pb-1",children:Object(x.jsx)("h6",{className:"title font-weight-normal mb-0",children:"Community"})})})}),Object(x.jsx)(F.a,{children:Object(x.jsx)(M.a,{className:D()({active:"2"===this.state.activeTab},"rounded"),onClick:function(){e.toggleTab("2")},children:Object(x.jsx)("div",{className:"text-center pt-1 pb-1",children:Object(x.jsx)("h6",{className:"title font-weight-normal mb-0",children:"Self Service"})})})}),Object(x.jsx)(F.a,{children:Object(x.jsx)(M.a,{className:D()({active:"3"===this.state.activeTab},"rounded"),onClick:function(){e.toggleTab("3")},children:Object(x.jsx)("div",{className:"text-center pt-1 pb-1",children:Object(x.jsx)("h6",{className:"title font-weight-normal mb-0",children:"Teamwork"})})})})]})})}),Object(x.jsx)(j.a,{children:Object(x.jsx)(b.a,{xs:"12",className:"mt-4 pt-2",children:Object(x.jsxs)(E.a,{activeTab:this.state.activeTab,children:[Object(x.jsx)(W.a,{tabId:"1",children:Object(x.jsx)(B,{img:z,title:"User Community",desc:"CRM systems start by collecting a customer's website, email, telephone, social media data, and more, across multiple sources and channels. It may also automatically pull in other information, such as recent news about the company's activity, and it can store personal details, such as a client's personal preferences on communications.",readMoreLink:"#",blogLink:"#"})}),Object(x.jsx)(W.a,{tabId:"2",children:Object(x.jsxs)(j.a,{className:"align-items-center",children:[Object(x.jsx)(b.a,{md:{size:6,order:1},xs:{order:2},className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(x.jsxs)("div",{className:"section-title me-md-4",children:[Object(x.jsx)("h4",{className:"title mb-4","data-aos":"fade-up","data-aos-duration":"1000",children:"Self-service Portal"}),Object(x.jsx)("p",{className:"text-muted","data-aos":"fade-up","data-aos-duration":"1400",children:"CRM systems start by collecting a customer's website, email, telephone, social media data, and more, across multiple sources and channels. It may also automatically pull in other information, such as recent news about the company's activity, and it can store personal details, such as a client's personal preferences on communications."}),Object(x.jsxs)("div",{className:"mt-4","data-aos":"fade-up","data-aos-duration":"1800",children:[Object(x.jsxs)(f.b,{to:"#",className:"text-primary p-1 px-2 shadow rounded me-3",children:["Read More ",Object(x.jsx)("i",{className:"mdi mdi-chevron-right"})]}),Object(x.jsx)(f.b,{to:"#",className:"text-warning p-1 px-2 shadow rounded",children:"Blogs"})]})]})}),Object(x.jsx)(b.a,{md:{size:6,order:2},xs:{order:1},children:Object(x.jsx)("img",{src:q,"data-aos":"fade-up","data-aos-duration":"1400",className:"img-fluid mx-auto d-block shadow rounded",alt:""})})]})}),Object(x.jsx)(W.a,{tabId:"3",children:Object(x.jsx)(B,{img:Y,title:"Proper Teamwork",desc:"CRM systems start by collecting a customer's website, email, telephone, social media data, and more, across multiple sources and channels. It may also automatically pull in other information, such as recent news about the company's activity, and it can store personal details, such as a client's personal preferences on communications.",readMoreLink:"#",blogLink:"#"})})]})})})]})})}}]),a}(r.Component),U=a(48),V=a(121),G=a(53),H=a(55),J=a(59),Q=a(60),K=a(54),X=a(72),Z=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(){var e;Object(s.a)(this,a);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={reviews:[{id:1,img:G.a,name:"Thomas Israel",post:"C.E.O",desc:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",rating:5},{id:2,img:H.a,name:"Barbara McIntosh",post:"M.D",desc:"One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",rating:4},{id:3,img:J.a,name:"Carl Oliver",post:"P.A",desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",rating:3},{id:4,img:Q.a,name:"Christa Smith",post:"Manager",desc:"According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",rating:5},{id:5,img:K.a,name:"Dean Tolle",post:"Developer",desc:"There is now an abundance of readable dummy texts. These are usually used when a text is required.",rating:5},{id:6,img:X.a,name:"ill Webb",post:"Designer",desc:"Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",rating:4}]},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(x.jsx)(l.a.Fragment,{children:Object(x.jsxs)(m.a,{className:"mt-100 mt-60",children:[Object(x.jsx)(U.a,{title:"Customer's Review",desc:"that can provide everything you need to generate awareness, drive traffic, connect."}),Object(x.jsx)(V.a,{reviews:this.state.reviews,colClass:"mt-4 pt-2"})]})})}}]),a}(r.Component),$=a(155),_=a(109),ee=a(112),te=a(18),ae=a.n(te),se=a.p+"static/media/customer.a6534bce.png",ce=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).state={ticketVisible:!1},c.handleSubmit=c.handleSubmit.bind(Object(I.a)(c)),c}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({ticketVisible:!0})}},{key:"render",value:function(){var e=this;return Object(x.jsx)(l.a.Fragment,{children:Object(x.jsxs)(m.a,{className:"mt-100 mt-60",children:[Object(x.jsx)(U.a,{title:"Submit A Ticket",desc:"that can provide everything you need to generate awareness, drive traffic, connect."}),Object(x.jsxs)(j.a,{className:"align-items-center",children:[Object(x.jsx)(b.a,{lg:"6",md:"5",xs:"12",className:"mt-4 pt-2",children:Object(x.jsx)("img",{src:se,"data-aos":"fade-up","data-aos-duration":"1400",className:"img-fluid",alt:""})}),Object(x.jsxs)(b.a,{lg:"6",md:"7",xs:"12",className:"mt-4 pt-2",children:[Object(x.jsx)(u.a,{color:"primary",isOpen:this.state.ticketVisible,toggle:function(){e.setState({ticketVisible:!e.state.ticketVisible})},children:"Ticket details send successfully."}),Object(x.jsx)(g.a,{className:"rounded shadow border-0 ms-lg-4",children:Object(x.jsx)(v.a,{className:"p-4",children:Object(x.jsxs)(h.a,{onSubmit:this.handleSubmit,"data-aos":"fade-up","data-aos-duration":"1400",children:[Object(x.jsxs)(j.a,{children:[Object(x.jsx)(b.a,{md:"6",children:Object(x.jsxs)($.a,{className:"mb-3",children:[Object(x.jsx)(_.a,{className:"form-label",children:"Your Name :"}),Object(x.jsx)("div",{className:"form-icon position-relative",children:Object(x.jsx)("i",{children:Object(x.jsx)(ae.a,{icon:"user",className:"fea icon-sm icons"})})}),Object(x.jsx)(ee.a,{name:"name",id:"name",type:"text",className:"form-control ps-5",placeholder:"First Name :",required:!0})]})}),Object(x.jsx)(b.a,{md:"6",children:Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)(_.a,{className:"form-label",children:"Your Email :"}),Object(x.jsx)("div",{className:"form-icon position-relative",children:Object(x.jsx)("i",{children:Object(x.jsx)(ae.a,{icon:"mail",className:"fea icon-sm icons"})})}),Object(x.jsx)(ee.a,{name:"email",id:"email",type:"email",className:"form-control ps-5",placeholder:"Your email :",required:!0})]})}),Object(x.jsx)(b.a,{md:"12",children:Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)(_.a,{className:"form-label",children:"Reasons / Catagories :"}),Object(x.jsxs)("select",{className:"form-control custom-select",id:"Sortbylist-Shop",children:[Object(x.jsx)("option",{children:"Catagories"}),Object(x.jsx)("option",{children:"General Question"}),Object(x.jsx)("option",{children:"Bugs"}),Object(x.jsx)("option",{children:"Remote"})]})]})}),Object(x.jsx)(b.a,{md:"6",children:Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)(_.a,{className:"form-label",children:"Subject :"}),Object(x.jsx)("div",{className:"form-icon position-relative",children:Object(x.jsx)("i",{children:Object(x.jsx)(ae.a,{icon:"book",className:"fea icon-sm icons"})})}),Object(x.jsx)(ee.a,{name:"subject",id:"subject",className:"form-control ps-5",placeholder:"Your subject :",required:!0})]})}),Object(x.jsx)(b.a,{md:"6",children:Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)(_.a,{className:"form-label",children:"Url :"}),Object(x.jsx)("div",{className:"form-icon position-relative",children:Object(x.jsx)("i",{children:Object(x.jsx)(ae.a,{icon:"globe",className:"fea icon-sm icons"})})}),Object(x.jsx)(ee.a,{name:"url",id:"url",type:"url",className:"form-control ps-5",placeholder:"Url :",required:!0})]})}),Object(x.jsx)(b.a,{md:"12",children:Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)(_.a,{className:"form-label",children:"Description :"}),Object(x.jsx)("div",{className:"form-icon position-relative",children:Object(x.jsx)("i",{children:Object(x.jsx)(ae.a,{icon:"message-circle",className:"fea icon-sm icons"})})}),Object(x.jsx)("textarea",{name:"comments",id:"comments",rows:"4",className:"form-control ps-5",placeholder:"Describe your problem :"})]})}),Object(x.jsx)(b.a,{md:"12",children:Object(x.jsx)("div",{className:"mb-3",children:Object(x.jsxs)("div",{className:"form-check",children:[Object(x.jsx)(ee.a,{type:"checkbox",className:"form-check-input",id:"customCheck1"}),Object(x.jsxs)(_.a,{className:"form-check-label",for:"customCheck1",children:["I Accept"," ",Object(x.jsx)(f.b,{to:"#",className:"text-primary",children:"Terms And Condition"})]})]})})})]}),Object(x.jsx)(j.a,{children:Object(x.jsx)(b.a,{sm:"12",children:Object(x.jsx)("input",{type:"submit",id:"submit",name:"send",className:"btn btn-primary",value:"Submit"})})})]})})})]})]})]})})}}]),a}(r.Component),ie=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(e,c){var i;return Object(s.a)(this,a),(i=t.call(this,e,c)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},d.a.init(),i}return Object(c.a)(a,[{key:"componentDidMount",value:function(){d.a.refresh(),document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0);for(var e=document.getElementsByName("sectiontitle"),t=document.getElementsByName("sectiondesc"),a=0;a<e.length;a++)e[a].setAttribute("data-aos","fade-up"),e[a].setAttribute("data-aos-duration","1200"),t[a].setAttribute("data-aos","fade-up"),t[a].setAttribute("data-aos-duration","1000");for(var s=document.getElementsByName("clientsreview"),c=0;c<s.length;c++)s[c].setAttribute("data-aos","fade-up"),s[c].setAttribute("data-aos-duration","1600");for(var i=document.getElementsByName("footercolumn"),n=0;n<i.length;n++)i[n].setAttribute("data-aos","fade-up"),i[n].setAttribute("data-aos-duration","1400")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(x.jsxs)(l.a.Fragment,{children:[Object(x.jsx)(O,{}),Object(x.jsxs)("section",{className:"section",children:[Object(x.jsx)(L,{}),Object(x.jsx)(P,{}),Object(x.jsx)(Z,{}),Object(x.jsx)(ce,{})]})]})}}]),a}(r.Component);t.default=ie}}]);
//# sourceMappingURL=170.7573c1db.chunk.js.map