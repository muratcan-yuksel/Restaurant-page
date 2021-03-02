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
        const label1= document.createElement("LABEL");
        label1.textContent="One";

        const radio1= document.createElement("INPUT");
        radio1.setAttribute("type", "radio");
        radio1.checked="checked";
    
        label1.setAttribute("for", radio1);
        label1.appendChild(radio1);


        return radio1,label1;
    } 

    // const radioOne=()=>{
    //    const radio1= document.createElement("INPUT");
    //     radio1.setAttribute("type", "radio");
    //     radio1.checked="checked";
    
    //     label1.setAttribute("for", radio1);
    //     label1.appendChild(radio1);
    //     return radio1;
    // } 

 
    const para = () => {
       const pa= document.createElement("P");
        pa.textContent="paragraphy";
        return pa;
    } 
  

    
return {para,labelOne}
})();

{/* <div>
<h4>Tab One</h4>
<p>Une cuisine qui nous fait #voyager du moyen-orient au plus large bassin #méditerranéen.Tout cela, dans une ambiance #conviale, situé dans un quartier vivant et multi-culturel. De la street food, de qualité, sur place et à emporter.</p>
<p>On y mange quoi? Des #mezzes (#houmous au #tahin maison, des #boreks à la #feta aop, des #falafels aux fèves), des salades, des #pitas, bref du bon et du #faitmaison. Une #cuisine sensée qui laisse la part belle aux légumineuses et aux #légumes frais, dans le respect de la saisonnalité et des #saveurs. Des ingrédients secrets qui revisitent les grand classiques de la cuisine méditerranéenne.</p>
<p>Le plus important pour nous? Rendre accessible une #cuisinesaine, gourmande et de qualité. Tout le monde a le droit de manger du #BON . Nous travaillons avec des fournisseurs et des producteurs exigeants qui nous offrent la possibilité de sublimer des ingrédients de première qualité.</p>
</div> */}





const divTabs = () => {
    const tabs= document.createElement("div");
    tabs.setAttribute("class", "tabs");
    //get the first tab-2
    const firstTab2 = document.createElement("div");
    firstTab2.setAttribute("class", "tab-2");


    // const para = document.createElement("P");
    // para.textContent="paragraphy";
    // firstTab2.appendChild(labels.para());
    firstTab2.appendChild(labels.labelOne());
    //append it to the tabs
    tabs.appendChild(firstTab2);
    //get the 2nd tab-2
    const secondTab2= document.createElement("div");
    secondTab2.setAttribute("class", "tab-2");
    tabs.appendChild(secondTab2);


    return tabs;
}



    




    export {divTabs}