"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[716],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=i,k=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(k,a(a({ref:t},c),{},{components:r})):n.createElement(k,a({ref:t},c))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2554:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:5,tags:["Network","IPV6","socks"]},a="Network Tips",l={unversionedId:"network/other",id:"network/other",title:"Network Tips",description:"This section is a comprehensive guide to various topics related to Networking, including disabling IPv6. There are also topics on how to use different VPN services and redirect network traffic.",source:"@site/docs/network/other.md",sourceDirName:"network",slug:"/network/other",permalink:"/Wisdom-Hub/network/other",draft:!1,tags:[{label:"Network",permalink:"/Wisdom-Hub/tags/network"},{label:"IPV6",permalink:"/Wisdom-Hub/tags/ipv-6"},{label:"socks",permalink:"/Wisdom-Hub/tags/socks"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,tags:["Network","IPV6","socks"]},sidebar:"tutorialSidebar",previous:{title:"DNS",permalink:"/Wisdom-Hub/network/dns"},next:{title:"AI",permalink:"/Wisdom-Hub/ai/"}},s={},p=[{value:"Disable IPV6",id:"disable-ipv6",level:2},{value:"Open an application over socks",id:"open-an-application-over-socks",level:2},{value:"Redirecting the whole network traffic",id:"redirecting-the-whole-network-traffic",level:2},{value:"Simple python http server",id:"simple-python-http-server",level:2},{value:"Monitoring traffic",id:"monitoring-traffic",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"network-tips"},"Network Tips"),(0,i.kt)("p",null,"This section is a comprehensive guide to various topics related to Networking, including disabling IPv6. There are also topics on how to use different VPN services and redirect network traffic."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-ipv6"},"Disable IPV6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#open-an-application-over-socks"},"Open an application over socks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#redirecting-the-whole-network-traffic"},"Redirecting the whole network traffic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#simple-python-http-server"},"Simple python http server")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#monitoring-traffic"},"Monitoring traffic"))),(0,i.kt)("h2",{id:"disable-ipv6"},"Disable IPV6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/sysctl.conf\n\nnet.ipv6.conf.all.disable_ipv6=1\nnet.ipv6.conf.default.disable_ipv6=1\n\nsudo sysctl -p \n")),(0,i.kt)("h2",{id:"open-an-application-over-socks"},"Open an application over socks"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"torsocks deluge\ntsokcs deluge\n")),(0,i.kt)("h2",{id:"redirecting-the-whole-network-traffic"},"Redirecting the whole network traffic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ip route add 192.168.1.0/24 dev ppp0\n# ppp0: vpn name\n# 192.168.1.0: IP range\n")),(0,i.kt)("h2",{id:"simple-python-http-server"},"Simple python http server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m http.server --bind 0.0.0.0 --cgi 8000\n")),(0,i.kt)("h2",{id:"monitoring-traffic"},"Monitoring traffic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Sy sniffnet\nsniffnet\n")))}d.isMDXComponent=!0}}]);