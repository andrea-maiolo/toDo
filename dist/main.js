(()=>{"use strict";function e(e){this.title=e}const t=[];let l;const n=[];function i(e,t,l,n,i){this.title=e,this.description=t,this.schedule=l,this.category=n,this.priority=i}const c=function(){let e=document.querySelector("#newTaskForm"),t=document.querySelector("#addPriority"),l=document.querySelectorAll(".priorityForm");!function(e,t){let l=e.elements.priority;for(let e=0;e<l.length;e++)l[e].checked&&(l[e].checked=!1)}(e),t.style.display="block",l.forEach((e=>e.style.display="none"))},o=function(e){n.push(e),d(e),function(){document.querySelector("#taskList");let e=document.querySelectorAll(".tasks");e=Array.from(e);let t=[];e.forEach((e=>t.push(e.childNodes[2].innerHTML)));let l=t.sort(((e,t)=>e.date>t.date?1:-1));console.table(l)}()},d=function(e){const t=document.querySelector("#taskList");let l=document.createElement("div");l.classList.add("tasks");let n=document.createElement("p");n.classList.add("pOfTask"),n.innerHTML=e.title;let i=document.createElement("div");i.classList.add("details");let c=document.createElement("p");c.classList.add("pOfTask"),c.innerHTML=e.description;let o=document.createElement("p");o.classList.add("pOfTask"),o.innerHTML=e.category,i.appendChild(c),i.appendChild(o),i.style.display="none";let d=document.createElement("p");d.classList.add("pOfTask"),d.classList.add("date"),d.innerHTML=e.schedule;let r=document.createElement("button");r.classList.add("expandeDescription");let u=document.createElement("i");u.classList.add("glyphicon"),u.classList.add("glyphicon-resize-full"),r.appendChild(u),r.addEventListener("click",(()=>{"block"==i.style.display?(i.style.display="none",u.classList.remove("glyphicon-resize-small"),u.classList.add("glyphicon-resize-full")):"none"==i.style.display&&(i.style.display="block",u.classList.remove("glyphicon-resize-full"),u.classList.add("glyphicon-resize-small"))}));let y=document.createElement("button");y.classList.add("deleteTask");let p=document.createElement("i");p.classList.add("glyphicon"),p.classList.add("glyphicon-trash"),y.appendChild(p),y.addEventListener("click",(()=>{t.removeChild(l),a(e)}));let m=document.createElement("button");m.classList.add("modifyTask");let h=document.createElement("i");h.classList.add("glyphicon"),h.classList.add("glyphicon-edit"),m.appendChild(h),m.addEventListener("click",(()=>{let t=document.createElement("form");t.name="modificationForm";let a=document.createElement("input");a.id="modifyTitle";let r=document.createElement("input");r.id="modifyDescription";let u=document.createElement("input");u.id="modifyCategory";let y=document.createElement("input");y.id="modifySchedule",a.type="text",a.setAttribute("maxlength",20),r.type="text",r.setAttribute("maxlength",140),u.type="text",u.setAttribute("maxlength",20),y.type="date",a.value=n.innerHTML,r.value=c.innerHTML,u.value=o.innerHTML,y.value=d.innerHTML,t.appendChild(a),t.appendChild(r),t.appendChild(u),t.appendChild(y);let p=document.createElement("button");p.innerHTML="confirm",p.type="button",t.appendChild(p);let m=document.createElement("button");m.innerHTML="discard",m.type="button",t.appendChild(m),n.style.display="none",i.style.display="none",d.style.display="none",l.appendChild(t);let h=document.querySelector("#modifyTitle"),f=document.querySelector("#modifyDescription"),L=document.querySelector("#modifyCategory"),k=document.querySelector("#modifySchedule");p.addEventListener("click",(()=>{""!=h.value&&""!=k&&(n.innerHTML=h.value,d.innerHTML=k.value,c.innerHTML=f.value,""!=L.value?o.innerHTML=L.value:alert("Please enter a category, use 'All' as default"),l.removeChild(t),n.style.display="block",d.style.display="block"),s(l,e)})),m.addEventListener("click",(()=>{l.removeChild(t),n.style.display="block",d.style.display="block"}))}));let f=document.createElement("input");f.type="checkbox",f.id="done",f.addEventListener("click",(e=>{let t=e.path[1];.5!=t.style.opacity?t.style.opacity=.5:t.style.opacity=1})),function(e){switch(e){case"medium":l.style.backgroundColor="orange";break;case"low":l.style.backgroundColor="yellow";break;case"high":l.style.backgroundColor="red"}}(e.priority),l.appendChild(n),l.appendChild(i),l.appendChild(d),l.appendChild(r),l.appendChild(m),l.appendChild(y),l.appendChild(f),t.appendChild(l)},a=function(e){let t=n.indexOf(e);n.splice(t,1)},s=function(l,i){let c=n.indexOf(i),o=n[c],d=l.childNodes[0].innerHTML,a=l.childNodes[2].innerHTML,s=l.childNodes[1].childNodes[0].innerHTML,u=l.childNodes[1].childNodes[1].innerHTML;if(d!=o.title&&(o.title=d),a!=o.schedule&&(o.schedule=a),s!=o.description&&(o.description=s),u!=o.category){o.category=u;for(let l=0;l<=t.length;l++){if(o.category==t[l].title)return;{let l=new e(o.category);t.push(l),r(l)}}}},r=function(e){const t=document.querySelector("#categoryList");let l=document.createElement("button");l.classList.add("pOfCategory"),l.innerHTML=e.title,t.appendChild(l)},u=function(){let e=document.getElementsByClassName("tasks");if(null!=e)for(let t=e.length-1;t>=0;t--)e[t].parentNode.removeChild(e[t])};!function(){const e=document.querySelector("#newTaskButton");e.addEventListener("click",(function(){document.querySelector("#newTaskForm").style.display="block",e.style.display="none"}))}(),function(){const e=document.querySelector("#addPriority");e.addEventListener("click",(function(){document.querySelectorAll(".priorityForm").forEach((e=>e.style.display="block")),e.style.display="none"}))}(),function(){const e=document.querySelector("#showCategoryForm");e.addEventListener("click",(function(){document.querySelector("#categoryForm").style.display="block",e.style.display="none"}))}(),function(){document.querySelector("#addToList").addEventListener("click",(function(){if(""!=e.value&&""!=n.value){let c=function(){let e;return function(t,l){let n=document.querySelector("#newTaskForm").elements.priority;for(var i=0;i<n.length;i++)if(n[i].checked){e=n[i].value;break}}(),e}();if(null==l&&null==c){let l=new i(e.value,t.value,n.value,"All","default");o(l)}else if(null==l&&null!=c){let l=new i(e.value,t.value,n.value,"All",c);o(l)}else if(null!=l&&null==c){let c=new i(e.value,t.value,n.value,l,"default");o(c)}else if(null!=l&&null!=c){let d=new i(e.value,t.value,n.value,l,c);o(d)}}c()}));let e=document.querySelector("#taskTitle"),t=document.querySelector("#taskDescription"),n=document.querySelector("#taskDate")}(),function(){const e=document.querySelector("#clear");e.addEventListener("click",(function(){let e=document.querySelector("#taskTitle"),t=document.querySelector("#taskDescription"),l=document.querySelector("#taskDate");e.value="",t.value="",l.value=""})),e.addEventListener("click",c)}(),document.querySelector("#addCategory").addEventListener("click",(function(){let i=document.querySelector("#categoryName");if(""!=i.value){!function(e){t.push(e),r(e),u(),function(){let e=document.querySelectorAll(".pOfCategory");const t=function(){let e=document.getElementsByClassName("tasks");if(null!=e)if("All"==this.innerHTML){for(let t=e.length-1;t>=0;t--)e[t].parentNode.removeChild(e[t]);n.forEach((e=>d(e)))}else{const t=n.filter((e=>e.category==this.innerHTML));for(let t=e.length-1;t>=0;t--)e[t].parentNode.removeChild(e[t]);t.forEach((e=>d(e)))}},i=function(){l=this.innerHTML.toLowerCase()};e.forEach((e=>e.addEventListener("click",t))),e.forEach((e=>e.addEventListener("click",i))),e.forEach((e=>e.addEventListener("click",c())))}(),function(){let e=t[t.length-1];l=e.title.toLowerCase()}()}(new e(i.value))}i.value=""}))})();