// var d;
// var e;
// var h;
// var g;
// var t;
// const lista = [];
// const nom = JSON.parse(localStorage.getItem("name"));
// const apell = JSON.parse(localStorage.getItem("surname"));
// document.getElementById("nusuario").value = nom;
// document.getElementById("rusuario").value = apell;
// var namae = nom;
// var surnamae = apell;



// let logearse = document.getElementById("logeo");
// let box =document.getElementById("cuerpo");
// var boton = document.getElementById("boton");

// logearse.addEventListener("click", nis);


// function nis(){
//     let login = document.getElementById("cuerpo");
    
//     asistente();
    
// }



// ramen();

// function ramen(){
//     alert("Comienza secuencia de registro")
    // const g = new nombre (d = prompt("Nombre"), e = prompt("Apellido"));
    // const enJSON1 = JSON.stringify(d);
    // const enJSON2 = JSON.stringify(e);
    // localStorage.setItem("name", enJSON1);
    // localStorage.setItem("surname", enJSON2);
    // alert("Registro completo, ingrese sesión")
//     document.getElementById("nusuario").value = nom;
//     document.getElementById("rusuario").value = apell;
// }

// asistente();


// function cambio(Dou){
//     Dou = prompt("Cambiar el nombre presionando '1' o revisarlo presionando '2', o '3' para volver al asistente")
//     switch(Dou){
//         case "1":
//             const h = new nombre (d = prompt("Nombre"), e = prompt("Apellido"));
//             alert("Nombre Cambiado");
//             return cambio();

//         case "2":
//             alert("Usuario" + " " + nom + " " + apell);
//             return cambio();

//         case "3":
//             return asistente();

//         default:
//             alert("Comando no comprendido");
//             return cambio();
//     }
// }

// function asistente(principal) {
//     principal = prompt("Diga un comando o utilize 'HELP' para conocerlos").toUpperCase();
// switch (principal) {
//     case "HELP":
//         alert("Los comandos son 'ESC', 'CALCULADORA', 'RR', 'USUARIO' y 'LISTA'")
//         return asistente();
    
    
//         case "RR":
//         alert("Never gonna give you up, never gonna let you down, never gonna run around and desert you...")
//         return asistente();

//         case "USUARIO":
//             alert("Ingresando a opciones de USUARIO");
//             return cambio();
    
    
//         case "CALCULADORA":
//         return calc();

//         case "LISTA":
//             return amigo();
    

//     default:
//         alert("Error, comando:" + " " + "'" + principal + "'" + " " + "No reconocido")
//         return asistente();
        

//         case "ESC":
    
//         break;
// }
    
// } {
    
// }


// function calc(cuenta, n1, n2, operacion) {
//     operacion = prompt("elija '+' para suma, '-' para resta, '*' para multiplicar, o '/' para dividir. También puede utilizar 'ESC' para salir de la calculadora").toUpperCase();
//     switch (operacion) {
//         case "+":
//             n1 = parseInt(prompt("Primer número"));
//             n2 = parseInt(prompt("Segundo número"));
//             cuenta = n1 + n2;
//             alert(cuenta)
//             return calc();
//         case "ESC":
//             return asistente();
//         case "-":
//             n1 = parseInt(prompt("Primer número"));
//             n2 = parseInt(prompt("Segundo número"));
//             cuenta = n1 - n2;
//             alert(cuenta)
//             return calc();
//         case "*":
//             n1 = parseInt(prompt("Primer número"));
//             n2 = parseInt(prompt("Segundo número"));
//             cuenta = n1 * n2;
//             alert(cuenta)
//             return calc();
//         case "/":
//             n1 = parseInt(prompt("Primer número"));
//             n2 = parseInt(prompt("Segundo número"));                
//             cuenta = n1 / n2;
//             alert(cuenta)
//             return calc();                
    
//         default:
//         alert("Error, comando:" + " " + "'" + operacion + "'" + " " + "No reconocido");
//             return calc();
//     }
// }



// function amigo(dios){
//     dios = prompt("Ingrese '1' para añadir cosas a la lista o '2' para revisarla, sino ingrese '3' para salir");
//     switch(dios){
//         case "1":
//             t = prompt("Nuevo dato");
//             lista.push(t);
//             return amigo();

//         case "2":
//             alert(lista);
//             return amigo();

//         case "3":
//             return asistente();

//         default:
//             alert("Lo siento" + " " + d + "," + " " + "pero no entendí ese comando");
//             return amigo(); 
//     }
// }


let logearse = document.getElementById("logeo");
let box =document.getElementById("cuerpo");
var boton = document.getElementById("boton");
    
logearse.addEventListener("click", nis);


function nis(){
    let login = document.getElementById("cuerpo");
    let logg = document.getElementById("logeo");
    let namae = document.getElementById("nusuario");
    let surnamae = document.getElementById("rusuario");
    var tender = document.getElementById("nusuario").value;
    var lol = document.getElementById("rusuario").value;
    var name = sessionStorage.getItem(tender);
    var surname = sessionStorage.getItem(lol);
    logg.parentNode.removeChild(logg);
    namae.parentNode.removeChild(namae);
    surnamae.parentNode.removeChild(surnamae);

$("h1").text("Bienvenido/a" + " " + tender + " " + lol);
$("#cuerpo").append(`<div id="asistente">
<h2>¿En qué lo puedo ayudar hoy?</h2>
<button id="RR">Presione para una sorpresa</button>
</div>`);

$(`#RR`).on("click", function(){
    $("#cuerpo").append(`<Video controls autoplay>
<iframe source src="Rick Astley - Never Gonna Give You Up (Official Music Video)_2.mp4"></source>
</video>`);
});

}

