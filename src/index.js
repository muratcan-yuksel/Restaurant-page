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
   //create a div for the "notre menu" button
    const buttonDiv= document.createElement("DIV");
    buttonDiv.setAttribute("id", "buttonDiv");
    //append the header image
   container.appendChild(headerImg.pic());
   //append the button div so that you can center it via flexbox
   container.appendChild(buttonDiv);
   //add the actual button to the button div
   buttonDiv.appendChild(menu.menuButton());
  //append the tabs divs into container
   container.appendChild(divTabs());

})();