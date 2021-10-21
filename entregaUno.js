//CARGA DE PRODUCTOS AL SITIO  POR EL VENDEDOR 
class Productos{
    constructor( precio, id, stock ){

        this.id = id;
        this.precio = precio;
        this.stock = stock;
        

    }
}

let ingresoProd = [];

for( let i = 0 ; i < 7 ; i++){

    let id =parseInt( prompt("ingrese id del producto"));
    let precio =parseFloat( prompt("ingrese precio del producto"));
    let stock = parseInt(prompt("indique cantidad de productos a ingresar ")); 

    ingresoProd.push( new Productos( precio, id, stock));
}

console.log ( ingresoProd );

for ( let productoIngresado of ingresoProd){

    console.log("id del producto : " + "ID " + productoIngresado.id);
    console.log(" precio de producto : " + " $" + productoIngresado.precio);
    console.log(" stock del producto : " + productoIngresado.stock);
    
}
 
/// usuario ordena productos de mayor a menor precio
let ordenPrecio = [];
ordenPrecio.push(ingresoProd[0].precio, ingresoProd[1].precio, ingresoProd[2].precio, ingresoProd[3].precio, ingresoProd[4].precio, ingresoProd[5].precio, ingresoProd[6].precio,);
console.log(ordenPrecio);

let pedidoOrden = prompt (" si desea ordenar los productos de mayor a menor ingrese MAYOR, si lo quiere hacer de menor a mayor ingrese MENOR. por favor ingrese las palabras en mayuscula ");

if (pedidoOrden == "MAYOR" ) {
    ordenPrecio.sort(function( a, b){return b - a}); 
    alert(ordenPrecio);
    
}
 else if ( pedidoOrden == "MENOR"){
    ordenPrecio.sort(function( a, b){return a - b}); 
    alert(ordenPrecio);
    
}
else{
 alert("comando equivocado pruebe otra vez y en mayusculas");
}




