(()=>{"use strict";function e(e){this.title=e}!function(){const e=document.querySelector("#main"),t=document.createElement("header");t.classList.add("header");const n=document.createElement("h1");n.id="title",n.innerHTML="TO DO's list from Andy",t.appendChild(n),e.appendChild(t);const d=document.createElement("aside"),c=document.createElement("h3");c.innerHTML="Categories";const o=document.createElement("button");o.id="masterCategory",o.innerHTML="All";const a=document.createElement("button");a.type="button",a.id="showCategoryForm",a.innerHTML="New Category";const l=document.createElement("form");l.id="categoryForm";const i=document.createElement("input");i.id="categoryName",i.type="text";const s=document.createElement("button");s.id="addCategory",s.type="button",s.innerHTML="Add";const r=document.createElement("div");r.id="categoryList",l.appendChild(i),l.appendChild(s),d.appendChild(c),d.appendChild(a),d.appendChild(l),d.appendChild(r),r.appendChild(o),e.appendChild(d);const u=document.createElement("div");u.classList.add("content");const m=document.createElement("div"),p=document.createElement("button");p.innerHTML="NEW",p.id="newTaskButton",p.type="button";const y=document.createElement("form");y.id="newTaskForm";const h=document.createElement("input");h.type="text",h.id="taskTitle",h.name="taskTitle",h.placeholder="title";const C=document.createElement("input");C.type="text",C.id="taskDescription",C.name="taskDescription",C.placeholder="description";const L=document.createElement("input");L.type="date",L.id="taskDate",L.name="taskDate";const E=document.createElement("button");E.id="addToList",E.type="button",E.classList.add("buttons"),E.name="addToList",E.innerHTML="ADD";const k=document.createElement("button");k.id="clear",k.type="button",k.classList.add("buttons"),k.name="clear",k.innerHTML="CLEAR",y.appendChild(h),y.appendChild(C),y.appendChild(L),y.appendChild(E),y.appendChild(k),m.appendChild(p),m.appendChild(y),u.appendChild(m);const T=document.createElement("div");T.id="taskList",u.appendChild(T),e.appendChild(u)}();const t=[];let n;const d=[];function c(e,t,n,d){this.title=e,this.description=t,this.schedule=n,this.category=d}document.querySelector("#newTaskButton").addEventListener("click",(function(){document.querySelector("#newTaskForm").style.display="block"})),document.querySelector("#showCategoryForm").addEventListener("click",(function(){document.querySelector("#categoryForm").style.display="block"})),function(){document.querySelector("#addToList").addEventListener("click",(function(){if(""!=e.value&&""!=o.value){let l=new c(e.value,t.value,o.value,n);d.push(l),a(l),console.log(d)}}));let e=document.querySelector("#taskTitle"),t=document.querySelector("#taskDescription"),o=document.querySelector("#taskDate");let a=function(e){const t=document.querySelector("#taskList");let n=document.createElement("div");n.classList.add("tasks");let d=document.createElement("p");d.classList.add("pOfTask"),d.innerHTML=e.title;let c=document.createElement("p");c.classList.add("pOfTask"),c.innerHTML=e.description;let o=document.createElement("p");o.classList.add("pOfTask"),o.innerHTML=e.schedule,n.appendChild(d),n.appendChild(c),n.appendChild(o),t.appendChild(n)}}(),document.querySelector("#clear").addEventListener("click",(function(){let e=document.querySelector("#taskTitle"),t=document.querySelector("#taskDescription"),n=document.querySelector("#taskDate");e.value="",t.value="",n.value=""})),function(){document.querySelector("#addCategory").addEventListener("click",(function(){let d=document.querySelector("#categoryName");if(""!=d.value){let c=new e(d.value);t.push(c),n(c),function(){document.querySelector("#taskList");let e=document.getElementsByClassName("tasks");if(null!=e)for(let t=e.length-1;t>=0;t--)e[t].parentNode.removeChild(e[t])}(),t[t.length-1].title.toLowerCase()}}));const n=function(e){const t=document.querySelector("#categoryList");let n=document.createElement("button");n.classList.add("pOfCategory"),n.innerHTML=e.title,t.appendChild(n)}}()})();