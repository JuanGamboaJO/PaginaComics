window.addEventListener("load", function () {


    let btn_menu = document.getElementById("btn-menu");
    let menu_expandible = document.querySelector(".menu_expandible");

btn_menu.addEventListener("click", function(){
    menu_expandible.classList.toggle("mostrar");
})

})