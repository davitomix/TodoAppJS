!function(e){var t={};function n(o){if(t[o])return t[o].exports;var d=t[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(o,d,function(t){return e[t]}.bind(null,d));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),d=n(2);"string"==typeof(d=d.__esModule?d.default:d)&&(d=[[e.i,d,""]]);var r={insert:"head",singleton:!1};o(d,r);e.exports=d.locals||{}},function(e,t,n){"use strict";var o,d=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function i(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},o=[],d=0;d<e.length;d++){var r=e[d],a=t.base?r[0]+t.base:r[0],l=n[a]||0,s="".concat(a," ").concat(l);n[a]=l+1;var m=i(s),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==m?(c[m].references++,c[m].updater(u)):c.push({identifier:s,updater:g(u,t),references:1}),o.push(s)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var d=n.nc;d&&(o.nonce=d)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=r(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var s,m=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,o){var d=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=m(t,d);else{var r=document.createTextNode(d),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(r,c[t]):e.appendChild(r)}}function p(e,t,n){var o=n.css,d=n.media,r=n.sourceMap;if(d?e.setAttribute("media",d):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function g(e,t){var n,o,d;if(t.singleton){var r=h++;n=f||(f=l(t)),o=u.bind(null,n,r,!1),d=u.bind(null,n,r,!0)}else n=l(t),o=p.bind(null,n,t),d=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else d()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=d());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var d=i(n[o]);c[d].references--}for(var r=a(e,t),l=0;l<n.length;l++){var s=i(n[l]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}n=r}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"html {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\n\nbody{\n  font-family: 'Indie Flower', cursive;\n  font-size: 16px;\n  padding: 0;\n  margin: 0;\n}\n\n#title {\n  background-color: rgb(120, 164, 109);\n  text-align: center;\n}\n\n#title h1 {\n  padding: .5em 0;\n  margin: 0;\n}\n\n.big-cont {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  width: 100%;\n  padding: 5vh 0 5vh 0;\n  background-color: rgb(117, 159, 191);\n}\n\n.project-cont {\n  width: 40%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.task-cont {\n  width: 60%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.task-cont h3 {\n  font-size: 22px;\n}\n\n.pjct-ul {\n  padding: 0;\n  margin: 0;\n  border: 2px solid black;\n  border-radius: 5px;\n  width: 80%;\n}\n\n.project-li {\n  width: 100%;\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.project-li h3 {\n  width: 60%;\n}\n\n.project-li:hover {\n  cursor: pointer;\n}\n\n.todo-cont {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n\n.todo-task {\n  border: 2px solid black;\n  border-radius: 5px;\n  background-color: rgb(120, 164, 109);\n  margin: 10px 0;\n  padding: 0;\n  min-width: 90%;\n}\n\n.project-cont form {\n  width: 80%;\n  text-align: center;\n}\n\n.project-cont form label{\n  font-size: 22px;\n  width: 80%;\n  margin-bottom: 10px;\n}\n\n.project-cont form label input {\n  width: 80%;\n  margin-bottom: 10px;\n}\n\n.todo-task tr th,\n.todo-task tr td {\n  padding: 0 5px;\n}\n\n.done-todo-btn,\n.edit-todo-btn,\n.delete-todo-btn {\n  color: white;\n  text-align: center;\n}\n.edit-todo-btn {\n  background-color: rgb(169, 169, 51);\n}\n.delete-todo-btn {\n  background-color: tomato;\n}\n.done-todo-btn {\n  background-color: rgb(30, 67, 187);\n}\n\n.selected {\n  background-color: rgb(98, 167, 81);\t\n}\n\n.not-selected {\t\t\n  background-color: rgb(120, 164, 109);\t\t\n}\n\n.d-none {\n  display: none;\n}\n\n#todo-create,\n#todo-save,\n#todo-cancel,\n#todo-init,\n#project-create {\n  padding: 8.5px 5.5px;\n  border-radius: 5px;\n  background-color: rgb(120, 164, 109);\n  cursor: pointer;\n}\n\n@media (max-width: 850px) {\n  .big-cont {\n    flex-direction: column;\n  }\n\n  .todo-task,\n  .task-cont,\n  .project-cont {\n    width: 100%;\n  }\n\n  .todo-cont {\n    width: 80%;\n  }\n\n  #display-init-todo {\n    margin: 20px 0;\n  }\n}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var d=(c=o,i=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(a," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([d]).join("\n")}var c,i,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var d={};if(o)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(d[c]=!0)}for(var i=0;i<e.length;i++){var a=[].concat(e[i]);o&&d[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},function(e,t,n){"use strict";n.r(t);n(0);var o={removeFromStorage:e=>{localStorage.removeItem(e)},addToStorage:(e,t)=>{localStorage[e]=JSON.stringify(t)},todoObjExists:()=>void 0!==localStorage["Todos-Obj"]};var d=(()=>{let e=null,t=null;const n=document.getElementById("display-form"),o=document.getElementById("display-text"),d=document.getElementById("todo-save"),r=document.getElementById("todo-create"),c=document.getElementById("display-init-todo");return{getProjectId:()=>e,getButtonId:()=>t,injectProject:(n,o,d)=>{const r=document.getElementById("project-ul"),c=document.createElement("li");var i;c.id=o,i=c.id.toString(),e=i,c.classList=["project-li not-selected"];const a=document.createElement("h3");a.innerText=n;const l=document.createElement("button");l.id=d,(e=>{t=e})(l.id.toString()),l.innerHTML="X",c.appendChild(a),c.appendChild(l),r.appendChild(c)},removeProject:e=>{document.getElementById(e).remove()},injectTodo:(e,t,n,o,d,r,c,i)=>{const a=document.getElementById("todo-container"),l=document.createElement("table");l.id=d;const s=document.createElement("tr"),m=document.createElement("tr"),u=document.createElement("th"),p=document.createElement("th"),f=document.createElement("th"),h=document.createElement("th"),g=document.createElement("th"),T=document.createElement("th"),v=document.createElement("th"),j=document.createElement("td"),b=document.createElement("td"),y=document.createElement("td"),x=document.createElement("td"),E=document.createElement("td"),I=document.createElement("td"),B=document.createElement("td"),L=document.createElement("button");L.id=c;const k=document.createElement("button");k.id=r;const S=document.createElement("button");S.id=i,E.appendChild(L),I.appendChild(k),B.appendChild(S),u.innerText="Name",p.innerText="Description",f.innerText="Deadline",h.innerText="Priority",j.innerHTML=e,b.innerHTML=t,y.innerHTML=n,x.innerHTML=o,L.innerHTML="edit",L.className="edit-todo-btn",k.innerHTML="delete",k.className="delete-todo-btn",S.innerHTML="complete",S.className="done-todo-btn",s.appendChild(u),s.appendChild(p),s.appendChild(f),s.appendChild(h),s.appendChild(g),s.appendChild(T),s.appendChild(v),m.appendChild(j),m.appendChild(b),m.appendChild(y),m.appendChild(x),m.appendChild(E),m.appendChild(I),m.appendChild(B),l.appendChild(s),l.appendChild(m),l.className="todo-task",a.appendChild(l)},clearInput:e=>{document.getElementById(e).value=""},fillTodoForm:(e,t,n,o)=>{document.getElementById("task-name").value=e,document.getElementById("task-description").value=t,document.getElementById("task-deadline").value=n,document.getElementById("task-priority").value=o},clearTodoForm:()=>{document.getElementById("task-name").value=null,document.getElementById("task-description").value=null,document.getElementById("task-deadline").value=null,document.getElementById("task-priority").value="low"},showTodoSaveBtn:()=>{d.classList.remove("d-none"),r.classList.add("d-none")},hideTodoSaveBtn:()=>{d.classList.add("d-none"),r.classList.remove("d-none")},hideTodoForm:()=>{n.classList.remove("util-cont"),n.classList.add("d-none")},showTodoForm:()=>{n.classList.remove("d-none"),n.classList.add("util-cont")},hideTextForm:()=>{o.classList.remove("util-cont"),o.classList.add("d-none")},showTextForm:()=>{o.classList.add("util-cont"),o.classList.remove("d-none")},unmarkProjects:()=>{const e=document.getElementById("project-ul").getElementsByTagName("li");for(let t=0;t<e.length;t+=1)e[t].classList.contains("selected")&&(e[t].classList.remove("selected"),e[t].classList.add("not-selected"))},markProject:(e,t)=>{e?(t.classList.remove("not-selected"),t.classList.add("selected")):(t.classList.remove("selected"),t.classList.add("not-selected"))},clearTodos:()=>{const e=document.getElementById("todo-container");for(;e.hasChildNodes();)e.removeChild(e.firstChild)},clearProjects:()=>{const e=document.getElementById("project-ul");for(;e.hasChildNodes();)e.removeChild(e.firstChild)},showTodoInitBox:()=>{c.classList.remove("d-none")},hideTodoInitBox:()=>{c.classList.add("d-none")}}})();var r=(()=>{const e=d,t=o;let n=null;const r=n=>{const o=JSON.parse(localStorage["Todos-Obj"]),d=n.parentElement.id,r=o.findIndex(e=>e.projectLiId==d);o.splice(r,1),t.addToStorage("Todos-Obj",o),e.removeProject(d),e.clearTodos(),e.clearProjects(),i()},i=()=>{const t=JSON.parse(localStorage["Todos-Obj"]);if(t.length>0)for(const n in t){const o=t[n].projectName,d=t[n].projectLiId,c=t[n].projectDeleteBtnId;e.injectProject(o,d,c);const i=document.getElementById(d);i.addEventListener("click",t=>{l(d),e.clearTodoForm(),e.showTodoInitBox(),a(d),e.hideTextForm(),e.unmarkProjects(),e.hideTodoForm(),e.markProject(i.classList.contains("not-selected"),i)},!1,{once:!0});const s=document.getElementById(c);s.addEventListener("click",t=>{t.stopPropagation(),e.hideTodoForm(),e.hideTodoInitBox(),e.showTextForm(),r(s)},!1,{once:!0})}},a=t=>{const n=JSON.parse(localStorage["Todos-Obj"]),o=n.findIndex(e=>e.projectLiId==t),d=n[o];if(e.clearTodos(),d.projectTodos.length>0)for(const t in d.projectTodos){const n=d.projectTodos[t].name,r=d.projectTodos[t].description,i=d.projectTodos[t].deadline,l=d.projectTodos[t].priority,m=d.projectTodos[t].boxid,u=d.projectTodos[t].delid,p=d.projectTodos[t].ediid,f=d.projectTodos[t].donid;e.injectTodo(n,r,i,l,m,u,p,f);const h=document.getElementById(u),g=document.getElementById(p),T=document.getElementById(f);h.addEventListener("click",t=>{c.removeTodo(d,o,m),e.clearTodos(),e.hideTodoForm(),e.showTodoInitBox(),a(s()),alert("Tasl Deleted!")},!1,{once:!0}),g.addEventListener("click",a=>{const s=c;e.showTodoForm(),e.showTodoSaveBtn(),e.hideTextForm(),e.hideTodoInitBox(),e.fillTodoForm(n,r,i,l),s.setEditTodoId(d,o,d.projectTodos[t].boxid)},!1,{once:!0}),T.addEventListener("click",t=>{c.removeTodo(d,o,m),e.clearTodos(),a(s()),alert("Task Completed !")},!1,{once:!0})}},l=e=>{n=e},s=()=>n;return{createProject:()=>{const n=JSON.parse(localStorage["Todos-Obj"]),o=document.getElementById("project-name").value;e.clearInput("project-name");let d=new Date;d=d.getTime();const r={projectName:o,projectLiId:d,projectDeleteBtnId:d+1,projectTodos:[]};l(r.projectLiId),n.push(r),t.addToStorage("Todos-Obj",n)},scanProjects:i,scanTodos:a,setProjectId:l,getProjectId:s}})();var c=(()=>{const e=r,t=o;let n=null,d=null,c=null;return{createTodo:e=>{let n=new Date;n=n.getTime();const o={boxid:n,delid:n+1,ediid:n+2,donid:n+3,name:document.getElementById("task-name").value,description:document.getElementById("task-description").value,deadline:document.getElementById("task-deadline").value,priority:document.getElementById("task-priority").value},d=JSON.parse(localStorage["Todos-Obj"]),r=d.findIndex(t=>t.projectLiId===e);d[r].projectTodos.push(o),t.addToStorage("Todos-Obj",d)},removeTodo:(e,n,o)=>{const d=JSON.parse(localStorage["Todos-Obj"]),r=e.projectTodos.findIndex(e=>e.boxid===o);e.projectTodos.splice(r,1),d[n].projectTodos=e.projectTodos,t.addToStorage("Todos-Obj",d)},setEditTodoId:(e,t,o)=>{const r=e.projectTodos.findIndex(e=>e.boxid===o);n=e,d=t,c=r},updateTodo:(o,r,i,a)=>{n.projectTodos[c].name=o,n.projectTodos[c].description=r,n.projectTodos[c].deadline=i,n.projectTodos[c].priority=a;const l=JSON.parse(localStorage["Todos-Obj"]);l[d]=n,t.addToStorage("Todos-Obj",l),e.scanTodos(e.getProjectId())}}})();const i=d,a=c,l=o,s=r,m=document.getElementById("project-form"),u=document.getElementById("todo-form"),p=document.getElementById("todo-cancel"),f=document.getElementById("todo-save"),h=document.getElementById("todo-init");(()=>{if(l.todoObjExists())s.scanProjects();else{const e=new Array;let t=new Date;t=t.getTime();const n={projectName:"default",projectLiId:t,projectDeleteBtnId:t+1,projectTodos:[]};s.setProjectId(n.projectLiId),e.push(n),l.addToStorage("Todos-Obj",e),s.scanProjects()}i.hideTodoInitBox(),m.addEventListener("submit",e=>{e.preventDefault(),s.createProject(),i.clearProjects(),s.scanProjects(),i.hideTodoInitBox(),i.showTextForm(),i.clearTodos(),i.hideTodoForm()},!1,{once:!0}),h.addEventListener("click",e=>{e.preventDefault(),i.showTodoForm(),i.hideTodoSaveBtn(),i.hideTodoInitBox()},!1,{once:!0}),u.addEventListener("submit",e=>{e.preventDefault();const t=s.getProjectId();a.createTodo(t),s.scanTodos(t),i.clearTodoForm(),i.hideTodoForm(),i.hideTextForm(),i.showTodoInitBox()},!1,{once:!0}),p.addEventListener("click",()=>{i.clearTodoForm(),i.hideTodoForm(),i.hideTodoSaveBtn(),i.showTodoInitBox(),i.hideTodoForm()},!1,{once:!0}),f.addEventListener("click",()=>{const e=document.getElementById("task-name").value,t=document.getElementById("task-description").value,n=document.getElementById("task-deadline").value,o=document.getElementById("task-priority").value;a.updateTodo(e,t,n,o),i.hideTodoForm(),i.showTextForm(),i.hideTodoSaveBtn(),i.clearTodoForm(),alert("Task Saved!")},!1,{once:!0})})()}]);