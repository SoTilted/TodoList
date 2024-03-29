(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>b});var o=n(601),r=n.n(o),i=n(314),a=n.n(i),c=n(417),s=n.n(c),l=new URL(n(132),n.b),d=new URL(n(11),n.b),u=new URL(n(155),n.b),p=a()(r()),g=s()(l),m=s()(d),f=s()(u);p.push([e.id,`*{\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #323443;\n  height: 100vh;\n  display: grid;\n  grid-template-areas: "header header" "side-bar content" "footer footer";\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 0.5fr 5fr 0.5fr;\n  padding: 0 30px 0 0;\n}\n\na,a:visited {\n  text-decoration: none;\n  color:#78A083 ;\n}\n\na:hover {\n  color: #4F7B87;\n}\nh1 {\n  font-size: 2rem;\n  color: #78A083;\n  font-weight: 1000;\n}\n.header {\n  display: flex;\n  align-items: center;\n  background-color: #323443;\n  grid-area: header;\n  padding-left: 30px;\n}\n.logo {\n  width: 30px;\n  height: 30px;\n  background-image: url(${g});\n}\n\n.eye-logo {\n  width: 30px;\n  height: 30px;\n  background-image: url(${m});\n  cursor: pointer;\n}\n\n.eye-logo-back {\n  width: 30px;\n  height: 30px;\n  background-image: url(${f});\n  cursor: pointer;\n}\n\n.eye-logo:hover,.eye-logo-back:hover {\n  opacity: 0.7;\n}\n.footer {\n  display: flex;\n  background-color: #323443;\n  grid-area: footer;\n  justify-content: center;\n  align-items: center;\n}\n\n.content {\n  animation: fadein 1s ease-in-out;\n\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 15px;\n  grid-area: content;\n  background-color: #4F7B87;\n  border-radius: 8px;\n  border-top-left-radius: 0px;\n}\n@keyframes fadein {\n  from {\n      opacity: 0;\n  }\n  to {\n      opacity: 1;\n  }\n}\n.side-bar{\n  display: flex;\n  flex-direction: column;\n  background:linear-gradient(to top, #323443, #35374B, #323443);\n  grid-area: side-bar;\n  gap: 5px;\n}\n\n\n.home,.projects,.tasks{\n  display: flex;\n  flex-direction: column;\n}\nbutton {\n  padding: 25px;\n  font-weight: 600;\n  font-size: 1.5rem;\n  color:#4F7B87 ;\n  background-color: transparent;\n  border: none;\n}\n\nbutton.previous-tab{\n  background: linear-gradient(to right,#323443   50%,#4F7B87 50%);\n  font-weight: 600;\n  background-size: 200% 100%;\n  background-position: left bottom;\n  color: #50727B;\n  background-color: #323443;\n  transition: all ease 0.5s;\n  cursor: pointer;\n}\nbutton:hover {\n  background: linear-gradient(to right, #323443 50%,#4F7B87  50%);\n  font-weight: 600;\n  background-size: 200% 100%;\n  background-position: right bottom;\n  color: #323443;\n  background-color: #50727B;\n  transition: all ease 0.5s;\n  cursor: pointer;\n}\nbutton.current-tab {\n  color: #323443;\n  background-color: rgb(79, 123, 135);\n  transition: none;\n  background-position: right;\n}\n\n\n#delete-task,#delete-task:hover{\n  background: none;\n  color: red;\n  padding: 0;\n  font-size: 2.3rem;\n  font-weight: 1000;\n}\n\n#delete-task:hover{color: rgb(150, 0, 0);}\n.task {\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  border: 3px solid #78A083;\n  border-radius: 4px;\n  gap: 5px;\n  background-color: #323443;\n  color: #78A083;\n  box-shadow: 10px 5px 5px rgba(0,0,0,0.3);\n  transition: transform 0.35s;\n}\n.task:hover{\n  transform: scale(1.01);\n}\n.task p {\n  font-size: 1.4rem;\n  font-weight: 500;\n}\n\ninput[type=radio] {\n  height: 30px;\n  width: 30px;\n  appearance: none;\n  background-color: black;\n  border-radius: 50%;\n  opacity: 0;\n  \n}\ninput:hover {\n  cursor: pointer;\n}\n.tri-state-toggle {\n  background-color: green;\n  display: flex;\n  justify-content: center;\n  border: 3px solid black;\n  border-radius: 50px;\n  padding:2px;\n  -webkit-transition: all .5s ease;\n  transition: all .5s ease;\n}\n#one {\n  opacity: 1;\n}\n.task-buttons {\n  position: sticky;\n  left: 100%;\n  align-items: center;\n  display: flex;\n  gap:8px;\n  \n}\n\ninput[type=checkbox]{\n  opacity: 1;\n  border-radius: 0;\n  appearance:auto;\n  width: 20px;\n  height: 20px;\n}\ninput[type=checkbox]:checked{\n  appearance: none;\n  background-color: rgb(128, 128, 128,0.4);\n  border: 1px solid #78A083;\n}\n\ninput[type=date]{\n  font-size: 1.3rem;\n  width: 24px;\n  border: none;\n  background: none;\n  color:#A3E7B5;\n}\ninput[type=date]:hover {\n  color: #78A083;\n}\n\ninput[type=date]:focus{\n  outline: none;\n}\n\ninput[type=date]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n}\n\n.overlay {\n  display: flex;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(0 0 0 / 45%);\n  backdrop-filter: blur(5px);\n  visibility: hidden;\n}\n\n.popup-window {\n  display: flex;\n  flex-direction: column;\n  justify-self: center;\n  background-color: black;\n  border-radius: 8px;\n  padding-left: 10px;\n  box-shadow: 10px 5px 5px rgba(0,0,0,0.3);\n\n}\n.popup-window p {\n  font-size: 1.4rem;\n  color: #78A083;\n  max-width: 400px;\n  word-break: break-all;\n  white-space: normal;\n}\n.popup-window h1 {\n  margin-top: 20px;\n  margin-right: 30px;\n}\n.popup-window button {\n  padding: 0;\n  width: 30px;\n  position: sticky;\n  left: 100%;\n  bottom: 100%;\n}\n\n.popup-window button:hover {\n  background: none ;  \n  font-weight: 600;\n  background-size: none;\n  background-position: none;\n  color: #78A083;\n  transition: none;\n}\n\n#add-task,#add-project {\n  background: none ;  \n  font-weight: 600;\n  background-size: none;\n  background-position: none;\n  color: #78A083;\n  transition: none;\n  background-color: #323443;\n  border-radius: 8px;\n  transition: transform 0.35s;\n  \n}\n\n#add-task:hover,#add-project:hover{\n  transform: scale(1.01);\n  background-color: rgb(60, 62, 77);\n\n}\n\n\ndialog[open] {\n  opacity: 1;\n  transform: scaleY(1);\n}\n\ndialog {\n  font-size: 1.5rem;\n  background-color: #323443;\n  color: #A3E7B5;\n  padding: 30px;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  position: absolute;\n  opacity: 0;\n  transform: scaleY(0);\n  transition:\n  opacity 0.7s ease-out,\n  transform 0.7s ease-out,\n  overlay 0.7s ease-out allow-discrete,\n  display 0.7s ease-out allow-discrete;\n\n}\n\ndialog::backdrop {\nbackground-color: rgb(0 0 0 / 0%);\ntransition:\n  display 0.7s allow-discrete,\n  overlay 0.7s allow-discrete,\n  background-color 0.7s;\n}\n\ndialog[open]::backdrop {\n  background-color: rgb(0 0 0 / 45%);\n  backdrop-filter: blur(4px);\n}\n\n\ninput,\nselect,\nprogress,\nmeter {\n  display: block;\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n  box-sizing: border-box;\n  width: 100%;\n}\n\ninput[type="text"],\ninput[type="datetime-local"],\ninput[type="color"],\nselect {\n  box-shadow: inset 1px 1px 3px #ccc;\n  border-radius: 5px;\n}\n\ndialog input[type="date"]{\n  width: auto;\n  border: 1px solid;\n  padding: 5px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\nform div {\n  display: flex;\n  justify-content: space-between;\n  gap: 15px;\n}\n\nform div:nth-child(3n+1) {\n  flex-direction: row;\n  gap: 10px;\n\n}\n\nform div:nth-child(3n+1) p {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n}\n\ntextarea {\n  min-height: 200px;\n  min-width: 400px;\n  font-size: 1.3rem;\n}\n\n\nform input[type='radio'] {\n  opacity: 1;\n  background-color: white;\n  border-radius: 0;\n  \n}\n\nform input[type='radio']:checked {\n  background-color:#78A083;\n  appearance: default;\n  border: 1px solid white;\n}\n\nform input[type="text"]{\n  max-width: 400px;\n}\nform button {\n  color: #A3E7B5;\n}\nform button:hover {\n  background: linear-gradient(to right, #323443 50%,#A3E7B5  50%);\n  font-weight: 600;\n  background-size: 200% 100%;\n  background-position: right bottom;\n  color: #323443;\n  transition: all ease 0.5s;\n  cursor: pointer;\n}\n\n.project-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  background-color: #323443;\n  border-radius: 8px;\n  gap: 10px;\n  border-left: 8px solid green;\n  box-shadow: 10px 5px 5px rgba(0,0,0,0.3);\n  transition: transform 0.55s ;\n}\n\n.project-card:hover {\n  transform: scale(1.04);\n  \n}\n\n.project-card p {\n  color:#8bc1d0;\n  font-size: 1.5rem;\n  font-weight: 500;\n  \n}\n\n.project-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(15vw, 400px));\n  gap: 40px;\n  padding: 15px;\n  flex: 1;\n}\n\n.show-tasks {\n\n  background-position: center;\n  background-image: url(${m}) ; \n  transition: transform 0.55s ;\n  background-repeat: no-repeat;\n}\n\n.show-tasks:hover {\n  background-size: auto;\n  background-position: center;\n  transition: none;\n  background-color: transparent;\n  background-image: url(${m}) ; \n  opacity: 0.7;\n}\n\n\n.task-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n}\n\n\n.project-header {\n  display: flex;\n  align-items: center;\n}\n\n.project-header h1 {\n  margin-left:35vw;\n}\n\n.delete-project {\n  position: sticky;\n  bottom: 100%;\n  left: 100%;\n  padding: 0;\n  font-size: 3rem;\n}\n\n.delete-project:hover {\n  background: none ;  \n  font-weight: 600;\n  background-size: none;\n  background-position: none;\n  color: #78A083;\n  transition: none;\n  background-color: #323443;\n}\n\n\n#DeleteProject {\n  display: flex;\n  flex-direction: column;\n}\n\n#DeleteProject button {\n  color: #A3E7B5;\n}\n\n#DeleteProject button:hover {\n  background: linear-gradient(to right, #323443 50%,#A3E7B5  50%);\n  font-weight: 600;\n  background-size: 200% 100%;\n  background-position: right bottom;\n  color: #323443;\n  background-color: #50727B;\n  transition: all ease 0.5s;\n  cursor: pointer;\n}\n\n`,""]);const b=p},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(g);else{var m=r(g,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=o(e,r),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},11:(e,t,n)=>{e.exports=n.p+"28219f7f6bbadc2a8843.svg"},155:(e,t,n)=>{e.exports=n.p+"81036e6b25ff0b9cea84.svg"},132:(e,t,n)=>{e.exports=n.p+"8f3e9af2ce09d19bad4c.svg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(72),t=n.n(e),o=n(825),r=n.n(o),i=n(659),a=n.n(i),c=n(56),s=n.n(c),l=n(540),d=n.n(l),u=n(113),p=n.n(u),g=n(208),m={};function f(e){const t=document.querySelector(".content");t.innerHTML="";const n=document.createElement("div");n.setAttribute("class","task-container");const o=document.createElement("button");o.setAttribute("id","add-task"),o.textContent="+",o.addEventListener("click",(()=>{document.querySelector("dialog").setAttribute("id","Task"),document.querySelector("dialog").showModal(),document.querySelector("#confirmBtn").value="task"})),t.append(n,o);for(let t in e.tasksList)y(e,e.tasksList[t])}function b(e,t){const n=document.querySelector(".content");n.innerHTML="";const o=document.createElement("div");o.setAttribute("class","project-header");const r=document.createElement("div");r.setAttribute("class","eye-logo-back"),r.addEventListener("click",(()=>{h(t)}));const i=document.createElement("h1");i.textContent=e.title,"Low"==e.priority?i.style.color="green":"Medium"==e.priority?i.style.color="orange":i.style.color="red",o.append(r,i);const a=document.createElement("div");a.setAttribute("class","task-container");const c=document.createElement("button");c.setAttribute("id","add-task"),c.textContent="+",c.addEventListener("click",(()=>{document.querySelector("dialog").setAttribute("id","Task"),document.querySelector("#confirmBtn").textContent="Add Task",document.querySelector("#Task").showModal(),document.querySelector("#confirmBtn").value=e.id})),n.append(o,a,c);for(let n in t.tasksList)t.tasksList[n].project==e.title&&y(t.tasksList,t.tasksList[n])}function y(e,t){let n=function(e){let t=document.createElement("div");t.setAttribute("class","task"),t.setAttribute("id",`${e.id}`);let n=function(){let e=document.createElement("div");return e.setAttribute("class","task-buttons"),e}();return n.append(function(){let e=document.createElement("div");return e.setAttribute("class","eye-logo"),e}(),function(){let e=document.createElement("input");return e.setAttribute("type","date"),e.setAttribute("id","dueDate"),e.setAttribute("name","dueDate"),e.setAttribute("min",""),e.setAttribute("onfocus","this.min=new Date().toISOString().split('T')[0]"),e}(),function(){let e=document.createElement("div");e.setAttribute("class","tri-state-toggle");let t=document.createElement("input");t.setAttribute("class","button"),t.setAttribute("type","radio"),t.setAttribute("name","toggle"),t.setAttribute("id","one");let n=document.createElement("input");n.setAttribute("class","button"),n.setAttribute("type","radio"),n.setAttribute("name","toggle"),n.setAttribute("id","two");let o=document.createElement("input");return o.setAttribute("class","button"),o.setAttribute("type","radio"),o.setAttribute("name","toggle"),o.setAttribute("id","three"),e.append(t,n,o),e}(),function(){let e=document.createElement("button");return e.setAttribute("id","delete-task"),e.innerHTML="&times;",e}()),t.append(function(){let e=document.createElement("input");return e.setAttribute("type","checkbox"),e.setAttribute("id","completed"),e.setAttribute("name","completed"),e}(),function(e){let t=document.createElement("p");return t.textContent=e,t}(e.title),n),function(e){let n=[...t.getElementsByClassName("button")];"Low"==e.priority&&(n[0].style.opacity="1",t.querySelector(".tri-state-toggle").style.backgroundColor="green",n.filter((function(e){return e!=n[0]})).forEach((e=>{e.style.opacity="0"}))),"Medium"==e.priority&&(n[1].style.opacity="1",t.querySelector(".tri-state-toggle").style.backgroundColor="orange",n.filter((function(e){return e!=n[1]})).forEach((e=>{e.style.opacity="0"}))),"High"==e.priority&&(n[2].style.opacity="1",t.querySelector(".tri-state-toggle").style.backgroundColor="red",n.filter((function(e){return e!=n[2]})).forEach((e=>{e.style.opacity="0"})))}(e),t}(t),o=n.querySelector("#dueDate"),r=n.querySelector(".tri-state-toggle"),i=n.querySelector("p"),a=n.querySelector(".eye-logo"),c=n.querySelector("#delete-task"),s=n.querySelector("#completed");document.querySelector(".task-container").appendChild(n),s.addEventListener("click",(e=>{e.target.checked?(o.style.pointerEvents="none",r.style.pointerEvents="none",n.style.opacity="0.7",i.innerHTML=`<s>${i.innerHTML}</s>`,t.completed=!0):(o.style.pointerEvents="",r.style.pointerEvents="",n.style.opacity="1",i.innerHTML=`${i.innerHTML.slice(3,-4)}`,t.completed=!1)})),a.addEventListener("click",(()=>{!function(e){let t=document.querySelector(".overlay");t.style.visibility="visible",t.innerHTML=`<div class='popup-window'><h1>${e.title}</h1>\n    <p>Description: ${e.description}</p>\n    <p>Due Date: ${e.dueDate}</p>\n    <p>Priority: ${e.priority}</p>\n    <p>Completed: ${e.completed}</p>\n    <p>Project: ${e.project}</p>\n    <button id="exit">&times;</button></div>`,t.firstChild.lastChild.addEventListener("click",(()=>{t.style.visibility="hidden",t.style.cursor="default"}))}(t)})),o.addEventListener("change",(()=>{t.dueDate=o.value})),c.addEventListener("click",(()=>{delete e.tasksList[t.id],localStorage.setItem("data",JSON.stringify(e)),n.parentElement.removeChild(n)}));let l=[...n.getElementsByClassName("button")];l.forEach(((e,o)=>{e.addEventListener("click",(()=>{e.style.transition="0.4s",e.style.opacity="1",0==o?(n.querySelector(".tri-state-toggle").style.backgroundColor="green",t.priority="Low"):1==o?(n.querySelector(".tri-state-toggle").style.backgroundColor="orange",t.priority="Medium"):(n.querySelector(".tri-state-toggle").style.backgroundColor="red",t.priority="High"),l.filter((function(t){return t!=e})).forEach((e=>{e.style.opacity="0"}))}))})),t.completed&&(s.checked=!0,o.style.pointerEvents="none",r.style.pointerEvents="none",n.style.opacity="0.7",i.innerHTML=`<s>${i.innerHTML}</s>`)}function h(e){const t=document.querySelector(".content");t.innerHTML="";const n=document.createElement("div");n.setAttribute("class","project-grid");const o=document.createElement("button");o.setAttribute("id","add-project"),o.textContent="+",o.addEventListener("click",(()=>{document.querySelector("dialog").setAttribute("id","Project"),document.querySelector("#confirmBtn").textContent="Add Project",document.querySelector("dialog").showModal()})),t.append(n,o);for(let t in e.projectsList)k(e.projectsList[t],e)}function k(e,t){let n=function(e){let t=document.createElement("div");return t.setAttribute("class","project-card"),t.setAttribute("id",`${e.id}`),n=e.priority,t.style.borderLeftColor="Low"==n?"green":"Medium"==n?"orange":"red",t.append(function(e){let t=document.createElement("h1");return t.textContent=e,t}(e.title),function(e){let t=document.createElement("p");return t.textContent=e,t}(e.description),function(){let e=document.createElement("button");return e.setAttribute("class","show-tasks"),e}(),function(e){let t=document.createElement("p");return t.textContent=e,t}(e.dueDate),function(){let e=document.createElement("button");return e.setAttribute("class","delete-project"),e.innerHTML="&times;",e}()),t;var n}(e);document.querySelector(".project-grid").appendChild(n),n.querySelector(".show-tasks").addEventListener("click",(()=>{b(e,t)})),n.querySelector(".delete-project").addEventListener("click",(()=>{let t=document.querySelector("#DeleteProject"),n=document.querySelector("#confirmDeleteProjectBtn");t.showModal(),n.value=e.id}))}m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),t()(g.A,m),g.A&&g.A.locals&&g.A.locals;const v=document.querySelector("#home"),x=document.querySelector("#projects"),w=document.querySelector("#confirmBtn"),E=document.querySelector("#confirmDeleteProjectBtn"),S=document.querySelectorAll(".side-bar > div >button");let A={},L=0,j=0;function q(e,t,n){localStorage.setItem("data",JSON.stringify(e)),localStorage.setItem("taskCounter",JSON.stringify(t)),localStorage.setItem("projectCounter",JSON.stringify(n))}window.addEventListener("load",(()=>{(function(e){let t;try{t=window.localStorage;const e="__storage_test__";return t.setItem(e,e),t.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}})()&&JSON.parse(localStorage.getItem("data"))?(A=JSON.parse(localStorage.getItem("data")),L=JSON.parse(localStorage.getItem("taskCounter")),j=JSON.parse(localStorage.getItem("projectCounter"))):A={tasksList:{},projectsList:{}},f(A)})),v.addEventListener("click",(()=>{f(A)})),S.forEach((e=>{e.addEventListener("click",(()=>{"current-tab"!=e.className&&(e.classList.remove("previous-tab"),document.querySelector(".current-tab").classList.add("previous-tab"),document.querySelector(".current-tab").classList.remove("current-tab"),e.classList.add("current-tab"))}))})),x.addEventListener("click",(()=>{h(A)})),w.addEventListener("click",(e=>{e.preventDefault(),"Task"==document.querySelector("dialog").id?function(e){e.preventDefault();let t=document.querySelectorAll("#Task input"),n=document.querySelector("#Task textarea"),o=(!1,"home",{title:t[0].value,dueDate:t[1].value,description:n.value,priority:[t[2],t[3],t[4]].filter((e=>1==e.checked))[0].id,completed:false,project:"home",id:"t"+L});if(A.tasksList[o.id]=o,L++,document.querySelector("#Task").close(),"t"==w.value[0])f(A);else for(let e in A.projectsList)e==w.value&&(A.tasksList[o.id].project=A.projectsList[e].title,b(A.projectsList[e],A))}(e):function(e){e.preventDefault();let t=document.querySelectorAll("#Project input"),n=document.querySelector("#Project textarea"),o=(!1,{title:t[0].value,dueDate:t[1].value,description:n.value,priority:[t[2],t[3],t[4]].filter((e=>1==e.checked))[0].id,completed:false,id:"p"+j});A.projectsList[o.id]=o,j++,document.querySelector("#Project").close(),h(A)}(e),q(A,L,j)})),E.addEventListener("click",(function(e){e.preventDefault();for(let e in A.tasksList)A.tasksList[e].project==A.projectsList[E.value].title&&delete A.tasksList[e];delete A.projectsList[E.value];let t=document.querySelector(`#${E.value}`),n=document.querySelector("#DeleteProject");t.parentElement.removeChild(t),n.close(),q(A,L,j)}))})()})();