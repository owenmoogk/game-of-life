(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),i=n(5),c=n.n(i),l=n(6),s=n(4),a=n(0);function d(e){return Object(a.jsx)("div",{id:"row"+e.row+"col"+e.col,className:"box",row:e.row,col:e.col,style:{border:"1px solid black",height:(e.boxSize-2).toString()+"px",width:(e.boxSize-2).toString()+"px"}})}n(12);function u(){var e,t=null;function n(e){var t=Object(s.a)(e,2),n=t[0],o=t[1];return document.getElementById("row"+n+"col"+o)}function o(){if(e)!function(){clearInterval(t),e=!1;var n=document.getElementById("goButton");n.innerHTML="Go",n.style.color="",document.getElementById("simSpeed").disabled=!1}();else{var n=document.getElementById("goButton");n.innerHTML="Stop",n.style.color="Red",document.getElementById("simSpeed").disabled=!0,e=!0,t=setInterval(r,p),console.log(t)}}function r(){console.log("HERE");for(var e=Array.from(Array(h),(function(e){return Array(m).fill(0)})),t=0;t<h;t++)for(var o=0;o<m;o++){var r,c=n([t,o]),s=i(c),a=0,d=Object(l.a)(s);try{for(d.s();!(r=d.n()).done;){r.value.classList.contains("alive")&&(a+=1)}}catch(b){d.e(b)}finally{d.f()}c.classList.contains("alive")?a<=1||a>=4||(e[t][o]=1):3==a&&(e[t][o]=1)}for(var u=0;u<h;u++)for(var f=0;f<m;f++){var p=n([u,f]);1==e[u][f]?p.classList.add("alive"):p.classList.remove("alive")}}function i(e){var t=function(e){var t=e.getAttribute("row"),n=e.getAttribute("col");return[t=parseInt(t),n=parseInt(n)]}(e),o=Object(s.a)(t,2),r=o[0],i=o[1],c=[];return c.push(n([r+1,i])),c.push(n([r-1,i])),c.push(n([r,i+1])),c.push(n([r,i-1])),c.push(n([r+1,i+1])),c.push(n([r+1,i-1])),c.push(n([r-1,i+1])),c.push(n([r-1,i-1])),c=c.filter((function(e){return e}))}function c(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(0===window.event.buttons&&!n||e)f=null;else{var o=Math.floor((t.clientX-(window.innerWidth-document.getElementById("grid").offsetWidth)/2)/document.getElementsByClassName("row")[0].childNodes[0].offsetWidth),r=Math.floor((t.clientY-90)/u),i=document.getElementById("row"+r+"col"+o);if(!i)return;if(f)c=f[0],l=f[1];else var c=r,l=o;do{r>c?c+=1:r<c&&(c-=1),o>l?l+=1:o<l&&(l-=1),1===window.event.buttons?document.getElementById("row"+c+"col"+l).classList.add("alive"):2===window.event.buttons&&document.getElementById("row"+c+"col"+l).classList.remove("alive")}while(c!==r||l!==o);f=[r,o]}}window.addEventListener("contextmenu",(function(e){return e.preventDefault()})),window.addEventListener("resize",(function(e){return document.getElementById("resizeAlert").style.display="block"}));var u=20,f=null,h=Math.floor((window.innerHeight-90)/u),m=Math.floor(window.innerWidth/u),p=100;return Object(a.jsxs)("div",{className:"App",style:{userSelect:"none"},children:[Object(a.jsxs)("div",{id:"header",children:[Object(a.jsx)("p",{className:"button",onClick:function(){return o()},id:"goButton",children:"Go"}),Object(a.jsx)("p",{className:"button",onClick:function(){e||r()},id:"stepButton",children:"Step"}),Object(a.jsx)("p",{className:"button",onClick:function(){return function(){if(!e)for(var t=0;t<h;t++)for(var o=0;o<m;o++)n([t,o]).classList.remove("alive")}()},id:"clearButton",children:"Clear"}),Object(a.jsx)("p",{children:"Sim Speed (ms):"}),Object(a.jsx)("input",{id:"simSpeed",type:"number",placeholder:"100",onChange:function(e){return p=e.target.value}})]}),Object(a.jsx)("div",{id:"grid",onMouseMove:function(e){return c(e)},onMouseDown:function(e){return c(e,!0)},children:function(){for(var e=[],t=0;t<h;t++){e.push([]);for(var n=0;n<m;n++)e[t].push(Object(a.jsx)(d,{row:t,col:n,boxSize:u}))}return e}().map((function(e,t){return Object(a.jsx)("div",{className:"row",id:t,children:e.map((function(e){return e}))})}))}),Object(a.jsxs)("span",{id:"resizeAlert",onClick:function(){return window.location.reload()},children:["Looks like you resized your window. ",Object(a.jsx)("br",{})," Click here to reset the grid"]}),Object(a.jsx)("p",{id:"myName",children:Object(a.jsx)("a",{href:"https://owenmoogk.github.io",target:"_blank",rel:"noreferrer",children:"Owen Moogk"})}),Object(a.jsx)("p",{id:"infoButton",children:Object(a.jsx)("a",{href:"https://owenmoogk.github.io/projects/game-of-life",target:"_blank",rel:"noreferrer",children:"About This Project"})})]})}c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.8245c501.chunk.js.map