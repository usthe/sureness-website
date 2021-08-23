(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8156],{3905:function(A,e,t){"use strict";t.d(e,{Zo:function(){return i},kt:function(){return l}});var a=t(7294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,a)}return t}function s(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,a,n=function(A,e){if(null==A)return{};var t,a,n={},r=Object.keys(A);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var p=a.createContext({}),c=function(A){var e=a.useContext(p),t=e;return A&&(t="function"==typeof A?A(e):s(s({},e),A)),t},i=function(A){var e=c(A.components);return a.createElement(p.Provider,{value:e},A.children)},u={inlineCode:"code",wrapper:function(A){var e=A.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(A,e){var t=A.components,n=A.mdxType,r=A.originalType,p=A.parentName,i=o(A,["components","mdxType","originalType","parentName"]),d=c(t),l=n,b=d["".concat(p,".").concat(l)]||d[l]||u[l]||r;return t?a.createElement(b,s(s({ref:e},i),{},{components:t})):a.createElement(b,s({ref:e},i))}));function l(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var r=t.length,s=new Array(r);s[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=A,o.mdxType="string"==typeof A?A:n,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11:function(A,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return p},default:function(){return i}});var a=t(2122),n=t(9756),r=(t(7294),t(3905)),s={id:"default-auth",title:"Default support auth type",sidebar_label:"Default Auth Types"},o={unversionedId:"start/default-auth",id:"start/default-auth",isDocsHomePage:!1,title:"Default support auth type",description:"Now sureness supports JWT, Basic Auth, Digest Auth... also can extend custom supported authentication methods(by extend interface Processor,Subject,SubjectCreate).",source:"@site/docs/start/default-auth.md",sourceDirName:"start",slug:"/start/default-auth",permalink:"/docs/start/default-auth",editUrl:"https://github.com/dromara/sureness/edit/master/home/docs/start/default-auth.md",version:"current",sidebar_label:"Default Auth Types",frontMatter:{id:"default-auth",title:"Default support auth type",sidebar_label:"Default Auth Types"},sidebar:"docs",previous:{title:"Default Document Config DataSource",permalink:"/docs/start/default-datasource"},next:{title:"Default Sureness Auth Exception",permalink:"/docs/start/default-exception"}},p=[],c={toc:p};function i(A){var e=A.components,s=(0,n.Z)(A,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now sureness supports JWT, Basic Auth, Digest Auth... also can extend custom supported authentication methods(by extend interface ",(0,r.kt)("inlineCode",{parentName:"p"},"Processor"),",",(0,r.kt)("inlineCode",{parentName:"p"},"Subject"),",",(0,r.kt)("inlineCode",{parentName:"p"},"SubjectCreate"),").   "),(0,r.kt)("h4",{id:"bearer-jwt"},(0,r.kt)("inlineCode",{parentName:"h4"},"bearer jwt")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"jwt")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"json web token"),", is a very popular cross-domain, stateless, security authentication solution.\nwhy we call ",(0,r.kt)("inlineCode",{parentName:"p"},"bearer jwt")," here is because ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt")," is put into the ",(0,r.kt)("inlineCode",{parentName:"p"},"bearer token")," in the http request header, eg: ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer jsonWebTokenValue"),(0,r.kt)("br",{parentName:"p"}),"\n","eg: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/v1/source1 HTTP/1.1\nHost: localhost:8088\nContent-Type: application/json\nAuthorization: Bearer eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNocjEEOwiAQRe8y65IwCBQ4hlvjotAhVqs1DBoT492l7F5e_vtfuNYFAliUPs3aCrIuCW1nFDHlUaBVqJOLJpkIA_ArtnHd7o0X5s43egim8qayy6lCQOOUd15JHIA-zy4OUo5dlG2lFp46KDjvR0fKhfgCIU8r0-8PAAD__w.f-3klWWDpEO3uDLlx2S53DV2cYernwVEDwcC6z1JexocbZoxRKmASTOuky1qMCxy_hV8-RbuMjDmI3ASa_FQOw\n")),(0,r.kt)("p",null,"we can use it in postman: add jwt in Bearer Token.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"jwtPostmanUse",src:t(7537).Z}),"  "),(0,r.kt)("h4",{id:"basic-auth"},(0,r.kt)("inlineCode",{parentName:"h4"},"basic auth")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"basic auth")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"Basic access authentication"),", is a classic ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," basic authentication method.",(0,r.kt)("br",{parentName:"p"}),"\n","This authentication method encrypts the string ",(0,r.kt)("inlineCode",{parentName:"p"},"base64")," composed of the account password and puts it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," of the request header, eg: ",(0,r.kt)("inlineCode",{parentName:"p"},'Authorization: Basic base64encode(username+":"+password)'),(0,r.kt)("br",{parentName:"p"}),"\n","eg:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/v1/source1 HTTP/1.1\nHost: localhost:8088\nContent-Type: application/json\nAuthorization: Basic dG9tOjMyMTEz\n")),(0,r.kt)("p",null,"we can use it in postman: add username password in ",(0,r.kt)("inlineCode",{parentName:"p"},"Basic Auth")," type's ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization"),", postman would encrypt it automatically.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"basicAuthPostmanUse",src:t(8794).Z}),"  "),(0,r.kt)("h4",{id:"digest-auth"},(0,r.kt)("inlineCode",{parentName:"h4"},"digest auth")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"digest auth")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"Digest access authentication"),", is a classic ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," digest authentication method. It is used to protect the transmitted password.",(0,r.kt)("br",{parentName:"p"}),"\n","The following is the authentication process flow of ",(0,r.kt)("inlineCode",{parentName:"p"},"digest auth"),", which come from ",(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/xiaoxiaotank/p/11078571.html"},"internet"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"digestFlow",src:t(4435).Z}),"  "),(0,r.kt)("p",null,"We can use it directly in the chrome browser: visit the url, enter the account password in the pop-up dialog box,\nand the chrome browser will automatically perform the authentication process.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"digestAuthChromeUse",src:t(3515).Z}),"    "),(0,r.kt)("h4",{id:"other-auth-type"},"other auth type"),(0,r.kt)("p",null,"Sureness currently supports these three mainly auth types for the time being, and will continue to expand other basic authentication methods in the future.\nOf course, you can easily customize the authentication method, detail: ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/custom-subject"},"Custom Subject"),"    "),(0,r.kt)("p",null,"We provide the demo to use default authentication method, detail please refer to  ",(0,r.kt)("a",{parentName:"p",href:"/docs/integrate/sample-bootstrap"},"10 Minute Tutorial's Program--sample-bootstrap"),(0,r.kt)("br",{parentName:"p"}),"\n","Also we provide the demo to custom authentication method, detail please refer to  ",(0,r.kt)("a",{parentName:"p",href:"/docs/integrate/sample-tom"},"30 Minute Tutorial's Program--sample-tom")))}i.isMDXComponent=!0},8794:function(A,e,t){"use strict";e.Z=t.p+"assets/images/basicAuthPostmanUse-dd87f04bdcdd401c9091a2e80e125575.png"},3515:function(A,e){"use strict";e.Z="data:image/png;base64,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"},4435:function(A,e,t){"use strict";e.Z=t.p+"assets/images/digestFlow-75d7cb156b57e87e79955c7109f201b7.png"},7537:function(A,e,t){"use strict";e.Z=t.p+"assets/images/jwtPostmanUse-a00294c9edd8714890c8bbefd186fe78.png"}}]);