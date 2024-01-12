"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5399],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=r,d=u["".concat(p,".").concat(h)]||u[h]||y[h]||i;return t?a.createElement(d,o(o({ref:n},l),{},{components:t})):a.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={},o="Cryptography",s={unversionedId:"blockchain/Cryptography/readme",id:"blockchain/Cryptography/readme",title:"Cryptography",description:"Cryptography is Study of secure communication techniques.",source:"@site/docs/blockchain/Cryptography/readme.md",sourceDirName:"blockchain/Cryptography",slug:"/blockchain/Cryptography/",permalink:"/Wisdom-Hub/blockchain/Cryptography/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bitcoin",permalink:"/Wisdom-Hub/blockchain/Bitcoin/"},next:{title:"Ethereum",permalink:"/Wisdom-Hub/blockchain/Ethereum/"}},p={},c=[{value:"Cryptography In Blockchain",id:"cryptography-in-blockchain",level:2},{value:"Hash Functions",id:"hash-functions",level:3},{value:"Digital Signatures",id:"digital-signatures",level:3},{value:"Consensus Mechanisms",id:"consensus-mechanisms",level:3},{value:"Simple Encryption &amp; Decryption with Openssl",id:"simple-encryption--decryption-with-openssl",level:2},{value:"Generate Key-Pairs with openssl - RSA",id:"generate-key-pairs-with-openssl---rsa",level:2},{value:"Encrypt and Decrypt using RSA Key-Pairs",id:"encrypt-and-decrypt-using-rsa-key-pairs",level:2}],l={toc:c},u="wrapper";function y(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cryptography"},"Cryptography"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Cryptography")," is Study of secure communication techniques."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Cryptography")," plays a vital role in securing communication and data in the digital world. In the context of ",(0,r.kt)("inlineCode",{parentName:"p"},"blockchain")," technology, it provides the foundation for secure ",(0,r.kt)("inlineCode",{parentName:"p"},"transactions"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"digital signatures"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"distributed consensus mechanisms")),(0,r.kt)("h2",{id:"cryptography-in-blockchain"},"Cryptography In Blockchain"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Cryptography")," is an essential component of ",(0,r.kt)("inlineCode",{parentName:"p"},"blockchain")," technology. It ensures the security and integrity of data stored on a blockchain. Here is some key aspects of cryptography in blockchain:"),(0,r.kt)("h3",{id:"hash-functions"},"Hash Functions"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"hash function")," is a one-way function that takes an input and produces a fixed-size output, typically a bit string. In the context of ",(0,r.kt)("inlineCode",{parentName:"p"},"blockchain"),", hash functions are used to create ",(0,r.kt)("inlineCode",{parentName:"p"},"unique identifiers")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"blocks")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"transactions"),". The most commonly used hash function in blockchain is ",(0,r.kt)("inlineCode",{parentName:"p"},"SHA-256"),", which produces a 256-bit output."),(0,r.kt)("h3",{id:"digital-signatures"},"Digital Signatures"),(0,r.kt)("p",null,"Digital signatures play a crucial role in securing transactions on a blockchain. They are used to prove the ",(0,r.kt)("inlineCode",{parentName:"p"},"authenticity")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"integrity")," of the data. In blockchain technology, digital signatures are created using public-key cryptography. A user ",(0,r.kt)("inlineCode",{parentName:"p"},"signs")," a transaction with their ",(0,r.kt)("inlineCode",{parentName:"p"},"private key"),", and anyone can verify the signature using the corresponding public key."),(0,r.kt)("h3",{id:"consensus-mechanisms"},"Consensus Mechanisms"),(0,r.kt)("p",null,"Cryptography is also at the heart of consensus mechanisms used in blockchain networks. These mechanisms ensure that only valid transactions are added to the blockchain and help maintain the security and integrity of the network. Some common consensus mechanisms include Proof of Work (PoW), Proof of Stake (PoS)."),(0,r.kt)("h2",{id:"simple-encryption--decryption-with-openssl"},"Simple Encryption & Decryption with Openssl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo HelloWorld > message.txt\nopenssl enc -aes-256-cbc -in message.txt -out message.bin\nopenssl enc -d -aes-256-cbc -in message.bin -out message.dec\ncat message.dec\nHelloWorld\n# Using base64\nopenssl enc -base64 -in message.bin -out message.b64\nopenssl enc -d -base64 -in message.b64 -out message.ptx\n")),(0,r.kt)("h2",{id:"generate-key-pairs-with-openssl---rsa"},"Generate Key-Pairs with openssl - RSA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl genpkey -algorithm RSA -out privatekey.pem -pkeyopt rsa_keygen_bits:1024\nopenssl rsa -pubout -in privatekey.pem -out publickey.pem\n")),(0,r.kt)("h2",{id:"encrypt-and-decrypt-using-rsa-key-pairs"},"Encrypt and Decrypt using RSA Key-Pairs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl rsautl -encrypt -inkey publickey.pem -pubin -in message.txt -out message.rsa\nopenssl rsautl -decrypt -inkey privatekey.pem -in message.rsa -out message.dec\n")))}y.isMDXComponent=!0}}]);