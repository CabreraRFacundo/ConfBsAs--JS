//console.log("hola");

let entradas;
let categoria;


document.getElementById("boton").onclick = function () {
    var precioTicket = 200;
    var precioTotal = 0;

    entradas = document.getElementById("cantidad_entradas").value;
    //console.log(entradas);

    precioTicket = precioTicket * entradas;
    //console.log(precioTicket);

    categoria = document.getElementById("categoria").selectedIndex;
    //console.log(categoria);

    if (categoria == 1) {
        precioTotal = (precioTicket * 15) / 100;

        console.log(precioTotal);
    } else if (categoria == 2) {
        precioTotal = (precioTicket * 50) / 100;

        console.log(precioTotal);
    } else if (categoria == 3) {
        precioTotal = (precioTicket * 80) / 100;

        console.log(precioTotal);
    } else {
        console.log("categoria invalida");
    }

    document.getElementById("alerta").innerHTML = "Total a pagar: $" + precioTotal;
};

document.getElementById("restart").onclick = function () {
    document.getElementById("formulario").reset();
};

