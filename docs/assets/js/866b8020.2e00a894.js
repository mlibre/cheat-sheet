"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=m(n),c=a,u=p["".concat(s,".").concat(c)]||p[c]||g[c]||l;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:4,tags:["Linux","Log","syslog","ring buffer","journalctl","monitoring"]},i="Log",o={unversionedId:"linux/log-monitoring",id:"linux/log-monitoring",title:"Log",description:"In Linux, the kernel uses a ring buffer to keep log messages from when the system starts. This buffer has a set size, and when it's full, new messages replace old ones.",source:"@site/docs/linux/log-monitoring.md",sourceDirName:"linux",slug:"/linux/log-monitoring",permalink:"/Wisdom-Hub/linux/log-monitoring",draft:!1,tags:[{label:"Linux",permalink:"/Wisdom-Hub/tags/linux"},{label:"Log",permalink:"/Wisdom-Hub/tags/log"},{label:"syslog",permalink:"/Wisdom-Hub/tags/syslog"},{label:"ring buffer",permalink:"/Wisdom-Hub/tags/ring-buffer"},{label:"journalctl",permalink:"/Wisdom-Hub/tags/journalctl"},{label:"monitoring",permalink:"/Wisdom-Hub/tags/monitoring"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["Linux","Log","syslog","ring buffer","journalctl","monitoring"]},sidebar:"tutorialSidebar",previous:{title:"Systemd",permalink:"/Wisdom-Hub/linux/systemd"},next:{title:"Shell and Scripting",permalink:"/Wisdom-Hub/linux/shell-scripting"}},s={},m=[{value:"dmesg",id:"dmesg",level:2},{value:"journalctl",id:"journalctl",level:2},{value:"Log Level",id:"log-level",level:3},{value:"Syslog",id:"syslog",level:2},{value:"rsyslog",id:"rsyslog",level:3},{value:"lastlog",id:"lastlog",level:2}],d={toc:m},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"log"},"Log"),(0,a.kt)("p",null,"In Linux, the kernel uses a ",(0,a.kt)("inlineCode",{parentName:"p"},"ring buffer")," to keep log messages from when the system starts. This buffer has a set size, and when it's full, new messages replace old ones."),(0,a.kt)("p",null,"The kernel log buffer is important for keeping the system working well and finding issues. User applications have their own ways of logging, which gives a bigger picture of what the whole system is doing."),(0,a.kt)("p",null,"Also, applications and services made by users can create their own messages. These are usually handled by different logging systems like ",(0,a.kt)("inlineCode",{parentName:"p"},"rsyslog")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd-journald"),"."),(0,a.kt)("h2",{id:"dmesg"},"dmesg"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"dmesg")," command is used to display the kernel ring buffer. By default it read the messaged from ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/kmsg"),", that provides access to the kernel ring buffer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dmesg\nsudo dmesg --level=emerg,alert,crit,err\n")),(0,a.kt)("h2",{id:"journalctl"},"journalctl"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"journalctl")," is a command-line utility for viewing and querying logs from the ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," journal, a system logging service commonly used in modern Linux distributions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart systemd-journald.service\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Command"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Kernel Logs"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"journalctl -k"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Systemd Logs (Live)"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"journalctl -f"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Current Boot Logs (Inlcuding kernel logs)"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"journalctl -b"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Monitor Boot Logs"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"journalctl -b -f"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},'Boot Logs with priority level of "err"'),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"journalctl -b -p err"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Unit Files Logs"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"journalctl -u sshd.service"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Verbose"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"journalctl -u sshd.service -x"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Flush Journal Logs"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"journalctl --flush"))))),(0,a.kt)("h3",{id:"log-level"},"Log Level"),(0,a.kt)("p",null,"Log Level refers to the severity or importance of the log messages generated by various components of the system"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"P"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Level"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"emerg"),(0,a.kt)("td",{parentName:"tr",align:"center"},"System is unusable")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"alert"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Action must be taken immediately")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"crit"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Critical conditions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"3"),(0,a.kt)("td",{parentName:"tr",align:"center"},"err"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Error conditions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"warning"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Warning conditions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"5"),(0,a.kt)("td",{parentName:"tr",align:"center"},"notice"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Normal but significant condition")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"6"),(0,a.kt)("td",{parentName:"tr",align:"center"},"info"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Informational messages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"7"),(0,a.kt)("td",{parentName:"tr",align:"center"},"debug"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Debug-level messages")))),(0,a.kt)("h2",{id:"syslog"},"Syslog"),(0,a.kt)("p",null,"It is a standard for recording events in a computer system."),(0,a.kt)("h3",{id:"rsyslog"},"rsyslog"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rsyslog")," is a free and open source ",(0,a.kt)("inlineCode",{parentName:"p"},"syslog")," implementation."),(0,a.kt)("h2",{id:"lastlog"},"lastlog"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"lastlog")," command displays the last login times and information for all users on the system.",(0,a.kt)("br",{parentName:"p"}),"\n","It provides details such as the username, port, and timestamp of the last login for each user. It reads the ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/log/lastlog")," binary file to retrieve this information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"lastlog\nUsername         Port     From                                       Latest\nroot                                                                **Never logged in**\nnobody                                                              **Never logged in**\ndbus                                                                **Never logged in**\nbin                                                                 **Never logged in**\nmlibre           pts/2    127.0.0.1                                 Sun Aug 20 22:39:47 +0330 2023\n")))}g.isMDXComponent=!0}}]);