import{ productosALaVenta} from "./productos.js"

for (const producto of productosALaVenta){
    $(`#productos-a-la-venta`).append(
        `<div class="contenedor-nombre-productos">

            ${producto.nombre} <spam> $ ${producto.precio}</spam>
            
        </div>`
        
    )
}








