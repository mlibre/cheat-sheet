"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3567],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8535:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const a={},i=void 0,c={unversionedId:"blockchain/Ethereum/Quorum/readme",id:"blockchain/Ethereum/Quorum/readme",title:"readme",description:"Quorum is a permissioned private blockchain. forked from geth that allows you to run a private network.",source:"@site/docs/blockchain/Ethereum/Quorum/readme.md",sourceDirName:"blockchain/Ethereum/Quorum",slug:"/blockchain/Ethereum/Quorum/",permalink:"/Wisdom-Hub/blockchain/Ethereum/Quorum/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using MetaMask",permalink:"/Wisdom-Hub/blockchain/Ethereum/MetaMask/"},next:{title:"Crowd Funding With Deadline Contract",permalink:"/Wisdom-Hub/blockchain/Ethereum/Simple Smart Contracts/crowd-funding-using-library/"}},u={},l=[],s={toc:l},p="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Quorum")," is a permissioned private blockchain. forked from ",(0,o.kt)("inlineCode",{parentName:"p"},"geth")," that allows you to run a private network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx quorum-dev-quickstart\ncd quorum-test-network\n./run.sh\n")),(0,o.kt)("p",null,"It downloads all the necessary dependencies and docker images and starts the network. you can see the network on ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:25000/explorer/nodes")," address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps -a\n")))}m.isMDXComponent=!0}}]);