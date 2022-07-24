"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8703],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||l[m]||o;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(4137));const o={id:"extend-point",title:"Advanced Use",sidebar_label:"Extend Point"},s=void 0,c={unversionedId:"advanced/extend-point",id:"advanced/extend-point",title:"Advanced Use",description:"Sureness supports custom subject, custom subjectCreator, custom processor and more.",source:"@site/docs/advanced/extend-point.md",sourceDirName:"advanced",slug:"/advanced/extend-point",permalink:"/sureness/docs/advanced/extend-point",draft:!1,editUrl:"https://github.com/dromara/sureness/edit/master/home/docs/advanced/extend-point.md",tags:[],version:"current",frontMatter:{id:"extend-point",title:"Advanced Use",sidebar_label:"Extend Point"},sidebar:"docs",previous:{title:"Default Auth Exception",permalink:"/sureness/docs/start/default-exception"},next:{title:"Custom Subject",permalink:"/sureness/docs/advanced/custom-subject"}},i={},u=[],d={toc:u};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sureness supports custom subject, custom subjectCreator, custom processor and more."),(0,a.kt)("p",null,"Before advanced custom extension, let's first understand the general process of sureness:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph TD\nA(request in) --\x3e B(s)\nB(subjectCreate creates different key - subjects based on the request header content,every key can be tried once) --\x3e C(s)\nC(Different key authentication methods<differnet lock - processors> to process incoming key - subjects) --\x3e D(s)\nD(Once successful is successful and ends, failure means the next key lock attempt until the end of all attempts)\n")),(0,a.kt)("p",null,"As in the above process, Subject is created by SubjectCreate according to the request body, and different authentication processors process the supported Subjects."),(0,a.kt)("p",null,"Sureness provides the following common interfaces as extension points:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Subject"),": Authenticated authorized  user's account interface, provide the account's username,password, request resources, roles, etc.  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SubjectCreate"),": Create subject interface, provider create method.    "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Processor"),": Process subject interface, where happen authentication and authorization.   "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PathTreeProvider"),": Resource data provider, it can load data from txt or database,etc.  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SurenessAccountProvider"),": Account data provider, it can load data from txt or database,etc.")))}l.isMDXComponent=!0}}]);