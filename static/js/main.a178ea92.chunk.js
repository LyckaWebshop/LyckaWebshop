/*! For license information please see main.a178ea92.chunk.js.LICENSE.txt */
(this.webpackJsonpeccomerce=this.webpackJsonpeccomerce||[]).push([[0],{111:function(e,t,n){e.exports=n.p+"static/media/icon.28a304ac.svg"},175:function(e,t,n){e.exports=n.p+"static/media/Logo.e993abba.png"},200:function(e,t,n){e.exports=n(315)},213:function(e,t,n){},246:function(e,t,n){},296:function(e,t,n){},315:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),i=n.n(o),c=n(8),l=n(9),u=n(380),s=n(34),p=n(18),m=n(181),d=n(385),h=n(185),f=n(363),g=n(365),y=n(366),v=n(143),b=n(364),w=n(175),E=n.n(w),x=n(15),k=n(352),O=n(10),j=Object(k.a)((function(e){return{appBar:Object(x.a)({boxShadow:"none",zIndex:"199",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px",padding:"10px"},menuButton:Object(x.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(x.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(O.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(O.d)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(x.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),C=n(362),L=n(381),S=n(354),_=n(361),T=n(357),N=n(358),P=n(356);function A(e){var t=e.open,n=e.setOpen,o=Object(r.useState)(""),i=Object(l.a)(o,2),c=i[0],u=i[1],s=Object(r.useState)(""),p=Object(l.a)(s,2),m=p[0],d=p[1],h=Object(r.useState)(c.length<=4&&c.length>=1),f=Object(l.a)(h,2),g=f[0],y=f[1],v=Object(r.useState)(c.length<=4&&c.length>=1?"ID is too short":" "),b=Object(l.a)(v,2),w=b[0],E=b[1],x=Object(r.useState)(c.length<=4&&c.length>=1),k=Object(l.a)(x,2),O=k[0],j=k[1],A=Object(r.useState)(c.length<=4&&c.length>=1?"ID is too short":" "),G=Object(l.a)(A,2),F=G[0],I=G[1],B=function(){c.length<10||void 0===window.SUBJECTGROUPS[m]?(c.length<10&&(j(!0),I("Please enter your correct ID.")),c.length<4&&(y(!0),E("Please enter your correct Participation Nr."))):(window.results.id=document.getElementById("id-input").value,window.results.subjectGroup=document.getElementById("group-input").value,n(!1))};return a.a.createElement("div",null,a.a.createElement(S.a,{open:t,onClose:B,"aria-labelledby":"form-dialog-title"},a.a.createElement(P.a,{id:"form-dialog-title"},"Welcome to the Lycka online shop!"),a.a.createElement(T.a,null,a.a.createElement(N.a,null,'Before starting, please enter your prolific ID and Group number here and click on "Go!".'),a.a.createElement(L.a,{autoFocus:!0,margin:"dense",id:"id-input",label:"ID",type:"id",value:c,onChange:function(e){return u(e.target.value)},error:O,helperText:F,fullWidth:!0}),a.a.createElement(L.a,{autoFocus:!0,margin:"dense",id:"group-input",label:"Participation Number",type:"id",value:m,onChange:function(e){return d(e.target.value)},error:g,helperText:w,fullWidth:!0}),a.a.createElement(N.a,null,'After selecting the products you would like to "buy", click on the shopping cart in the upper right corner. You can then click on "Checkout" to complete the online shop visit.')),a.a.createElement(_.a,null,a.a.createElement(C.a,{onClick:B,color:"primary"},"Go!"))))}function G(e){var t=e.open,n=e.setOpen,r=a.a.useState(!1),o=Object(l.a)(r,2),i=o[0],c=o[1],u=["FCON","TACT","SPAS","FRET"][Math.floor(4*Math.random())],s=function(){n(!1),p()},p=function(){c(!0)};return a.a.createElement("div",null,a.a.createElement(A,{open:i,setOpen:c}),a.a.createElement(S.a,{open:t,onClose:s,"aria-labelledby":"form-dialog-title"},a.a.createElement(P.a,{id:"form-dialog-title"},"Introduction"),a.a.createElement(T.a,null,a.a.createElement(N.a,null,a.a.createElement("p",null,"This is the code for your webshop access:",a.a.createElement("b",null," ",u),a.a.createElement("br",null),"Please keep it in mind or write it down. You need the code to proceed.",a.a.createElement("br",null)," ",a.a.createElement("br",null),"Please keep in mind that the webshop takes second to load. Press the following buttom which leads to the webshop."))),a.a.createElement(_.a,null,a.a.createElement(C.a,{onClick:s,color:"primary"},"Go to webshop"))))}function F(e){var t=e.open,n=e.setOpen,r=a.a.useState(!1),o=Object(l.a)(r,2),i=o[0],c=o[1],u=function(){n(!1),s()},s=function(){c(!0)};return a.a.createElement("div",null,a.a.createElement(G,{open:i,setOpen:c}),a.a.createElement(S.a,{open:t,onClose:u,"aria-labelledby":"form-dialog-title"},a.a.createElement(P.a,{id:"form-dialog-title"},"Please read the following carefully"),a.a.createElement(T.a,null,a.a.createElement(N.a,null,a.a.createElement("p",null,"Imagine you want to go on a two-week vacation. You drive to the airport, check in your luggage and board the airplane.",a.a.createElement("br",null),a.a.createElement("br",null),"When arriving at your destination the airline tells you that your luggage will arrive two days after landing, because they checked your luggage into another airplane. For you to have clothes for the next two days, the airline offers you the following:",a.a.createElement("br",null),a.a.createElement("br",null),"You receive a budget of 200 \u20ac, which you can spend in the following online-shop:",a.a.createElement("br",null),"(1) You must spend the whole amount",a.a.createElement("br",null),"(2) You can simply put the items in the basket and proceed to the checkout."))),a.a.createElement(_.a,null,a.a.createElement(C.a,{onClick:u,color:"primary"},"Continue"))))}function I(e){var t=e.open,n=e.setOpen,r=a.a.useState(!1),o=Object(l.a)(r,2),i=o[0],c=o[1],u=function(){n(!1),s()},s=function(){c(!0)};return a.a.createElement("div",null,a.a.createElement(F,{open:i,setOpen:c}),a.a.createElement(S.a,{open:t,onClose:u,"aria-labelledby":"form-dialog-title"},a.a.createElement(P.a,{id:"form-dialog-title"},"Welcome back!"),a.a.createElement(T.a,null,a.a.createElement(N.a,null,a.a.createElement("p",null,"Welcome back and thank you for participating \u2014 your assistance is greatly appreciated!",a.a.createElement("br",null)," ",a.a.createElement("br",null),"All your answers will be treated anonymously, with strict confidentiality, and will be used for research purposes only.",a.a.createElement("br",null)," ",a.a.createElement("br",null),"A note on how to participate:",a.a.createElement("br",null),a.a.createElement("br",null),"(1) Please do not click return or refresh in your browser during the participation!",a.a.createElement("br",null),"(2) Payment \u2013 For this survey you will receive a fixed payment of 1.5 \xa3. Your variable payment corresponds to one of the items in your basket. Which item is determined randomly. The price of the randomly selected item will then be transferred to real money. For instance, a price of 30\u20ac in the online shop corresponds to an amount of 30*0.015=0.45 \xa3 of real money. This is your variable payment.",a.a.createElement("br",null),a.a.createElement("br",null),"Thank you very much for your participation and your valuable time!"))),a.a.createElement(_.a,null,a.a.createElement(C.a,{onClick:u,color:"primary"},"Continue"))))}var B=function(e){var t=e.totalItems,n=Object(r.useState)(null),o=Object(l.a)(n,2),i=o[0],c=o[1],u=j(),w=Object(p.f)(),x=Boolean(i),k=a.a.useState(!1),O=Object(l.a)(k,2),C=O[0],L=O[1];Object(r.useEffect)((function(){S()}),[]);var S=function(){L(!0)},_=a.a.createElement(m.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:function(){return c(null)}},a.a.createElement(d.a,null,a.a.createElement(h.a,{component:s.b,to:"/cart","aria-label":"Show cart items",color:"inherit"},a.a.createElement(f.a,{badgeContent:t,color:"secondary"},a.a.createElement(b.a,null))),a.a.createElement("p",null,"Cart")));return a.a.createElement(a.a.Fragment,null,a.a.createElement(I,{open:C,setOpen:L}),a.a.createElement(g.a,{position:"fixed",className:u.appBar,color:"inherit"},a.a.createElement(y.a,null,a.a.createElement(v.a,{component:s.b,to:"/LyckaWebshop",variant:"h6",className:u.title,color:"inherit"},a.a.createElement("img",{src:E.a,alt:"commerce.js",height:"85px",className:u.image})),a.a.createElement("div",{className:u.grow}),("/LyckaWebshop"===w.pathname||"/LyckaWebshop/"===w.pathname)&&a.a.createElement("div",{className:u.button},a.a.createElement(h.a,{component:s.b,to:"/cart","aria-label":"Show cart items",color:"inherit"},a.a.createElement(f.a,{badgeContent:t,color:"secondary"},a.a.createElement(b.a,null)))))),_)},R=n(386),D=n(360),W=n(359),z=n(317),M=n(368),Y=n(383),U=n(367),q=n(382),J=function(e){var t=e.filterProducts,n=e.keys,r=Object(k.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:190,flexShrink:0,zIndex:5},drawerPaper:{width:190,top:"8%"},drawerContainer:{marginTop:30,padding:20,overflow:"hidden"},content:{flexGrow:1,padding:e.spacing(3)}}})),o=a.a.useState(n.men?"men":n.women?"women":""),i=Object(l.a)(o,2),c=i[0],u=i[1],s=r(),p=function(e){n[e.currentTarget.name]=e.currentTarget.checked,t(n)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(R.a,{className:s.drawer,variant:"permanent",classes:{paper:s.drawerPaper}},a.a.createElement("div",{className:s.drawerContainer},a.a.createElement(W.a,{component:"fieldset",className:s.formControl},a.a.createElement(D.a,{component:"legend"},"Gender"),a.a.createElement(U.a,{"aria-label":"gender",name:"gender1",value:c,onChange:function(e){u(e.target.value),"men"===e.target.value?(n.men=e.currentTarget.checked,n.women=!1):(n.women=e.currentTarget.checked,n.men=!1),t(n)}},a.a.createElement(M.a,{value:"women",control:a.a.createElement(q.a,null),label:"Women"}),a.a.createElement(M.a,{value:"men",control:a.a.createElement(q.a,null),label:"Men"})),a.a.createElement(D.a,{component:"legend"},"Size"),a.a.createElement(z.a,null,a.a.createElement(M.a,{control:a.a.createElement(Y.a,{checked:n.s,onChange:p,name:"s"}),label:"S"}),a.a.createElement(M.a,{control:a.a.createElement(Y.a,{checked:n.m,onChange:p,name:"m"}),label:"M"}),a.a.createElement(M.a,{control:a.a.createElement(Y.a,{checked:n.l,onChange:p,name:"l"}),label:"L"}),a.a.createElement(M.a,{control:a.a.createElement(Y.a,{checked:n.xl,onChange:p,name:"xl"}),label:"XL"}))))))},Q=n(377),H=n(79),V=n(387),X=n(384),K=n(370),Z=n(371),$=n(372),ee=n(373),te=n(374),ne=n(375),re=n(178),ae=n.n(re),oe=n(376),ie=Object(k.a)((function(){return{root:{maxWidth:"100%"},media:{height:250,paddingTop:"56.25%",backgroundRepeat:"no-repeat",backgroundSize:"contain"},cardActions:{display:"flex",justifyContent:"space-between"},cardContent:{display:"flex",justifyContent:"space-between",paddingBottom:0},chip:{marginRight:"auto",marginLeft:"7px",fontSize:"0.9125rem",backgroundColor:"#C3DCAC !important"},iconImage:{width:"1em",marginBottom:"2px",padding:"2px"},accordion:{boxShadow:"none"}}})),ce=(n(213),n(388),n(111)),le=n.n(ce),ue=n(369),se=["expand"],pe=(Object(V.a)((function(e){e.expand;var t=Object(H.a)(e,se);return a.a.createElement(h.a,t)}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}})),function(e){var t=e.product,n=e.onAddToCart,r=ie(),o=a.a.useState(window.results.subjectGroup),i=Object(l.a)(o,2),c=i[0],u=i[1];ue.a,le.a,r.iconImage;return a.a.createElement($.a,{className:r.root},a.a.createElement(ee.a,{className:r.media,image:t.image.url,title:t.name}),a.a.createElement(te.a,null,a.a.createElement("div",{className:r.cardContent},a.a.createElement(v.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.name),a.a.createElement(v.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.price.formatted,"\u20ac")),a.a.createElement(v.a,{dangerouslySetInnerHTML:{__html:t.description},variant:"body2",color:"textSecondary",component:"p"})),a.a.createElement(ne.a,{disableSpacing:!0,className:r.cardActions},a.a.createElement("div",null,"SPAS"===window.results.subjectGroup||"TACT"===window.results.subjectGroup?function(){return a.a.createElement(X.a,{expanded:"TACT"===c,className:r.accordion,onChange:(e="TACT",function(t,n){u(!!n&&e)})},a.a.createElement(K.a,{expandIcon:a.a.createElement(ae.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},a.a.createElement(v.a,{className:r.heading},"Product information")),a.a.createElement(Z.a,null,a.a.createElement(v.a,null,t.attributes[0].value)));var e}():null),a.a.createElement(h.a,{"aria-label":"Add to Cart",onClick:function(){return n(t.id,1)}},a.a.createElement(oe.a,null))))}),me=Object(k.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},root:{flexGrow:1}}})),de=function(e){var t=e.products,n=e.onAddToCart,r=me();return t.length?a.a.createElement("main",{className:r.content},a.a.createElement("div",{className:r.toolbar}),a.a.createElement(Q.a,{container:!0,justify:"center",spacing:4},t.map((function(e){return a.a.createElement(Q.a,{key:e.id,item:!0,xs:12,sm:6,md:4,lg:3},a.a.createElement(pe,{product:e,onAddToCart:n}))})))):a.a.createElement("p",null,"Loading...")},he=n(378),fe=n(179),ge=new(n.n(fe).a)("pk_44222c69acae54b3eb798c2400f8bf2dbeb1bbbf7d9b5",!0),ye=Object(k.a)((function(){return{root:{maxWidth:"100%"},cardContainer:{display:"flex",flexDirection:"column"},media:{height:250,width:250,backgroundRepeat:"no-repeat",backgroundSize:175},cardActions:{display:"flex",justifyContent:"center"},cardContent:{display:"flex",flexDirection:"column",height:"auto",width:"max-content"},chip:{backgroundColor:"#C3DCAC"},buttons:{display:"flex",alignItems:"center"},description:{display:"flex",flexDirection:"column",marginTop:"auto"},options:{display:"flex",flexDirection:"row"},mediaTooltip:{height:60,width:60,borderRadius:"4px",backgroundRepeat:"no-repeat","&:hover":{cursor:"pointer",border:"solid 1px grey"}}}})),ve=(n(245),function(e){var t=e.product,n=e.item,r=e.onUpdateCartQty,o=e.onRemoveFromCart,i=e.onAddSustainableAlternative,c=ye(),l=(ue.a,le.a,c.iconImage,function(e,t){return r(e,t)}),u=function(e){return i(e)};return a.a.createElement($.a,{className:"cart-item"},a.a.createElement(ee.a,{image:n.image.url,alt:n.name,className:c.media}),a.a.createElement(te.a,{className:c.cardContent},a.a.createElement(v.a,{variant:"h5"},n.name),a.a.createElement(v.a,{variant:"h5"},n.price.formatted,"\u20ac"),void 0!=t&&t.related_products.length&&"FRET"===window.results.subjectGroup?a.a.createElement("div",{className:c.description},a.a.createElement(v.a,{variant:"p",component:"h4"},"Want to switch to a sustainable option?"),a.a.createElement("div",{className:c.options},t.related_products.map((function(e,t){return a.a.createElement(ee.a,{image:e.image.url,alt:"product image",className:c.mediaTooltip,onClick:function(){return u([n,t])}})})))):null),a.a.createElement(ne.a,{className:c.cardActions},a.a.createElement("div",{className:c.buttons},a.a.createElement(C.a,{type:"button",size:"small",onClick:function(){return l(n.id,n.quantity-1)}},"-"),a.a.createElement(v.a,null,"\xa0",n.quantity,"\xa0"),a.a.createElement(C.a,{type:"button",size:"small",onClick:function(){return l(n.id,n.quantity+1)}},"+")),a.a.createElement(C.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return e=n.id,o(e);var e}},"Remove")))}),be=Object(k.a)((function(e){var t;return{toolbar:e.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(t={minWidth:"150px"},Object(x.a)(t,e.breakpoints.down("xs"),{marginBottom:"5px"}),Object(x.a)(t,e.breakpoints.up("xs"),{marginRight:"20px"}),t),grid:{display:"inline-block",flexDirection:"column"},checkoutButton:{minWidth:"150px"},checkoutButtonEmptyCart:{minWidth:"150px",marginTop:"15px",marginRight:"15px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"7%",marginBottom:"5%",width:"100%",justifyContent:"space-between"}}})),we=n(137),Ee=n.n(we);function xe(e){var t=e.open;return a.a.createElement("div",null,a.a.createElement(S.a,{open:t,"aria-labelledby":"form-dialog-title"},a.a.createElement(P.a,{id:"form-dialog-title"},"Thanks for participation!"),a.a.createElement(T.a,null,a.a.createElement(N.a,null,"Receive your payment via this Button: ",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(C.a,{size:"small",type:"button",variant:"contained",color:"primary",onClick:function(){window.open("https://app.prolific.co/submissions/complete?cc=7B356C5D","_self")}},"Receive payment"),a.a.createElement("br",null)))))}n(246);function ke(){ke=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(C){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof p?t:p,o=Object.create(a.prototype),i=new k(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(C){return{type:"throw",arg:C}}}e.wrap=l;var s={};function p(){}function m(){}function d(){}var h={};c(h,a,(function(){return this}));var f=Object.getPrototypeOf,g=f&&f(f(O([])));g&&g!==t&&n.call(g,a)&&(h=g);var y=d.prototype=p.prototype=Object.create(h);function v(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;this._invoke=function(a,o){function i(){return new t((function(r,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(p).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=d,c(y,"constructor",d),c(d,"constructor",m),m.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},v(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},v(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var Oe=function(e){var t=e.cart,n=e.onUpdateCartQty,o=e.onRemoveFromCart,i=e.onEmptyCart,u=e.onAddSustainableAlternative,p=be(),m=a.a.useState(!1),d=Object(l.a)(m,2),h=d[0],f=d[1],g=function(){return i()},y=Object(r.useState)([]),b=Object(l.a)(y,2),w=b[0],E=b[1],x=Object(r.useState)(0),k=Object(l.a)(x,2),O=k[0],j=k[1],L=function(){var e=Object(c.a)(ke().mark((function e(){var n;return ke().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.line_items){e.next=5;break}return e.next=3,Promise.all(t.line_items.map(function(){var e=Object(c.a)(ke().mark((function e(t){return ke().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ge.products.retrieve(t.product_id));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:n=e.sent,E(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(c.a)(ke().mark((function e(){var n;return ke().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0,t.line_items&&(t.line_items.forEach((function(e){n+=_(e.price.raw*e.quantity)})),j(_(n)));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(e){var t=Number((100*Math.abs(e)).toPrecision(15));return Math.round(t)/100*Math.sign(e)};if(Object(r.useEffect)((function(){(function(){var e=Object(c.a)(ke().mark((function e(){return ke().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch(console.error),S()}),t.line_items),!t.line_items)return"Loading";var T=function(){var e=Object(c.a)(ke().mark((function e(){var n,r,a;return ke().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.subtotal.raw<200)){e.next=14;break}return n=[],e.next=4,Promise.all(t.line_items.map(function(){var e=Object(c.a)(ke().mark((function e(t){return ke().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge.products.retrieve(t.product_id);case 2:return e.t0=e.sent,e.t1=t,e.abrupt("return",{product:e.t0,item:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:r=e.sent,window.results.extrapayment=parseFloat((.015*t.line_items[Math.floor(Math.random()*n.length)].price.raw).toFixed(3)),window.results.payment=window.results.extrapayment+1.5,r.reduce((function(e,t){return t.product.categories.map((function(e){return e.slug})).includes("sustainable")&&(e+=t.item.quantity),e}),0),r.reduce((function(e,t){return t.product.categories.map((function(e){return e.slug})).includes("sustainable")&&(e+=t.item.price.raw*t.item.quantity),e}),0),t.line_items.forEach((function(e,t){n[t]={product_id:e.name,product_quantity:e.quantity,product_price:e.price.raw,product_sustainable:!!e.sku.includes("S"),product_switched:!!window.results.switchedProducts.find((function(t){return t===e.product_id}))}})),a={participant_id:window.results.subjectGroup,startTime:window.results.startTime,group_id:window.results.group,endTime:(new Date).toTimeString(),duration:((new Date).getTime()-window.results.startTime.getTime())/1e3,finished:"True",recorded_date:(new Date).toDateString(),checkbox_tick:JSON.stringify(window.results.checkbox_tick),total_items:t.total_items,subtotal:t.subtotal.raw,products:n,randomized_payment:window.results.payment},Ee.a.post("https://eu-central-1.aws.data.mongodb-api.com/app/application-0-vxthq/endpoint/postData",a).then((function(e){console.log(e),N(),f(!0)})),e.next=15;break;case 14:alert("Your cart's subtotal is bigger than 200\u20ac, please remove products");case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){f(!0)};return a.a.createElement(he.a,null,a.a.createElement(xe,{open:h,setOpen:f}),a.a.createElement("div",{className:p.toolbar}),a.a.createElement(v.a,{className:p.title,variant:"h3",gutterBottom:!0},"Your Shopping Cart"),t.line_items.length?a.a.createElement(a.a.Fragment,null,a.a.createElement(Q.a,{className:"cart-grid",container:!0,spacing:3},t.line_items.map((function(e,t){return a.a.createElement(Q.a,{item:!0,xs:12,sm:4,key:e.id},a.a.createElement(ve,{product:w[t],item:e,onUpdateCartQty:n,onRemoveFromCart:o,onAddSustainableAlternative:u}))}))),a.a.createElement("div",{className:p.cardDetails},a.a.createElement(v.a,{variant:"h4"},"Subtotal: ",O,"\u20ac"),a.a.createElement("div",null,a.a.createElement(C.a,{className:p.emptyButton,size:"large",type:"button",variant:"contained",color:"primary",component:s.b,to:"/LyckaWebshop"},"Back"),a.a.createElement(C.a,{className:p.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:g},"Empty cart"),a.a.createElement(C.a,{className:p.checkoutButton,onClick:T,size:"large",type:"button",variant:"contained",color:"primary"},"Checkout")))):a.a.createElement("div",null,a.a.createElement(v.a,{variant:"subtitle1"},"You have no items in your shopping cart,",a.a.createElement(s.b,{className:p.link,to:"/LyckaWebshop"}," start adding some"),"!"),a.a.createElement(C.a,{className:p.checkoutButtonEmptyCart,size:"large",type:"button",variant:"contained",color:"primary",component:s.b,to:"/LyckaWebshop"},"Back"),a.a.createElement(C.a,{className:p.checkoutButtonEmptyCart,onClick:T,size:"large",type:"button",variant:"contained",color:"primary"},"Checkout")))},je=n(180),Ce=n.n(je),Le=n(379);n(247),n(291),n(296);function Se(){Se=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(C){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof p?t:p,o=Object.create(a.prototype),i=new k(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(C){return{type:"throw",arg:C}}}e.wrap=l;var s={};function p(){}function m(){}function d(){}var h={};c(h,a,(function(){return this}));var f=Object.getPrototypeOf,g=f&&f(f(O([])));g&&g!==t&&n.call(g,a)&&(h=g);var y=d.prototype=p.prototype=Object.create(h);function v(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;this._invoke=function(a,o){function i(){return new t((function(r,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(p).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=d,c(y,"constructor",d),c(d,"constructor",m),m.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},v(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},v(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}window.results={id:null,group:"ANFLVF",subjectGroup:null,startTime:new Date,switchedProducts:[]},window.GROUPS={ANFLVF:0},window.SUBJECTGROUPS={FCON:1,TACT:2,SPAS:3,FRET:4};var _e=function(){var e=a.a.useState(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)([]),m=Object(l.a)(i,2),d=m[0],h=m[1],f=Object(r.useState)({}),g=Object(l.a)(f,2),y=g[0],v=g[1],b=Object(r.useState)({}),w=Object(l.a)(b,2),E=(w[0],w[1],Object(r.useState)({men:!1,women:!1,kids:!1,s:!1,m:!1,l:!1,xl:!1,sustainable:!1})),x=Object(l.a)(E,2),k=x[0],O=(x[1],Object(r.useState)("")),j=Object(l.a)(O,2),C=(j[0],j[1],function(){var e=Object(c.a)(Se().mark((function e(){var t,n;return Se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.results.group||!window.results.subjectGroup){e.next=9;break}return e.next=3,ge.products.list({limit:150});case 3:t=e.sent,n=t.data,G(n),h(n),e.next=10;break;case 9:setTimeout(C,800);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),L=function(){var e=Object(c.a)(Se().mark((function e(){return Se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=v,e.next=3,ge.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(c.a)(Se().mark((function e(t){var n,r,a;return Se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.keys(t).reduce((function(e,n){return t[n]&&e.push(n),e}),[]),e.next=3,ge.products.list({category_slug:n,limit:100});case 3:r=e.sent,a=r.data,G(a),h(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(c.a)(Se().mark((function e(t,n){var r;return Se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge.cart.add(t,n);case 2:r=e.sent,r.cart.line_items,v(r.cart);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(c.a)(Se().mark((function e(t){var n,r,a;return Se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge.products.retrieve(t[0].product_id);case 2:return n=e.sent,window.results.switchedProducts.push(n.related_products[t[1]].id),e.next=6,ge.cart.remove(t[0].id);case 6:return r=e.sent,e.next=9,ge.cart.add(n.related_products[t[1]].id,t[0].quantity);case 9:a=e.sent,r.cart.line_items,v(a.cart);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(c.a)(Se().mark((function e(t,n){var r;return Se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge.cart.update(t,{quantity:n});case 2:r=e.sent,r.cart.line_items,v(r.cart);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),P=function(){var e=Object(c.a)(Se().mark((function e(t){var n;return Se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge.cart.remove(t);case 2:n=e.sent,n.cart.line_items,v(n.cart);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(c.a)(Se().mark((function e(){var t;return Se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge.cart.empty();case 2:t=e.sent,v(t.cart);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(e){for(var t,n=e.length;0!=n;){t=Math.floor(Math.random()*n),n--;var r=[e[t],e[n]];e[n]=r[0],e[t]=r[1]}return e};Object(r.useEffect)((function(){C(),L()}),[]);var F=Ce()({typography:{h5:{fontWeight:500},fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}});return a.a.createElement(s.a,null,a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(Le.a,{theme:F},a.a.createElement(u.a,null),a.a.createElement(B,{totalItems:y.total_items,handleDrawerToggle:function(){return o(!n)}}),a.a.createElement(p.c,null,a.a.createElement(p.a,{exact:!0,path:"/LyckaWebshop"},a.a.createElement(J,{filterProducts:S,keys:k}),a.a.createElement(de,{products:d,onAddToCart:_,handleUpdateCartQty:!0})),a.a.createElement(p.a,{exact:!0,path:"/cart"},a.a.createElement(Oe,{cart:y,onUpdateCartQty:N,onRemoveFromCart:P,onEmptyCart:A,onAddSustainableAlternative:T}))))))};i.a.render(a.a.createElement(_e,null),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.a178ea92.chunk.js.map