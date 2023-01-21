"use strict";(self.webpackChunktodo_odin=self.webpackChunktodo_odin||[]).push([[179],{217:(t,e,r)=>{r.d(e,{Z:()=>p});var n=r(81),s=r.n(n),o=r(645),a=r.n(o),i=r(667),c=r.n(i),l=new URL(r(630),r.b),d=a()(s()),u=c()(l);d.push([t.id,"* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --black: rgb(62, 62, 62);\r\n  --main-color: rgb(126, 188, 255);\r\n  --light-blue: rgb(206, 230, 255);\r\n  --placeholder-color: var(--black);\r\n  --remover-color: red;\r\n\r\n  --sub-base-x-small: calc(var(--sub-base-m-small) * 0.75);\r\n  --sub-base-m-small: calc(var(--sub-base-small) * 0.75);\r\n  --sub-base-small: calc(var(--base) * 0.75);\r\n  --base: 1rem;\r\n  --small: calc(var(--base) * 1.25);\r\n  --small-medium: calc(var(--small) * 1.25);\r\n  --medium: calc(var(--small-medium) * 1.25);\r\n  --medium-big: calc(var(--medium) * 1.25);\r\n  --big: calc(var(--medium-big) * 1.25);\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  min-height: 100vh;\r\n  font-family: sans-serif;\r\n  color: var(--black);\r\n}\r\n\r\nform {\r\n  display: flex;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\ninput {\r\n  background-color: transparent;\r\n  border: none;\r\n  max-width: 150px;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\ninput::placeholder {\r\n  color: var(--placeholder-color);\r\n}\r\n\r\n.adder::before {\r\n  content: '+';\r\n  color: var(--placeholder-color);\r\n  margin-right: var(--sub-base-x-small);\r\n}\r\n\r\n.logo {\r\n  font-size: var(--medium);\r\n}\r\n\r\n.projects-container,\r\n.todo-container {\r\n  padding: var(--small);\r\n}\r\n\r\n.projects-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: var(--small);\r\n  background-color: var(--main-color);\r\n}\r\n\r\n.project-title {\r\n  padding: 0.5rem;\r\n  border-radius: var(--small);\r\n}\r\n\r\n.project.select .project-title {\r\n  background-color: var(--light-blue);\r\n}\r\n\r\n.projects {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: var(--small)\r\n}\r\n\r\n.project-name {\r\n  font-size: var(--small-medium);\r\n  font-weight: bolder;\r\n}\r\n\r\n.project-name:empty {\r\n  height: 100%;\r\n  background-image: url("+u+");\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.project-todos {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: var(--sub-base-small);\r\n}\r\n\r\n.project-todos:empty {\r\n  display: none;\r\n}\r\n\r\n.project {\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.project-remover {\r\n  font-size: var(--small);\r\n}\r\n\r\n.project-remover:hover {\r\n  color: var(--remover-color);\r\n}\r\n\r\n.todo-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: var(--small);\r\n}\r\n\r\n.task {\r\n  padding: var(--base);\r\n  border-left: 5px solid var(--main-color);\r\n  background-color: var(--light-blue);\r\n  border-radius: var(--sub-base-x-small);\r\n  display: flex;\r\n  justify-content: space-between;\r\n}",""]);const p=d},153:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(81),s=r.n(n),o=r(645),a=r.n(o)()(s());a.push([t.id,"@media (min-width: 900px) {\r\n  body {\r\n    grid-template-columns: 240px 1fr;\r\n    grid-template-rows: 1fr;\r\n  }\r\n\r\n  .project-remover {\r\n    visibility: hidden;\r\n  }\r\n  \r\n  .project:hover .project-remover {\r\n    visibility: visible;\r\n  }\r\n}",""]);const i=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,s,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);n&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),e.push(d))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var o={},a=[],i=0;i<t.length;i++){var c=t[i],l=n.base?c[0]+n.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=r(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=s(m,n);n.byIndex=i,e.splice(i,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function s(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,s){var o=n(t=t||[],s=s||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var i=r(o[a]);e[i].references--}for(var c=n(t,s),l=0;l<o.length;l++){var d=r(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var s=void 0!==r.layer;s&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,s&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},755:(t,e,r)=>{var n=r(379),s=r.n(n),o=r(795),a=r.n(o),i=r(569),c=r.n(i),l=r(565),d=r.n(l),u=r(216),p=r.n(u),m=r(589),h=r.n(m),f=r(217),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),s()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var v=r(153),b={};b.styleTagTransform=h(),b.setAttributes=d(),b.insert=c().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=p(),s()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;class j{constructor({title:t,id:e="",description:r="",dueDate:n=""}){this.title=t,this.description=r,this.dueDate=n,this.id=e}}class y{constructor(t,e=[]){this.name=t,this.todo=e}setTodo(t){this.todo=t}getTasks(){return this.todo}setTask(t){this.todo.push(t)}editTask(t,e){const r=this.todo.findIndex((e=>e.id===t));-1!==r&&this.setTodo([...this.todo.slice(0,r),e,...this.todo.slice(r+1)])}getName(){return this.name}setName(t){this.name=t}}const k="todoList";class P{constructor(t=[]){this.projects=t}}class T{static initialize(){return this.getList()||(this.setList(new P([new y("Default")])),this.getList())}static initializeProject(t){const e=new y(...Object.values(t)),r=e.getTasks().map((t=>new j(t)));return e.setTodo(r),e}static getList(){const t=localStorage.getItem(k),e=JSON.parse(t);if(e){const{projects:t}=e;return e.projects=t.map(this.initializeProject),e}return null}static setList(t=new P){localStorage.setItem(k,JSON.stringify(t))}}class x{static list=T.initialize();static getList(){return this.list}static setList(t){this.list=t}static getProjects(){return this.list.projects}static setProjects(t){this.getList().projects=t}static getProject(t){return this.findProject(t)}static setProject(t){this.getProjects().push(t)}static findProject(t){return this.list.projects.find((e=>e.name===t))}static projectExists(t){return!!this.findProject(t)}static deleteProject(t){const e=this.getProjects(),r=e.findIndex((e=>e.getName()===t)),n=[...e.slice(0,r),...e.slice(r+1)];this.setProjects(n)}static getAllTasks(){return this.getProjects().map((t=>t.getTasks())).reduce(((t,e)=>[...t,...e]),[])}static getTasks(t){return this.getProject(t)?.getTasks()}static getTaskIndex(t,e){return this.getProject(t)?.getTasks().findIndex((t=>t.id===e))}static setTask(t,e){const r=this.findProject(t);r&&r.setTask(e)}static editTask(t,e,r){const n=this.findProject(t);n&&n.editTask(e,r)}static saveToStorage(){T.setList(this.list)}}class w{static filtersDisplay=document.getElementById("filters");static newProjectName=document.getElementById("projects-new-name");static projectsAdder=document.getElementById("projects-adder");static projectsDisplay=document.getElementById("projects");static projectTitle=document.getElementById("project-name");static taskAdderContainer=document.getElementById("task-adder-container");static todoDisplay=document.getElementById("project-todos");static todoContainer=document.getElementById("todo-container");static clearChildren(t){t.innerHTML=""}static clearProjectDisplay(){[...this.todoContainer.children].forEach(this.clearChildren.bind(this))}static makeItem(t){const e=document.createElement("li");return e.textContent=t,e}static setSelectedProject(t){this.projectTitle.textContent=t}static removeTaskAdder(){this.taskAdderContainer.firstChild?.remove()}static renderTaskAdder(){this.removeTaskAdder();const t=document.createElement("form"),e=document.createElement("input");return e.setAttribute("placeholder","Add task"),t.classList.add("adder"),t.append(e),this.taskAdderContainer.append(t),t}static renderFilter(t){const e=document.createElement("li");return e.textContent=t,this.filtersDisplay.append(e),e}static renderProject(t){const e=document.createElement("li"),r=document.createElement("span"),n=document.createElement("span");return e.classList.add("project"),r.classList.add("project-title"),n.classList.add("project-remover"),r.textContent=t,n.textContent="x",e.append(r,n),this.projectsDisplay.append(e),[e,r,n]}static renderTask(t,e,r=""){const n=this.makeItem(),s=document.createElement("input"),o=document.createElement("span");return o.textContent=t,s.setAttribute("type","date"),s.setAttribute("value",r),s.classList.add("date-selector"),n.append(o,s),n.classList.add("task"),n.dataset.id=e||"",this.todoDisplay.append(n),n}static select(t){t.classList.add("select")}static unselect(t){document.querySelector(t)?.classList.remove("select")}static singleSelection(t){const e=[...t.classList];this.unselect(`.${e[0]}.select`),this.select(t)}}const E={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let L;const C=new Uint8Array(16);function I(){if(!L&&(L="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!L))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return L(C)}const S=[];for(let t=0;t<256;++t)S.push((t+256).toString(16).slice(1));const D=function(t,e,r){if(E.randomUUID&&!e&&!t)return E.randomUUID();const n=(t=t||{}).random||(t.rng||I)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(let t=0;t<16;++t)e[r+t]=n[t];return e}return function(t,e=0){return(S[t[e+0]]+S[t[e+1]]+S[t[e+2]]+S[t[e+3]]+"-"+S[t[e+4]]+S[t[e+5]]+"-"+S[t[e+6]]+S[t[e+7]]+"-"+S[t[e+8]]+S[t[e+9]]+"-"+S[t[e+10]]+S[t[e+11]]+S[t[e+12]]+S[t[e+13]]+S[t[e+14]]+S[t[e+15]]).toLowerCase()}(n)};class A{static selectedProject;static init(){w.projectsAdder.addEventListener("submit",A.submitProject.bind(A)),window.addEventListener("beforeunload",(()=>{x.saveToStorage()}),{capture:!0}),document.addEventListener("DOMContentLoaded",this.loadProjects.bind(this,x.getProjects()))}static loadProject(t,e=!1){const r=t.getName(),[n,s,o]=w.renderProject(r);n.addEventListener("click",(()=>{w.singleSelection(n),this.showTasks.call(this,r),this.selectedProject=t})),o.addEventListener("click",this.deleteProject.bind(this,r,n)),e&&w.singleSelection(n)}static loadProjects(t){for(const e of t)this.loadProject(e)}static deleteProject(t,e,r){r.stopPropagation(),x.deleteProject(t),e.remove();this.selectedProject?.getName()===t&&(()=>{this.selectedProject=null,w.clearProjectDisplay()})()}static showTasks(t){const e=x.getProject(t);this.selectedProject=e,w.clearChildren(w.todoDisplay),w.setSelectedProject(t),e.getTasks(t).forEach((t=>this.showTask(e,t))),w.renderTaskAdder().addEventListener("submit",this.submitTask.bind(this,t))}static showTask(t,e){w.renderTask.call(w,e.title,e.id,e.dueDate).querySelector(".date-selector").addEventListener("input",(r=>{const n=new j(e);n.dueDate=r.target.value,t.editTask(e.id,n)}))}static submitProject(t){t.preventDefault();const{value:e}=w.newProjectName;if(!x.projectExists(e)&&e.length>=3){t.target.reset();const r=new y(e);this.loadProject(r,!0),x.setProject.call(x,r),this.showTasks(e),w.newProjectName.blur()}}static submitTask(t,e){e.preventDefault();const{target:{firstChild:r}}=e,n=x.getProject(t),s=D(),o=new j({title:r.value,id:s});this.showTask(n,o),n.setTask(o),e.target.reset(),r.blur()}}A.init()},630:(t,e,r)=>{t.exports=r.p+"b8f9c55fdee54def88a2.png"}},t=>{t(t.s=755)}]);