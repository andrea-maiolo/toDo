(()=>{"use strict";!function(){const e=document.querySelector("#main"),t=document.createElement("header");t.classList.add("header");const n=document.createElement("h1");n.id="title",n.innerHTML="TO DO's list from Andy",t.appendChild(n),e.appendChild(t);const d=document.createElement("aside"),c=document.createElement("h3");c.innerHTML="Categories";const a=document.createElement("button");a.type="button",a.id="showCategoryForm",a.innerHTML="New Category";const o=document.createElement("form");o.id="categoryForm";const i=document.createElement("input");i.id="categoryName",i.type="text";const l=document.createElement("button");l.id="addCategory",l.type="button",l.innerHTML="Add",o.appendChild(i),o.appendChild(l),d.appendChild(c),d.appendChild(a),d.appendChild(o),e.appendChild(d);const s=document.createElement("div");s.classList.add("content");const r=document.createElement("div"),u=document.createElement("button");u.innerHTML="NEW",u.id="newTaskButton",u.type="button";const p=document.createElement("form");p.id="newTaskForm";const m=document.createElement("input");m.type="text",m.id="taskTitle",m.name="taskTitle",m.placeholder="title";const h=document.createElement("input");h.type="text",h.id="taskDescription",h.name="taskDescription",h.placeholder="description";const y=document.createElement("input");y.type="date",y.id="taskDate",y.name="taskDate";const k=document.createElement("button");k.id="addToList",k.type="button",k.classList.add("buttons"),k.name="addToList",k.innerHTML="ADD";const C=document.createElement("button");C.id="clear",C.type="button",C.classList.add("buttons"),C.name="clear",C.innerHTML="CLEAR",p.appendChild(m),p.appendChild(h),p.appendChild(y),p.appendChild(k),p.appendChild(C),r.appendChild(u),r.appendChild(p),s.appendChild(r);const E=document.createElement("div");E.id="taskList",s.appendChild(E),e.appendChild(s)}();let e=[];function t(e,t,n){this.title=e,this.description=t,this.schedule=n}document.querySelector("#newTaskButton").addEventListener("click",(function(){document.querySelector("#newTaskForm").style.display="block"})),document.querySelector("#showCategoryForm").addEventListener("click",(function(){document.querySelector("#categoryForm").style.display="block"})),function(){document.querySelector("#addToList").addEventListener("click",(function(){if(""!=n.value&&""!=d.value&&""!=c.value){let o=new t(n.value,d.value,c.value);e.push(o),a(o)}}));let n=document.querySelector("#taskTitle"),d=document.querySelector("#taskDescription"),c=document.querySelector("#taskDate");let a=function(e){const t=document.querySelector("#taskList");let n=document.createElement("div");n.classList.add("tasks");let d=document.createElement("p");d.classList.add("pOfTask"),d.innerHTML=e.title;let c=document.createElement("p");c.classList.add("pOfTask"),c.innerHTML=e.description;let a=document.createElement("p");a.classList.add("pOfTask"),a.innerHTML=e.schedule,n.appendChild(d),n.appendChild(c),n.appendChild(a),t.appendChild(n)}}(),document.querySelector("#clear").addEventListener("click",(function(){let e=document.querySelector("#taskTitle"),t=document.querySelector("#taskDescription"),n=document.querySelector("#taskDate");e.value="",t.value="",n.value=""}))})();