/*crear u na funcion que sume 2 numeros diferentes*/
/*
function sumar() {
    n1=parseInt(prompt("por favo ingrese la primer numero"))
    n2=parseInt(prompt("por favo ingrese el segundo numero"))
    //metodo
    let suma=n1+n2;
    alert("la sumatoria es: "+suma)
}
sumar()
*/

/*
function suma(a,b) {
    return a+b;
}
let resultado= suma(5, 5)
console.log(resultado)
*/
/*
let multiplicacion=(a,b)=>a*b 
let resultado=multiplicacion(4,6);
console.log(resultado);   
*/
/*
function saludar(nombre="usuario!") {
    console.log(`hola, ${nombre}`)
}
saludar()
saludar("Juan")
*/
/*
let esPar=(numero)=>{
    if(numero % 2 ===0){
        return true;
    } else {
        return false;
    }
}
console.log(esPar(4));
console.log(esPar(7));
*/
/*
function calcularDescuento(precioOriginal, porcentajeDescuento) {
    // Calcula el descuento
    let descuento = precioOriginal * (porcentajeDescuento / 100);
    // Calcula el precio con descuento
    let precioConDescuento = precioOriginal - descuento;
    // Retorna el precio con descuento
    return precioConDescuento;
}

function valorpagar() {
    // Solicita al usuario que ingrese el precio original del producto
    precioOriginal = parseFloat(prompt("Ingrese el precio original del producto:"));
    // Solicita al usuario que ingrese el porcentaje de descuento del Black Friday
    porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento del Black Friday:"));

    // Calcula el precio con descuento
    precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);

    // Muestra el precio con el descuento aplicado
    console.log("El precio con el " + porcentajeDescuento + "% de descuento aplicado es: $" + precioConDescuento);
}

// Llama a la función principal
valorpagar();
*/

                                      // funcion comun
        //  consultar saldo de cuenta
/*
let saldo=0
let modo=prompt("¿Que desea hacer:\n 1. Ingresar dinero. \n 2. retirar dinero.")
let monto=parseFloat(prompt("ingrese el monto a ingresar o retirar"))
function cuenta(modo,monto ) {
    if (modo="1") {
        saldo+=monto
    } else {
        saldo-=monto
    }
    alert("Usuario su saldo acutal es "+saldo)
}

cuenta(modo,monto)
*/

        // pago a una entidad
/*
let saldo=1000000;
alert("su saldo actual es: "+saldo)
Vfactura=parseInt(prompt("por favor ingresa el valor de la factura:"))

function pago(saldo,Vfactura) {
    Totpag=saldo-Vfactura
    alert("su pago ha sido exitoso, su saldo actual es: "+Totpag)
}
pago(saldo,Vfactura)
*/



                        //FUNCION FLECHA 

// NO TIENE LA PALABRA RESERVADA FUNCTION= SE COMPORTA COMO UNA FUNCION ANONIMA 

// ejemplo:
/*
let esPar=(numero)=>{
    if (numero%2 ===0) {
        return true
    } else {
        return false
    }
}
console.log(esPar(4));
console.log(esPar(7));
*/

// emplear una funcion flecha para calcular, el total a pagar a un trabajador x, si se sabe el valor de hora y el total horas
/*
vHora=parseInt(prompt("por favor ingrese el valor de la hora"))
tHora=parseInt(prompt("por favor ingrese horas trabajadas"))

let TotalPagar=(vHora,tHora)=>vHora*tHora;
resultado= TotalPagar(vHora,tHora)

alert("el total que se va a pagar al trabajador es de: "+resultado)
*/


//se requiere crear una solucion que calcule el total a pgar de una entidad financiera si se sabe, que el valor de la cuota es 200000, y por cada dia de atraso se suma el 2%
/*
diasatraso=parseInt(prompt("por favor ingrese los dias de atraso"))
let TotalPagar=(diasatraso)=>{
    return 200000*(1+(diasatraso*0.02))
}
alert("el valor a pagar es: "+TotalPagar(diasatraso));
*/





