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







const divTabs = () => {
    const tabs= document.createElement("div");
    tabs.setAttribute("class", "tabs");
    //get the first tab-2
    const firstTab2 = document.createElement("div");
    firstTab2.setAttribute("class", "tab-2");
    //append it to the tabs
    tabs.appendChild(firstTab2);
    //get the 2nd tab-2
    const secondTab2= document.createElement("div");
    secondTab2.setAttribute("class", "tab-2");
    tabs.appendChild(secondTab2);


    return tabs;
}



    //   const labels = () => {
    //     const label1 = document.createElement("LABEL");
    //     label1.textContent="One";
    
    //     const radio1= document.createElement("INPUT");
    //     radio1.setAttribute("type", "radio");
    //     radio1.checked="checked";
    
    //     label1.setAttribute("for", radio1);
    //     label1.appendChild(radio1);
    
    //     firstTab2.appendChild(label1);

    //     const para = document.createElement("P");
    //     para.textContent="paragraphy";
    //     firstTab2.appendChild(para);
        
    
    // }




    export {divTabs}