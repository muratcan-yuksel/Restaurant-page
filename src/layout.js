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


    return tabs;
}


export {divTabs}