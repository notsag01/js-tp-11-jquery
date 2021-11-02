const productosALaVenta=[]

class Productos{
    constructor(id, nombre, precio, cantidad){
        this.id=id; 
        this.nombre=nombre.toUpperCase();
        this.precio=Number(precio);
        this.cantidad=Number(cantidad)
    }
}

productosALaVenta.push( new Productos("1", "pulsera Acero", 500, 10))
productosALaVenta.push( new Productos("2", "pulsera Plata", 1000, 10))
productosALaVenta.push( new Productos("3", "pulsera Oro", 1500, 10))
productosALaVenta.push( new Productos("4", "anillo plata", 2000, 10))
productosALaVenta.push( new Productos("5", "anillo Oro", 3000, 10))

export{
    productosALaVenta
}