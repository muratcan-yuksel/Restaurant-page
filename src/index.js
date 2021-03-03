import {divTabs,headerImg, menu} from './layout';

// function foo () {
//     const element= document.createElement('div');
//     element.innerHTML= functionTwo();
//     return element;
// }
// document.body.appendChild(foo());
//get the contents div and append other things into it
(function getContent (){
    const container= document.querySelector("#content");
   
    const buttonDiv= document.createElement("DIV");
    buttonDiv.setAttribute("id", "buttonDiv");
    

   container.appendChild(headerImg.pic());
   container.appendChild(buttonDiv);
   buttonDiv.appendChild(menu.menuButton());
   console.log(divTabs());
   container.appendChild(divTabs());

})();