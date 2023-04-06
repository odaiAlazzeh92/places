"use strict";(self.webpackChunkmern=self.webpackChunkmern||[]).push([[191],{7212:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(9439),i=t(2791),r=t(3999),s=t(184),u=function(e){var n=(0,i.useState)(),t=(0,a.Z)(n,2),u=t[0],l=t[1],o=(0,i.useState)(),c=(0,a.Z)(o,2),d=c[0],p=c[1],v=(0,i.useState)(!1),f=(0,a.Z)(v,2),m=f[0],h=f[1],x=(0,i.useRef)();(0,i.useEffect)((function(){if(u){var e=new FileReader;e.onload=function(){p(e.result)},e.readAsDataURL(u)}}),[u]);return(0,s.jsxs)("div",{className:"form-control",children:[(0,s.jsx)("input",{ref:x,id:e.id,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(n){var t,a=m;n.target.files&&1===n.target.files.length?(t=n.target.files[0],l(t),h(!0),a=!0):(h(!1),a=!1),e.onInput(e.id,t,a)}}),(0,s.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[(0,s.jsxs)("div",{className:"image-upload__preview",children:[d&&(0,s.jsx)("img",{src:d,alt:"Preview"}),!d&&(0,s.jsx)("p",{children:"Please pick an image."})]}),(0,s.jsx)(r.Z,{type:"button",onClick:function(){x.current.click()},children:"PICK IMAGE"})]}),!m&&(0,s.jsx)("p",{children:e.errorText})]})}},2810:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(9439),i=t(1413),r=t(2791),s=t(1595),u=t(184),l=function(e,n){switch(n.type){case"CHANGE":return(0,i.Z)((0,i.Z)({},e),{},{value:n.val,isValid:(0,s.Gu)(n.val,n.validators)});case"TOUCH":return(0,i.Z)((0,i.Z)({},e),{},{isTouched:!0});default:return e}};function o(e){var n={value:e.value||"",isValid:e.valid||!1,isTouched:!1},t=(0,r.useReducer)(l,n),i=(0,a.Z)(t,2),s=i[0],o=i[1],c=e.id,d=e.onInput,p=s.value,v=s.isValid;(0,r.useEffect)((function(){d(c,p,v)}),[c,d,p,v]);var f=function(n){o({type:"CHANGE",val:n.target.value,validators:e.validators})},m=function(){o({type:"TOUCH"})},h="input"===e.element?(0,u.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:m,value:s.value}):(0,u.jsx)("textarea",{id:e.id,row:e.row||3,onChange:f,onBlur:m,value:s.value});return(0,u.jsxs)("div",{className:"form-control ".concat(!s.isValid&&s.isTouched&&"form-control--invalid"),children:[(0,u.jsx)("label",{htmlFor:e.id,children:e.label}),h,!s.isValid&&s.isTouched&&(0,u.jsx)("p",{children:e.errorText})]})}},5094:function(e,n,t){t.d(n,{c:function(){return l}});var a=t(9439),i=t(4942),r=t(1413),s=t(2791),u=function(e,n){switch(n.type){case"INPUT_CHANGE":var t=!0;for(var a in e.inputs)e.inputs[a]&&(t=a===n.inputId?t&&n.isValid:t&&e.inputs[a].isValid);return(0,r.Z)((0,r.Z)({},e),{},{inputs:(0,r.Z)((0,r.Z)({},e.inputs),{},(0,i.Z)({},n.inputId,{value:n.value,isValid:n.isValid})),isValid:t});case"SET_DATA":return{inputs:n.inputs,isValid:n.formIsValid};default:return e}};function l(e,n){var t=(0,s.useReducer)(u,{inputs:e,isValid:n}),i=(0,a.Z)(t,2),r=i[0],l=i[1];return[r,(0,s.useCallback)((function(e,n,t){l({type:"INPUT_CHANGE",value:n,isValid:t,inputId:e})}),[]),(0,s.useCallback)((function(e,n){l({type:"SET_DATA",inputs:e,formIsValid:n})}),[])]}},1595:function(e,n,t){t.d(n,{CP:function(){return o},Gu:function(){return d},Ox:function(){return c},hg:function(){return l}});var a=t(7762),i="REQUIRE",r="MINLENGTH",s="MAXLENGTH",u="EMAIL",l=function(){return{type:i}},o=function(e){return{type:r,val:e}},c=function(){return{type:u}},d=function(e,n){var t,l=!0,o=(0,a.Z)(n);try{for(o.s();!(t=o.n()).done;){var c=t.value;c.type===i&&(l=l&&e.trim().length>0),c.type===r&&(l=l&&e.trim().length>=c.val),c.type===s&&(l=l&&e.trim().length<=c.val),"MIN"===c.type&&(l=l&&+e>=c.val),"MAX"===c.type&&(l=l&&+e<=c.val),c.type===u&&(l=l&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){o.e(d)}finally{o.f()}return l}},4191:function(e,n,t){t.r(n),t.d(n,{Component:function(){return y}});var a=t(4165),i=t(5861),r=t(1413),s=t(9439),u=t(2791),l=t(7689),o=t(3108),c=t(3373),d=t(2810),p=t(3999),v=t(5434),f=t(9895),m=t(1595),h=t(5094),x=t(9508),g=t(7212),Z=t(184);function y(){var e=(0,u.useContext)(o.V),n=(0,u.useState)(!0),t=(0,s.Z)(n,2),y=t[0],j=t[1],w=(0,x.x)(),I=w.isLoading,T=w.error,C=w.sendRequest,V=w.clearError,N=(0,h.c)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),E=(0,s.Z)(N,3),b=E[0],k=E[1],P=E[2],S=(0,l.s0)(),A=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t){var i,r,s;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),y){n.next=20;break}return n.prev=2,(i=new FormData).append("name",b.inputs.name.value),i.append("email",b.inputs.email.value),i.append("password",b.inputs.password.value),i.append("image",b.inputs.image.value),n.next=10,C("http://localhost:5000/api/users/signup","POST",i);case 10:r=n.sent,e.login(r.userId,r.token),S("/"),n.next=18;break;case 15:throw n.prev=15,n.t0=n.catch(2),new Error(n.t0.message);case 18:n.next=31;break;case 20:return n.prev=20,n.next=23,C("http://localhost:5000/api/users/login","POST",JSON.stringify({email:b.inputs.email.value,password:b.inputs.password.value}),{"Content-Type":"application/json"});case 23:s=n.sent,e.login(s.userId,s.token),S("/"),n.next=31;break;case 28:throw n.prev=28,n.t1=n.catch(20),new Error(n.t1.message);case 31:case"end":return n.stop()}}),n,null,[[2,15],[20,28]])})));return function(e){return n.apply(this,arguments)}}();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(v.Z,{error:T,onClear:V}),(0,Z.jsxs)(c.Z,{className:"authentication",children:[I&&(0,Z.jsx)(f.Z,{isOverlay:!0}),(0,Z.jsx)("h2",{children:"Login Required"}),(0,Z.jsx)("hr",{}),(0,Z.jsxs)("form",{onSubmit:A,children:[!y&&(0,Z.jsx)(d.Z,{element:"input",id:"name",label:"Your Name",type:"text",validators:[(0,m.hg)()],errorText:"Please enter a name.",onInput:k}),!y&&(0,Z.jsx)(g.Z,{center:!0,id:"image",onInput:k,errorText:"Please provide an image"}),(0,Z.jsx)(d.Z,{id:"email",element:"input",type:"email",label:"E-Mail",validators:[(0,m.Ox)()],errorText:"Please enter a valid email address.",onInput:k}),(0,Z.jsx)(d.Z,{element:"input",id:"password",type:"password",label:"Password",validators:[(0,m.CP)(6)],errorText:"Please enter a valid password at least 6 characters.",onInput:k}),(0,Z.jsx)(p.Z,{type:"submit",disabled:!b.isValid,children:y?"LOGIN":"SIGNUP"})]}),(0,Z.jsxs)(p.Z,{inverse:!0,onClick:function(){y?P((0,r.Z)((0,r.Z)({},b.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):P((0,r.Z)((0,r.Z)({},b.inputs),{},{name:void 0,image:void 0}),b.inputs.email.isValid&&b.inputs.password.isValid),j((function(e){return!e}))},children:["SWITCH TO ",y?"SIGNUP":"LOGIN"]})]})]})}y.displayName="Auth"}}]);
//# sourceMappingURL=191.f87c8ab7.chunk.js.map