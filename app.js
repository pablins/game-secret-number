/*
//buscamos el primer elemento <h1> que este en la página. En caso de no encontrarlo retornará null
let titulo = document.querySelector('h1');
console.log(typeof titulo);//titulo será de tipo objeto, por tanto tendrá metodos 
console.log(titulo);

//Podemos insertar codigo HTML dentro del elemento
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa un número del 1 al 10';
*/

// let numeroSecreto = generarNumeroSecreto();//El tipo de dato será number, dado que la función Math devuelve un número
// let intentos = 1;//Variable para contar los intentos del usuario, iniciamos en 1 y lo aumentamos cada vez que el usuario no acierte el número secreto

//Declaramos las variables con cualquier valor pero despues el método condicionesIniciales() se encargará de asignarles el valor correcto
let numeroSecreto = 0;
let intentos = 0;
//Guardaremos los números secretos que se han generado con el fin de no repetirlos en nuevos juegos
let listaNumerosSorteados = [];
const NUMERO_SECRETO_MAXIMO_POSIBLE = 10;
const NUMERO_MAXIMO_INTENTOS = 3;

//Declaramos función para reutilizar código al cambiar el texto de un elemento
function asignarTextoElemento(selectorElemento, texto) {
    let elementoHTML = document.querySelector(selectorElemento);
    elementoHTML.innerHTML = texto;
    return;//Como buena práctica, se recomienda colocar un return para indicar que la función ha finalizado
}

function verificarIntento() {
    //por default al obtener el valor de un input, este será de tipo string aunque el input en HTML sea type="number"
    let numeroIngresado = parseInt(document.getElementById('idInputNumero').value);//Obtenemos el valor del input
    // console.log(typeof(numeroIngresado));//Verificamos que el tipo de dato

    if (numeroIngresado === numeroSecreto) {//comparamos que el valor y el tipo de dato sean iguales
        asignarTextoElemento('p', `🎉¡Felicidades! Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} 💪`);

        //Quitamos el atributo disabled para que el usuario pueda pulsar sobre el botón "Nuevo juego"
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('div.chute.container__botones > button:nth-child(1)').setAttribute('disabled', 'true');//Deshabilitamos el botón "Intentar" para que el usuario no pueda seguir jugando

    } else {//El usuario no acertó el núemro secreto

        if(numeroIngresado > numeroSecreto) {
            asignarTextoElemento('p', '👀 El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor 👀');
        }
        intentos++;

        //despues de cada intento no acertado por el usuario, limpiamos el valor del input (para mejorar la UX)
        limpiarCaja();

        if (intentos > NUMERO_MAXIMO_INTENTOS) {
            finalizarJuego();
            asignarTextoElemento('p', `¡Perdiste! El número secreto era ${numeroSecreto} 😔`);
        }

    }
    
    return;
}

function limpiarCaja() {
    // Usamos el querySelector para buscar por id usando el # (sería lo mismo que document.getElementById)
    document.querySelector('#idInputNumero').value = '';//Limpiamos el valor del input
    
    return;
}

//Esta funcón retornará el número secreto
/*
function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}
*/
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * NUMERO_SECRETO_MAXIMO_POSIBLE) + 1;

    if (listaNumerosSorteados.length === NUMERO_SECRETO_MAXIMO_POSIBLE) {
        finalizarJuego();
        // return;

    } else {
        //Verificamos sí el número generado ya ha sido sorteado
        if (listaNumerosSorteados.includes(numeroGenerado)) {//includes retorna true si el número ya se encuentra en la lista
            return generarNumeroSecreto();//Importante usar el return para que la función retorne el valor
        } else {
            listaNumerosSorteados.push(numeroGenerado);//Empujamos el número a la lista de números sorteados
            return numeroGenerado;
        }

    }
    
}


function finalizarJuego() {
    asignarTextoElemento('h1', 'Fin del juego');
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    document.querySelector('div.chute.container__botones > button:nth-child(1)').setAttribute('disabled', 'true');//Deshabilitamos el botón "Intentar" para que el usuario no pueda seguir jugando

    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto'); 
    asignarTextoElemento('p', `Ingresa un número del 1 al ${NUMERO_SECRETO_MAXIMO_POSIBLE}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

    return;
}

function reiniciarJuego() {
    //Forma de hacer un F5 en JS, esto recargaría toda la página
    //location.reload();//Recargamos la página para reiniciar el juego
    /*
     * ACCIONES QUE NECESITAMOS HACER PARA REINICIAR EL JUEGO
     */
    // - Limpiar caja
    limpiarCaja();
    // - Dejar el botón de "Nuevo juego" deshabilitado
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    // - Habilitar el botón de "Intentar"
    document.querySelector('div.chute.container__botones > button:nth-child(1)').removeAttribute('disabled');
    // - Indicar mensaje de intervalo de números
    // - Generar un nuevo aleatorio
    // - Reiniciar el contador de intentos
    condicionesIniciales(); // Lo dejamos al final dado que en la funcion generarNumeroSecreto() se deshabilita el botón de "Intentar" si ya se han sorteado todos los números posibles
}

condicionesIniciales();