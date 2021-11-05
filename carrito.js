import{ carrito} from "./main.js"


$("#carrito-de-compras").append(
    `<h1 id="titulo-carrito"> CARRITO DE COMPRAS </h1>`
)

for(const producto of carrito){
    $(`#contenedor-carrito`).append(
        `<p>${producto.nombre}</p>`
    )
}

    

    



    
