(()=>{"use strict";const e=()=>{const e=document.createElement("LABEL");e.textContent="One";const t=document.createElement("INPUT");return t.setAttribute("type","radio"),t.setAttribute("id","tab2-1"),t.setAttribute("name","tabs-two"),t.checked="checked",e.setAttribute("for","#tab2-1"),e.setAttribute("id","label1"),e.appendChild(t),e},t=()=>{const e=document.createElement("LABEL");e.textContent="Two";const t=document.createElement("INPUT");return t.setAttribute("type","radio"),t.setAttribute("id","tab2-2"),t.setAttribute("name","tabs-two"),e.setAttribute("for","#tab2-2"),e.appendChild(t),e},n=()=>{const e=document.createElement("P");e.textContent="Une cuisine qui nous fait voyager du moyen-orient au plus large bassin méditerranéen.Tout cela, dans une ambiance conviale, situé dans un quartier vivant et multi-culturel. De la street food, de qualité, sur place et à emporter.";const t=document.createElement("P");t.textContent="On y mange quoi? Des mezzes (houmous au tahin maison, des boreks à la feta aop, des falafels aux fèves), des salades, des pitas, bref du bon et du faitmaison. Une cuisine sensée qui laisse la part belle aux légumineuses et aux légumes frais, dans le respect de la saisonnalité et des saveurs. Des ingrédients secrets qui revisitent les grand classiques de la cuisine méditerranéenne.";const n=document.createElement("P");n.textContent="Le plus important pour nous? Rendre accessible une cuisinesaine, gourmande et de qualité. Tout le monde a le droit de manger du BON . Nous travaillons avec des fournisseurs et des producteurs exigeants qui nous offrent la possibilité de sublimer des ingrédients de première qualité. ";const s=document.createElement("H4");s.appendChild(e),s.appendChild(t),s.appendChild(n);const a=document.createElement("div");return a.appendChild(s),a},s=()=>{const s=document.createElement("div");s.setAttribute("class","tabs");const a=document.createElement("div");a.setAttribute("class","tab-2"),s.appendChild(a),a.appendChild(e()),a.appendChild(n());const i=document.createElement("div");return i.setAttribute("class","tab-2"),s.appendChild(i),i.appendChild(t()),i.appendChild(n()),s};!function(){const e=document.querySelector("#content");console.log(s()),e.appendChild(s())}()})();