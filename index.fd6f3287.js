var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.addPendiente=function(e){""==e||" "==e?alert("No es posible registrar una tarea pendiente sin descripción"):e.length>50?alert("No es posible registrar una tarea con una descripcion de mas de 50 caracteres"):n.push(e)},e.showPendientes=function(e){var t="";t+="<h3>TODOs("+n.length+")</h3>",n.forEach((function(e){t+="<p>"+e+"</p>"})),e.innerHTML=t};var n=[];var t=document.querySelector("#tareaPendiente"),r=document.querySelector("#pendientes-form"),a=document.querySelector("#ListaPendientes");r.addEventListener("submit",(function(n){n.preventDefault();var r=t.value;(0,e.addPendiente)(r),(0,e.showPendientes)(a)})),document.onload=void(0,e.showPendientes)(a);
//# sourceMappingURL=index.fd6f3287.js.map