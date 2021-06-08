(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[508],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2253:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return l}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),s={id:"sample-tom",title:"SpringBoot-Sureness Sample(database scheme)",sidebar_label:"SpringBoot-Sureness Sample(database scheme)"},i={unversionedId:"integrate/sample-tom",id:"integrate/sample-tom",isDocsHomePage:!1,title:"SpringBoot-Sureness Sample(database scheme)",description:"sureness 30 Minute Tutorial",source:"@site/docs/integrate/sample-tom.md",sourceDirName:"integrate",slug:"/integrate/sample-tom",permalink:"/sureness/docs/integrate/sample-tom",editUrl:"https://github.com/dromara/sureness/edit/master/home/docs/integrate/sample-tom.md",version:"current",sidebar_label:"SpringBoot-Sureness Sample(database scheme)",frontMatter:{id:"sample-tom",title:"SpringBoot-Sureness Sample(database scheme)",sidebar_label:"SpringBoot-Sureness Sample(database scheme)"},sidebar:"docs",previous:{title:"SpringBoot-Sureness Sample(file scheme)",permalink:"/sureness/docs/integrate/sample-bootstrap"},next:{title:"Quarkus-Sureness Sample",permalink:"/sureness/docs/integrate/sample-quarkus"}},c=[],u={toc:c};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/tomsun28/sureness/tree/master/sample-tom"},"sureness 30 Minute Tutorial"),"  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"based on ",(0,o.kt)("inlineCode",{parentName:"li"},"springboot"),"    "),(0,o.kt)("li",{parentName:"ul"},"load data from mysql dataBase dataSource, then user can modify their access control data dynamically(see ",(0,o.kt)("inlineCode",{parentName:"li"},"AccountProvider ResourceProvider"),")   "),(0,o.kt)("li",{parentName:"ul"},"apart from having default ",(0,o.kt)("inlineCode",{parentName:"li"},"JWT, Basic Auth"),", it adds custom ",(0,o.kt)("inlineCode",{parentName:"li"},"subject subjectCreator processor")," to define new auth type(custom ",(0,o.kt)("inlineCode",{parentName:"li"},"subject subjectCreator processor..."),")."),(0,o.kt)("li",{parentName:"ul"},"project's protected entrance is ",(0,o.kt)("inlineCode",{parentName:"li"},"SurenessFilterExample")),(0,o.kt)("li",{parentName:"ul"},"suggest use postman to test, test case is in ",(0,o.kt)("inlineCode",{parentName:"li"},"sample-tom-postman.json"),", user can load it in postman  ")),(0,o.kt)("p",null,"The sample-tom contains two custom authentication methods  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Customize a separate subjectCreator, see ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomPasswdSubjectCreator"),(0,o.kt)("br",{parentName:"p"}),"\n","The demo function is to customize the account password of the request body from different places to create the default PasswordSubject and follow the default account password authentication process.  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Customize a whole set of processes (including subject subjectCreator processor), see ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomTokenSubject CustomTokenSubjectCreator CustomTokenProcessor"),(0,o.kt)("br",{parentName:"p"}),"\n","The demo function is to customize a simple token as the subject object, and customize its creation and acquisition method-creator and custom authentication processing flow-processor.",(0,o.kt)("br",{parentName:"p"}),"\n","This custom process also demonstrates a simple token refresh process."))))}l.isMDXComponent=!0}}]);