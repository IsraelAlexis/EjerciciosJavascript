                     // arreglos
/*
var arreglo=[1,2,3]
console.log(arreglo[2])
*/

                // Elemento push
    // Nos permite colocar un elemento al final del arreglo
/*
var arreglo=[23,33,45]
arreglo.push(67)
console.log(arreglo)
*/

// Agregar un elemento al inicio del arreglo
/*
var arreglo=[23,33,45]
arreglo.unshift(67)
console.log(arreglo)
*/

// Para eliminar el último elemento del arreglo
/*
var arreglo=[23,33,45]
arreglo.pop()
console.log(arreglo)                   
*/

// Para eliminar el primer elemento del arreglo
/*
var arreglo=[23,33,45]
arreglo.shift
console.log(arreglo)
*/

              //DESESTRUCTURACION
// Se conoce como la modificaciòn del código fuente sin cambiar su comportamiento, es un codigo muy largo y se debe desestructurar ejemplo:
/*
let dia=10
switch (dia) {
    case 1:
        console.log("lunes")
        break;
    case 2:
        console.log("martes")
        break
    case 3:
        console.log("miercoles")
        break
    case 4:
        console.log("jueves")
        break
    case 5:
    console.log("viernes")
    break
    case 6:
        console.log("sabado")
        break
    case 7:
    console.log("domingo")
    break

    default:
        console.log("dia no existe")
        break;
}
*/
/*
 const dias={
    1:" el dia es lunes",
    2:"el dia es martes",
    3:"miercoles",
    4:"jueves",
    5:"viernes",
    6:"sabado",
    7:"domingo",
}
dia=parseInt(prompt("por favor ingresa un dia"))
let mostrardia=(dia)=>{
    console.log(dias[dia]||"el dia no existe")
}
mostrardia(dia)
*/

                //Ejercicios 
                
//Calcular el promedio de 50 valores almacenados en un vector. Determinar además;cuantos son mayores que el promedio, imprimir el promedio, el número de datos;mayores que el promedio y una lista de valores mayores que el promedio.
/*
let vector=[70,80,90,100,45]

let sum=0,prom,aux="",nrogrand=""

for(let index=0; index<vector.length; index++){
    sum=sum+vector[index]
    prom=sum/vector.length

    aux=aux+","+vector[index]
    if (vector[index]>prom) {
        nrogrand=nrogrand+","+vector[index]
    }
}

console.log(sum)
console.log(prom)
console.log(aux)
console.log(nrogrand)
*/