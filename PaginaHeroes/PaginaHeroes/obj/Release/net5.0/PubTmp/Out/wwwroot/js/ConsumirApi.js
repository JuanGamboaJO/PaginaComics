
function irproducto(id) {
    var url = window.location.hostname;
    window.location.href =`http://${url}:8082/Home/Producto?productoid=`+id
}



   