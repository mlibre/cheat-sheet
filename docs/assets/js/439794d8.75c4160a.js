"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7722],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(a),c=l,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||r;return a?n.createElement(k,s(s({ref:t},p),{},{components:a})):n.createElement(k,s({ref:t},p))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:l,s[1]=i;for(var m=2;m<r;m++)s[m]=a[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6742:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:10,title:"Other",tags:["Linux","XDG","Automatic","Shutdown","Manjaro","Windows 11"]},s="GRUB",i={unversionedId:"linux/other",id:"linux/other",title:"Other",description:"File:",source:"@site/docs/linux/other.md",sourceDirName:"linux",slug:"/linux/other",permalink:"/Wisdom-Hub/linux/other",draft:!1,tags:[{label:"Linux",permalink:"/Wisdom-Hub/tags/linux"},{label:"XDG",permalink:"/Wisdom-Hub/tags/xdg"},{label:"Automatic",permalink:"/Wisdom-Hub/tags/automatic"},{label:"Shutdown",permalink:"/Wisdom-Hub/tags/shutdown"},{label:"Manjaro",permalink:"/Wisdom-Hub/tags/manjaro"},{label:"Windows 11",permalink:"/Wisdom-Hub/tags/windows-11"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Other",tags:["Linux","XDG","Automatic","Shutdown","Manjaro","Windows 11"]},sidebar:"tutorialSidebar",previous:{title:"Awesome Tools",permalink:"/Wisdom-Hub/linux/tools"},next:{title:"Network",permalink:"/Wisdom-Hub/network/"}},o={},m=[{value:"Regenerate grub.cfg",id:"regenerate-grubcfg",level:2},{value:"Fixing broken grub",id:"fixing-broken-grub",level:2},{value:"Easy method using Manjaro Live",id:"easy-method-using-manjaro-live",level:3},{value:"General method",id:"general-method",level:3},{value:"Init",id:"init",level:2},{value:"Scripts and programs locations",id:"scripts-and-programs-locations",level:2},{value:"Reading symlinks",id:"reading-symlinks",level:2},{value:"System Info",id:"system-info",level:2},{value:"Disable Linux Watchdogs, compaction and more",id:"disable-linux-watchdogs-compaction-and-more",level:2},{value:"Improve fstab, ssd, nvme performance",id:"improve-fstab-ssd-nvme-performance",level:2},{value:"Disabling journaling",id:"disabling-journaling",level:2},{value:"Journal Size",id:"journal-size",level:2},{value:"Things to do before installing",id:"things-to-do-before-installing",level:2},{value:"Things to do after installing",id:"things-to-do-after-installing",level:2},{value:"Apply New Configs",id:"apply-new-configs",level:2},{value:"Make boatable usb",id:"make-boatable-usb",level:2},{value:"WoeUsb",id:"woeusb",level:2},{value:"Win2USB",id:"win2usb",level:2},{value:"Things to do after installing Windows 11",id:"things-to-do-after-installing-windows-11",level:2},{value:"Backup data",id:"backup-data",level:2},{value:"Restore",id:"restore",level:2},{value:"Enable Developer options",id:"enable-developer-options",level:2},{value:"Install odin tools for Samsung &gt;= 3.14",id:"install-odin-tools-for-samsung--314",level:2},{value:"Install samsung driver",id:"install-samsung-driver",level:2},{value:"Install adb",id:"install-adb",level:2},{value:"Download TWRP",id:"download-twrp",level:2},{value:"convert it to .md5",id:"convert-it-to-md5",level:2},{value:"Run Odin as administrator",id:"run-odin-as-administrator",level:2}],p={toc:m},d="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"grub"},"GRUB"),(0,l.kt)("p",null,"File:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/etc/default/grub"),(0,l.kt)("li",{parentName:"ul"},"/etc/grub.d/"),(0,l.kt)("li",{parentName:"ul"},"/boot/grub/grub.cfg"),(0,l.kt)("li",{parentName:"ul"},"/boot/efi/EFI/"),(0,l.kt)("li",{parentName:"ul"},"/boot/grub/x86_64-efi/")),(0,l.kt)("h2",{id:"regenerate-grubcfg"},"Regenerate grub.cfg"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo grub-mkconfig -o /boot/grub/grub.cfg\n")),(0,l.kt)("h2",{id:"fixing-broken-grub"},"Fixing broken grub"),(0,l.kt)("h3",{id:"easy-method-using-manjaro-live"},"Easy method using Manjaro Live"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Boot a live Manjaro image")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo manjaro-chroot -a\ngrub-install\nupdate-grub\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"It will detect your current installed linux.  Restart the computer and it will boot the installed linux.",(0,l.kt)("br",{parentName:"p"}),"\n","Then run:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"update-grub\n")),(0,l.kt)("h3",{id:"general-method"},"General method"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Mount the file system and efi partition\nsudo mount /dev/nvme0n1p4 /mnt\nsudo mount --bind /dev /mnt/dev\nsudo mount --bind /dev/pts /mnt/dev/pts\nsudo mount --bind /proc /mnt/proc\nsudo mount --bind /sys /mnt/sys\nsudo mkdir /efi\nsudo mount /dev/nvme0n1p1 /efi\n\n# Install grub and update grub configuration\nsudo grub-install --root-directory=/mnt/ /dev/nvme0 --efi-directory=/efi --target=x86_64-efi --recheck\nsudo chroot /mnt\nsudo blkid -s UUID -o value /dev/nvme0n1p1\nnano /etc/fstab\nsudo update-grub\n")),(0,l.kt)("h1",{id:"autostart"},"Autostart"),(0,l.kt)("h2",{id:"init"},"Init"),(0,l.kt)("p",null,"the ",(0,l.kt)("inlineCode",{parentName:"p"},"init")," command refers to the process initialization system. It's the first process that gets started by the kernel during system boot, and it's assigned the process ",(0,l.kt)("inlineCode",{parentName:"p"},"ID (PID) of 1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"which init\n# Output: /usr/bin/init\n\nreadlink -f /usr/bin/init\n# Output: /usr/lib/systemd/systemd\n\nps -p 1\n# Output:\n# PID TTY          TIME CMD\n#   1 ?        00:00:01 systemd\n\npstree -p 1\n# Output:\n# systemd(1)\u2500\u252c\u2500...\n")),(0,l.kt)("h2",{id:"scripts-and-programs-locations"},"Scripts and programs locations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nano .profile"),(0,l.kt)("li",{parentName:"ul"},"nano /etc/profile"),(0,l.kt)("li",{parentName:"ul"},"nano ~/.bash_profile"),(0,l.kt)("li",{parentName:"ul"},"nano .bashrc"),(0,l.kt)("li",{parentName:"ul"},"nano /etc/bash.bashrc"),(0,l.kt)("li",{parentName:"ul"},"ls /etc/profile.d/"),(0,l.kt)("li",{parentName:"ul"},"ls ~/.config/autostart"),(0,l.kt)("li",{parentName:"ul"},"ls /etc/xdg/autostart"),(0,l.kt)("li",{parentName:"ul"},"ls /usr/share/xsessions"),(0,l.kt)("li",{parentName:"ul"},"ls -1 /lib/systemd/system/",(0,l.kt)("em",{parentName:"li"},".service /etc/systemd/system/"),".service"),(0,l.kt)("li",{parentName:"ul"},"ls usr/share/dbus-1/system-services/"),(0,l.kt)("li",{parentName:"ul"},"sudo systemctl list-unit-files --type=service --state=enabled --all"),(0,l.kt)("li",{parentName:"ul"},"ls /etc/init.d/"),(0,l.kt)("li",{parentName:"ul"},"nano ~/.xinitrc"),(0,l.kt)("li",{parentName:"ul"},"nano /etc/X11/xinit/xinitrc"),(0,l.kt)("li",{parentName:"ul"},"ls /etc/X11/xinit/xinitrc.d/"),(0,l.kt)("li",{parentName:"ul"},"cat ~/.xserverrc"),(0,l.kt)("li",{parentName:"ul"},"ls /etc/pam.d/"),(0,l.kt)("li",{parentName:"ul"},"ls /etc/rc*"),(0,l.kt)("li",{parentName:"ul"},"cat /etc/xdg/lxsession/LXDE/autostart"),(0,l.kt)("li",{parentName:"ul"},"ls ~/.config/lxsession/LXDE/autostart"),(0,l.kt)("li",{parentName:"ul"},"crontab -e"),(0,l.kt)("li",{parentName:"ul"},"sudo crontab -e"),(0,l.kt)("li",{parentName:"ul"},"ls -rla /etc/cron.*"),(0,l.kt)("li",{parentName:"ul"},"cat /usr/lib/sddm/sddm.conf.d/default.conf"),(0,l.kt)("li",{parentName:"ul"},"cat /etc/sddm.conf.d/00_manjaro_settings.conf")),(0,l.kt)("h1",{id:"automatic-shutdown"},"Automatic Shutdown"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"shutdown now")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Shutdown the system immediately.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"shutdown -h +5")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Shutdown the system in 5 minutes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"shutdown -r now")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Reboot the system immediately.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"shutdown -r +10")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Reboot the system in 10 minutes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"shutdown -H now")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Halt the system immediately.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"shutdown +5")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Shutdown the system in 5 minutes.")))),(0,l.kt)("h2",{id:"reading-symlinks"},"Reading symlinks"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"readlink /bin/init\n# ../lib/systemd/systemd\n")),(0,l.kt)("h2",{id:"system-info"},"System Info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"uname -a\n")),(0,l.kt)("h1",{id:"performance"},"Performance"),(0,l.kt)("h2",{id:"disable-linux-watchdogs-compaction-and-more"},"Disable Linux Watchdogs, compaction and more"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start systemd-sysctl.service\nsudo systemctl enable systemd-sysctl.service\n\nsudo nano /etc/sysctl.conf\n# And\nsudo nano /etc/sysctl.d/sys.conf\n\nnet.ipv4.tcp_fastopen=3\nnet.ipv4.ip_forward=1\nkernel.nmi_watchdog=0\nkernel.watchdog=0\nvm.compaction_proactiveness=0\nvm.zone_reclaim_mode=0\nvm.page_lock_unfairness=1\nkernel.perf_event_paranoid=-1\nfs.inode-nr=200000\nvm.dirty_background_ratio=5\nvm.vfs_cache_pressure=50\nnet.ipv4.tcp_max_syn_backlog=8192\nnet.ipv4.tcp_tw_reuse=1\nvm.min_free_kbytes=2500000\n")),(0,l.kt)("h2",{id:"improve-fstab-ssd-nvme-performance"},"Improve fstab, ssd, nvme performance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/fstab \nUUID=f74c37b2-8a12-4252-90a6-d31504507bcb / ext4  defaults,noatime,nodiratime,commit=60,barrier=0  0 1\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sudo nano /etc/udev/rules.d/60-ioschedulers.rules\n\nACTION=="add|change", KERNEL=="nvme[0-9]n[0-9]", ATTR{queue/scheduler}="none"\n')),(0,l.kt)("h2",{id:"disabling-journaling"},"Disabling journaling"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sudo tune2fs -f -O "^has_journal" /dev/sda2\n')),(0,l.kt)("h2",{id:"journal-size"},"Journal Size"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/journald.conf\nSystemMaxUse=100M\nsudo systemctl restart systemd-journald\n")),(0,l.kt)("h1",{id:"manjaro"},"Manjaro"),(0,l.kt)("h2",{id:"things-to-do-before-installing"},"Things to do before installing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Backup important data. Recovery-keys, Passwords, Postman and ...  ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'cp -rf /home/mlibre/.local/share/TelegramDesktop /run/media/mlibre/D/linux/caches\ncp $HISTFILE /run/media/mlibre/D/linux/caches/\nsudo cp -r /etc /run/media/mlibre/D/caches/\n\n# Or full backup\nsudo rsync -aAXHv --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/var/*","/media/*","/usr/*","/lib/*","/lib64/","/lost+found","/swapfile",".npm*",".npm/*","node_modules*","node_modules/*","mesa_shader_cache*","steamapps*","Data*","Steam*"} / /run/media/mlibre/D/Linux/backup/\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mark EFI partition while installing Manjaro/Arch Linux as /boot/efi. Don't check Format option.")),(0,l.kt)("h2",{id:"things-to-do-after-installing"},"Things to do after installing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Remove and disable unnecessary packages"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo "$USER ALL=(ALL:ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/$USER\nsudo systemctl disable pamac-daemon\nsudo systemctl disable pamac-mirrorlist.timer\nsudo systemctl disable pamac-mirrorlist.service\nsudo pacman -R manjaro-hello web-installer-url-handler matray print-manager samba kdenetwork-filesharing thunderbird hplip cups yakuake manjaro-printer gutenprint cups-pdf snapd libpamac-snap-plugin flatpak libpamac-flatpak-plugin bluedevil timeshift timeshift-autosnap-manjaro pamac-tray-icon-plasma kdeconnect vde2  qemu-common qemu-system-arm qemu-user-static-binfmt qemu-system-arm-firmware scrcpy\n\n# or\n\necho "manjaro-hello web-installer-url-handler matray print-manager samba kdenetwork-filesharing thunderbird hplip cups yakuake manjaro-printer gutenprint cups-pdf snapd libpamac-snap-plugin flatpak libpamac-flatpak-plugin bluedevil timeshift timeshift-autosnap-manjaro pamac-tray-icon-plasma kdeconnect vde2  qemu-common qemu-system-arm qemu-user-static-binfmt qemu-system-arm-firmware scrcpy" | xargs -d " " -I {} sudo pacman --noconfirm -R {}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Pacman downloads parallel"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/pacman.conf\nParallelDownloads = 5\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Upgrade"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pamac update --force-refresh\npamac update -a\nsudo pacman-mirrors --fasttrack\nsudo pacman -Syyuu\nsudo pacman -S telegram-desktop unzip thermald ntfs-3g\nsudo systemctl enable --now thermald.service\npamac install visual-studio-code-bin onlyoffice-bin\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Import Data"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cp -r /run/media/mlibre/H/OS/caches/TelegramDesktop /home/mlibre/.local/share/\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Make an XDG autostart script for gamma adjustment")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Put the gamma script in the ",(0,l.kt)("inlineCode",{parentName:"p"},".bashrc")," and ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc")," as well")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install ProtonVPN, mailspring, shadowsocks, Nekoray"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pamac install shadowsocks-rust-bin\npamac build protonvpn\npamac build mailspring\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Remove Mainspring from startups. Use 24-hour clock. Uncheck automatically load images. Disabsetle mail signature.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install mlocate"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S mlocate\nsudo updatedb\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"KDE Settings -> Disable Mouse acceleration")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"KDE Settings -> Startup and Shutdown: Start with empty session, Choose KDE Screen Saver, Review background services and Autostarts.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"KDE Settings -> Appearance -> Theme -> Breeze Dark, Breath Dark")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"KDE Settings -> Appearance -> Font -> Enabled Anti-Aliasing, RGB, Slight. all +1 PT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"KDE Settings -> Workspace -> Search -> Disable Web Search Keywords")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"KDE Settings -> Workspace Behavior -> Activities -> Privacy -> Dont remember soft")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"KDE Settings -> Search for kRunner -> settings -> uncheck all")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Pin Firefox, Terminal, ProtonVPN, Kate and VSCode to the panel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Software Center: Disable automatic updates, Add AUR support")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Remove Virtual Desktops")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Make a Swapfile"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sudo dd if=/dev/zero of=/swapfile bs=1M count=4096 status=progress\nsudo chmod 600 /swapfile\nsudo mkswap /swapfile\nsudo swapon /swapfile\ncat /etc/fstab\nsudo bash -c "echo /swapfile none swap defaults 0 0 >> /etc/fstab"\n\nsudo nano /etc/sysctl.conf\n# vm.swappiness=10\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fix time difference between linux and windows"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo timedatectl set-local-rtc 1 --adjust-system-clock\n# sudo timedatectl set-local-rtc 1\nsudo ntpdate time.nist.gov # update time\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Softwares"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S qbittorrent firefox libreoffice-fresh meld vlc ntfs-3g  aria2 ttf-ubuntu-font-family gnome-keyring libsecret core/iputils clinfo tor torsocks steam-native-runtime\n# sudo pacman -S electrum gimp gparted firewalld clamav deluge\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Firefox: Enable DNS over HTTPS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enable automatic mounting of external drives: Settings -> Hardware -> Removable Storage -> Automount")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Konsole config:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Font: Monospace 13pt"),(0,l.kt)("li",{parentName:"ul"},"Theme: Breath (customized, a bit darker)"),(0,l.kt)("li",{parentName:"ul"},"Shell: Manjaro zsh"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Steam: Allow auto-update only between 1AM - 11AM")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Performance"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl disable bluetooth.service\nsudo systemctl disable tor.service\nsudo systemctl disable samba\nsudo systemctl disable cups\nbalooctl disable && balooctl purge\nsudo rm /etc/cron.d/0hourly\nsudo rm /etc/xdg/autostart/baloo_file.desktop\nsudo rm /etc/xdg/autostart/pamac-tray-budgie.desktop\nsudo rm /etc/xdg/autostart/pamac-tray.desktop\nsudo rm /etc/xdg/autostart/msm_kde_notifier.desktop\nsudo rm /etc/xdg/autostart/org.gnome.SettingsDaemon*\nsudo rm /etc/xdg/autostart/print-applet.desktop\n\n# sudo systemctl enable firewalld\n# sudo systemctl restart firewalld\n\n# sudo firewall-cmd --permanent --add-service=https\n# sudo firewall-cmd --permanent --add-port=30303/tcp\n# sudo firewall-cmd --permanent --add-port=30303/udp\n\n# sudo systemctl restart --now clamav-daemon\n# sudo freshclam\n# clamscan --recursive --infected /home\n# sudo systemctl disable --now clamav-freshclam\n# sudo systemctl disable --now clamav-daemon\n# sudo systemctl enable --now clamav-daemon\n# sudo systemctl enable --now clamav-freshclam\n")),(0,l.kt)("h2",{id:"apply-new-configs"},"Apply New Configs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Default config file\nls -laR /etc/skel\n\n# apply default configs\n# method 1\ncp -rf /etc/skel/.* ~/\nrm -f ~/.config/dconf/user\n\n# method 2\nsudo useradd --create-home newusername\nsudo passwd newusername\n")),(0,l.kt)("h1",{id:"windows-11"},"Windows 11"),(0,l.kt)("h2",{id:"make-boatable-usb"},"Make boatable usb"),(0,l.kt)("h2",{id:"woeusb"},"WoeUsb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Suy p7zip python-pip python-wxpython\ngit clone https://github.com/WoeUSB/WoeUSB-ng.git\nsudo pip3 install .\nsudo woeusb --workaround-skip-grub --target-filesystem NTFS --device ~/Win11_22H2_English_x64v1.iso  /dev/sdb\n")),(0,l.kt)("h2",{id:"win2usb"},"Win2USB"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/ValdikSS/windows2usb\nchmod +x windows2usb*\n./windows2usb-0.2.4-x86_64.AppImage /dev/sdb ~/Win11_22H2_English_x64v1.iso gpt+uefintfs\n")),(0,l.kt)("h2",{id:"things-to-do-after-installing-windows-11"},"Things to do after installing Windows 11"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download and install all the updates"),(0,l.kt)("li",{parentName:"ul"},"Enable Ransomware protection"),(0,l.kt)("li",{parentName:"ul"},"Download DimScreen, Copy it to the download folder. Open. click on the settings. set brightness to 20%. Make a shortcut to the desktop"),(0,l.kt)("li",{parentName:"ul"},"search for gamma calibration in windows settings. set it to minimum"),(0,l.kt)("li",{parentName:"ul"},"Adjust date and time: auto. Timezone tehran +3:30"),(0,l.kt)("li",{parentName:"ul"},"Downloading updates active hours: 24 hours format. 1->11"),(0,l.kt)("li",{parentName:"ul"},"Disable all data usages settings in privacy and security"),(0,l.kt)("li",{parentName:"ul"},"uninstall mail, teams, one drive. xbox, facebook, microsoft todo, sticky notes, tips, weather"),(0,l.kt)("li",{parentName:"ul"},"Install firefox and login"),(0,l.kt)("li",{parentName:"ul"},"Install protonVPN"),(0,l.kt)("li",{parentName:"ul"},"personalize: sunrise"),(0,l.kt)("li",{parentName:"ul"},"network connection: metered connection"),(0,l.kt)("li",{parentName:"ul"},"Display: 3840x2160, 200%"),(0,l.kt)("li",{parentName:"ul"},"Steam: add your games' location to the Games' folder library. make it as default"),(0,l.kt)("li",{parentName:"ul"},"Steam: If your games are in a ",(0,l.kt)("inlineCode",{parentName:"li"},"NTFS")," file system, follow ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ValveSoftware/Proton/wiki/Using-a-NTFS-disk-with-Linux-and-Windows"},"this")," to make game compatible with Linux."),(0,l.kt)("li",{parentName:"ul"},"Pause windows updates for 5 weeks"),(0,l.kt)("li",{parentName:"ul"},"Check windows startups apps"),(0,l.kt)("li",{parentName:"ul"},"App store: disable automatic update"),(0,l.kt)("li",{parentName:"ul"},'Leave from "AMD user experience program". AMD settings -> last tab -> last option'),(0,l.kt)("li",{parentName:"ul"},"windows features: WSL, virtual machine, hyper-v (for android and linux apps)"),(0,l.kt)("li",{parentName:"ul"},"wsl --update"),(0,l.kt)("li",{parentName:"ul"},"wsl --install -d Ubuntu"),(0,l.kt)("li",{parentName:"ul"},"Disable Error Reporting: WIN+R -> services.msc -> Windows Error Reporting Service -> Properties -> disable")),(0,l.kt)("h1",{id:"install-a-new-os-on-the-phone"},"Install a new os on the phone"),(0,l.kt)("h2",{id:"backup-data"},"Backup data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S android-tools\nsudo adb devices\nadb backup -apk -shared -all -f backup-file.ab\n")),(0,l.kt)("h2",{id:"restore"},"Restore"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"adb restore file.ab\n")),(0,l.kt)("h2",{id:"enable-developer-options"},"Enable Developer options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Several times clicks on the kernel tab"),(0,l.kt)("li",{parentName:"ul"},"Allow OEM unlocking"),(0,l.kt)("li",{parentName:"ul"},"Enter Download mod:",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Turn off the phone.  "),(0,l.kt)("li",{parentName:"ol"},"Hold vol key up + down."),(0,l.kt)("li",{parentName:"ol"},'Now in the warning message page. choose "unlocking bootloader" that will perform a factory reset')))),(0,l.kt)("h2",{id:"install-odin-tools-for-samsung--314"},"Install odin tools for Samsung >= 3.14"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://samsungodin.com/"},"https://samsungodin.com/")),(0,l.kt)("h2",{id:"install-samsung-driver"},"Install samsung driver"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.samsung.com/android-usb-driver"},"https://developer.samsung.com/android-usb-driver")),(0,l.kt)("h2",{id:"install-adb"},"Install adb"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/releases/platform-tools"},"https://developer.android.com/studio/releases/platform-tools")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"adb reboot download\n")),(0,l.kt)("h2",{id:"download-twrp"},"Download TWRP"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.droidthunder.com/install-twrp-recovery-on-galaxy-A10/"},"https://www.droidthunder.com/install-twrp-recovery-on-galaxy-A10/"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://twrp.me/samsung/samsunggalaxya10.html"},"https://twrp.me/samsung/samsunggalaxya10.html")),(0,l.kt)("h2",{id:"convert-it-to-md5"},"convert it to .md5"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.droidthunder.com/convert-img-to-tar-md5/"},"https://www.droidthunder.com/convert-img-to-tar-md5/")),(0,l.kt)("h2",{id:"run-odin-as-administrator"},"Run Odin as administrator"),(0,l.kt)("p",null,"follow the instructions\n",(0,l.kt)("a",{parentName:"p",href:"https://www.droidthunder.com/install-twrp-recovery-on-galaxy-A10/"},"https://www.droidthunder.com/install-twrp-recovery-on-galaxy-A10/")))}u.isMDXComponent=!0}}]);