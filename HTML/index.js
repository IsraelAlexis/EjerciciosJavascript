/*
let capinv,gan

capinv=parseFloat (prompt("Favor escriba el capital a invertir"))

gan=capinv*0.02
alert("La ganancia es "+gan)
*/

/*
let sb,v1,v2,v3,tot_vta,com,tpag
sb= parseInt (prompt("Favor ingrese su salario base"))
v1= parseInt (prompt("Favor escriba la 1 venta"))
v2= parseInt (prompt("Favor escriba la 2 venta"))
v3= parseInt (prompt("Favor escriba la 3 venta"))
tot_vta= v1+v2+v3
com=tot_vta*0.10
tpag= sb+com
alert("Su sueldo total este mes es de "+tpag+" y su comision total es "+com)
*/

/*
let tc,d,tp
tc=parseInt (prompt("Favor ingrese el total de la compra"))
d = tc * 0.15
tp = tc - d
alert (" Usted pagara un total de " +tp)
*/

/*
let c2,c3,ef,tf,prom,ppar,pef,ptf,cf,c1
c1= parseFloat (prompt("Favor ingrese la calificacion 1"))
c2= parseFloat (prompt("Favor ingrese la calificacion 2"))
c3= parseFloat (prompt("Favor ingrese la calificacion 3"))
ef= parseFloat (prompt("Favor ingrese examen final"))
tf= parseFloat (prompt("Favor ingrese trabajo final"))
prom = (c1 + c2 + c3)/3
ppar = prom * 0.55
pef = ef * 0.30
ptf = tf * 0.15
cf = ppar + pef + ptf
alert("su calificacion final es"+ cf)
*/

/*
let nh,nm,ta,ph,pm
nh= parseFloat (prompt("Favor ingrese numero de hombres"))
nm= parseFloat (prompt("Favor ingrese numero mujeres"))
ta = nh + nm
ph = nh * 100 / ta
pm = nm * 100 / ta
alert("el porcentaje de hombres que ahi en el grupo es "+ ph+"%" +" y el porcentaje de mujeres es " + pm+"%" )
*/

/*
let añoN,añoA,edad
añoN= parseInt (prompt("Favor ingrese año en el que nacio"))
añoA= parseInt (prompt("Favor ingrese el año actual"))
edad= añoA-añoN
alert("su edad en este año es "+ edad)
*/

/*
let gine,ped,trau,preT
preT= parseInt (prompt("Favor ingrese el presupuesto total de la compañia"))
gine= preT*0.40
ped= preT*0.30
trau= preT*0.30
alert("el presupuesto para el area de Ginecologia es "+gine)
alert("el presupuesto para el area de Traumatologia es "+trau)
alert("el presupuesto para el area de Pediatría es "+ped)
*/

/*
var p_int,capf,inte,capinv;
capinv=parseFloat (prompt("por favor ingrese el capital "))
p_int=parseFloat (prompt("por favor ingresa el procentaje e interes "))

inte=capinv*p_int

if (inte>7000) {
    capf=capinv+inte
    alert("Señor es conveniente invertir")
} else {
    capf
    alert("NO nos sirves para invertir Adios pues")
}  
*/
/*
var calif1, calif2, calif3,prom,
calif2=parseInt (prompt("por favor ingresar la calificacion 1 "))
calif1=parseInt (prompt("por favor ingresar la calificacion 2 "))
calif3=parseInt (prompt("por favor ingresar la calificacion 3 "))
prom = (calif1 + calif2 + calif3)/3
if (prom>=70) {
    alert("Has Aprobado")    
} else {
    alert("Has reprobado") 
}
*/
/*
var compra,descif,tot_pag
compra=parseFloat (prompt("por favor ingresar el valor de la compra"))
if (compra>1000) {
    desc = compra * 0.20
    document.write("usted tiene que pagar un valor de "+desc)
} else {
    desc=0
}
*/
/*
var num1,num2
num1=parseInt (prompt("por favor escriba un numero"))
num2=parseInt (prompt("por favor escriba un numero "))
if (num1<num2) {
    alert("la forma ascendente es la siguiente"+num1+","+num2)
} else alert("la forma ascendente es la siguiente"+num2+","+num1)
*/
/*
var fianza,totP,porce
fianza=parseInt (prompt("por favor ingresa el valor de la fianza"))
if (fianza<50000) {
    totP=fianza*0.03
    alert("el valor de la cuota es igual a: "+totP)
}else 
    if (fianza>50000) {
    totP=fianza*0.02
    alert("el valor de la cuota es igual a: "+totP)
} 
 alert("no existe valor definido para esta finanza")
 */
/*
let p1,p2,p3
alert("A continuacion responde las siguientes preguntas SI , NO")
p1=prompt("Colon descubrió América?")
    if (p1.toLowerCase()=="si") {
        p2=prompt("La independencia de México fue en el año 1810?")
        if (p2.toLowerCase()=="si") {
            p3=prompt("The Doors fue un grupo de rock Americano?")
            if (p3.toLowerCase()=="si") {
                alert("has ganado")
            } else {
                alert("has respondido incorrectamente")
            }
        } else {
            alert("has respondido incorrectamente")
        }
    } else {
        alert("has respondido incorrectamente")
    }
*/
/*
let edad, suma=0
for (let index = 1; index <=5; index++) {
    edad=parseInt(prompt("Por favor ingrese la edad "+index))
    suma=suma+edad;
}
    alert("el total de edades es "+suma)
*/

/*
let p1,p2,p3,suma=0,articulos=400000,total
alert("BIENVENIDOS A SURA \n LAS SIGUIENTES PREGUNTAS ES PARA ACTUALIZAR LOS INVENTARIO DE LAS CIUDADES")
for (let index = 1; index <=3; index++){
p1=parseInt(prompt("ingresa la cantidad de articulos que se encuentra en Medellin proveedor "+index))
    if (p1!="0") {
        p2=parseInt(prompt("ingresa la cantidad de articulos que se encuentra en Bogota proveedor "+index))
        if (p2!="0") {
            p3=parseInt(prompt("ingresa la cantidad de articulos que se encuentra en Cali proveedor "+index))
            if (p3!="0") {
                alert("el Inventario ha sido actualizado exitosamente")
                suma+=p1+p2+p3
                alert("El TOTAL de articulos acumulados en las ciudades es= "+ suma)
            } else {
                alert("no se actuliaza inventario del proveedor")
            }
        } else {
            alert("no se actuliaza inventario del proveedor")
        }
    } else {
        alert("no se actuliaza inventario del proveedor")
    }}
    total=articulos*suma
        alert("El TOTAL valor de articulos entregados a facturar es= "+ total)
        alert("Actualizacion Exitosa \n Gracias Adios")
        */
    /*
    let x=1
    while (x<=4){
        console.log("la interaccion es "+x)
        x++;
    }
    */
/*
let numvend,sb,comision=0.10 ,sf,index=1,vta
numvend=parseInt(prompt("Por favor ingresar el numero de vendedores"))
sb=parseInt(prompt("Por favor ingrese el salario base"))
    while (index<=numvend) {
    for(i=1;i<=3;i++){
        vta=parseFloat(prompt("por favor ingresar la venta del vendedor "+index))
        total=vta
    }
    pago=total*comision
    pagototal=pago+sb
    console.log("total pagado "+pago+index)
    console.log("el total comision para el vendedor "+index+" es "+pagototal)
    index++
}
*/
/*
2) En una empresa se requiere calcular el salario semanal de cada uno de los n obreros que
laboran en ella. El salario se obtiene de la sig. forma:
Si el obrero trabaja 40 horas o menos se le paga $20 por hora
Si trabaja mas de 40 horas se le paga $20 por cada una de las primeras 40 horas y
$25 por cada hora extra.*/
/*
let salsema,numobreros,numhorastra=1,horaext=1,i=1
numobreros=parseInt(prompt("Por favor ingrea el numero de obreros"))

while (i<=numobreros) {
    numhorastra=parseInt(prompt("por favor ingresa el nuemero de horas trabajadas del obrero "+i))
        if (numhorastra<=40) {

            salsema=numhorastra*20
                alert("el obrero "+i+" tiene por salario el valor de "+salsema)
        } else 
            salsema=40*20+(numhorastra-40)*25

            alert("el obrero "+i+" tiene por salario el valor de "+salsema)
         
i++
}
*/  
    




    








