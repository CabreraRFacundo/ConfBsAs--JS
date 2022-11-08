//console.log("hola");

let entradas;
let categoria;
let precioTicket = 200;
let precioTotal = 0;

document.getElementById("boton").onclick = function () {
    var precioTicket = 200;
    var precioTotal = 0;
    
    entradas = document.getElementById("cantidad_entradas").value;
    console.log(entradas);
    
    precioTicket = precioTicket * entradas;
    console.log(precioTicket);

    categoria = document.getElementById("categoria").selectedIndex;
    console.log(categoria);

    if (categoria == 1) {
        precioTotal = (precioTicket * 80) / 100;

        console.log(precioTotal);
    } else if (categoria == 2) {
        precioTotal = (precioTicket * 50) / 100;

        console.log(precioTotal);
    } else if (categoria == 3) {
        precioTotal = (precioTicket * 15) / 100;

        console.log(precioTotal);
    } else {
        console.log("categoria invalida");
    }
};

document.getElementById("restart").onclick = function () {
    document.getElementById("formulario").reset();
};



/*
//precio de un ticket
var precioTicket = 200;

var precio = 0;
var cantidad = 0;
//total a pagar, pero sin descuento
precio = precioTicket * cantidad;

var descuento = 0; //descuento de estudiante, trainee o jr
//total a pagar con el descuento aplicado
var precioTotal = 0;

//calculo del descuento para aplicar al precio total
if (descuento === estudiante) {
    precioTotal = (precio * 80) / 100;

} else if (descuento === trainee) {
    precioTotal = (precio * 50) / 100;

} else { //jr
    precioTotal = (precio * 15) / 100;
}

*/