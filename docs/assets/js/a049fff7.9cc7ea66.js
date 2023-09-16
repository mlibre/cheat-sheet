"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3846],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2063:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const l={sidebar_position:9,tags:["Linux","tools"]},r="Awesome Tools",i={unversionedId:"linux/tools",id:"linux/tools",title:"Awesome Tools",description:"Shell",source:"@site/docs/linux/tools.md",sourceDirName:"linux",slug:"/linux/tools",permalink:"/Wisdom-Hub/linux/tools",draft:!1,tags:[{label:"Linux",permalink:"/Wisdom-Hub/tags/linux"},{label:"tools",permalink:"/Wisdom-Hub/tags/tools"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,tags:["Linux","tools"]},sidebar:"tutorialSidebar",previous:{title:"multimedia",permalink:"/Wisdom-Hub/linux/multimedia"},next:{title:"GRUB",permalink:"/Wisdom-Hub/linux/other"}},s={},p=[{value:"Shell",id:"shell",level:2},{value:"ble.sh",id:"blesh",level:3},{value:"Bash It",id:"bash-it",level:3},{value:"System monitoring",id:"system-monitoring",level:2},{value:"Neofetch",id:"neofetch",level:3},{value:"htop",id:"htop",level:3},{value:"prettyping",id:"prettyping",level:3},{value:"Network Monitoring",id:"network-monitoring",level:2},{value:"bmon",id:"bmon",level:3},{value:"Wine",id:"wine",level:2},{value:"proxy",id:"proxy",level:2},{value:"proxychains",id:"proxychains",level:3},{value:"Youtube Download",id:"youtube-download",level:2},{value:"Add Alias",id:"add-alias",level:3},{value:"Instant cloud file share",id:"instant-cloud-file-share",level:2},{value:"Open Interpreter",id:"open-interpreter",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"awesome-tools"},"Awesome Tools"),(0,o.kt)("h2",{id:"shell"},"Shell"),(0,o.kt)("h3",{id:"blesh"},"ble.sh"),(0,o.kt)("p",null,"Syntax highlighting and auto suggestions for bash"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# https://github.com/akinomyoga/ble.sh\ngit clone --recursive --depth 1 --shallow-submodules https://github.com/akinomyoga/ble.sh.git\nmake -C ble.sh install PREFIX=~/.local\necho 'source ~/.local/share/blesh/ble.sh' >> ~/.bashrc\n\n# Install in Manjaro\npamac install blesh-git\n")),(0,o.kt)("h3",{id:"bash-it"},"Bash It"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --depth=1 https://github.com/Bash-it/bash-it.git ~/.bash_it\n~/.bash_it/install.sh\n\nsource ~/.bashrc\n\nbashit\nbash-it show aliases\nbash-it show plugins\nbash-it show completions\n\nbash-it enable completion all\nbash-it update\nbash-it reload\n\nls ~/.bash_it/themes/\n\nbash-it enable plugin man\n\ncd $BASH_IT\n./uninstall.sh\n")),(0,o.kt)("h2",{id:"system-monitoring"},"System monitoring"),(0,o.kt)("h3",{id:"neofetch"},"Neofetch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"neofetch \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   mlibre@mlibre-systemproductname \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   ------------------------------- \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   OS: Manjaro Linux x86_64 \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   Kernel: 6.1.49-1-MANJARO \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588            \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   Uptime: 38 mins \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   Packages: 1657 (pacman) \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   Shell: bash 5.1.16 \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   Resolution: 2560x1440 \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   DE: Plasma 5.27.7 \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   WM: KWin \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   Theme: [Plasma], Breeze [GTK2/3] \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   Icons: [Plasma], breeze [GTK2/3] \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   Terminal: konsole \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   CPU: 12th Gen Intel i5-12400F (12) @ 5.600GHz \n                               GPU: AMD ATI Radeon RX 6400/6500 XT/6500M \n                               Memory: 5046MiB / 31906MiB \n                                                       \n")),(0,o.kt)("h3",{id:"htop"},"htop"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"htop\n")),(0,o.kt)("h3",{id:"prettyping"},"prettyping"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S prettyping\nprettyping\n")),(0,o.kt)("h2",{id:"network-monitoring"},"Network Monitoring"),(0,o.kt)("h3",{id:"bmon"},"bmon"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S bmon\nbmon\n")),(0,o.kt)("h2",{id:"wine"},"Wine"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# pamac install wine-stable\nsudo pacman -S wine winetricks\nwinetricks corefonts vcrun2013 vcrun2015 winhttp allcodecs d3dcompiler_42 d3dcompiler_43 d3dcompiler_47 d3dx9 dotnet dxvk quartz\nsudo setcap cap_net_raw+epi /usr/bin/wine\n")),(0,o.kt)("h2",{id:"proxy"},"proxy"),(0,o.kt)("h3",{id:"proxychains"},"proxychains"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/proxychains.conf \nsocks5  127.0.0.1 1080\n# comment proxy_dns\n# proxy_dns\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Use proxychains to run yay, git, npm and pacman\nproxychains yay --noprovides --answerdiff None --answerclean None --mflags "--noconfirm"  -S protonvpn\nproxychains git clone https://github.com/boypt/vmess2json.git\nsudo proxychains npm -g install v2ray-tools\nsudo proxychains pacman -Syyuu\n\n# Set the http and https proxy environment variables\nexport http_proxy=socks5://127.0.0.1:1080\nexport https_proxy=socks5://127.0.0.1:1080\n')),(0,o.kt)("h2",{id:"youtube-download"},"Youtube Download"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Install\nsudo pacman -S youtube-dl yt-dlp\n\n# Download best quality\nyt-dlp "https://www.youtube.com/link"\n\nyt-dlp -f b --write-description  --write-auto-sub --write-subs --embed-subs --write-info-json --max-filesize 100M --download-sections "*6:02-13:40" --proxy socks5://127.0.0.1:1080/ --verbose "https://www.youtube.com/link"\n\n# List formats and sizes\nyt-dlp -F "https://www.youtube.com/link"\nyt-dlp -f 22 "https://www.youtube.com/link" \n\nyoutube-dl -f best "https://www.youtube.com/link"\n')),(0,o.kt)("h3",{id:"add-alias"},"Add Alias"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano ~/.bashrc\nalias yd='yt-dlp -f b --write-auto-sub --write-subs --embed-subs --write-info-json --max-filesize 100M'\nyd \"link\"\n\n## Install Genymotoin Android emulator\n\n```bash\nsudo pamac install genymotion\n")),(0,o.kt)("h2",{id:"instant-cloud-file-share"},"Instant cloud file share"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# -F autodestroy=1 autodestroy on download or expire in 5\ncurl https://oshi.at -F f=@/home/true/backup.tar.gz -F expire=5 minutes\ncurl -F "file=@/home/mlibre/Downloads/backup.tar.gz" "https://file.io/?expires=1w"\n')),(0,o.kt)("h2",{id:"open-interpreter"},"Open Interpreter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python -m venv myvirtenv\nsource myvirtenv/bin/activate\npip install open-interpreter\ninterpreter --model tiiuae/falcon-180B\n")))}d.isMDXComponent=!0}}]);