

   

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var proID = getParameterByName("productoid")

    var contenido = document.querySelector(".contenedor")
    fetch("https://localhost:44304/api/Productos/")
        .then(res => res.json()).then(data => {
            console.log(data[proID - 1].imagenl)
            contenido.innerHTML = `
           <h1>${data[proID - 1].nombre}</h1>
    <div class="camisa" >
        <img id="zoom_01" src="${data[proID - 1].imagen}" data-zoom-image="${data[proID - 1].imagenl}" />
        <div class="camisa__contenido">
            <p>${data[proID - 1].informacion}</p>
            <form class="formulario">
                <select class="formulario__campo">
                    <option disabled selected>Seleccionar Talla</option>
                    <option>Pequeña</option>
                    <option>Mediana</option>
                    <option>Grande</option>
                </select>
                <input class="formulario__campo" type="number" placeholder="Cantidad" min=1>
                <input class="formulario__submit" type="submit" value="Agregar al carrito">
            </form>
        </div>

    </div>
`
            iniciarZoom("#zoom_01")
            
        })





          
