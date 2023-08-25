"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,y=c["".concat(o,".").concat(u)]||c[u]||p[u]||s;return n?a.createElement(y,i(i({ref:t},m),{},{components:n})):a.createElement(y,i({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<s;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:4,tags:["Linux","Systemd"]},i="Systemd",l={unversionedId:"linux/systemd",id:"linux/systemd",title:"Systemd",description:"Systemd is a modern initialization and management system for Linux systems that replaces the traditional SysV init system. It provides more advanced features for managing system services and boot processes.",source:"@site/docs/linux/systemd.md",sourceDirName:"linux",slug:"/linux/systemd",permalink:"/Tutorials/linux/systemd",draft:!1,tags:[{label:"Linux",permalink:"/Tutorials/tags/linux"},{label:"Systemd",permalink:"/Tutorials/tags/systemd"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["Linux","Systemd"]},sidebar:"tutorialSidebar",previous:{title:"Backup",permalink:"/Tutorials/linux/backup"},next:{title:"Manjaro/Arch Linux",permalink:"/Tutorials/linux/manjaro"}},o={},d=[{value:"Targets",id:"targets",level:2},{value:"Add service",id:"add-service",level:2},{value:"Run a script after suspending has finished (resume)",id:"run-a-script-after-suspending-has-finished-resume",level:2}],m={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"systemd"},"Systemd"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Systemd")," is a modern initialization and management system for Linux systems that replaces the traditional SysV init system. It provides more advanced features for managing system services and boot processes."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Commands"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"systemd-analyze")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Measure system startup time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"systemd-analyze blame")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Identify startup delay contributors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"systemctl list-units --type=target")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Systemd Targets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"systemctl cat graphical.target")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Show content of graphical.target unit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"systemctl is-system-running")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Overall status of the system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"systemctl daemon-reload")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Reload systemd configuration and unit files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"systemctl get-default")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the default target or boot unit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"systemctl show --property=UnitPath")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display paths of unit files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"systemctl --state=failed")),(0,r.kt)("td",{parentName:"tr",align:"center"},"List failed units")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sudo systemctl list-unit-files --type=service --state=enabled --all")),(0,r.kt)("td",{parentName:"tr",align:"center"},"List all enabled service units")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"journalctl -u example.service")),(0,r.kt)("td",{parentName:"tr",align:"center"},"View logs for a specific unit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sudo systemctl edit --full service")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Edit the specified service unit file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sudo systemctl edit --force --full service")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Create new unit if not exists")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sudo systemctl list-unit-files \\| grep enabled")),(0,r.kt)("td",{parentName:"tr",align:"center"},"List enabled units using grep")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"systemd-analyze verify service")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Verify the syntax of service units")))),(0,r.kt)("h2",{id:"targets"},"Targets"),(0,r.kt)("p",null,"Systemd targets are units in the systemd initialization system that represent specific system states or operational modes. They are used to group and manage other units, such as services, that are relevant to a particular mode of operation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl cat graphical.target\n")),(0,r.kt)("h2",{id:"add-service"},"Add service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/system/sshtunnel.service\n\n[Unit]\nDescription=SSH Tunnel\nAfter=network.target\n\n[Service]\nUser=mlibre\nRestart=always\nRestartSec=20\nExecStart=ssh -L 0.0.0.0:1234:localhost:3128 -N pachan@43.204.151.127 -p 8756\n\n[Install]\nWantedBy=graphical.target\n\nsudo systemctl enable sshtunnel\nsudo systemctl reenable sshtunnel.service\nsudo systemctl restart sshtunnel\nsudo systemctl status sshtunnel\nsudo systemctl daemon-reload\nsudo journalctl -f -u sshtunnel\n")),(0,r.kt)("h2",{id:"run-a-script-after-suspending-has-finished-resume"},"Run a script after suspending has finished (resume)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/system/gamma.service\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[Unit]\nDescription=Start Script in terminal\nAfter=suspend.target graphical.target\n\n[Service]\nUser=mlibre\nType=idle\nEnvironment=DISPLAY=:0\nExecStartPre=/bin/sleep 10\nExecStart=/bin/bash /usr/local/bin/gamma_on_startup\n\n[Install]\nWantedBy=suspend.target graphical.target\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\nsudo systemctl enable gamma.service\nsystemctl status gamma\njournalctl -u gamma\n")))}p.isMDXComponent=!0}}]);