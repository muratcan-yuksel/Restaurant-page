// (function foo () {
//     console.log("fooo");
//     const para = document.createElement("P");
//     para.textContent="paragraph53";
//     document.body.appendChild(para);

// })();

// export default foo




// (function foo () {
//     const container= document.getElementById("content");
//     const para = document.createElement("P");
//     para.textContent="hoofs";
//     container.appendChild(para);

//     const pic = document.createElement("IMG");
//    pic.setAttribute("src", "/TOP/Restaurant-page/pics/header.png");
//    pic.setAttribute("id", "header");
//     // document.body.appendChild(pic);
//     return pic;

// })();

// export  foo
// const functionOne = () => 'ONE'
// const functionTwo = () => 'TWO'

// export {
//   functionOne,
//   functionTwo
// }

const labels = (() => {

    const labelOne =()=>{
        //create a label for the radio element
        const label1= document.createElement("LABEL");
        //the text content of the label
        label1.textContent="One";
        //set the attribute and append it
        label1.setAttribute("for", "tab2-1");
        label1.setAttribute("id", "label1");
        

        return label1;
    } 


    const labelTwo=()=>{
        //create a label for the radio element
        const label2= document.createElement("LABEL");
        //the text content of the label
        label2.textContent="Two";
       //set the attribute and append it
        label2.setAttribute("for", "tab2-2");
       
      
        return label2;

    }

    const radioOne=()=>{
        //create the radio element
        const radio1= document.createElement("INPUT");
        radio1.setAttribute("type", "radio");
        radio1.setAttribute("id", "tab2-1");
        radio1.setAttribute("name", "tabs-two");
        radio1.checked="checked";

        return radio1;
  }

  const radioTwo=()=>{
     //create the radio element
     const radio2= document.createElement("INPUT");
     radio2.setAttribute("type", "radio");
     radio2.setAttribute("id", "tab2-2");
     radio2.setAttribute("name", "tabs-two");
     

    return radio2;
}
  
return {labelOne,labelTwo,radioOne,radioTwo}
})();

const firstPageContent = (()=>{
    //these will be appended to the first tab-2
    const paragraphs = () =>{
        //add paragraphs
        const para1= document.createElement("P");
            para1.textContent= "Une cuisine qui nous fait voyager du moyen-orient au plus large bassin méditerranéen.Tout cela, dans une ambiance conviale, situé dans un quartier vivant et multi-culturel. De la street food, de qualité, sur place et à emporter."
        const para2= document.createElement("P");
            para2.textContent="On y mange quoi? Des mezzes (houmous au tahin maison, des boreks à la feta aop, des falafels aux fèves), des salades, des pitas, bref du bon et du faitmaison. Une cuisine sensée qui laisse la part belle aux légumineuses et aux légumes frais, dans le respect de la saisonnalité et des saveurs. Des ingrédients secrets qui revisitent les grand classiques de la cuisine méditerranéenne."
        const para3= document.createElement("P");
            para3.textContent="Le plus important pour nous? Rendre accessible une cuisinesaine, gourmande et de qualité. Tout le monde a le droit de manger du BON . Nous travaillons avec des fournisseurs et des producteurs exigeants qui nous offrent la possibilité de sublimer des ingrédients de première qualité. "
        // create header and append the paragraphs into it
        const header4= document.createElement("H4");
        header4.textContent="Tab one";
        //create an empty div and append the header into it
            const div = document.createElement("div");
            div.appendChild(header4);
            div.appendChild(para1);
            div.appendChild(para2);
            div.appendChild(para3);
            return div;
        }

        return {paragraphs}
})();

const headerImg=(()=>{
    const pic =()=>{
        const header= document.createElement("IMG");
        header.setAttribute("src", "/TOP/Restaurant-page/pics/header.png");
        header.setAttribute("id", "header");
        return header
    }
    return {pic}
})();

const menu=(()=>{
    const menuDiv = ()=>{
        const falafel= document.createElement("IMG");
        falafel.setAttribute("src", "/TOP/Restaurant-page/pics/falafel.jpg");
        falafel.setAttribute("class", "images");



         // create header and append the paragraphs into it
         const header4= document.createElement("H4");
         header4.textContent="Notre menu";
         //create an empty div and append the header into it
             const div = document.createElement("div");
             div.appendChild(header4);
             div.appendChild(falafel);

             return div;
    }
    return {menuDiv}
})();


const divTabs = () => {
    const tabs= document.createElement("div");
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
    const secondTab2= document.createElement("div");
    secondTab2.setAttribute("class", "tab-2");
    //append this tab to the container tab (for tabs)
    tabs.appendChild(secondTab2);
  //append the radio and the label separately
    secondTab2.appendChild(labels.labelTwo());
    secondTab2.appendChild(labels.radioTwo());
    //append the paragraphs (content)
    //this part will be replaced by flexbox anyway
    secondTab2.appendChild(menu.menuDiv());
    return tabs;
}



    export {divTabs,headerImg}