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

// Selección de elementos del DOM
const btn = id('jugar'); // Botón "jugar"
const imagen = id('imagen'); // contenedor donde van a ir las fotos
const btn_letras = document.querySelectorAll("#letras button"); // Botones de las letras
const reiniciarBtn = id('reiniciar'); // Botón de reiniciar

// Evento click para reiniciar el juego
reiniciarBtn.addEventListener('click', reiniciar);
//Evento click para iniciarlo
btn.addEventListener('click', iniciar);


//ACUERDATE!! es una función auxiliar que se utiliza para coger un elemento del DOM por su ID. El str representa el ID del elemento que se desea coger, y utiliza la función document.getElementById(str) para buscar y devolver ese elemento.
function id(str) {
    return document.getElementById(str)
}

//CAMBIO DE ENFOQUE VOY HACERLO CON BOTONES PARA LAS LETRAS Y NO VOY HACER NIVELES PORQUE ME ESTOY ATASCANDO
//CUANDO LEA ESTO VOY HACER EL METODO PARA QUE SALGA UNA PALABRA ALEATORIA Y SE SUSTITUYA POR GUIONES
//LO TENGO ABAJO PERO NO FUNCIONABA.
//HACER EL CONTADOR SIN EL ALERT, ES MUY MOLESTO PARA DESARROLLAR Y HACER PRUEBAS


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
