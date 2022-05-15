


/* function saludar(){
    let nombreIngresado=prompt("Ingresa tu nombre y apellido");
    alert("Hola " + nombreIngresado + ". Bienvenido a la DCA Crypto Calculadora , Por favor presiona Aceptar y contesta las preguntas en las proximas ventanas:");
}

saludar();

let n1=prompt("Cual es tu sueldo neto en pesos Argentinos");

let n2=prompt("Que porcentaje de tu sueldo te gustaria destinar a Crypto para utilizarlo como una jubilacion alternativa?");

function porcentaje(){
    alert("Gracias, segun tus respuestas , te gustaria destinar pesos argentinos " + (n1/100)*n2 + " para tu jubilacion alternativa en crypto. La cotizacion del dia de hoy de BTC es de USD 36.500 , por lo tanto estarias acumulando: xxxxxx BTC por mes. A continuacion podras ver toda la informacion necesaria en nuestra web ");
}

porcentaje(); */




function capturar(){
    function nombre(nombre){
        this.nombre = nombre;
    }

    let nombreCapturar= document.getElementById("nombre").value;
    console.log(nombreCapturar);

    function sueldo(sueldo){
        this.sueldo = sueldo;
    }

    let sueldoCapturar= document.getElementById("sueldo").value;
    console.log(sueldoCapturar);

    function porcentaje(porcentaje){
        this.porcentaje = porcentaje;
    }

    let porcentajeCapturar= document.getElementById("porcentaje").value;
    console.log(porcentajeCapturar);


    let resultado= alert(sueldo/100))*(porcentaje);

   
}