import {divTabs,headerImg} from './layout';

// function foo () {
//     const element= document.createElement('div');
//     element.innerHTML= functionTwo();
//     return element;
// }
// document.body.appendChild(foo());
//get the contents div and append other things into it
(function getContent (){
    const container= document.querySelector("#content");
   // container.innerHTML="deneme"; WORKS!
   container.appendChild(headerImg.pic());
   console.log(divTabs());
   container.appendChild(divTabs());

})();