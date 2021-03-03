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
    const menuTitleDiv= document.createElement("DIV");
    menuTitleDiv.setAttribute("id", "menuTitleDiv");
    //append the header image
   container.appendChild(headerImg.pic());
  
   //add the actual button to the button div
   menuTitleDiv.appendChild(menu.menuTitle());
  //append the tabs divs into container
   container.appendChild(divTabs());
    //append the button div so that you can center it via flexbox
    container.appendChild(menuTitleDiv);

})();