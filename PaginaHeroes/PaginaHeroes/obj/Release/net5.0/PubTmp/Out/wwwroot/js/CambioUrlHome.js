window.addEventListener("load", function (){
    var codigo = Math.random().toString(36).substr(2);

    sessionStorage.setItem("Homeurl", codigo);

    data = sessionStorage.getItem("Homeurl");

    console.log(data);

    window.location.replace(`?Home=${data}`);
})