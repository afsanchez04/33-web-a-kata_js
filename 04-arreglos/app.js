/* 
Punto de venta

Desarrollar un sistema de gestión de inventario para una tienda. Una de las funcionalidades que necesitas implementar es calcular el precio total de una compra, teniendo en cuenta la cantidad de cada producto y su precio unitario.

 */

//Lista de productos a comprar
/* let productos = [
    { nombre: 'Playera', precio: 150, cantidad: 2 },
    { nombre: 'Pantalon', precio: 450, cantidad: 1 },
    { nombre: 'Galletas', precio: 25, cantidad: 3 }
]; */

let productos = [150, 450, 75, 50, 95, 100];

//Acumulador del precio total
let precio = 0;

for (let i = 0; i < productos.length; i++) {
    precio += productos[i];
    //precio += productos[i].precio * productos[i].cantidad;
}

//Este sería el código de forma manual en el for
/* precio += productos[0];
precio += productos[1];
precio += productos[2];
precio += productos[3];
precio += productos[4];
precio += productos[5]; */

console.log("Total es:", precio);

/* Descontar del inventario */

//Tarea moral
/* Imagina que estás desarrollando una aplicación de gestión de tareas donde los usuarios pueden agregar tareas con una fecha de vencimiento. Una de las funcionalidades que necesitas implementar es verificar si hay alguna tarea que esté vencida, es decir, cuya fecha de vencimiento sea anterior a la fecha actual. */
