(()=>{"use strict";const t=()=>{const t=document.createElement("LABEL");t.textContent="One";const e=document.createElement("INPUT");return e.setAttribute("type","radio"),e.checked="checked",t.setAttribute("for",e),t.appendChild(e),t},e=()=>{const e=document.createElement("div");e.setAttribute("class","tabs");const n=document.createElement("div");n.setAttribute("class","tab-2"),n.appendChild(t()),e.appendChild(n);const c=document.createElement("div");return c.setAttribute("class","tab-2"),e.appendChild(c),e};!function(){const t=document.querySelector("#content");console.log(e()),t.appendChild(e())}()})();