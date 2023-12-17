"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(u,".").concat(m)]||p[m]||s[m]||l;return n?r.createElement(h,o(o({ref:t},f),{},{components:n})):r.createElement(h,o({ref:t},f))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={title:"Ganache & Truffle",tags:["Ganache","Truffle","Ethereum"]},o="Ganache & Truffle",i={unversionedId:"blockchain/Ethereum/Truffle/readme",id:"blockchain/Ethereum/Truffle/readme",title:"Ganache & Truffle",description:"You can find the codes and files in the Github repo.",source:"@site/docs/blockchain/Ethereum/Truffle/readme.md",sourceDirName:"blockchain/Ethereum/Truffle",slug:"/blockchain/Ethereum/Truffle/",permalink:"/Wisdom-Hub/blockchain/Ethereum/Truffle/",draft:!1,tags:[{label:"Ganache",permalink:"/Wisdom-Hub/tags/ganache"},{label:"Truffle",permalink:"/Wisdom-Hub/tags/truffle"},{label:"Ethereum",permalink:"/Wisdom-Hub/tags/ethereum"}],version:"current",frontMatter:{title:"Ganache & Truffle",tags:["Ganache","Truffle","Ethereum"]},sidebar:"tutorialSidebar",previous:{title:"Voter Contract",permalink:"/Wisdom-Hub/blockchain/Ethereum/More Simple Smart Contracts/voter/"},next:{title:"Hyperledger Fabric",permalink:"/Wisdom-Hub/blockchain/Hyperledger/"}},u={},c=[],f={toc:c},p="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ganache--truffle"},"Ganache & Truffle"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can find the ",(0,a.kt)("strong",{parentName:"p"},"codes")," and ",(0,a.kt)("strong",{parentName:"p"},"files")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mlibre/blockchain/tree/master/Tutorials/Ethereum/Truffle"},(0,a.kt)("inlineCode",{parentName:"a"},"in the Github repo")),".")),(0,a.kt)("h1",{id:"ganache--truffle-1"},"Ganache & Truffle"),(0,a.kt)("p",null,"Ganache and Truffle are a set of tools for building and running test networks."),(0,a.kt)("h1",{id:"table-of-content"},"Table of content"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#new-workspace-configuration"},"New Workspace Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#starting-a-truffle-project"},"Starting a Truffle Project")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#running-a-truffle-project"},"Running a Truffle Project"))),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pamac install ganache-bin\nsudo npm install -g truffle@latest\n")),(0,a.kt)("h1",{id:"new-workspace-configuration"},"New Workspace Configuration"),(0,a.kt)("p",null,"Open ",(0,a.kt)("strong",{parentName:"p"},"Ganache")," and use the following configuration to start a new workspace"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HOSTNAME: 0.0.0.0"),(0,a.kt)("li",{parentName:"ul"},"PORT: 7545"),(0,a.kt)("li",{parentName:"ul"},"AUTOMINE: true"),(0,a.kt)("li",{parentName:"ul"},"GAS LIMIT 10000000000000000"),(0,a.kt)("li",{parentName:"ul"},"GAS PRICE: 200000000000")),(0,a.kt)("h1",{id:"starting-a-truffle-project"},"Starting a Truffle Project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"truffle init\n")),(0,a.kt)("p",null,"Edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n networks: {\n  ganache:\n  {\n   host: "127.0.0.1",     // Localhost (default: none)\n   port: 7545,            // Standard Ethereum port (default: none)\n   gas: 5000000,           // Gas sent with each transaction (default: ~6700000)\n   network_id: "*",       // Any network (default: none)\n  }\n },\n mocha: {\n  // timeout: 100000\n },\n compilers: {\n  solc: {\n   version: "0.8.9",    // Fetch exact version from solc-bin (default: truffle\'s version)\n  },\n },\n db: {\n  enabled: false\n }\n}\n')),(0,a.kt)("h1",{id:"running-a-truffle-project"},"Running a Truffle Project"),(0,a.kt)("p",null,"Put your contracts in the ",(0,a.kt)("inlineCode",{parentName:"p"},"contracts")," directory. and compile them with ",(0,a.kt)("inlineCode",{parentName:"p"},"truffle compile")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"truffle compile\n")),(0,a.kt)("p",null,"Deploy your contracts with ",(0,a.kt)("inlineCode",{parentName:"p"},"truffle migrate")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"truffle migrate --network ganache --reset\n")),(0,a.kt)("p",null,"It is done, now if you link the project folder to Ganache, you can see the deployed contracts."),(0,a.kt)("p",null,"You can also run the tests with ",(0,a.kt)("inlineCode",{parentName:"p"},"truffle test")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"truffle test\n")))}s.isMDXComponent=!0}}]);