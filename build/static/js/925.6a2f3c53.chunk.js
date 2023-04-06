"use strict";(self.webpackChunkmern=self.webpackChunkmern||[]).push([[925],{6925:function(e,t,n){n.r(t),n.d(t,{Component:function(){return y}});var i=n(4165),r=n(5861),a=n(9439),l=n(2791),u=n(7689),s=n(2810),c=n(3999),o=n(3373),d=n(1595),p=n(5094),v=(n(8055),n(9508)),f=n(9895),h=n(5434),x=n(3108),m=n(184);function y(e){var t=(0,v.x)(),n=t.isLoading,y=t.error,Z=t.sendRequest,T=t.clearError,C=(0,l.useState)(),V=(0,a.Z)(C,2),j=V[0],E=V[1],I=(0,u.UO)().placeId,N=(0,p.c)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),A=(0,a.Z)(N,3),b=A[0],g=A[1],k=A[2],w=(0,l.useContext)(x.V),P=(0,u.s0)();(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z("http://localhost:5000"+"/api/places/".concat(I));case 3:t=e.sent,E(t.place),k({title:{value:t.place.title,isValid:!0},description:{value:t.place.description,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z,I,k]);var H=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,Z("http://localhost:5000"+"/api/places/".concat(I),"PATCH",JSON.stringify({title:b.inputs.title.value,description:b.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+w.token});case 4:P("/".concat(w.userId,"/places")),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return n?(0,m.jsx)("div",{className:"center",children:(0,m.jsx)(f.Z,{asOrlay:!0})}):(setTimeout((function(){if(!j&&!y)return(0,m.jsx)("div",{className:"center",children:(0,m.jsx)(o.Z,{children:(0,m.jsx)("h2",{children:"Could not find place!"})})})})),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h.Z,{error:y,onClear:T}),!n&&j&&(0,m.jsxs)("form",{className:"place-form",onSubmit:H,children:[(0,m.jsx)(s.Z,{id:"title",element:"input",type:"text",label:"Title",validators:[(0,d.hg)()],errorText:"Please enter a valid title",onInput:g,value:j.title,valid:!0}),(0,m.jsx)(s.Z,{id:"description",element:"textarea",label:"Description",validators:[(0,d.CP)(5)],errorText:"Please enter a valid description (min. 5 characters).",onInput:g,value:j.description,valid:!0}),(0,m.jsx)(c.Z,{type:"submit",disabled:!b.isValid,children:"UPDATE PLACE"})]})]}))}y.displayName="UpdatePlace"},2810:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(9439),r=n(1413),a=n(2791),l=n(1595),u=n(184),s=function(e,t){switch(t.type){case"CHANGE":return(0,r.Z)((0,r.Z)({},e),{},{value:t.val,isValid:(0,l.Gu)(t.val,t.validators)});case"TOUCH":return(0,r.Z)((0,r.Z)({},e),{},{isTouched:!0});default:return e}};function c(e){var t={value:e.value||"",isValid:e.valid||!1,isTouched:!1},n=(0,a.useReducer)(s,t),r=(0,i.Z)(n,2),l=r[0],c=r[1],o=e.id,d=e.onInput,p=l.value,v=l.isValid;(0,a.useEffect)((function(){d(o,p,v)}),[o,d,p,v]);var f=function(t){c({type:"CHANGE",val:t.target.value,validators:e.validators})},h=function(){c({type:"TOUCH"})},x="input"===e.element?(0,u.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:h,value:l.value}):(0,u.jsx)("textarea",{id:e.id,row:e.row||3,onChange:f,onBlur:h,value:l.value});return(0,u.jsxs)("div",{className:"form-control ".concat(!l.isValid&&l.isTouched&&"form-control--invalid"),children:[(0,u.jsx)("label",{htmlFor:e.id,children:e.label}),x,!l.isValid&&l.isTouched&&(0,u.jsx)("p",{children:e.errorText})]})}},5094:function(e,t,n){n.d(t,{c:function(){return s}});var i=n(9439),r=n(4942),a=n(1413),l=n(2791),u=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var i in e.inputs)e.inputs[i]&&(n=i===t.inputId?n&&t.isValid:n&&e.inputs[i].isValid);return(0,a.Z)((0,a.Z)({},e),{},{inputs:(0,a.Z)((0,a.Z)({},e.inputs),{},(0,r.Z)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}};function s(e,t){var n=(0,l.useReducer)(u,{inputs:e,isValid:t}),r=(0,i.Z)(n,2),a=r[0],s=r[1];return[a,(0,l.useCallback)((function(e,t,n){s({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),(0,l.useCallback)((function(e,t){s({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},1595:function(e,t,n){n.d(t,{CP:function(){return c},Gu:function(){return d},Ox:function(){return o},hg:function(){return s}});var i=n(7762),r="REQUIRE",a="MINLENGTH",l="MAXLENGTH",u="EMAIL",s=function(){return{type:r}},c=function(e){return{type:a,val:e}},o=function(){return{type:u}},d=function(e,t){var n,s=!0,c=(0,i.Z)(t);try{for(c.s();!(n=c.n()).done;){var o=n.value;o.type===r&&(s=s&&e.trim().length>0),o.type===a&&(s=s&&e.trim().length>=o.val),o.type===l&&(s=s&&e.trim().length<=o.val),"MIN"===o.type&&(s=s&&+e>=o.val),"MAX"===o.type&&(s=s&&+e<=o.val),o.type===u&&(s=s&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){c.e(d)}finally{c.f()}return s}},8055:function(){}}]);
//# sourceMappingURL=925.6a2f3c53.chunk.js.map