import{ productosALaVenta} from "./productos.js"

class Carrito{
    constructor(nombre, cantidad){
        this.nombre=nombre;
        this.cantidad=cantidad;
    }
}

const carrito =[]||JSON.parse(localStorage.getItem(`carrito`))



for (const producto of productosALaVenta){

    let cantidad=1; 

    $(`#productos-a-la-venta`).append(
    
        `<div class="contenedor-nombre-productos">
            ${producto.nombre} <spam class="style-precio"> $ ${producto.precio}</spam>
        </div>

        <spam class="spam-cantidad">cantidad: </spam>

        <select id="contador-${producto.id}">
        <option value= "1">1</option>  
        <option value= "2">2</option>  
        <option value= "3">3</option>  
        </select>

        <button id="boton-comprar-${producto.id}">AGREGAR</button>
        `        
    )
    $(`#contador-${producto.id}`).change((event)=>{
        cantidad=   +event.target.value
        //console.log(cantidad)
    })
    
    
    $(`#boton-comprar-${producto.id}`).click(()=>{
       //console.log(producto)
        
        carrito.push(new Carrito (producto.nombre, cantidad))
        localStorage.setItem("carrito",JSON.stringify(carrito))
        console.log(carrito)       
        
    })
}

export{
    carrito
}
    
 



