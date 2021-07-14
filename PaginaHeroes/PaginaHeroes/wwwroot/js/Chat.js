
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var chatID = getParameterByName("chatid")
console.log(chatID)

var contenido = document.querySelector(".contenedor")

contenido.innerHTML =`
<div class="row">
    <div class="col-12">
        <input type="text" placeholder="usuario" id="usuario" />
        <input type="text" placeholder="mensaje" id="mensaje" />
        <button id="boton">Enviar</button>

    </div>

    <div class="row">
        <div class="col-6">
            <div id="mensajes"></div>
        </div>
        <div class="col-6">
            <div id="notificaciones"></div>
        </div>
    </div>
</div>
`


