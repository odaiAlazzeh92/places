"use strict";(self.webpackChunkmern=self.webpackChunkmern||[]).push([[793],{8793:function(e,r,n){n.r(r),n.d(r,{Component:function(){return v}});var t=n(4165),s=n(5861),a=n(9439),c=n(2791),i=n(7689),o=n(3108),l=n(3999),d=n(3373),u=n(2921),p=n(9508),h=n(5434),m=n(9895),x=n(184);function f(e){var r=(0,c.useContext)(o.V),n=(0,i.s0)(),f=(0,p.x)(),j=f.isLoading,v=f.error,g=f.sendRequest,Z=f.clearError,C=(0,c.useState)(!1),k=(0,a.Z)(C,2),E=k[0],b=k[1],y=(0,c.useState)(!1),_=(0,a.Z)(y,2),N=_[0],w=_[1],I=function(){return b(!1)},L=function(){return w(!1)},S=function(){var a=(0,s.Z)((0,t.Z)().mark((function s(){return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!1),t.prev=1,t.next=4,g("https://places-backend-v6yn.onrender.comy"+"/api/places/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+r.token});case 4:n("/"),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),s,null,[[1,7]])})));return function(){return a.apply(this,arguments)}}();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.Z,{error:v,onClear:Z}),(0,x.jsx)(u.Z,{show:E,onCancel:I,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:(0,x.jsx)(l.Z,{onClick:I,children:"CLOSE"}),children:(0,x.jsxs)("div",{className:"map-container",children:[(0,x.jsx)("iframe",{title:"map",width:"100%",height:"100%",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0",src:"https://maps.google.com/maps?q="+e.coordinates.lat.toString()+","+e.coordinates.lng.toString()+"&t=&z=15&ie=UTF8&iwloc=&output=embed"}),(0,x.jsx)("script",{type:"text/javascript",src:"https://embedmaps.com/google-maps-authorization/script.js?id=5a33be79e53caf0a07dfec499abf84b7b481f165"})]})}),(0,x.jsx)(u.Z,{show:N,onCancel:L,header:"Are you sure?",footerClass:"Place-item__modal-actions",footer:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l.Z,{inverse:!0,onClick:L,children:"CANCEL"}),(0,x.jsx)(l.Z,{danger:!0,onClick:S,children:"DELETE"})]}),children:(0,x.jsx)("p",{children:"Do you want to proceed and delete this place? Please note that it can't be undone therafter"})}),(0,x.jsx)("li",{className:"place-item",children:(0,x.jsxs)(d.Z,{className:"place-item__content",children:[j&&(0,x.jsx)(m.Z,{asOverlay:!0}),(0,x.jsx)("div",{className:"place-item__image",children:(0,x.jsx)("img",{src:"https://places-backend-v6yn.onrender.comy"+"/".concat(e.image),alt:e.title})}),(0,x.jsxs)("div",{className:"place-item__info",children:[(0,x.jsx)("h2",{children:e.title}),(0,x.jsx)("h3",{children:e.address}),(0,x.jsx)("p",{children:e.description})]}),(0,x.jsxs)("div",{className:"place-item__actions",children:[(0,x.jsx)(l.Z,{inverse:!0,onClick:function(){return b(!0)},children:"VIEW ON MAP"}),r.userId===e.creatorId&&(0,x.jsx)(l.Z,{to:"/places/".concat(e.id),children:"EDIT"}),r.userId===e.creatorId&&(0,x.jsx)(l.Z,{danger:!0,onClick:function(){return w(!0)},children:"DELETE"})]})]})})]})}function j(e){return 0===e.items.length?(0,x.jsx)("div",{className:"place-list center",children:(0,x.jsxs)(d.Z,{children:[(0,x.jsx)("h2",{children:"No places found, Maybe create one?"}),(0,x.jsx)(l.Z,{to:"/places/new",children:"Share Place"})]})}):(0,x.jsx)("ul",{className:"place-list",children:e.items.map((function(e){return(0,x.jsx)(f,{id:e.id,image:e.image,title:e.title,description:e.description,address:e.address,creatorId:e.creator,coordinates:e.location},e.id)}))})}function v(e){var r=(0,c.useState)(),n=(0,a.Z)(r,2),o=n[0],l=n[1],d=(0,p.x)(),u=d.isLoading,f=d.error,v=d.sendRequest,g=d.clearError,Z=(0,i.UO)().userId;return(0,c.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("https://places-backend-v6yn.onrender.comy"+"/api/places/user/".concat(Z));case 3:r=e.sent,l(r.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[v,Z]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.Z,{error:f,onClear:g}),u&&(0,x.jsx)("div",{className:"center",children:(0,x.jsx)(m.Z,{asOverlay:!0})}),!u&&o&&(0,x.jsx)(j,{items:o})]})}v.displayName="UserPlaces"}}]);
//# sourceMappingURL=793.2022864c.chunk.js.map