window.addEventListener("load", function () {


    let btn_menu = document.getElementById("btnchat");
    let chatexpandible = document.querySelector(".chatcontenedor");

btn_menu.addEventListener("click", function(){
    chatexpandible.classList.toggle("mostrarchat");
})

})