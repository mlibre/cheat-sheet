"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,u=d["".concat(s,".").concat(m)]||d[m]||h[m]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="Hyperledger Fabric",l={unversionedId:"blockchain/Hyperledger/readme",id:"blockchain/Hyperledger/readme",title:"Hyperledger Fabric",description:"A blockchain is an immutable transaction ledger, maintained within a distributed network of peer nodes. Each node maintains a copy of the ledger and applies transactions that have been validated by a consensus protocol. Each block of transactions is then grouped into blocks that include a hash that binds each block to the previous block.",source:"@site/docs/blockchain/Hyperledger/readme.md",sourceDirName:"blockchain/Hyperledger",slug:"/blockchain/Hyperledger/",permalink:"/Wisdom-Hub/blockchain/Hyperledger/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ganache & Truffle",permalink:"/Wisdom-Hub/blockchain/Ethereum/Truffle/"},next:{title:"Getting Started",permalink:"/Wisdom-Hub/blockchain/Hyperledger/Getting Start"}},s={},p=[{value:"Why Hyperledger Fabric?",id:"why-hyperledger-fabric",level:2},{value:"Ecosystem",id:"ecosystem",level:2},{value:"Consensus",id:"consensus",level:2},{value:"Shared Ledger",id:"shared-ledger",level:2},{value:"Chaincode",id:"chaincode",level:2},{value:"Privacy and Confidentiality",id:"privacy-and-confidentiality",level:2},{value:"Permissions and Access Control",id:"permissions-and-access-control",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Reference",id:"reference",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hyperledger-fabric"},"Hyperledger Fabric"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"blockchain")," is an immutable transaction ledger, maintained within a distributed network of ",(0,r.kt)("inlineCode",{parentName:"p"},"peer nodes"),". Each node maintains a copy of the ledger and applies ",(0,r.kt)("inlineCode",{parentName:"p"},"transactions")," that have been validated by a ",(0,r.kt)("inlineCode",{parentName:"p"},"consensus")," protocol. Each block of transactions is then grouped into ",(0,r.kt)("inlineCode",{parentName:"p"},"blocks")," that include a hash that ",(0,r.kt)("inlineCode",{parentName:"p"},"binds")," each block to the ",(0,r.kt)("inlineCode",{parentName:"p"},"previous block"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Bitcoin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Ethereum")," classify as ",(0,r.kt)("inlineCode",{parentName:"p"},"public permissionless")," blockchain technology. Basically, these are public networks, open to anyone, where participants interact anonymously."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Hyperledger Fabric")," is an open-source, ",(0,r.kt)("inlineCode",{parentName:"p"},"permissioned blockchain"),". It has a ",(0,r.kt)("inlineCode",{parentName:"p"},"modular")," architecture that delivers high degrees of confidentiality, flexibility, resiliency, and scalability. It's designed to support pluggable implementations of different components."),(0,r.kt)("p",null,"In a ",(0,r.kt)("inlineCode",{parentName:"p"},"permissioned network"),", participants are ",(0,r.kt)("inlineCode",{parentName:"p"},"identified")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"known")," to each other, unlike with a ",(0,r.kt)("inlineCode",{parentName:"p"},"public permissionless")," network where the participants remain anonymous."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#why-hyperledger-fabric"},"Why Hyperledger Fabric?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ecosystem"},"Ecosystem")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#consensus"},"Consensus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#shared-ledger"},"Shared Ledger")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#chaincode"},"Chaincode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#privacy-and-confidentiality"},"Privacy and Confidentiality")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#permissions-and-access-control"},"Permissions and Access Control")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getting-started"},"Getting Started")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#reference"},"Reference"))),(0,r.kt)("h2",{id:"why-hyperledger-fabric"},"Why Hyperledger Fabric?"),(0,r.kt)("p",null,"For enterprise use, we need to consider the following requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Participants must be identified/identifiable"),(0,r.kt)("li",{parentName:"ul"},"Networks need to be permissioned"),(0,r.kt)("li",{parentName:"ul"},"High transaction throughput performance"),(0,r.kt)("li",{parentName:"ul"},"Low latency of transaction confirmation"),(0,r.kt)("li",{parentName:"ul"},"Privacy and confidentiality of transactions and data pertaining to business transactions")),(0,r.kt)("p",null,"One of the most important of the ",(0,r.kt)("inlineCode",{parentName:"p"},"platform\u2019s differentiators")," is its support for ",(0,r.kt)("inlineCode",{parentName:"p"},"pluggable consensus protocols")," that enable the platform to be more effectively customized to fit particular use cases and trust models."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Fabric")," can use consensus protocols that do not require a ",(0,r.kt)("inlineCode",{parentName:"p"},"native cryptocurrency")," to motivate expensive mining or smart contract execution."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hyperledger Fabric")," has been specifically architected to have a ",(0,r.kt)("inlineCode",{parentName:"p"},"modular")," architecture. Whether it is ",(0,r.kt)("inlineCode",{parentName:"p"},"consensus"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," management protocols, ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," management protocols or ",(0,r.kt)("inlineCode",{parentName:"p"},"cryptographic")," libraries, the platform has been designed at its core to be configured to meet the diversity of enterprise use case requirements"),(0,r.kt)("h2",{id:"ecosystem"},"Ecosystem"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docker-based deployment environments",src:n(6050).Z,width:"2045",height:"987"})),(0,r.kt)("h2",{id:"consensus"},"Consensus"),(0,r.kt)("p",null,"The process of keeping the ledger transactions synchronized across the network \u2014 to ensure that ledgers update only when transactions are approved by the appropriate participants, and that when ledgers do update, they update with the same transactions in the same order \u2014 is called consensus."),(0,r.kt)("p",null,"Transactions must be written to the ledger in the order in which they occur, even though they might be between different sets of participants within the network"),(0,r.kt)("p",null,"Hyperledger Fabric offers ",(0,r.kt)("inlineCode",{parentName:"p"},"Raft crash fault tolerant (CFT)"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"BFT")," consensus and as of Version 3 ",(0,r.kt)("inlineCode",{parentName:"p"},"SmartBFT")," consensus.\nYou can also write your own consensus algorithm. Consider using the ",(0,r.kt)("inlineCode",{parentName:"p"},"BFT")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"SmartBFT")," if true decentralization is required."),(0,r.kt)("h2",{id:"shared-ledger"},"Shared Ledger"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Hyperledger Fabric")," has a ledger subsystem comprising two components: the ",(0,r.kt)("inlineCode",{parentName:"p"},"world state")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction log"),". Each participant has a copy of the ledger to every Hyperledger Fabric network they belong to."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"world state")," component describes the ",(0,r.kt)("inlineCode",{parentName:"p"},"state of the ledger")," at a given point in time. It\u2019s the database of the ledger. The ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction log")," component records all transactions which have ",(0,r.kt)("inlineCode",{parentName:"p"},"resulted in the current value of the world state"),"; it\u2019s the update history for the world state. ",(0,r.kt)("inlineCode",{parentName:"p"},"The ledger"),", then, is a ",(0,r.kt)("inlineCode",{parentName:"p"},"combination")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"world state database")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction log")," history."),(0,r.kt)("p",null,"The ledger has a ",(0,r.kt)("inlineCode",{parentName:"p"},"replaceable data store")," for the world state. By default, this is a ",(0,r.kt)("inlineCode",{parentName:"p"},"LevelDB key-value")," store database. The transaction log does not need to be pluggable. It simply records the before and after values of the ledger database being used by the blockchain network."),(0,r.kt)("h2",{id:"chaincode"},"Chaincode"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Hyperledger Fabric")," ",(0,r.kt)("inlineCode",{parentName:"p"},"smart contracts")," are written in ",(0,r.kt)("inlineCode",{parentName:"p"},"chaincode")," and are invoked by an application external to the blockchain when that application needs to interact with the ledger"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chaincode")," (Smart contracts) run within a container environment (e.g. Docker) for isolation. They can be written in standard programming languages."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"Fabric"),", an application-specific endorsement policy specifies which peer nodes, or how many of them, need to vouch for the correct execution of a given smart contract. Thus, each transaction need only be executed (endorsed) by the subset of the peer nodes necessary to satisfy the transaction\u2019s endorsement policy. This allows for parallel execution increasing overall performance and scale of the system."),(0,r.kt)("h2",{id:"privacy-and-confidentiality"},"Privacy and Confidentiality"),(0,r.kt)("p",null,"Hyperledger Fabric, enables confidentiality through its ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," architecture and private data feature. In channels, participants on a Fabric network establish a ",(0,r.kt)("inlineCode",{parentName:"p"},"sub-network")," where every member has visibility to a ",(0,r.kt)("inlineCode",{parentName:"p"},"particular set")," of transactions. Thus, only those nodes that participate in a channel have access to the chaincode and data transacted, preserving the privacy and confidentiality of both. Private data allows collections between members on a channel, allowing much of the same protection as channels without the maintenance overhead of creating and maintaining a separate channel."),(0,r.kt)("h2",{id:"permissions-and-access-control"},"Permissions and Access Control"),(0,r.kt)("p",null,"The different actors in a blockchain network include ",(0,r.kt)("inlineCode",{parentName:"p"},"peers"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"orderers"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"client applications"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"administrators")," and more. Each of these actors has a ",(0,r.kt)("inlineCode",{parentName:"p"},"digital identity")," encapsulated in an ",(0,r.kt)("inlineCode",{parentName:"p"},"X.509 digital certificate"),". These identities matter because they determine the exact ",(0,r.kt)("inlineCode",{parentName:"p"},"permissions")," over ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"access")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"information")," that actors have in a blockchain network.",(0,r.kt)("br",{parentName:"p"}),"\n","For an identity to be ",(0,r.kt)("inlineCode",{parentName:"p"},"verifiable"),", it must come from a ",(0,r.kt)("inlineCode",{parentName:"p"},"trusted authority"),". A membership service provider (MSP) is that trusted authority in Fabric."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate Revocation List (CRL)")," is easy to understand \u2014 it\u2019s just a list of references to certificates that a CA knows to be revoked for one reason or another.",(0,r.kt)("br",{parentName:"p"}),"\n","When a third party wants to verify another party\u2019s identity, it first checks the issuing CA\u2019s CRL to make sure that the certificate has not been revoked"),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Start with the ",(0,r.kt)("a",{parentName:"p",href:"/Wisdom-Hub/blockchain/Hyperledger/Getting%20Start"},"Getting Start")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/fabric"},"https://github.com/hyperledger/fabric")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.hyperledger.org/"},"https://wiki.hyperledger.org/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.hyperledger.org/display/fabric/Ecosystem"},"https://wiki.hyperledger.org/display/fabric/Ecosystem")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/channel/UC7_X0WkMtkWzaVUKF-PRBNQ"},"https://www.youtube.com/channel/UC7_X0WkMtkWzaVUKF-PRBNQ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/@Hyperledger"},"https://www.youtube.com/@Hyperledger")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hyperledger-fabric.readthedocs.io/en/latest/index.html"},"https://hyperledger-fabric.readthedocs.io/en/latest/index.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.hyperledger.org/learn/training"},"https://www.hyperledger.org/learn/training"))))}h.isMDXComponent=!0},6050:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ecosystem-7b9f5c0cc08ea83b9ec6673618cb4073.png"}}]);