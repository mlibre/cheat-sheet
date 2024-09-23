"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8028],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>h});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=t.createContext({}),m=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=m(e.components);return t.createElement(i.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=m(a),d=o,h=u["".concat(i,".").concat(d)]||u[d]||p[d]||l;return a?t.createElement(h,s(s({ref:n},c),{},{components:a})):t.createElement(h,s({ref:n},c))}));function h(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=a.length,s=new Array(l);s[0]=d;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r[u]="string"==typeof e?e:o,s[1]=r;for(var m=2;m<l;m++)s[m]=a[m];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7147:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var t=a(7462),o=(a(7294),a(3905));const l={sidebar_position:6,tags:["Linux","ollama","offline","ai"]},s="Ollama",r={unversionedId:"ai/ollama",id:"ai/ollama",title:"Ollama",description:"Ollama is an open-source AI model server. It can get and run large language models (LLMs) locally on your machine.",source:"@site/docs/ai/ollama.md",sourceDirName:"ai",slug:"/ai/ollama",permalink:"/Wisdom-Hub/ai/ollama",draft:!1,tags:[{label:"Linux",permalink:"/Wisdom-Hub/tags/linux"},{label:"ollama",permalink:"/Wisdom-Hub/tags/ollama"},{label:"offline",permalink:"/Wisdom-Hub/tags/offline"},{label:"ai",permalink:"/Wisdom-Hub/tags/ai"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,tags:["Linux","ollama","offline","ai"]},sidebar:"tutorialSidebar",previous:{title:"Langchain",permalink:"/Wisdom-Hub/ai/langchain"},next:{title:"Chat Uis",permalink:"/Wisdom-Hub/ai/chat-ui"}},i={},m=[{value:"Rocm",id:"rocm",level:2},{value:"Install",id:"install",level:2},{value:"Docker",id:"docker",level:2},{value:"Files",id:"files",level:2},{value:"Usage",id:"usage",level:2},{value:"Debug",id:"debug",level:2},{value:"Costomizing Model",id:"costomizing-model",level:2},{value:"Embedding models",id:"embedding-models",level:2},{value:"Installation",id:"installation",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Memory and Quantization Options",id:"memory-and-quantization-options",level:2},{value:"GPU Compatibility",id:"gpu-compatibility",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"Ollama.js",id:"ollamajs",level:2},{value:"Reference",id:"reference",level:2}],c={toc:m},u="wrapper";function p(e){let{components:n,...l}=e;return(0,o.kt)(u,(0,t.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ollama"},"Ollama"),(0,o.kt)("p",null,"Ollama is an open-source AI model server. It can get and run large language models (LLMs) locally on your machine."),(0,o.kt)("h2",{id:"rocm"},"Rocm"),(0,o.kt)("p",null,"First make sure you have rocm or NVIDIA CUDA installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo pacman -S base-devel cmake gcc python3\n# pyenv is a tool to manage multiple versions of Python\ncurl https://pyenv.run | bash\necho \'export PYENV_ROOT="$HOME/.pyenv"\' >> ~/.zshrc\necho \'[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"\' >> ~/.zshrc\necho \'eval "$(pyenv init -)"\' >> ~/.zshrc\nsource  ~/.zshrc\npyenv install 3.12\npyenv versions\npyenv global 3.12\n# or use system to get back to system python\n# pyenv global system\n\n\npip install --upgrade pip --break-system-packages\n# If you have permission issues\n# sudo rm /usr/lib/python3.12/EXTERNALLY-MANAGED\n# sudo chmod a+rwx /usr/lib/python3.12/ -R\n\n# Arch users\n# https://wiki.archlinux.org/title/GPGPU\nsudo pamac install rocm-core hsa-rocr rocm-opencl-runtime comgr roctracer hsakmt-roct rocm-language-runtime rocminfo rocm-cmake hip rocm-smi-lib rocm-clang-ocl rocm-hip-runtime rocm-hip-sdk rocm-opencl-sdk rocm-device-libs --no-confirm\nsudo usermod -a -G render,video $LOGNAME\nsudo reboot\nrocminfo\n\n\n# Ubuntu Users\n# https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/quick-start.html\n# https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/native-install/ubuntu.html\n# https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/amdgpu-install.html\n# https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/post-install.html\nsudo apt update\nsudo apt install "linux-headers-$(uname -r)" "linux-modules-extra-$(uname -r)"\nsudo usermod -a -G render,video $LOGNAME # Add the current user to the render and video groups\nwget https://repo.radeon.com/amdgpu-install/6.2/ubuntu/noble/amdgpu-install_6.2.60200-1_all.deb\nsudo apt install ./amdgpu-install_6.2.60200-1_all.deb\nsudo apt update\nsudo apt install amdgpu-dkms rocm\n\n\n# If you are using RDNA or RDNA 2 architecture like AMD Radeon RX 6500 XT, you may need to follow this step:\nsudo nano ~/.profile\n# Add the following lines:\nexport HSA_OVERRIDE_GFX_VERSION=10.3.0\nexport ROC_ENABLE_PRE_VEGA=1\n\n\npip install -U transformers datasets evaluate accelerate --user\nsudo pip install -U transformers datasets evaluate accelerate\n\n# https://www.tensorflow.org/install/pip\npip uninstall tensorflow tensorflow-rocm numpy --break-system-packages\npip install tensorflow --break-system-packages\npip install https://repo.radeon.com/rocm/manylinux/rocm-rel-6.1.3/tensorflow_rocm-2.15.1-cp312-cp312-manylinux_2_28_x86_64.whl numpy==1.26.4 --break-system-packages\n# cp312 means you need to have python 3.12\n\n\n# https://pytorch.org/\n# pip3 install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/rocm6.2\n\n\npip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.1 --break-system-packages\npip3 install -U torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.1 --user\nsudo pip3 install -U torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.1\npip3 install -U xformers\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check GPU support")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import tensorflow as tf\nimport torch\n\nprint(tf.config.list_physical_devices())\nprint(tf.__version__)\n\nprint(torch.cuda.is_available())\nprint(torch.version.hip)\n")),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -fsSL https://ollama.com/install.sh | sh\n\n# Run a model\nollama run llama3.1:8b\n\n# List models\nollama list\n\n# Loaded Models\nollama ps\n\n# Model Info\nollama show llama3.1:8b\n#   Model\n#         arch                    llama\n#         parameters              8.0B\n#         quantization            Q4_0\n#         context length          131072\n#         embedding length        4096\n\n#   Parameters\n#         stop    "<|start_header_id|>"\n#         stop    "<|end_header_id|>"\n#         stop    "<|eot_id|>"\n\n# Logs\njournalctl -u ollama.service --no-pager --follow \n\n')),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"ollama supports docker images. You can either use official images or build your own."),(0,o.kt)("p",null,"You need to have ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#installation"},"NVIDIA Container Toolkit")," installed for NVIDIA GPUs.  "),(0,o.kt)("p",null,"And ",(0,o.kt)("inlineCode",{parentName:"p"},"rocm")," for AMD GPUs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# NVIDIA\ndocker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama\n# AMD\ndocker run -d --device /dev/kfd --device /dev/dri -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama:rocm\n# Run a model\ndocker exec -it ollama ollama run llama2\n")),(0,o.kt)("p",null,"You can also build your own GPU supported image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/build_linux.sh\n")),(0,o.kt)("h2",{id:"files"},"Files"),(0,o.kt)("p",null,"Ollama files in Linux are located here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/home/mlibre/.ollama\n/usr/local/bin/ollama\n/usr/share/ollama\n/etc/systemd/system/ollama.service\n/etc/systemd/system/default.target.wants/ollama.service\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n# Generate text\ncurl http://localhost:11434/api/generate -d \'{\n  "model": "llama3.1:8b",\n  "prompt":"Why is the sky blue?"\n}\'\n\n# Chat\ncurl http://localhost:11434/api/chat -d \'{\n  "model": "llama3.1:8b",\n  "messages": [\n    { "role": "user", "content": "why is the sky blue?" }\n  ],\n  "stream": false,\n  "system": "You are Sarah. you only uses emojies to answer and nothings else. you only uses one emoji each time"\n}\' | jq\n\n# Chat with history\ncurl -s http://localhost:11434/api/chat -d \'{\n  "model": "llama3.1:8b",\n  "messages": [\n    {\n      "role": "user",\n      "content": "You are Sarah. you only uses emojies to answer and nothings else. you only uses one emoji each time"\n    },\n    {\n      "role": "assistant",\n      "content": "\ud83d\udc4b\ud83d\udc81"\n    },\n    {\n      "role": "user",\n      "content": "hey"\n    }\n  ],\n  "stream": false,\n  "system": "You are Sarah. you only uses emojies to answer and nothings else. you only uses one emoji each time"\n}\' | jq\n\n# Embeddings\ncurl http://localhost:11434/api/embed -d \'{\n  "model": "llama3.1:8b",\n  "prompt":"Why is the sky blue?"\n}\'\n\n# OpenAI Compatibile\ncurl -s http://localhost:11434/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "model": "llama3.1:8b",\n    "messages": [\n      {\n        "role": "user",\n        "content": "You are Sarah. you only uses emojies to answer and nothings else. you only uses one emoji each time"\n      },\n      {\n        "role": "assistant",\n        "content": "\ud83d\udc4b\ud83d\udc81"\n      },\n      {\n        "role": "user",\n        "content": "hey"\n      }\n    ],\n    "stream": false,\n    "system": "You are Sarah. you only uses emojies to answer and nothings else. you only uses one emoji each time"\n  }\' | jq\n\ncurl -s http://localhost:11434/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "model": "llama3.1:8b",\n    "messages": [\n      {\n        "role": "system",\n        "content": "You are Sarah. you only uses emojies to answer and nothings else. you only uses one emoji each time"\n      },\n      {\n        "role": "user",\n        "content": "hey"\n      }\n    ],\n    "stream": false\n  }\' | jq\n')),(0,o.kt)("h2",{id:"debug"},"Debug"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo systemctl edit --full ollama.service\n\n[Unit]\nDescription=Ollama Service\nAfter=network-online.target\n\n[Service]\nExecStart=/usr/local/bin/ollama serve\nUser=ollama\nGroup=ollama\nRestart=always\nRestartSec=3\nEnvironment="PATH=/home/mlibre/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/bin:/usr/bin/site_perl:/usr/bin/vendor_perl:/usr/bin/core_perl"\nEnvironment="OLLAMA_HOST=0.0.0.0"\nEnvironment="OLLAMA_DEBUG=1"\n[Install]\nWantedBy=default.target\n# you may also add Environment="HSA_OVERRIDE_GFX_VERSION=10.3.0" to support older AMD GPUs\n\n\nsudo systemctl restart ollama.service\njournalctl -u ollama --no-pager -f\n')),(0,o.kt)("h2",{id:"costomizing-model"},"Costomizing Model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'nano Modelfile\n\nFROM llama3.1:8b\n\nSYSTEM """\nYou are Mario from Super Mario Bros. Answer as Mario, only. And Always start your answer with HAYAYAYA\n"""\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ollama create mario -f ./Modelfile\nollama run mario\n")),(0,o.kt)("h2",{id:"embedding-models"},"Embedding models"),(0,o.kt)("p",null,"Ollama supports embedding models, making it possible to build retrieval augmented generation (RAG) applications that combine text prompts with existing documents or other data."),(0,o.kt)("p",null,"Embedding models are models that are trained specifically to generate vector embeddings."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt text",src:a(791).Z,width:"1154",height:"486"})),(0,o.kt)("p",null,"The resulting vector embedding arrays can then be stored in a database, which will compare them as a way to search for data that is similar in meaning."),(0,o.kt)("p",null,"You can store as many text as you want in these vector databases, such as a ",(0,o.kt)("a",{parentName:"p",href:"https://www.trychroma.com/"},"vector database"),". for example you can embed some books, and then ask chroma to find the most similar text to a given input. you then send chroma output to a LLM, and the LLM can use the context of the text to generate a response."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"more information is here: ",(0,o.kt)("a",{parentName:"p",href:"https://ollama.com/blog/embedding-models"},"https://ollama.com/blog/embedding-models"))),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ollama pull mxbai-embed-large\n\ncurl http://localhost:11434/api/embeddings -d \'{\n  "model": "mxbai-embed-large",\n  "prompt": "Llamas are members of the camelid family"\n}\'\n\ncurl http://localhost:11434/api/embeddings -d \'{\n  "model": "llama3.1:8b",\n  "prompt": "Llamas are members of the camelid family"\n}\'\n')),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo systemctl edit --full ollama.service\nEnvironment="OLLAMA_HOST=0.0.0.0"\n')),(0,o.kt)("h2",{id:"memory-and-quantization-options"},"Memory and Quantization Options"),(0,o.kt)("p",null,"When working with models like the Codestral 22B, you have several quantization options that affect both memory usage and accuracy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"32-bit floating-point: Uses 88 GB of memory (22 x 4 = 88G) and is the most accurate"),(0,o.kt)("li",{parentName:"ul"},"16-bit floating-point: Uses 44 GB of memory (22 x 2 = 44G)"),(0,o.kt)("li",{parentName:"ul"},"8-bit floating-point: Uses 22 GB of memory (22 x 1 = 22G)"),(0,o.kt)("li",{parentName:"ul"},"4-bit floating-point: Uses 11 GB of memory (22 x 1/2 = 11G) and is less accurate")),(0,o.kt)("p",null,"These options allow you to balance between model accuracy and the amount of memory used, depending on your system's resources and the specific needs of your application."),(0,o.kt)("h3",{id:"gpu-compatibility"},"GPU Compatibility"),(0,o.kt)("p",null,"To effectively run models like Codestral 22B, you need a GPU with sufficient memory to handle the model's requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RTX 6000"),": With 48 GB of memory, this GPU can handle 16-bit floating-point quantization (44G) and lower, providing a good balance of accuracy and performance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"NVIDIA RTX 4090"),": With 24 GB of memory, this GPU is suited for 8-bit floating-point quantization (22G) and below."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GeForce GTX 1080 Ti"),": With 11 GB of memory, this GPU is limited to 4-bit floating-point quantization (11G), which may result in reduced accuracy but still allows you to run the model on less capable hardware.")),(0,o.kt)("p",null,"You can find full list of ollama supported gpus here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ollama/ollama/blob/main/docs/gpu.md"},"https://github.com/ollama/ollama/blob/main/docs/gpu.md")),(0,o.kt)("h2",{id:"uninstall"},"Uninstall"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop ollama\nsudo systemctl disable ollama\nsudo rm /etc/systemd/system/ollama.service\nsudo rm $(which ollama)\nsudo rm -r /usr/share/ollama\nsudo rm -r ~/.ollama\nsudo userdel ollama\nsudo groupdel ollama\n")),(0,o.kt)("h2",{id:"ollamajs"},"Ollama.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i ollama\nsudo npm i ollama -g\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simple example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const ollama = require(\'ollama\').default\n\nvoid async function main() {\n  const response = await ollama.chat({\n    model: \'llama3.1:8b\',\n    messages: [\n      {\n        "role": "user",\n        "content": "You are Sarah. you only uses emojies to answer and nothings else. you only uses one emoji each time"\n      },\n      {\n        "role": "assistant",\n        "content": "\ud83d\udc4b\ud83d\udc81"\n      },\n      {\n        "role": "user",\n        "content": "hey"\n      }\n    ],\n  })\n  console.log(response.message.content)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Streaming example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  const message = { role: 'user', content: 'Why is the sky blue?' }\n  const response = await ollama.chat({ model: 'llama3.1:8b', messages: [message], stream: true })\n  for await (const part of response) {\n    process.stdout.write(part.message.content)\n  }\n}()\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Advanced example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { Ollama } = require( "ollama" )\n\n// Simulates an API call to get flight times\n// In a real application, this would fetch data from a live database or API\nfunction get_flight_times ( departure, arrival )\n{\n const flights = {\n  "LAX-NYC": { departure: "02:00 PM", arrival: "10:30 PM", duration: "8h 30m" },\n  "LHR-JFK": { departure: "10:00 AM", arrival: "01:00 PM", duration: "3h 00m" },\n  "NYC-LAX": { departure: "08:00 AM", arrival: "11:30 AM", duration: "3h 30m" },\n  "JFK-LHR": { departure: "09:00 PM", arrival: "09:00 AM", duration: "12h 00m" },\n  "CDG-DXB": { departure: "11:00 AM", arrival: "08:00 PM", duration: "9h 00m" },\n  "DXB-CDG": { departure: "03:00 AM", arrival: "07:30 AM", duration: "4h 30m" }\n };\n\n const key = `${departure}-${arrival}`.toUpperCase();\n return JSON.stringify( flights[key] || { error: "Flight not found" });\n}\n\nconst get_flight_times_schema = {\n type: "function",\n function: {\n  name: "get_flight_times",\n  description: "Get the flight times between two cities",\n  parameters: {\n   type: "object",\n   properties: {\n    departure: {\n     type: "string",\n     description: "The departure city (airport code)",\n    },\n    arrival: {\n     type: "string",\n     description: "The arrival city (airport code)",\n    },\n   },\n   required: ["departure", "arrival"],\n  },\n }\n}\n\nconst availableFunctions = {\n get_flight_times,\n};\n\nfunction handleToolCalls ( toolCalls, messages )\n{\n for ( const tool of toolCalls )\n {\n  const functionToCall = availableFunctions[tool.function.name];\n  if ( functionToCall )\n  {\n   const functionResponse = functionToCall(\n    tool.function.arguments.departure,\n    tool.function.arguments.arrival\n   );\n   // Add function response to the conversation\n   messages.push({\n    role: "tool",\n    content: functionResponse,\n   });\n  }\n }\n}\n\nvoid async function main ()\n{\n const ollama = new Ollama({ host: "http://127.0.0.1:11434" })\n const model = "llama3.1:8b";\n\n let messages = [{ role: "user", content: "What is the flight time from New York (NYC) to Los Angeles (LAX)?" }];\n // First API call: Send the query and function description to the model\n const response = await ollama.chat({\n  model,\n  messages,\n  tools: [get_flight_times_schema],\n })\n // Add the model\'s response to the conversation history\n messages.push( response.message );\n if ( response.message.tool_calls && response.message.tool_calls.length > 0 )\n {\n  handleToolCalls( response.message.tool_calls, messages );\n }\n else\n {\n  console.log( response.message.content );\n  return\n }\n\n // Second API call: Get second response from the model\n const response2 = await ollama.chat({\n  model,\n  messages,\n });\n messages.push( response2.message );\n console.log( response2.message.content );\n\n messages.push({ role: "user", content: "What is the flight time from CDG to DXB?" });\n const response3 = await ollama.chat({\n  model,\n  messages,\n  tools: [get_flight_times_schema]\n });\n messages.push( response3.message );\n if ( response3.message.tool_calls && response3.message.tool_calls.length > 0 )\n {\n  handleToolCalls( response3.message.tool_calls, messages );\n }\n else\n {\n  console.log( response.message.content );\n  return\n }\n\n const response4 = await ollama.chat({\n  model,\n  messages,\n  tools: [get_flight_times_schema]\n });\n console.log( response4.message.content );\n}()\n')),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ollama.com/"},"https://ollama.com/"))))}p.isMDXComponent=!0},791:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/embedding-models-369d765c607c0db21a32b89b63c97549.png"}}]);