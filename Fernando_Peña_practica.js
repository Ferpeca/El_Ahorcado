//RECUERDA APUNTARTE ABSOLUTAMENTE TODO SOBRE TODO LO QUE TIENES PENSADO HACER
//PARA ACORDARTE QUE VAS HACER EL DIA SIGUIENTE CON EL TRABAJO 
//Y NO PERDERTE
//MAÑANA ESTOY TODO EL DIA E INTENTAR TENERLO CASI TODO Y EL VIERNES RESUELVO DUDAS CON RICARDO
//NO VA HABER MAS DIAS.


let palabrejas; // Variable para almacenar la palabra a adivinar
let errores = 0; // Contador de errores
let aciertos = 0; // Contador de aciertos
let tiempoRestante = 120; // Tiempo para adivinar las palabras
let puntuacion = 0; // Puntuación de la partida
let timeout; // Timeout para la cuenta regresiva
let puntuacionInterval; // variable para guardar la puntuación cons et interval en un futuro
let juegoTerminado = false; // indicador futuro para indicar si el juego ha terminado


// Array de palabras para el juego
const palabras = ['manzana', 'camiseta', 'mariposa', 'cadaver', 'vikingo', 'baloncesto', 'matrimonio'];


//ACUERDATE!! es una función auxiliar que se utiliza para coger un elemento del DOM por su ID. El str representa el ID del elemento que se desea coger, y utiliza la función document.getElementById(str) para buscar y devolver ese elemento.
function id(str) {
    return document.getElementById(str)
}

// Selección de elementos del DOM
const btn = id('jugar'); // Botón jugar
const imagen = id('imagen'); // Elemento de imagen
const btn_letras = document.querySelectorAll("#letras button"); // Botones de letras
const reiniciarBtn = id('reiniciar'); // Botón reiniciar

// Este evento se activa cuando se hace clic en el botón de reinicio (reiniciarBtn). Al hacer clic, se llama a la función reiniciar
reiniciarBtn.addEventListener('click', reiniciar);

//Este evento se activa cuando se hace clic en el botón de jugar (btn). Al hacer clic, se llama a la función iniciar.
btn.addEventListener('click', iniciar);

//Utiliza el método querySelector para seleccionar el main.
const main = document.querySelector('main');


//Con este evento lo que hago es que cada vez que se presione la C se cambie el fondo del body a azul 
document.addEventListener('keydown', function (event) {
    if (event.key === 'c') {
        //Se utiliza el metodo getComputedStyle para coger el fondo que ya hay y se compara con el color a cambiar, si coincide se cambia a azul y si no a blanco
        if (getComputedStyle(document.body).backgroundColor === 'rgb(173, 216, 230)') {
            document.body.style.backgroundColor = ''; // Restaurar el color de fondo original del body
        } else {
            document.body.style.backgroundColor = 'rgb(173, 216, 230)'; // Cambiar el color de fondo del body a azul claro
        }
        //Se de tiene para que no haya propagacion a otros elementos
        event.stopPropagation();

        //Si la tecla no es "c" y es "D" se hace lo mismo que el anterior pero sin metodo ya que tenemos un color asignado 
    } else if (event.key === 'd') {
        if (main.style.backgroundColor === 'rgb(144, 238, 144)') {
            main.style.backgroundColor = ''; // Restaurar el color de fondo original del main
        } else {
            main.style.backgroundColor = 'rgb(144, 238, 144)'; // Cambiar el color de fondo del main a verde claro
        }
        //Se de tiene para que no haya propagacion a otros elementos
        event.stopPropagation();
    }
});

btn.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'rgb(255, 182, 193)'; // Cambiar el color de fondo del botón "obtener palabra" a rosado claro
});

btn.addEventListener('mouseout', function (event) {
    event.target.style.backgroundColor = ''; // Restaurar el color de fondo original del botón "obtener palabra"
});

reiniciarBtn.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'rgb(255, 255, 153)'; // Cambiar el color de fondo del botón "reiniciar" a amarillo claro
});

reiniciarBtn.addEventListener('mouseout', function (event) {
    event.target.style.backgroundColor = ''; // Restaurar el color de fondo original del botón "reiniciar"
});




/*function iniciarJuego(palabrasSeleccionadas) {
  // Seleccionar una palabra aleatoria
  const indiceAleatorio = Math.floor(Math.random() * palabrasSeleccionadas.length);
  palabraSeleccionada = palabrasSeleccionadas[indiceAleatorio];

  // Restablecer las letras adivinadas, los intentos, las imágenes del ahorcado, el tiempo de inicio y la puntuación
  letrasAdivinadas = [];
  numeroIntentos = 0;
  imagenesAhorcado = document.querySelectorAll("#imagenes-ahorcado img");
  ocultarImagenesAhorcado();
  tiempoInicio = Date.now();
  puntuacion = 0;

  // Mostrar la palabra a adivinar
  mostrarPalabraAdivinar();
}*/

/*function ocultarImagenesAhorcado() {
  imagenesAhorcado.forEach(function(imagen) {
    imagen.style.display = "none";
  });
}*/



/*function iniciarTemporizador(tiempo) {
  tiempoRestante = tiempo;
  actualizarTemporizador();
  temporizador = setTimeout(function() {
    alert("¡Se acabó el tiempo!");
  }, tiempo * 1000);
}

function actualizarTemporizador() {
  var contador = document.getElementById("contador");
  contador.innerHTML = "Tiempo restante: " + tiempoRestante;
  if (tiempoRestante === 0) {
    clearTimeout(temporizador);
    alert("¡Se acabó el tiempo!");
  } else {
    tiempoRestante--;
    setTimeout(actualizarTemporizador, 1000);
  }
}

function detenerTemporizador() {
  clearTimeout(temporizador);
}

document.getElementById("puntuacion").innerHTML = puntuacion;
document.getElementById("contador").innerHTML = "Tiempo restante: " + tiempo + " segundos";

*/
