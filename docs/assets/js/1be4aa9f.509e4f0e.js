"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7880],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>N});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},o=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),s=m(n),k=r,N=s["".concat(d,".").concat(k)]||s[k]||c[k]||i;return n?a.createElement(N,l(l({ref:e},o),{},{components:n})):a.createElement(N,l({ref:e},o))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[s]="string"==typeof t?t:r,l[1]=p;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3161:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:7,tags:["Linux","process","monitor"]},l="process",p={unversionedId:"linux/processes",id:"linux/processes",title:"process",description:"ps, bg, fg, jobs, &, ctrl+comb",source:"@site/docs/linux/processes.md",sourceDirName:"linux",slug:"/linux/processes",permalink:"/Wisdom-Hub/linux/processes",draft:!1,tags:[{label:"Linux",permalink:"/Wisdom-Hub/tags/linux"},{label:"process",permalink:"/Wisdom-Hub/tags/process"},{label:"monitor",permalink:"/Wisdom-Hub/tags/monitor"}],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,tags:["Linux","process","monitor"]},sidebar:"tutorialSidebar",previous:{title:"TextOps",permalink:"/Wisdom-Hub/linux/textOps"},next:{title:"multimedia",permalink:"/Wisdom-Hub/linux/multimedia"}},d={},m=[{value:"ps, bg, fg, jobs, &amp;, ctrl+comb",id:"ps-bg-fg-jobs--ctrlcomb",level:2},{value:"kill, pkill, killall",id:"kill-pkill-killall",level:2},{value:"free, uptime, df",id:"free-uptime-df",level:2},{value:"tmux",id:"tmux",level:2},{value:"nice, renice",id:"nice-renice",level:2}],o={toc:m},s="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"process"},"process"),(0,r.kt)("h2",{id:"ps-bg-fg-jobs--ctrlcomb"},"ps, bg, fg, jobs, &, ctrl+comb"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Short Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ps -ef")),(0,r.kt)("td",{parentName:"tr",align:"center"},"List all processes with ppid and exec path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ps aux ","|"," grep <process_name>"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Filter processes by name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"bg <job_id>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Resume a specific suspended job in the background")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"fg <job_id>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Bring a specific background job to the foreground")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"jobs -l")),(0,r.kt)("td",{parentName:"tr",align:"center"},"List background jobs with process IDs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"jobs %<job_id>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display information about a specific job")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"systemctl status 1234")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Show the status of a specific systemd unit by its PID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"command1 &")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Run ",(0,r.kt)("inlineCode",{parentName:"td"},"command1")," in the background")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"nohup")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Run a command that keeps running even after you log out")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"nohup command1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Run ",(0,r.kt)("inlineCode",{parentName:"td"},"command1")," and keep it running after logging out")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ctrl+c")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Interrupt a process")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ctrl+z")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Suspend a process")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ctrl+l")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Clear the terminal screen")))),(0,r.kt)("h2",{id:"kill-pkill-killall"},"kill, pkill, killall"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Short Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"kill PID")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Terminate the process with the specified Process ID (PID)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"kill -9 PID")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Forcefully terminate the process with the specified PID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"kill -1 PID")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Send the SIGHUP signal to the process with the specified PID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"kill -15 PID")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Send the SIGTERM signal to the process with the specified PID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"killall process")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Terminate all processes with the specified name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"pkill -u username")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Kill by Username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"pkill -t tty")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Kill by Terminal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"pkill -f pattern")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Kill by Pattern")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"pkill -x process")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Kill Exact Process")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"pkill -n process")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Kill Newest Process")))),(0,r.kt)("h1",{id:"pgrep"},"pgrep"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Short Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"pgrep")),(0,r.kt)("td",{parentName:"tr",align:"center"},"List processes by name or other attributes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"pgrep sshd")),(0,r.kt)("td",{parentName:"tr",align:"center"},"List processes with the name 'sshd'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"pgrep nginx ","|"," xargs kill"),(0,r.kt)("td",{parentName:"tr",align:"center"},"processes with 'nginx' in their name, send a SIGTERM to them")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"pgrep -u masoud ","|"," xargs -I {} kill -9 {}"),(0,r.kt)("td",{parentName:"tr",align:"center"},'and forcefully terminate prccess with "masoud"')))),(0,r.kt)("h2",{id:"free-uptime-df"},"free, uptime, df"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Short Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"free -m")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display memory usage in megabytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"free -h")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display memory usage with human-readable format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"uptime -p")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display uptime in a more human-readable format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"uptime -s")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display the date and time since system started")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"df -h")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display disk space usage with human-readable format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"df -T")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display disk space usage with filesystem type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"watch -n 1 date")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Watch and display the date and time every 1 second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"watch -n 5 df -h")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Watch and update disk space usage every 5 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"watch -cd -n 1 uptime")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Watch system uptime every 1 second with color highlighting for changes")))),(0,r.kt)("h2",{id:"tmux"},"tmux"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Short Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"tmux")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Terminal multiplexer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"tmux new -s mysession")),(0,r.kt)("td",{parentName:"tr",align:"center"},'Create a new tmux session named "mysession"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"tmux attach -t mysession")),(0,r.kt)("td",{parentName:"tr",align:"center"},'Attach to an existing session named "mysession"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"tmux kill-session -t mysession")),(0,r.kt)("td",{parentName:"tr",align:"center"},'Remove the tmux session named "mysession"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"tmux ls")),(0,r.kt)("td",{parentName:"tr",align:"center"},"List all available tmux sessions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"tmux split-window")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Split the current window horizontally")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"tmux detach")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Detach from the current tmux session")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"tmux rename-session -t oldsession newsession")),(0,r.kt)("td",{parentName:"tr",align:"center"},'Rename a tmux session from "oldsession" to "newsession"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Ctrl-b %")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Split the current window vertically (shortcut)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'Ctrl-b "')),(0,r.kt)("td",{parentName:"tr",align:"center"},"Split the current window horizontally (shortcut)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Ctrl-b d")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Detach from the current tmux session (shortcut)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Ctrl-b $")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Rename the current session (shortcut)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Ctrl-b [")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Enter copy mode to scroll through the terminal output (shortcut)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Ctrl-b o")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Cycle through open windows in the current session (shortcut)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Ctrl-b Up")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Choose the previous window using the Up arrow key (shortcut)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Ctrl-b Down")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Choose the next window using the Down arrow key (shortcut)")))),(0,r.kt)("h2",{id:"nice-renice"},"nice, renice"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Short Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"nice -n 10 command")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Start a command with a low priority (10)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"nice -n -10 command")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Start a command with a high priority (-10)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"renice -n 5 -p 1234")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Change the priority of a process with PID 1234 to 5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"renice -n -2 -g users")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Change the priority of all processes in the 'users' group to -2")))))}c.isMDXComponent=!0}}]);