// (function foo () {
//     console.log("fooo");
//     const para = document.createElement("P");
//     para.textContent="paragraph53";
//     document.body.appendChild(para);

// })();

// export default foo
(function foo () {
    const container= document.getElementById("content");
    const para = document.createElement("P");
    para.textContent="hoofs";

    const pic = document.createElement("IMG");
   pic.setAttribute("src", "/TOP/Restaurant-page/pics/header.png");
   pic.setAttribute("id", "header");
    document.body.appendChild(pic);

})();

export default foo
