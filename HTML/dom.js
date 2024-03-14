let div = document.querySelector('div1')
function colores() {
    div1.innerHTML="Esto viene del JS"
    div1.style.margin="80px";
    div1.style.background="aliceblue"
}

function saludo()
{
let nom_usuario = document.fdatos.entrada.value
document.writeln(`Hola, buen día ${nom_usuario} `)
}

function calcula()
{
let numero = document.fdatos.entrada.value;
let dato = document.getElementById("lista");
let valor = dato.options[lista.selectedIndex].value; // .text
let resultado = numero * valor;
document.getElementById("salida").innerHTML = "el resultado de la multiplicacion es: "+resultado;
}

// se requiere crear un formulario que reciba informacion de toma de reserva de un viaje a paris

let reserva=()=>{
    nombre=document.paris.nombres.value
    reserv= document.getElementById("planes");
    valo=reserv.options[planes.selectedIndex].value;
    fecha=document.paris.fecha.value
    document.writeln("usuario: "+nombre+" su plan es: "+valo+" y su fecha a sido asignada correctamente; fecha: "+ fecha+" gracias por volar con Aerolinea Sura")
}

// realizar una operacion para escoger una carrera en una universidad, se debe elborar una lista e integrarla con su nombre

let universidad=()=>{
    nombree=document.univer.nom.value
    Univ=document.getElementById("carrera");
    carr=Univ.options[carrera.selectedIndex].value;
    document.writeln("Aspirante "+nombree+" Felicicitaciones escogiste la carrera: "+carr+" gracias por escoger la universidad Sura");
//entrada por slide
}
function ProcesaDatos() {
    let objx = document.getElementById("RangoValor").value;
    document.getElementById("resultado").innerHTML = objx;
    }
// utilizacion input "date"

var getEventTime = function(){
    var start = moment(document.getElementById("start").value);
    var end = moment(document.getElementById("end").value);
    console.log(moment.duration(end.diff(start)).asDays());
    }
    

    

