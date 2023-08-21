"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3898],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return r?t.createElement(f,s(s({ref:n},u),{},{components:r})):t.createElement(f,s({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2840:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2,tags:["Linux","Performance"]},s="Performance",i={unversionedId:"linux/performance",id:"linux/performance",title:"Performance",description:"Disable Linux Watchdogs, compaction and more",source:"@site/docs/linux/performance.md",sourceDirName:"linux",slug:"/linux/performance",permalink:"/Tutorials/linux/performance",draft:!1,tags:[{label:"Linux",permalink:"/Tutorials/tags/linux"},{label:"Performance",permalink:"/Tutorials/tags/performance"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Linux","Performance"]},sidebar:"tutorialSidebar",previous:{title:"Tips and Tricks",permalink:"/Tutorials/linux/Tips and Tricks"},next:{title:"Backup",permalink:"/Tutorials/linux/backup"}},c={},l=[{value:"Disable Linux Watchdogs, compaction and more",id:"disable-linux-watchdogs-compaction-and-more",level:2},{value:"Improve fstab, ssd, nvme performance",id:"improve-fstab-ssd-nvme-performance",level:2},{value:"Disabling journaling",id:"disabling-journaling",level:2},{value:"Journal Size",id:"journal-size",level:2}],u={toc:l},p="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"performance"},"Performance"),(0,a.kt)("h2",{id:"disable-linux-watchdogs-compaction-and-more"},"Disable Linux Watchdogs, compaction and more"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start systemd-sysctl.service\nsudo systemctl enable systemd-sysctl.service\n# sudo nano /etc/sysctl.conf\n# And\nsudo nano /etc/sysctl.d/sys.conf\n\nnet.ipv4.tcp_fastopen=3\nnet.ipv4.ip_forward=1\nkernel.nmi_watchdog=0\nkernel.watchdog=0\nvm.compaction_proactiveness=0\nvm.zone_reclaim_mode=0\nvm.page_lock_unfairness=1\nkernel.perf_event_paranoid=-1\nfs.inode-nr=200000\nvm.dirty_background_ratio=5\nvm.vfs_cache_pressure=50\nnet.ipv4.tcp_max_syn_backlog=8192\nnet.ipv4.tcp_tw_reuse=1\nvm.min_free_kbytes=2500000\n")),(0,a.kt)("h2",{id:"improve-fstab-ssd-nvme-performance"},"Improve fstab, ssd, nvme performance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/fstab \nUUID=f74c37b2-8a12-4252-90a6-d31504507bcb / ext4  defaults,noatime,nodiratime,commit=60,barrier=0  0 1\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sudo nano /etc/udev/rules.d/60-ioschedulers.rules\n\nACTION=="add|change", KERNEL=="nvme[0-9]n[0-9]", ATTR{queue/scheduler}="none"\n')),(0,a.kt)("h2",{id:"disabling-journaling"},"Disabling journaling"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sudo tune2fs -f -O "^has_journal" /dev/sda2\n')),(0,a.kt)("h2",{id:"journal-size"},"Journal Size"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/journald.conf\nSystemMaxUse=100M\nsudo systemctl restart systemd-journald\n")))}m.isMDXComponent=!0}}]);