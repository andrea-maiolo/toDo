(()=>{"use strict";function e(e){this.title=e}const t=[];let n;const l=[];function i(e,t,n,l,i){this.title=e,this.description=t,this.schedule=n,this.category=l,this.priority=i}const o=function(){let e=document.querySelector("#newTaskForm"),t=document.querySelector("#addPriority"),n=document.querySelectorAll(".priorityForm");!function(e,t){let n=e.elements.priority;for(let e=0;e<n.length;e++)n[e].checked&&(n[e].checked=!1)}(e),t.style.display="block",n.forEach((e=>e.style.display="none"))};function c(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function a(e){c(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function d(e,t){c(2,arguments);var n=a(e),l=a(t),i=n.getTime()-l.getTime();return i<0?-1:i>0?1:i}const r=function(e){l.push(e),s(e),function(){let e=document.querySelectorAll(".tasks");e=Array.from(e),l.map((e=>new Date(e.schedule))).sort(d),e.forEach((e=>{e.childNodes[2].innerHTML=new Date(e.childNodes[2].innerHTML)}));let t=e.sort(d);console.log(t),document.querySelector("#taskList")}()},s=function(e){const t=document.querySelector("#taskList");let n=document.createElement("div");n.classList.add("tasks");let l=document.createElement("p");l.classList.add("pOfTask"),l.innerHTML=e.title;let i=document.createElement("div");i.classList.add("details");let o=document.createElement("p");o.classList.add("pOfTask"),o.innerHTML=e.description;let c=document.createElement("p");c.classList.add("pOfTask"),c.innerHTML=e.category,i.appendChild(o),i.appendChild(c),i.style.display="none";let a=document.createElement("p");a.classList.add("pOfTask"),a.classList.add("date"),a.innerHTML=e.schedule;let d=document.createElement("button");d.classList.add("expandeDescription");let r=document.createElement("i");r.classList.add("glyphicon"),r.classList.add("glyphicon-resize-full"),d.appendChild(r),d.addEventListener("click",(()=>{"block"==i.style.display?(i.style.display="none",r.classList.remove("glyphicon-resize-small"),r.classList.add("glyphicon-resize-full")):"none"==i.style.display&&(i.style.display="block",r.classList.remove("glyphicon-resize-full"),r.classList.add("glyphicon-resize-small"))}));let s=document.createElement("button");s.classList.add("deleteTask");let p=document.createElement("i");p.classList.add("glyphicon"),p.classList.add("glyphicon-trash"),s.appendChild(p),s.addEventListener("click",(()=>{t.removeChild(n),u(e)}));let m=document.createElement("button");m.classList.add("modifyTask");let h=document.createElement("i");h.classList.add("glyphicon"),h.classList.add("glyphicon-edit"),m.appendChild(h),m.addEventListener("click",(()=>{let t=document.createElement("form");t.name="modificationForm";let d=document.createElement("input");d.id="modifyTitle";let r=document.createElement("input");r.id="modifyDescription";let s=document.createElement("input");s.id="modifyCategory";let u=document.createElement("input");u.id="modifySchedule",d.type="text",d.setAttribute("maxlength",20),r.type="text",r.setAttribute("maxlength",140),s.type="text",s.setAttribute("maxlength",20),u.type="date",d.value=l.innerHTML,r.value=o.innerHTML,s.value=c.innerHTML,u.value=a.innerHTML,t.appendChild(d),t.appendChild(r),t.appendChild(s),t.appendChild(u);let p=document.createElement("button");p.innerHTML="confirm",p.type="button",t.appendChild(p);let m=document.createElement("button");m.innerHTML="discard",m.type="button",t.appendChild(m),l.style.display="none",i.style.display="none",a.style.display="none",n.appendChild(t);let h=document.querySelector("#modifyTitle"),f=document.querySelector("#modifyDescription"),L=document.querySelector("#modifyCategory"),v=document.querySelector("#modifySchedule");p.addEventListener("click",(()=>{""!=h.value&&""!=v&&(l.innerHTML=h.value,a.innerHTML=v.value,o.innerHTML=f.value,""!=L.value?c.innerHTML=L.value:alert("Please enter a category, use 'All' as default"),n.removeChild(t),l.style.display="block",a.style.display="block"),y(n,e)})),m.addEventListener("click",(()=>{n.removeChild(t),l.style.display="block",a.style.display="block"}))}));let f=document.createElement("input");f.type="checkbox",f.id="done",f.addEventListener("click",(e=>{let t=e.path[1];.5!=t.style.opacity?t.style.opacity=.5:t.style.opacity=1})),function(e){switch(e){case"medium":n.style.backgroundColor="orange";break;case"low":n.style.backgroundColor="yellow";break;case"high":n.style.backgroundColor="red"}}(e.priority),n.appendChild(l),n.appendChild(i),n.appendChild(a),n.appendChild(d),n.appendChild(m),n.appendChild(s),n.appendChild(f),t.appendChild(n)},u=function(e){let t=l.indexOf(e);l.splice(t,1)},y=function(n,i){let o=l.indexOf(i),c=l[o],a=n.childNodes[0].innerHTML,d=n.childNodes[2].innerHTML,r=n.childNodes[1].childNodes[0].innerHTML,s=n.childNodes[1].childNodes[1].innerHTML;if(a!=c.title&&(c.title=a),d!=c.schedule&&(c.schedule=d),r!=c.description&&(c.description=r),s!=c.category){c.category=s;for(let n=0;n<=t.length;n++){if(c.category==t[n].title)return;{let n=new e(c.category);t.push(n),p(n)}}}},p=function(e){const t=document.querySelector("#categoryList");let n=document.createElement("button");n.classList.add("pOfCategory"),n.innerHTML=e.title,t.appendChild(n)},m=function(){let e=document.getElementsByClassName("tasks");if(null!=e)for(let t=e.length-1;t>=0;t--)e[t].parentNode.removeChild(e[t])};!function(){const e=document.querySelector("#newTaskButton");e.addEventListener("click",(function(){document.querySelector("#newTaskForm").style.display="block",e.style.display="none"}))}(),function(){const e=document.querySelector("#addPriority");e.addEventListener("click",(function(){document.querySelectorAll(".priorityForm").forEach((e=>e.style.display="block")),e.style.display="none"}))}(),function(){const e=document.querySelector("#showCategoryForm");e.addEventListener("click",(function(){document.querySelector("#categoryForm").style.display="block",e.style.display="none"}))}(),function(){document.querySelector("#addToList").addEventListener("click",(function(){if(""!=e.value&&""!=l.value){let o=function(){let e;return function(t,n){let l=document.querySelector("#newTaskForm").elements.priority;for(var i=0;i<l.length;i++)if(l[i].checked){e=l[i].value;break}}(),e}();if(null==n&&null==o){let n=new i(e.value,t.value,l.value,"All","default");r(n)}else if(null==n&&null!=o){let n=new i(e.value,t.value,l.value,"All",o);r(n)}else if(null!=n&&null==o){let o=new i(e.value,t.value,l.value,n,"default");r(o)}else if(null!=n&&null!=o){let c=new i(e.value,t.value,l.value,n,o);r(c)}}o()}));let e=document.querySelector("#taskTitle"),t=document.querySelector("#taskDescription"),l=document.querySelector("#taskDate")}(),function(){const e=document.querySelector("#clear");e.addEventListener("click",(function(){let e=document.querySelector("#taskTitle"),t=document.querySelector("#taskDescription"),n=document.querySelector("#taskDate");e.value="",t.value="",n.value=""})),e.addEventListener("click",o)}(),document.querySelector("#addCategory").addEventListener("click",(function(){let i=document.querySelector("#categoryName");if(""!=i.value){!function(e){t.push(e),p(e),m(),function(){let e=document.querySelectorAll(".pOfCategory");const t=function(){let e=document.getElementsByClassName("tasks");if(null!=e)if("All"==this.innerHTML){for(let t=e.length-1;t>=0;t--)e[t].parentNode.removeChild(e[t]);l.forEach((e=>s(e)))}else{const t=l.filter((e=>e.category==this.innerHTML));for(let t=e.length-1;t>=0;t--)e[t].parentNode.removeChild(e[t]);t.forEach((e=>s(e)))}},i=function(){n=this.innerHTML.toLowerCase()};e.forEach((e=>e.addEventListener("click",t))),e.forEach((e=>e.addEventListener("click",i))),e.forEach((e=>e.addEventListener("click",o())))}(),function(){let e=t[t.length-1];n=e.title.toLowerCase()}()}(new e(i.value))}i.value=""}))})();