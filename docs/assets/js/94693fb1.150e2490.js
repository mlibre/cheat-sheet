"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[947],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(r),b=a,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||s;return r?n.createElement(f,u(u({ref:t},l),{},{components:r})):n.createElement(f,u({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,u=new Array(s);u[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:a,u[1]=o;for(var c=2;c<s;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},7421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_position:5,tags:["Docusaurus"]},u="Docusaurus",o={unversionedId:"docusaurus",id:"docusaurus",title:"Docusaurus",description:"Docusaurus is a static-site generator. It builds a single-page application with fast client-side navigation.",source:"@site/docs/docusaurus.md",sourceDirName:".",slug:"/docusaurus",permalink:"/cheat-sheet/docusaurus",draft:!1,tags:[{label:"Docusaurus",permalink:"/cheat-sheet/tags/docusaurus"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,tags:["Docusaurus"]},sidebar:"tutorialSidebar",previous:{title:"Raspberry pi",permalink:"/cheat-sheet/raspberry pi"}},i={},c=[{value:"Install",id:"install",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Run",id:"run",level:2},{value:"Resources",id:"resources",level:2}],l={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docusaurus"},"Docusaurus"),(0,a.kt)("p",null,"Docusaurus is a static-site generator. It builds a single-page application with fast client-side navigation.",(0,a.kt)("br",{parentName:"p"}),"\n","It provides out-of-the-box documentation features but can be used to create any kind of site."),(0,a.kt)("p",null,"\u26a1\ufe0f Docusaurus will help you ship a beautiful documentation site in no time",(0,a.kt)("br",{parentName:"p"}),"\n","\ud83d\udcb8 Building a custom tech stack is expensive. Instead, focus on your content and just write Markdown files",(0,a.kt)("br",{parentName:"p"}),"\n","\ud83d\udca5 Use advanced features like versioning, i18n, search and theme customizations"),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nano .gitignore\nnode_modules\n\nnpx create-docusaurus@latest website classic\ncd website\n\n# npx create-docusaurus@latest --help\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'nano package.json\n"mybuild": "rm -r .docusaurus/; rm -r docs/; rm -rf ../docs; cp -r ../Tutorials docs/; docusaurus build; cp -r build ../docs",\n"build": "rm -rf build; docusaurus build",\n\nnano docusaurus.config.js\n# Visit https://github.com/mlibre/cheat-sheet/blob/master/website/docusaurus.config.js\n')),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Starts the development server.\nnpm start\n\n# Bundles your website into static files for production into the "build" folder\nnpm run build\n\n# Build  website for github pages\nnpm run mybuild\n\n# Serves the built website locally\nnpm run serve\n\n# Publishes the website to GitHub pages\nnpm deploy\n')),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs"},"https://docusaurus.io/docs"))))}d.isMDXComponent=!0}}]);