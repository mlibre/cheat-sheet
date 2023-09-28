"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6911],{3905:(e,s,n)=>{n.d(s,{Zo:()=>u,kt:()=>p});var t=n(7294);function o(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function r(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?r(Object(n),!0).forEach((function(s){o(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}function d(e,s){if(null==e)return{};var n,t,o=function(e,s){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],s.indexOf(n)>=0||(o[n]=e[n]);return o}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=t.createContext({}),c=function(e){var s=t.useContext(a),n=s;return e&&(n="function"==typeof e?e(s):l(l({},s),e)),n},u=function(e){var s=c(e.components);return t.createElement(a.Provider,{value:s},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var s=e.children;return t.createElement(t.Fragment,{},s)}},v=t.forwardRef((function(e,s){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),i=c(n),v=o,p=i["".concat(a,".").concat(v)]||i[v]||m[v]||r;return n?t.createElement(p,l(l({ref:s},u),{},{components:n})):t.createElement(p,l({ref:s},u))}));function p(e,s){var n=arguments,o=s&&s.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=v;var d={};for(var a in s)hasOwnProperty.call(s,a)&&(d[a]=s[a]);d.originalType=e,d[i]="string"==typeof e?e:o,l[1]=d;for(var c=2;c<r;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}v.displayName="MDXCreateElement"},5939:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=n(7462),o=(n(7294),n(3905));const r={sidebar_position:4,tags:["dns"]},l="DNS",d={unversionedId:"network/dns",id:"network/dns",title:"DNS",description:"Configuring DNS on Linux",source:"@site/docs/network/dns.md",sourceDirName:"network",slug:"/network/dns",permalink:"/Wisdom-Hub/network/dns",draft:!1,tags:[{label:"dns",permalink:"/Wisdom-Hub/tags/dns"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["dns"]},sidebar:"tutorialSidebar",previous:{title:"VPN",permalink:"/Wisdom-Hub/network/vpn"},next:{title:"AI",permalink:"/Wisdom-Hub/ai/"}},a={},c=[{value:"Configuring DNS on Linux",id:"configuring-dns-on-linux",level:2},{value:"resolv.conf",id:"resolvconf",level:3},{value:"resolvconf",id:"resolvconf-1",level:3},{value:"systemd-resolved",id:"systemd-resolved",level:3},{value:"dhclient",id:"dhclient",level:3},{value:"Fast System-wide DNS Setup",id:"fast-system-wide-dns-setup",level:2},{value:"Shekan",id:"shekan",level:3},{value:"403",id:"403",level:3},{value:"electrotm",id:"electrotm",level:3},{value:"OpenDns",id:"opendns",level:3},{value:"Cloudflare",id:"cloudflare",level:3},{value:"Setting domains directly in /etc/hosts",id:"setting-domains-directly-in-etchosts",level:2},{value:"Setting Up DNS Server",id:"setting-up-dns-server",level:2},{value:"Using Systemd",id:"using-systemd",level:3},{value:"Using dnsmasq",id:"using-dnsmasq",level:3}],u={toc:c},i="wrapper";function m(e){let{components:s,...n}=e;return(0,o.kt)(i,(0,t.Z)({},u,n,{components:s,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dns"},"DNS"),(0,o.kt)("h2",{id:"configuring-dns-on-linux"},"Configuring DNS on Linux"),(0,o.kt)("h3",{id:"resolvconf"},"resolv.conf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo nano /etc/resolv.conf\nnameserver 1.1.1.1\nnameserver 1.0.0.1\nnameserver 208.67.222.222\nnameserver 208.67.220.220\nnameserver 8.8.8.8\nnameserver 8.8.4.4\n\n# echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf\n')),(0,o.kt)("h3",{id:"resolvconf-1"},"resolvconf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable resolvconf\nsudo nano /etc/resolvconf/resolv.conf.d/head\nsudo nano /etc/resolvconf/resolv.conf.d/base\nnameserver 1.1.1.1\nnameserver 208.67.222.222\nnameserver 208.67.220.220\nnameserver 8.8.8.8\n")),(0,o.kt)("h3",{id:"systemd-resolved"},"systemd-resolved"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/resolved.conf\n[Resolve]\nDNS=1.1.1.1 208.67.222.222 208.67.220.220 8.8.8.8\n\nsudo nano /run/systemd/resolve/stub-resolv.conf\nnameserver 1.1.1.1\nnameserver 208.67.222.222\nnameserver 208.67.220.220\nnameserver 8.8.8.8\n\nsudo systemctl enable systemd-resolved\nsudo systemctl restart systemd-resolved\n\n# resolvectl dns enp3s0 1.1.1.1 \n# resolvectl dns enp1s0f0u6 1.1.1.1\nresolvectl dns\n")),(0,o.kt)("h3",{id:"dhclient"},"dhclient"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/dhcp/dhclient.conf\nprepend domain-name-servers 208.67.222.222, 208.67.220.220, 8.8.8.8\n\nsudo nano /etc/network/interfaces\niface eth0 inet static\n  dns-nameservers 208.67.222.222 208.67.220.220 8.8.8.8\n")),(0,o.kt)("h2",{id:"fast-system-wide-dns-setup"},"Fast System-wide DNS Setup"),(0,o.kt)("h3",{id:"shekan"},"Shekan"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# resolvectl query identitytoolkit.googleapis.com\nDNS_SERVER="178.22.122.100"\nsudo sh -c "echo nameserver $DNS_SERVER > /etc/resolv.conf"\nsudo sed -i \'/^\\s*#*DNS=/d\' /etc/systemd/resolved.conf && sudo sed -i \'$ a\\DNS=\'"$DNS_SERVER" /etc/systemd/resolved.conf\nsudo systemctl daemon-reload; wait;\nsudo systemctl restart systemd-networkd; wait;\nsudo systemctl restart systemd-resolved; wait;\nsudo systemd-resolve --flush-caches\nsudo resolvectl flush-caches\nsudo resolvectl dns eth0 "$DNS_SERVER"\nsudo resolvectl dns tun0 "$DNS_SERVER"\nsudo resolvectl dns enp3s0 "$DNS_SERVER"\nsudo resolvectl dns enp5s0 "$DNS_SERVER"\nsudo resolvectl dns docker0 "$DNS_SERVER"\nsudo resolvectl dns\n')),(0,o.kt)("h3",{id:"403"},"403"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'DNS_SERVER="10.202.10.102"\nsudo sh -c "echo nameserver $DNS_SERVER > /etc/resolv.conf"\nsudo sed -i \'/^\\s*#*DNS=/d\' /etc/systemd/resolved.conf && sudo sed -i \'$ a\\DNS=\'"$DNS_SERVER" /etc/systemd/resolved.conf\nsudo systemctl daemon-reload; wait;\nsudo systemctl restart systemd-networkd; wait;\nsudo systemctl restart systemd-resolved; wait;\nsudo systemd-resolve --flush-caches\nsudo resolvectl flush-caches\nsudo resolvectl dns eth0 "$DNS_SERVER"\nsudo resolvectl dns tun0 "$DNS_SERVER"\nsudo resolvectl dns enp3s0 "$DNS_SERVER"\nsudo resolvectl dns enp5s0 "$DNS_SERVER"\nsudo resolvectl dns docker0 "$DNS_SERVER"\nsudo resolvectl dns\n')),(0,o.kt)("h3",{id:"electrotm"},"electrotm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'DNS_SERVER="78.157.42.101"\nsudo sh -c "echo nameserver $DNS_SERVER > /etc/resolv.conf"\nsudo sed -i \'/^\\s*#*DNS=/d\' /etc/systemd/resolved.conf && sudo sed -i \'$ a\\DNS=\'"$DNS_SERVER" /etc/systemd/resolved.conf\nsudo systemctl daemon-reload; wait;\nsudo systemctl restart systemd-networkd; wait;\nsudo systemctl restart systemd-resolved; wait;\nsudo systemd-resolve --flush-caches\nsudo resolvectl flush-caches\nsudo resolvectl dns eth0 "$DNS_SERVER"\nsudo resolvectl dns tun0 "$DNS_SERVER"\nsudo resolvectl dns enp3s0 "$DNS_SERVER"\nsudo resolvectl dns enp5s0 "$DNS_SERVER"\nsudo resolvectl dns docker0 "$DNS_SERVER"\nsudo resolvectl dns\n')),(0,o.kt)("h3",{id:"opendns"},"OpenDns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'DNS_SERVER="208.67.222.222"\nsudo sh -c "echo nameserver $DNS_SERVER > /etc/resolv.conf"\nsudo sed -i \'/^\\s*#*DNS=/d\' /etc/systemd/resolved.conf && sudo sed -i \'$ a\\DNS=\'"$DNS_SERVER" /etc/systemd/resolved.conf\nsudo systemctl daemon-reload; wait;\nsudo systemctl restart systemd-networkd; wait;\nsudo systemctl restart systemd-resolved; wait;\nsudo systemd-resolve --flush-caches\nsudo resolvectl flush-caches\nsudo resolvectl dns eth0 "$DNS_SERVER"\nsudo resolvectl dns tun0 "$DNS_SERVER"\nsudo resolvectl dns enp3s0 "$DNS_SERVER"\nsudo resolvectl dns enp5s0 "$DNS_SERVER"\nsudo resolvectl dns docker0 "$DNS_SERVER"\nsudo resolvectl dns\n')),(0,o.kt)("h3",{id:"cloudflare"},"Cloudflare"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'DNS_SERVER="1.1.1.1"\nsudo sh -c "echo nameserver $DNS_SERVER > /etc/resolv.conf"\nsudo sed -i \'/^\\s*#*DNS=/d\' /etc/systemd/resolved.conf && sudo sed -i \'$ a\\DNS=\'"$DNS_SERVER" /etc/systemd/resolved.conf\nsudo systemctl daemon-reload; wait;\nsudo systemctl restart systemd-networkd; wait;\nsudo systemctl restart systemd-resolved; wait;\nsudo systemd-resolve --flush-caches\nsudo resolvectl flush-caches\nsudo resolvectl dns eth0 "$DNS_SERVER"\nsudo resolvectl dns tun0 "$DNS_SERVER"\nsudo resolvectl dns enp3s0 "$DNS_SERVER"\nsudo resolvectl dns enp5s0 "$DNS_SERVER"\nsudo resolvectl dns docker0 "$DNS_SERVER"\nsudo resolvectl dns\n')),(0,o.kt)("h2",{id:"setting-domains-directly-in-etchosts"},"Setting domains directly in /etc/hosts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/hosts\n\n10.202.10.4 securetoken.googleapis.com\n50.7.87.84  identitytoolkit.googleapis.com\n50.7.87.84  bard.google.com\n50.7.85.222 openai.com\n50.7.85.220 chat.openai.com\n50.7.87.85  cdn.openai.com\n188.68.52.244 www.bing.com\n50.7.87.85  marketplace.visualstudio.com\n50.7.85.222 auth0.openai.com\n50.7.85.218 api.codium.ai\n")),(0,o.kt)("h2",{id:"setting-up-dns-server"},"Setting Up DNS Server"),(0,o.kt)("h3",{id:"using-systemd"},"Using Systemd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/resolved.conf\n[Resolve]\nDNS=1.1.1.1 9.9.9.9#dns.quad9.net 8.8.8.8\nFallbackDNS=208.67.222.222 208.67.220.220\nDNSSEC=yes\nDNSOverTLS=no\nCache=yes        \nDNSStubListener=yes\nReadEtcHosts=yes\n#Domains=\n#LLMNR=no\n#MulticastDNS=no\n\nsudo systemctl enable systemd-resolved.service\nsudo systemctl restart systemd-resolved.service\nsudo systemctl restart NetworkManager\n")),(0,o.kt)("h3",{id:"using-dnsmasq"},"Using dnsmasq"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install dnsmasq\n")))}m.isMDXComponent=!0}}]);