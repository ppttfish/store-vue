(function(window){var svgSprite='<svg><symbol id="icon-isuxicontemplate" viewBox="0 0 1024 1024"><path d="M320 0l383.936 0 0 64-383.936 0 0-64Z"  ></path><path d="M64 127.936l896 0 0 64.064-896 0 0-64.064Z"  ></path><path d="M320 64l64 0 0 64-64 0 0-64Z"  ></path><path d="M640 64l64 0 0 64-64 0 0-64Z"  ></path><path d="M192 320l640 0 0 640L192 960 192 320zM128 1024l768.064 0L896.064 256 128 256 128 1024z"  ></path><path d="M320 64l64 0 0 64-64 0 0-64Z"  ></path><path d="M384 384l64 0 0 512-64 0 0-512Z"  ></path><path d="M576 384l64 0 0 512-64 0 0-512Z"  ></path></symbol><symbol id="icon-gouwuche" viewBox="0 0 1099 1024"><path d="M1078.48751 144.205043A85.323379 85.323379 0 0 0 1013.072919 113.773038H199.087884a28.441126 28.441126 0 0 0-8.532338 1.706467L170.646758 22.192611A28.441126 28.441126 0 0 0 142.205632 0.008532H28.441126a28.441126 28.441126 0 0 0 0 56.882253h91.011605l162.967653 734.06547A127.985068 127.985068 0 1 0 461.883891 824.801195h327.641775a127.985068 127.985068 0 1 0 132.251238-54.322551A28.441126 28.441126 0 0 0 910.116042 767.918943H335.60529l-25.312602-113.764505h637.365641a85.323379 85.323379 0 0 0 85.323379-70.533994l65.130179-369.734642a85.323379 85.323379 0 0 0-19.624377-69.680759zM426.616895 895.904011a71.102816 71.102816 0 1 1-71.102816-71.102816 71.102816 71.102816 0 0 1 71.102816 71.102816z m540.3814 0a71.102816 71.102816 0 1 1-71.102816-71.102816 71.102816 71.102816 0 0 1 71.102816 71.102816z m73.946928-691.972603l-65.130179 369.734642a28.441126 28.441126 0 0 1-28.441127 23.606135H312.852389a28.441126 28.441126 0 0 0-14.220563 4.266169L203.069642 170.65529h810.003277a28.441126 28.441126 0 0 1 28.441127 33.276118z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)