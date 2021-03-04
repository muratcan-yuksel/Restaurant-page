import { divTabs, headerImg, menu, menuImages } from "./layout";

(function getContent() {
  const container = document.querySelector("#content");
  //create a div for the "notre menu" button
  const menuTitleDiv = document.createElement("DIV");
  menuTitleDiv.setAttribute("id", "menuTitleDiv");
  //append the header image
  container.appendChild(headerImg.pic());

  //add the menu from layout.js to the menu Div created above
  menuTitleDiv.appendChild(menu.menuTitle());
  //append the tabs divs into container
  container.appendChild(divTabs());
  //append the menu title div so that you can center it via flexbox
  container.appendChild(menuTitleDiv);
  container.appendChild(menuImages.menuDiv());
})();
