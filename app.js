let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); //implemantando la funcion y asignando texto al html
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
 /* esta funcion se puede reducir.
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario'); //querySelector es para selecionar un elemneto del html de manera general. se usa el # para indicarle que es por id. 
    valorCaja.value = '';m //para indicar vacío se usa solo las ''.
}
*/
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo) { //longitud de lista == numeroMaximo
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //Si el número generado está en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) { //includes busca un valor en la lista, numeroGenerado es el parametro (o valor) a buscar en la lista.
            return generarNumeroSecreto(); //Se usa la recursion y se llama a la funcion dentro de si misma.
        } else {
            listaNumerosSorteados.push(numeroGenerado); //Agrega el numero generado al final de la lista
            return numeroGenerado; //Regresa el número generado
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); //setAttribute(atributo, value).
}

condicionesIniciales();