const labels = (() => {
  const labelOne = () => {
    //create a label for the radio element
    const label1 = document.createElement("LABEL");
    //the text content of the label
    label1.textContent = "Le Shabada, c'est quoi?";
    //set the attribute and append it
    label1.setAttribute("for", "tab2-1");
    label1.setAttribute("id", "label1");

    return label1;
  };

  const labelTwo = () => {
    //create a label for the radio element
    const label2 = document.createElement("LABEL");
    //the text content of the label
    label2.textContent = "Il est où le Shabada?";
    //set the attribute and append it
    label2.setAttribute("for", "tab2-2");
    label2.setAttribute("id", "label2");

    return label2;
  };

  const radioOne = () => {
    //create the radio element
    const radio1 = document.createElement("INPUT");
    radio1.setAttribute("type", "radio");
    radio1.setAttribute("id", "tab2-1");
    radio1.setAttribute("name", "tabs-two");
    radio1.checked = "checked";

    return radio1;
  };

  const radioTwo = () => {
    //create the radio element
    const radio2 = document.createElement("INPUT");
    radio2.setAttribute("type", "radio");
    radio2.setAttribute("id", "tab2-2");
    radio2.setAttribute("name", "tabs-two");

    return radio2;
  };

  return { labelOne, labelTwo, radioOne, radioTwo };
})();

const firstPageContent = (() => {
  //these will be appended to the first tab-2
  const paragraphs = () => {
    //add paragraphs
    const para1 = document.createElement("P");
    para1.textContent =
      "Une cuisine qui nous fait voyager du moyen-orient au plus large bassin méditerranéen.Tout cela, dans une ambiance conviale, situé dans un quartier vivant et multi-culturel. De la street food, de qualité, sur place et à emporter.";
    const para2 = document.createElement("P");
    para2.textContent =
      "On y mange quoi? Des mezzes (houmous au tahin maison, des boreks à la feta aop, des falafels aux fèves), des salades, des pitas, bref du bon et du faitmaison. Une cuisine sensée qui laisse la part belle aux légumineuses et aux légumes frais, dans le respect de la saisonnalité et des saveurs. Des ingrédients secrets qui revisitent les grand classiques de la cuisine méditerranéenne.";
    const para3 = document.createElement("P");
    para3.textContent =
      "Le plus important pour nous? Rendre accessible une cuisinesaine, gourmande et de qualité. Tout le monde a le droit de manger du BON . Nous travaillons avec des fournisseurs et des producteurs exigeants qui nous offrent la possibilité de sublimer des ingrédients de première qualité. ";

    //create an empty div and append the header into it
    const div = document.createElement("div");
    div.appendChild(para1);
    div.appendChild(para2);
    div.appendChild(para3);
    return div;
  };

  return { paragraphs };
})();

const secondPageContent = (() => {
  const contact = () => {
    //add paragraphs
    const para1 = document.createElement("P");
    para1.textContent = "66 cours Victor Hugo 33000, Bordeaux, France";
    const para2 = document.createElement("P");
    para2.textContent = "http://www.instagram.com/shabada_restaurant/";
    const para3 = document.createElement("P");
    para3.textContent = "+33 6 30 83 57 85";
    const para4 = document.createElement("P");
    para4.textContent = "www.instagram.com/shabada_restaurant";

    //create an empty div and append the header into it
    const div = document.createElement("div");
    div.appendChild(para1);
    div.appendChild(para2);
    div.appendChild(para3);
    div.appendChild(para4);
    return div;
  };
  return { contact };
})();

const headerImg = (() => {
  const pic = () => {
    const header = document.createElement("IMG");
    header.setAttribute("src", "pics/header.png");
    header.setAttribute("id", "header");
    return header;
  };
  return { pic };
})();

const menu = (() => {
  const menuTitle = () => {
    const menu = document.createElement("H4");
    menu.textContent = "Notre Menu";

    return menu;
  };
  return { menuTitle };
})();

const menuImages = (() => {
  const menuDiv = () => {
    //add pictures
    const falafel = document.createElement("IMG");
    falafel.setAttribute("src", "pics/falafel.jpg");
    falafel.setAttribute("class", "images");
    //create a figcaption for each and every one
    //manually
    //repeating yourself
    //figcatption doesn't show up anyway
    const falafelFig = document.createElement("FIGCAPTION");
    const falafelText = document.createTextNode(
      "Passion falafels maison aux fèves"
    );
    //append it
    falafelFig.appendChild(falafelText);
    falafel.appendChild(falafelFig);

    const pita = document.createElement("IMG");
    pita.setAttribute("src", "pics/pita.jpg");
    pita.setAttribute("class", "images");

    const borek = document.createElement("IMG");
    borek.setAttribute("src", "pics/borek.jpg");
    borek.setAttribute("class", "images");

    const veggie = document.createElement("IMG");
    veggie.setAttribute("src", "pics/veggie.jpg");
    veggie.setAttribute("class", "images");

    const dessert = document.createElement("IMG");
    dessert.setAttribute("src", "pics/dessert.jpg");
    dessert.setAttribute("class", "images");

    const cocktail = document.createElement("IMG");
    cocktail.setAttribute("src", "pics/cocktail.jpg");
    cocktail.setAttribute("class", "images");

    //create an empty div and append the images into it
    const div = document.createElement("div");
    div.setAttribute("class", "imagesDiv");
    div.appendChild(falafel);
    div.appendChild(pita);
    div.appendChild(borek);
    div.appendChild(veggie);
    div.appendChild(dessert);
    div.appendChild(cocktail);

    return div;
  };
  return { menuDiv };
})();

const divTabs = () => {
  const tabs = document.createElement("div");
  tabs.setAttribute("class", "tabs");
  //get the first tab-2
  const firstTab2 = document.createElement("div");
  firstTab2.setAttribute("class", "tab-2");
  //append this first tab2 to the tabs
  tabs.appendChild(firstTab2);
  //append the radio and the label separately
  firstTab2.appendChild(labels.labelOne());
  firstTab2.appendChild(labels.radioOne());
  //append the paragraphs (content)
  firstTab2.appendChild(firstPageContent.paragraphs());

  //get the 2nd tab-2
  const secondTab2 = document.createElement("div");
  secondTab2.setAttribute("class", "tab-2");
  //append this tab to the container tab (for tabs)
  tabs.appendChild(secondTab2);
  //append the radio and the label separately
  secondTab2.appendChild(labels.labelTwo());
  secondTab2.appendChild(labels.radioTwo());
  //append the paragraphs (content)
  //this part will be replaced by flexbox anyway
  secondTab2.appendChild(secondPageContent.contact());
  return tabs;
};

export { divTabs, headerImg, menu, menuImages };
