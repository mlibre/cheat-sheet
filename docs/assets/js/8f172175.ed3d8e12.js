"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[757],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>k});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return t?n.createElement(k,i(i({ref:a},u),{},{components:t})):n.createElement(k,i({ref:a},u))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3559:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const l={sidebar_position:4,tags:["Raspberry pi"]},i="Raspberry pi",o={unversionedId:"raspberry pi",id:"raspberry pi",title:"Raspberry pi",description:"- Raspberry Pi OS",source:"@site/docs/raspberry pi.md",sourceDirName:".",slug:"/raspberry pi",permalink:"/cheat-sheet/raspberry pi",draft:!1,tags:[{label:"Raspberry pi",permalink:"/cheat-sheet/tags/raspberry-pi"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["Raspberry pi"]},sidebar:"tutorialSidebar",previous:{title:"Network",permalink:"/cheat-sheet/network"},next:{title:"Docusaurus",permalink:"/cheat-sheet/docusaurus"}},s={},p=[{value:"Raspberry Pi OS",id:"raspberry-pi-os",level:2},{value:"First Things",id:"first-things",level:2},{value:"rasp-config",id:"rasp-config",level:2},{value:"Fix $PATH",id:"fix-path",level:2},{value:"Network",id:"network",level:2},{value:"Disable ipv6",id:"disable-ipv6",level:3},{value:"Disable WiFi and Bluetooth",id:"disable-wifi-and-bluetooth",level:3},{value:"Enable ipv4 forwarding",id:"enable-ipv4-forwarding",level:3},{value:"Find rpi in the Network",id:"find-rpi-in-the-network",level:3},{value:"Improve Performace",id:"improve-performace",level:3},{value:"Static DNS",id:"static-dns",level:3},{value:"Make Swap File",id:"make-swap-file",level:2},{value:"VNC",id:"vnc",level:2},{value:"Enable VNC",id:"enable-vnc",level:3},{value:"Fix VNC Low Resolution",id:"fix-vnc-low-resolution",level:3},{value:"Docker",id:"docker",level:2},{value:"Fix permission",id:"fix-permission",level:3},{value:"Make a custom docker image",id:"make-a-custom-docker-image",level:3},{value:"Install Ajenti 2",id:"install-ajenti-2",level:2},{value:"Install Nekoray",id:"install-nekoray",level:2},{value:"Install NodeJs",id:"install-nodejs",level:2},{value:"Install Whisper",id:"install-whisper",level:2},{value:"Install Latest Python",id:"install-latest-python",level:2},{value:"AUTOMATIC1111 Stable diffusion webui",id:"automatic1111-stable-diffusion-webui",level:2},{value:"chroot",id:"chroot",level:2},{value:"mount",id:"mount",level:3},{value:"umount",id:"umount",level:3}],u={toc:p},d="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"raspberry-pi"},"Raspberry pi"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#raspberry-pi-os"},"Raspberry Pi OS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#first-things"},"First Things")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rasp-config"},"rasp-config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#fix-path"},"Fix $PATH")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#network"},"Network"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disable-ipv6"},"Disable ipv6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disable-wifi-and-bluetooth"},"Disable WiFi and Bluetooth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#find-rpi-in-the-network"},"Find rpi in the Network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enable-ipv4-forwarding"},"Enable ipv4 forwarding")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#static-dns"},"Static DNS")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#make-swap-file"},"Make Swap File")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#vnc"},"VNC"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enable-vnc"},"Enable VNC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#fix-vnc-low-resolution"},"Fix VNC Low Resolution")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#install-ajenti-2"},"Install Ajenti 2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#install-nekoray"},"Install Nekoray")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#install-nodejs"},"Install NodeJs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#install-whisper"},"Install Whisper")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#install-latest-python"},"Install Latest Python")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#automatic1111-stable-diffusion-webui"},"AUTOMATIC1111 Stable diffusion webui")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#chroot"},"chroot"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mount"},"mount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#umount"},"umount"))))),(0,r.kt)("h2",{id:"raspberry-pi-os"},"Raspberry Pi OS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download the ",(0,r.kt)("a",{parentName:"li",href:"https://www.raspberrypi.org/software/operating-systems/"},"Raspberry Pi OS")," image"),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"rpi-imager"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S rpi-imager\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect your SD card to your computer and run:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rpi-imager\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First use ",(0,r.kt)("inlineCode",{parentName:"li"},"Erase the SD card")," options"),(0,r.kt)("li",{parentName:"ul"},"From the settings menu, you can set the ",(0,r.kt)("inlineCode",{parentName:"li"},"Hostname")," and ..."),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Write")," and wait for the process to finish"),(0,r.kt)("li",{parentName:"ul"},"Connect the Raspberry Pi to your computer or router and run:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nmap -sP 192.168.1.0/24 | grep -B 2 -i raspberry\n\nNmap scan report for 192.168.1.136\nHost is up (0.00047s latency).\nMAC Address: DC:A6:32:9A:EF:16 (Raspberry Pi Trading)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Now you can connect to your Raspberry Pi using ",(0,r.kt)("inlineCode",{parentName:"li"},"ssh"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ssh-copy-id -i .ssh/id_rsa.pub -p 22 mlibre@192.168.1.136\nssh mlibre@192.168.1.136\nsudo passwd\n")),(0,r.kt)("h2",{id:"first-things"},"First Things"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm cron.daily/apt-compat\n\nsudo apt-get purge geany mariadb-common apt-listchanges cups cups-browsed cups-daemon apparmor\nsudo apt autoremove --purge\nsudo rpi-update\n# rollback from rpi-update\n# sudo apt install --reinstall raspberrypi-bootloader raspberrypi-kernel raspberrypi-kernel-headers\n\nsudo apt update\nsudo apt full-upgrade\nsudo apt install -y protobuf-compiler protobuf-c-compiler libyaml-cpp0.6 libyaml-cpp-dev libzxingcore-dev libzxingcore1 qtbase5-dev qtbase5-dev-tools build-essential cmake linux-headers-arm64 ninja-build libqt5svg5-dev qttools5-dev mlocate ruby-google-protobuf python3-protobuf r-cran-rprotobuf libupb0 libupb-dev gogoprotobuf golang-gitaly-proto-dev golang-github-gogo-googleapis-dev golang-gogoprotobuf-dev gradle-plugin-protobuf grpc-proto libactivemq-protobuf-java libarcus-dev libarcus3 libghc-protobuf-dev libghc-protobuf-prof libhawtbuf-java g++ git bazel-bootstrap python3-grpc-tools python3-arcus protoc-gen-go libprotozero-dev libprotoc-dev libqt5x11extras5-dev fswebcam python3-pip libsdl2-dev wget git python3 python3-venv libgdbm-dev libsqlite3-dev tk-dev libncursesw5-dev aria2 libdb5.3-dev llvm autoconf rfkill raspberrypi-ui-mods realvnc-vnc-server raspberrypi-bootloader raspberrypi-kernel raspberrypi-kernel-headers \n\nsudo apt clean\nsudo apt autoclean\nsudo rpi-update\n\nsudo usermod -a -G video $USER\nsudo usermod -a -G gpio $USER\n\nsudo updatedb\npip install pyyaml\npip3 install torch torchvision torchaudio\n\nsudo reboot\n")),(0,r.kt)("h2",{id:"rasp-config"},"rasp-config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo raspi-config\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Update")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Display Options"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"VNC Resolution")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Performance"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"GPU Memory")," to min of ",(0,r.kt)("inlineCode",{parentName:"li"},"896")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Advance Options"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Expand filesystem"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Predicetd Network Interface Names"))),(0,r.kt)("h2",{id:"fix-path"},"Fix $PATH"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'nano .bashrc\n\nif [ -d "$HOME/.local/bin" ] ; then\n    PATH="$HOME/.local/bin:$PATH"\nfi\n')),(0,r.kt)("h2",{id:"network"},"Network"),(0,r.kt)("h3",{id:"disable-ipv6"},"Disable ipv6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/sysctl.conf\nnet.ipv6.conf.all.disable_ipv6 = 1\n")),(0,r.kt)("h3",{id:"disable-wifi-and-bluetooth"},"Disable WiFi and Bluetooth"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl disable wpa_supplicant\nsudo systemctl disable bluetooth\nsudo systemctl disable hciuart\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rfkill block wifi\nsudo rfkill block bluetooth\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /boot/config.txt\n\n[all]\ndtoverlay=disable-wifi\ndtoverlay=disable-bt\n")),(0,r.kt)("h3",{id:"enable-ipv4-forwarding"},"Enable ipv4 forwarding"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/sysctl.conf\n\nnet.ipv4.ip_forward=1\n\nsudo sysctl -p\n")),(0,r.kt)("h3",{id:"find-rpi-in-the-network"},"Find rpi in the Network"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nmap -sP 192.168.1.0/24 | grep -B 2 -i raspberry\n")),(0,r.kt)("h3",{id:"improve-performace"},"Improve Performace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/sysctl.conf\nnet.ipv4.tcp_rmem = 4096 87380 629145\nnet.ipv4.tcp_wmem = 4096 65536 16777216\nnet.ipv4.tcp_no_metrics_save = 1\nnet.ipv4.tcp_moderate_rcvbuf = 1\nnet.ipv4.tcp_timestamps = 0\nnet.ipv4.tcp_sack = 0\nnet.ipv4.tcp_window_scaling = 1\n")),(0,r.kt)("h3",{id:"static-dns"},"Static DNS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/dhcpcd.conf\n\nstatic domain_name_servers=1.1.1.1 8.8.8.8\n")),(0,r.kt)("h2",{id:"make-swap-file"},"Make Swap File"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dphys-swapfile swapoff\nsudo nano /etc/dphys-swapfile\nCONF_SWAPSIZE=10240\nCONF_MAXSWAP=12240\nsudo dphys-swapfile setup\nsudo dphys-swapfile swapon\n\n# sudo nano /etc/sysctl.conf\n# vm.swappiness=10\n")),(0,r.kt)("h2",{id:"vnc"},"VNC"),(0,r.kt)("h3",{id:"enable-vnc"},"Enable VNC"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo raspi-config\n# Enable VNC\n\nsudo systemctl restart vncserver-x11-serviced.service\nsudo systemctl status vncserver-x11-serviced.service\nsudo nano /root/.vnc/config.d/vncserver-x11\n\nAllowChangeDefaultPrinter=0\nAuthentication=VncAuth\nEnableAutoUpdateChecks=0\nEncryption=PreferOff\n\nsudo vncpasswd -legacy -service\n")),(0,r.kt)("h3",{id:"fix-vnc-low-resolution"},"Fix VNC Low Resolution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /boot/config.txt\n\nframebuffer_width=1920\nframebuffer_height=1080\nhdmi_force_hotplug=1\nhdmi_group=2\nhdmi_mode=16\n")),(0,r.kt)("h2",{id:"docker"},"Docker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://get.docker.com | sh\nsudo usermod -aG docker $USER\nnewgrp docker\n# Dont use sudo anymore\ndocker run hello-world\n\nsudo systemctl enable docker.service\nsudo systemctl enable containerd.service\n")),(0,r.kt)("h3",{id:"fix-permission"},"Fix permission"),(0,r.kt)("p",null,"If you encounter any permission issue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo chown "$USER":"$USER" /home/"$USER"/.docker -R\nsudo chmod g+rwx "$HOME/.docker" -R\n')),(0,r.kt)("h3",{id:"make-a-custom-docker-image"},"Make a custom docker image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ubuntu\ndocker ps -a\ndocker images\ndocker run --name proxy_container -it ubuntu /bin/bash\napt update\napt install sudo htop\ndocker commit proxy_container proxy_image\ndocker save proxy_image proxy_image.tar\n")),(0,r.kt)("h2",{id:"install-ajenti-2"},"Install Ajenti 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://raw.githubusercontent.com/ajenti/ajenti/master/scripts/install.sh | sudo bash -s -\nsudo systemctl enable ajenti.service\nsudo systemctl start ajenti.service\nsudo tail -f /var/log/ajenti/ajenti.log\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"http://192.168.1.136:8000")," and login with ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"password"))),(0,r.kt)("h2",{id:"install-nekoray"},"Install Nekoray"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# https://github.com/MatsuriDayo/nekoray/blob/main/docs/Build_Linux.md\ngit clone https://github.com/MatsuriDayo/nekoray.git --recursive\ncd nekoray\n./libs/build_deps_all.sh\nmkdir build\ncd build\ncmake -GNinja ..\nninja\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"Traffic Widget"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Cron"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Date And Time")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Network")," plugins")),(0,r.kt)("h2",{id:"install-nodejs"},"Install NodeJs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://deb.nodesource.com/setup_18.x | sudo bash -\nsudo apt-get install -y nodejs\n")),(0,r.kt)("h2",{id:"install-whisper"},"Install Whisper"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ggerganov/whisper.cpp.git\ncd whisper.cpp\n# git checkout reaspberry\nbash ./models/download-ggml-model.sh base.en\nbash ./models/download-ggml-model.sh small\nmake\nmake stream\nmake base\n./main -f samples/jfk.wav --print-colors\n# ffmpeg -i input.mp3 -ar 16000 -ac 1 -c:a pcm_s16le output.wav\n")),(0,r.kt)("h2",{id:"install-latest-python"},"Install Latest Python"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# https://www.python.org/downloads/\nmkdir python3.10\ncd python3.10\nwget https://www.python.org/ftp/python/3.10.10/Python-3.10.10.tar.xz\ntar xvf Python-3.10.10.tar.xz\nrm Python-3.10.10.tar.xz\ncd Python-3.10.10\n./configure --enable-optimizations --with-ensurepip=install\nmake -j 8\nsudo make altinstall\nsudo make install\nsudo rm /usr/bin/python\nsudo rm /usr/bin/python3\nsudo ln -s /usr/local/bin/python3.10 /usr/bin/python\nsudo ln -s /usr/local/bin/python3.10 /usr/bin/python3\n")),(0,r.kt)("h2",{id:"automatic1111-stable-diffusion-webui"},"AUTOMATIC1111 Stable diffusion webui"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# bash <(wget -qO- https://raw.githubusercontent.com/AUTOMATIC1111/stable-diffusion-webui/master/webui.sh)\ngit clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git\ncd stable-diffusion-webui\nrm -r venv/\npip cache purge\nrm -r ~/.cache/pip/\ngit pull\n./webui.sh\n")),(0,r.kt)("h2",{id:"chroot"},"chroot"),(0,r.kt)("p",null,"To fix bootloader, kernel and other issues"),(0,r.kt)("h3",{id:"mount"},"mount"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /media/rootfs\nmount /dev/sdb2 /media/rootfs\nmount /dev/sdb1 /media/rootfs/boot\ncp /usr/bin/qemu-arm-static /media/rootfs\nmount -o bind /dev /media/rootfs/dev/\nmount -o bind /proc/ /media/rootfs/proc/\nmount -o bind /sys/ /media/rootfs/sys/\nmount -o bind /dev/pts/ /media/rootfs/dev/pts/\n\nchroot /media/rootfs/\n\nexport LANGUAGE=en_US.UTF-8\nexport LANG=en_US.UTF-8\nexport LC_ALL=en_US.UTF-8\nsudo dpkg-reconfigure locales\napt remove apt-listchanges\napt update\napt full-upgrade\napt install --reinstall raspberrypi-bootloader raspberrypi-kernel raspberrypi-kernel-headers\n")),(0,r.kt)("h3",{id:"umount"},"umount"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"umount /media/rootfs/dev/pts\numount /media/rootfs/proc/\numount /media/rootfs/sys/\numount /media/rootfs/boot\numount /media/rootfs/dev/\numount /media/rootfs/\n")))}c.isMDXComponent=!0}}]);